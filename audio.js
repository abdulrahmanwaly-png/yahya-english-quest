/**
 * Zero-dependency Web Audio API SFX & Web Speech API engine
 * for Yahya's English Quest (Year 1 child-friendly audio).
 */

const MUTE_STORAGE_KEY = 'yahya_quest_muted';

const PREFERRED_GB_VOICES = [
  'serena',
  'martha',
  'kate',
  'stephanie',
  'libby',
  'sonia',
  'maisie',
  'google uk english female',
  'amy',
  'emma',
  'hazel',
  'shelley',
  'sandy',
  'flo',
  'arthur',
  'daniel',
  'google uk english male',
];

const PREFERRED_US_VOICES = [
  'samantha',
  'ava',
  'allison',
  'nicky',
  'aria',
  'jenny',
  'michelle',
  'google us english',
  'zira',
  'susan',
];

const AVOID_VOICE_PATTERNS =
  /zarvox|trinoids|whisper|bells|boing|bubbles|cellos|good news|bad news|albert|bahh|deranged|hysterical|jester|organ|superstar|wobble|fred|junior|ralph|kathy|espeak|eddy|reed|grandma|grandpa|rocko/i;

function readStoredMute() {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return false;
    const raw = window.localStorage.getItem(MUTE_STORAGE_KEY);
    return raw === 'true' || raw === '1';
  } catch {
    return false;
  }
}

function writeStoredMute(muted) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.setItem(MUTE_STORAGE_KEY, muted ? 'true' : 'false');
  } catch {
    // Ignore storage quota or private-mode errors.
  }
}

function semitoneScale(semitones) {
  return Math.pow(2, semitones / 12);
}

/**
 * Clean fill-in-the-blank markers so TTS reads sentences naturally with a brief pause.
 */
function cleanTextForSpeech(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/\s*(?:_{2,}|-{3,}|—{2,})\s*\./g, ' ...')
    .replace(/\s*(?:_{2,}|-{3,}|—{2,})\s*([?!,;:])/g, ' ...$1')
    .replace(/(?:_{2,}|-{3,}|—{2,})/g, '... ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function scoreVoice(voice, preferredLang) {
  const name = (voice.name || '').toLowerCase();
  const lang = (voice.lang || '').replace('_', '-').toLowerCase();
  if (!lang.startsWith('en')) return -1000;
  if (AVOID_VOICE_PATTERNS.test(name)) return -500;

  let score = 0;
  const targetLang = (preferredLang || 'en-gb').replace('_', '-').toLowerCase();

  if (lang === targetLang) {
    score += 60;
  } else if (lang === 'en-gb') {
    score += 50;
  } else if (lang === 'en-us') {
    score += 35;
  } else if (lang.startsWith('en-')) {
    score += 15;
  }

  const gbIndex = PREFERRED_GB_VOICES.findIndex((v) => name.includes(v));
  if (gbIndex !== -1) {
    score += 45 - Math.min(gbIndex, 20);
  }

  const usIndex = PREFERRED_US_VOICES.findIndex((v) => name.includes(v));
  if (usIndex !== -1) {
    score += 30 - Math.min(usIndex, 15);
  }

  if (/enhanced|premium|natural|neural|siri/i.test(name)) score += 20;
  if (/google/i.test(name)) score += 12;
  if (/female/i.test(name)) score += 6;
  if (voice.localService) score += 4;
  if (voice.default) score += 2;

  return score;
}

class SoundEngine {
  constructor() {
    this._ctx = null;
    this._masterGain = null;
    this._muted = readStoredMute();
    this._voices = [];
    this._voicesBound = false;
    this._speechSeq = 0;
    this._activeSpeech = null;
    this._bindVoices();
  }

  _bindVoices() {
    if (this._voicesBound || !this.isSpeechSupported()) return;
    this._voicesBound = true;
    const synth = window.speechSynthesis;
    const refresh = () => {
      try {
        const list = synth.getVoices();
        if (Array.isArray(list) && list.length > 0) {
          this._voices = list;
        }
      } catch {
        // Ignore browser voice enumeration errors.
      }
    };
    refresh();
    if (typeof synth.addEventListener === 'function') {
      synth.addEventListener('voiceschanged', refresh);
    } else if ('onvoiceschanged' in synth) {
      synth.onvoiceschanged = refresh;
    }
  }

  _getVoices() {
    if (!this.isSpeechSupported()) return [];
    this._bindVoices();
    if (this._voices.length === 0) {
      try {
        const list = window.speechSynthesis.getVoices();
        if (Array.isArray(list) && list.length > 0) {
          this._voices = list;
        }
      } catch {
        return [];
      }
    }
    return this._voices;
  }

  _selectVoice(preferredLang = 'en-GB') {
    const voices = this._getVoices();
    if (!voices.length) return null;

    let bestVoice = null;
    let bestScore = -Infinity;
    for (const voice of voices) {
      const s = scoreVoice(voice, preferredLang);
      if (s > bestScore) {
        bestScore = s;
        bestVoice = voice;
      }
    }
    return bestScore > -100 ? bestVoice : null;
  }

  _ensureContext() {
    if (typeof window === 'undefined') return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;

    if (!this._ctx || this._ctx.state === 'closed') {
      try {
        this._ctx = new AudioCtx();
        const master = this._ctx.createGain();
        master.gain.value = 0.72;

        if (typeof this._ctx.createDynamicsCompressor === 'function') {
          const compressor = this._ctx.createDynamicsCompressor();
          compressor.threshold.value = -12;
          compressor.knee.value = 18;
          compressor.ratio.value = 4;
          compressor.attack.value = 0.005;
          compressor.release.value = 0.12;
          master.connect(compressor);
          compressor.connect(this._ctx.destination);
        } else {
          master.connect(this._ctx.destination);
        }
        this._masterGain = master;
      } catch {
        this._ctx = null;
        this._masterGain = null;
        return null;
      }
    }

    if (this._ctx.state === 'suspended') {
      try {
        const resumeResult = this._ctx.resume();
        if (resumeResult && typeof resumeResult.catch === 'function') {
          resumeResult.catch(() => {});
        }
      } catch {
        // Ignore resume errors outside user gesture.
      }
    }

    return this._ctx;
  }

  /**
   * Warmly unlocks Web Audio on a user gesture (safe to call repeatedly).
   */
  unlock() {
    return Boolean(this._ensureContext());
  }

  isMuted() {
    return this._muted;
  }

  setMuted(muted) {
    this._muted = Boolean(muted);
    writeStoredMute(this._muted);
    return this._muted;
  }

  toggleMute() {
    return this.setMuted(!this._muted);
  }

  isSpeechSupported() {
    return (
      typeof window !== 'undefined' &&
      'speechSynthesis' in window &&
      typeof window.SpeechSynthesisUtterance !== 'undefined'
    );
  }

  _playTone(ctx, {
    freq,
    freqEnd = null,
    startTime,
    duration,
    type = 'sine',
    gain = 0.2,
    attack = 0.008,
    harmonicGain = 0,
    harmonicRatio = 2,
    harmonicType = 'triangle',
  }) {
    const dest = this._masterGain || ctx.destination;
    const endTime = startTime + duration;
    const peak = Math.max(0.001, gain);

    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    if (freqEnd && freqEnd !== freq) {
      osc.frequency.exponentialRampToValueAtTime(
        Math.max(20, freqEnd),
        startTime + Math.min(duration * 0.6, 0.09)
      );
    }

    env.gain.setValueAtTime(0.0001, startTime);
    env.gain.linearRampToValueAtTime(peak, startTime + Math.min(attack, duration * 0.35));
    env.gain.exponentialRampToValueAtTime(0.0001, endTime);

    osc.connect(env);
    env.connect(dest);
    osc.start(startTime);
    osc.stop(endTime + 0.02);

    if (harmonicGain > 0) {
      const hOsc = ctx.createOscillator();
      const hEnv = ctx.createGain();
      const hEnd = startTime + duration * 0.65;
      hOsc.type = harmonicType;
      hOsc.frequency.setValueAtTime(freq * harmonicRatio, startTime);
      if (freqEnd && freqEnd !== freq) {
        hOsc.frequency.exponentialRampToValueAtTime(
          Math.max(20, freqEnd * harmonicRatio),
          startTime + Math.min(duration * 0.5, 0.08)
        );
      }
      hEnv.gain.setValueAtTime(0.0001, startTime);
      hEnv.gain.linearRampToValueAtTime(harmonicGain, startTime + Math.min(attack, 0.01));
      hEnv.gain.exponentialRampToValueAtTime(0.0001, hEnd);

      hOsc.connect(hEnv);
      hEnv.connect(dest);
      hOsc.start(startTime);
      hOsc.stop(hEnd + 0.02);
    }
  }

  play(name, opts) {
    return this.playSound(name, opts);
  }

  speak(text, opts) {
    return this.speakText(text, opts);
  }

  playSound(name, opts = {}) {
    if (this._muted && !opts?.force) return false;
    const ctx = this._ensureContext();
    if (!ctx) return false;

    const now = ctx.currentTime + 0.005;
    const sound = String(name || '').toLowerCase();

    switch (sound) {
      case 'tap': {
        // Soft tactile marimba pop
        this._playTone(ctx, {
          freq: 460,
          freqEnd: 580,
          startTime: now,
          duration: 0.075,
          type: 'sine',
          gain: 0.19,
          attack: 0.004,
          harmonicGain: 0.045,
          harmonicRatio: 2,
          harmonicType: 'triangle',
        });
        return true;
      }

      case 'correct': {
        // Bright ascending major triad chime; scales gently higher on streaks >= 2
        const streak = typeof opts === 'number' ? opts : Number(opts?.streak || 0);
        const shiftSemitones = streak >= 2 ? Math.min(streak - 1, 7) : 0;
        const scale = semitoneScale(shiftSemitones);
        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5

        notes.forEach((freq, i) => {
          const isLast = i === notes.length - 1;
          this._playTone(ctx, {
            freq: freq * scale,
            startTime: now + i * 0.068,
            duration: isLast ? 0.34 : 0.19,
            type: 'sine',
            gain: isLast ? 0.24 : 0.19,
            attack: 0.006,
            harmonicGain: isLast ? 0.06 : 0.04,
            harmonicRatio: 2,
            harmonicType: 'triangle',
          });
        });
        return true;
      }

      case 'wrong': {
        // Gentle, warm, non-scary descending soft woodblock boop
        this._playTone(ctx, {
          freq: 329.63, // E4
          freqEnd: 311.13,
          startTime: now,
          duration: 0.13,
          type: 'sine',
          gain: 0.16,
          attack: 0.008,
          harmonicGain: 0.025,
          harmonicRatio: 2,
          harmonicType: 'sine',
        });
        this._playTone(ctx, {
          freq: 261.63, // C4
          freqEnd: 246.94,
          startTime: now + 0.105,
          duration: 0.2,
          type: 'sine',
          gain: 0.15,
          attack: 0.01,
          harmonicGain: 0.02,
          harmonicRatio: 2,
          harmonicType: 'sine',
        });
        return true;
      }

      case 'streak': {
        // Sparkling 4-note rising arpeggio (C5 -> E5 -> G5 -> C6)
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
          const isTop = i === notes.length - 1;
          this._playTone(ctx, {
            freq,
            startTime: now + i * 0.06,
            duration: isTop ? 0.42 : 0.2,
            type: 'sine',
            gain: isTop ? 0.25 : 0.19,
            attack: 0.005,
            harmonicGain: isTop ? 0.075 : 0.045,
            harmonicRatio: isTop ? 2 : 2,
            harmonicType: 'triangle',
          });
        });
        // Delicate high twinkle overtone on the top note
        this._playTone(ctx, {
          freq: 1567.98, // G6 shimmer
          startTime: now + 0.21,
          duration: 0.3,
          type: 'sine',
          gain: 0.06,
          attack: 0.01,
        });
        return true;
      }

      case 'fanfare': {
        // Joyful 6-note celebratory victory jingle
        const melody = [
          { freq: 523.25, at: 0.0, dur: 0.15, gain: 0.2 },   // C5
          { freq: 659.25, at: 0.11, dur: 0.15, gain: 0.21 }, // E5
          { freq: 783.99, at: 0.22, dur: 0.15, gain: 0.22 }, // G5
          { freq: 1046.5, at: 0.34, dur: 0.23, gain: 0.24 }, // C6
          { freq: 783.99, at: 0.50, dur: 0.14, gain: 0.2 },  // G5
          { freq: 1046.5, at: 0.62, dur: 0.62, gain: 0.27 }, // C6!
        ];

        melody.forEach((n, i) => {
          this._playTone(ctx, {
            freq: n.freq,
            startTime: now + n.at,
            duration: n.dur,
            type: 'sine',
            gain: n.gain,
            attack: 0.006,
            harmonicGain: i === melody.length - 1 ? 0.08 : 0.05,
            harmonicRatio: 2,
            harmonicType: 'triangle',
          });
        });

        // Warm supporting chord on the final victorious note
        [523.25, 659.25, 783.99].forEach((freq) => {
          this._playTone(ctx, {
            freq,
            startTime: now + 0.62,
            duration: 0.56,
            type: 'sine',
            gain: 0.09,
            attack: 0.015,
          });
        });
        return true;
      }

      case 'star': {
        // Twinkle chime for each star revealed (optional { index } scales pitch up)
        const idx = typeof opts === 'number' ? opts : Number(opts?.index || 0);
        const scale = semitoneScale(Math.min(Math.max(0, idx), 4) * 2);
        this._playTone(ctx, {
          freq: 880 * scale, // A5 base
          startTime: now,
          duration: 0.22,
          type: 'sine',
          gain: 0.19,
          attack: 0.004,
          harmonicGain: 0.055,
          harmonicRatio: 2,
          harmonicType: 'triangle',
        });
        this._playTone(ctx, {
          freq: 1318.51 * scale, // E6 sparkle
          startTime: now + 0.048,
          duration: 0.34,
          type: 'sine',
          gain: 0.17,
          attack: 0.005,
          harmonicGain: 0.045,
          harmonicRatio: 2,
          harmonicType: 'sine',
        });
        return true;
      }

      default:
        return false;
    }
  }

  stopSpeaking() {
    const active = this._activeSpeech;
    this._activeSpeech = null;
    this._speechSeq += 1;

    if (active) {
      active.finish(false);
    }

    if (this.isSpeechSupported()) {
      try {
        const synth = window.speechSynthesis;
        if (synth.speaking || synth.pending) {
          synth.cancel();
        }
      } catch {
        // Ignore cancel errors.
      }
    }
  }

  speakText(text, opts = {}) {
    const {
      slow = false,
      rate,
      pitch = 1.05,
      lang = 'en-GB',
      volume = 1,
      force = false,
      onStart,
      onEnd,
    } = opts || {};

    if (!this.isSpeechSupported()) {
      return Promise.resolve(false);
    }

    if (this._muted && !force) {
      return Promise.resolve(false);
    }

    const cleaned = cleanTextForSpeech(text);
    if (!cleaned) {
      return Promise.resolve(false);
    }

    // Cancel any prior utterance and notify its callbacks cleanly.
    this.stopSpeaking();

    const synth = window.speechSynthesis;
    const seq = ++this._speechSeq;

    return new Promise((resolve) => {
      let settled = false;
      let started = false;
      let safetyTimer = null;

      const finish = (completed) => {
        if (settled) return;
        settled = true;
        if (safetyTimer !== null) {
          clearTimeout(safetyTimer);
          safetyTimer = null;
        }
        if (this._activeSpeech && this._activeSpeech.seq === seq) {
          this._activeSpeech = null;
        }
        if (typeof onEnd === 'function') {
          try {
            onEnd();
          } catch {
            // Never let UI callback errors reject speech promise.
          }
        }
        resolve(completed);
      };

      const utterance = new window.SpeechSynthesisUtterance(cleaned);
      const voice = this._selectVoice(lang);
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang || lang;
      } else {
        utterance.lang = lang;
      }

      utterance.rate = typeof rate === 'number' ? rate : slow ? 0.72 : 0.88;
      utterance.pitch = pitch;
      utterance.volume = volume;

      // Retain strong reference so Chrome/Safari does not GC utterance before onend.
      this._activeSpeech = { seq, utterance, finish };

      utterance.onstart = () => {
        if (settled || this._speechSeq !== seq) return;
        started = true;
        if (typeof onStart === 'function') {
          try {
            onStart();
          } catch {
            // Ignore callback errors.
          }
        }
      };

      utterance.onend = () => {
        finish(true);
      };

      utterance.onerror = () => {
        finish(false);
      };

      // Conservative watchdog in case a browser silently drops onend.
      const maxDurationMs = Math.max(12000, cleaned.length * 240);
      safetyTimer = setTimeout(() => {
        if (!settled && !synth.speaking && !synth.pending) {
          finish(started);
        }
      }, maxDurationMs);

      try {
        synth.speak(utterance);
      } catch {
        finish(false);
      }
    });
  }
}

export const soundEngine = new SoundEngine();

export const playSound = (name, opts) => soundEngine.playSound(name, opts);
export const speakText = (text, opts) => soundEngine.speakText(text, opts);
export const stopSpeaking = () => soundEngine.stopSpeaking();
export const isMuted = () => soundEngine.isMuted();
export const setMuted = (muted) => soundEngine.setMuted(muted);
export const isSpeechSupported = () => soundEngine.isSpeechSupported();

export default soundEngine;
