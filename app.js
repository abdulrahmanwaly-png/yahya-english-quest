import {
  WORLDS,
  QUEST_MAP,
  QUESTION_MAP,
  ALL_QUESTS,
  ALL_QUESTIONS,
  ALL_TROPHIES,
  RANKS,
  PRAISE_CORRECT,
  PRAISE_WRONG
} from './data/index.js';
import {
  playSound,
  speakText,
  stopSpeaking,
  isMuted,
  setMuted,
  isSpeechSupported
} from './audio.js';
import { launchConfetti, stopConfetti } from './confetti.js';

const STORAGE_KEY = 'yahya_english_quest_v1';
const LETTERS = ['A', 'B', 'C', 'D'];

// ============================================================
// State Management (localStorage-backed)
// ============================================================
function defaultState() {
  return {
    stars: 0,
    xp: 0,
    bestStreak: 0,
    masteredIds: [],
    mistakeIds: [],
    mistakeCounts: {},
    questBest: {},
    rescuedCount: 0,
    trophies: [],
    showArabic: true
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return {
      ...defaultState(),
      ...parsed,
      masteredIds: Array.isArray(parsed.masteredIds) ? parsed.masteredIds.filter(id => QUESTION_MAP.has(id)) : [],
      mistakeIds: Array.isArray(parsed.mistakeIds) ? parsed.mistakeIds.filter(id => QUESTION_MAP.has(id)) : [],
      trophies: Array.isArray(parsed.trophies) ? parsed.trophies : [],
      mistakeCounts: parsed.mistakeCounts && typeof parsed.mistakeCounts === 'object' ? parsed.mistakeCounts : {},
      questBest: parsed.questBest && typeof parsed.questBest === 'object' ? parsed.questBest : {}
    };
  } catch {
    return defaultState();
  }
}

let state = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore private mode / quota errors
  }
}

// Active navigation & quiz session
let activeView = 'home';
let activeWorldId = null;
let session = null;
let resetConfirmArmed = false;

// ============================================================
// DOM Helpers
// ============================================================
const $ = (sel, root = document) => root.querySelector(sel);

function esc(str) {
  return String(str ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function announce(msg) {
  const el = $('#sr-announcer');
  if (!el) return;
  el.textContent = '';
  requestAnimationFrame(() => {
    el.textContent = msg;
  });
}

function arHtml(text, extraClass = '') {
  if (!state.showArabic || !text) return '';
  return `<span class="ar-text ${extraClass}" lang="ar" dir="rtl">${esc(text)}</span>`;
}

// Adorable SVG Owl Mascot ("Pip the Study Owl")
function mascotSvg(mood = 'happy', crown = false) {
  const browLeft = mood === 'encourage' ? 'M32 36 Q38 33 44 36' : 'M31 35 Q38 30 45 35';
  const browRight = mood === 'encourage' ? 'M56 36 Q62 33 68 36' : 'M55 35 Q62 30 69 35';
  const wingLeft = mood === 'cheer' ? 'M16 56 Q4 38 18 32 Q26 42 24 62 Z' : 'M18 54 Q10 66 22 76 Q28 66 26 54 Z';
  const wingRight = mood === 'cheer' ? 'M84 56 Q96 38 82 32 Q74 42 76 62 Z' : 'M82 54 Q90 66 78 76 Q72 66 74 54 Z';
  const mouth = mood === 'cheer'
    ? '<path d="M44 54 Q50 63 56 54 Z" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>'
    : '<polygon points="50,51 45,58 55,58" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>';
  const crownSvg = crown
    ? '<path d="M35 20 L40 8 L50 15 L60 8 L65 20 Z" fill="#FBBF24" stroke="#B45309" stroke-width="2" stroke-linejoin="round"/><circle cx="50" cy="14" r="2.2" fill="#EF4444"/>'
    : '';
  const sparkles = mood === 'cheer'
    ? '<text x="6" y="24" font-size="14">✨</text><text x="80" y="24" font-size="14">⭐</text>'
    : '';
  const animClass = mood === 'cheer' ? 'mascot-svg is-cheering' : mood === 'encourage' ? 'mascot-svg is-shaking' : 'mascot-svg';

  return `
    <svg class="${animClass}" viewBox="0 0 100 100" width="92" height="92" aria-hidden="true" focusable="false">
      ${sparkles}
      <!-- Ears / Tufts -->
      <path d="M24 28 L30 16 L40 24 Z" fill="#4338CA"/>
      <path d="M76 28 L70 16 L60 24 Z" fill="#4338CA"/>
      <!-- Body -->
      <ellipse cx="50" cy="58" rx="31" ry="33" fill="#4F46E5"/>
      <!-- Belly -->
      <ellipse cx="50" cy="68" rx="20" ry="20" fill="#EEF2FF"/>
      <path d="M40 66 Q45 71 50 66 Q55 71 60 66" fill="none" stroke="#A5B4FC" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M42 75 Q50 80 58 75" fill="none" stroke="#A5B4FC" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Wings -->
      <path d="${wingLeft}" fill="#3730A3"/>
      <path d="${wingRight}" fill="#3730A3"/>
      <!-- Eyes -->
      <circle cx="38" cy="45" r="11" fill="#FFFFFF" stroke="#312E81" stroke-width="2"/>
      <circle cx="62" cy="45" r="11" fill="#FFFFFF" stroke="#312E81" stroke-width="2"/>
      <circle cx="39" cy="45" r="5.5" fill="#1E293B"/>
      <circle cx="61" cy="45" r="5.5" fill="#1E293B"/>
      <circle cx="41" cy="43" r="2" fill="#FFFFFF"/>
      <circle cx="63" cy="43" r="2" fill="#FFFFFF"/>
      <path d="${browLeft}" fill="none" stroke="#312E81" stroke-width="2.2" stroke-linecap="round"/>
      <path d="${browRight}" fill="none" stroke="#312E81" stroke-width="2.2" stroke-linecap="round"/>
      <!-- Cheeks -->
      <ellipse cx="27" cy="53" rx="4.5" ry="2.8" fill="#FB7185" opacity="0.55"/>
      <ellipse cx="73" cy="53" rx="4.5" ry="2.8" fill="#FB7185" opacity="0.55"/>
      <!-- Beak -->
      ${mouth}
      <!-- Feet -->
      <path d="M36 89 L32 95 M36 89 L36 96 M36 89 L40 95" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <path d="M64 89 L60 95 M64 89 L64 96 M64 89 L68 95" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      ${crownSvg}
    </svg>
  `;
}

function starSvg(earned) {
  return `
    <svg class="star-svg ${earned ? 'star-svg--earned' : 'star-svg--empty'}" viewBox="0 0 48 48" width="46" height="46" aria-hidden="true">
      <polygon points="24,4 30,17 44,19 34,29 36,43 24,36 12,43 14,29 4,19 18,17"
        fill="${earned ? '#FBBF24' : '#E2E8F0'}"
        stroke="${earned ? '#D97706' : '#CBD5E1'}"
        stroke-width="2.5" stroke-linejoin="round"/>
    </svg>
  `;
}

function formatPromptText(text) {
  // Highlight blanks cleanly with styled underline span
  return esc(text).replace(/(_{2,}|-{3,})/g, '<span class="q-blank" aria-label="blank">_____</span>');
}

function shouldKeepOptionOrder(options) {
  if (options.length <= 2) return true;
  const joined = options.join('|').toLowerCase();
  if (joined.includes('1st') && joined.includes('2nd')) return true;
  // Ordered page numbers or pure numbers
  if (options.every(o => /^(page\s*)?\d+$/i.test(o.trim()))) return true;
  return false;
}

function shuffleChoices(q) {
  const indexed = q.options.map((text, idx) => ({
    text,
    isCorrect: idx === q.answer
  }));
  if (!shouldKeepOptionOrder(q.options)) {
    for (let i = indexed.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
    }
  }
  return {
    options: indexed.map(x => x.text),
    correctIndex: indexed.findIndex(x => x.isCorrect)
  };
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getRank(pct) {
  let rank = RANKS[0];
  for (const r of RANKS) {
    if (pct >= r.minPct) rank = r;
  }
  return rank;
}

function getWorldStats(world) {
  const qs = world.quests.flatMap(q => q.questions);
  const masteredSet = new Set(state.masteredIds);
  const mistakeSet = new Set(state.mistakeIds);
  const mastered = qs.filter(q => masteredSet.has(q.id)).length;
  const mistakes = qs.filter(q => mistakeSet.has(q.id)).length;
  const stars = world.quests.reduce((sum, q) => sum + (state.questBest[q.id]?.stars || 0), 0);
  const maxStars = world.quests.length * 3;
  return { total: qs.length, mastered, mistakes, stars, maxStars, pct: qs.length ? Math.round((mastered / qs.length) * 100) : 0 };
}

function checkAndAwardTrophies(extra = {}) {
  const unlockedNow = [];
  const have = new Set(state.trophies);
  const award = (id) => {
    if (!have.has(id)) {
      have.add(id);
      state.trophies.push(id);
      const t = ALL_TROPHIES.find(x => x.id === id);
      if (t) unlockedNow.push(t);
    }
  };

  if (extra.questId && extra.stars >= 2) {
    const quest = QUEST_MAP.get(extra.questId);
    if (quest?.trophy) award(quest.trophy.id);
  }
  if (state.bestStreak >= 5) award('trophy-streak-5');
  if (state.rescuedCount >= 1) award('trophy-rescuer');
  const pct = ALL_QUESTIONS.length ? (state.masteredIds.length / ALL_QUESTIONS.length) * 100 : 0;
  if (pct >= 50) award('trophy-halfway');
  if (state.masteredIds.length >= ALL_QUESTIONS.length) award('trophy-master');

  return unlockedNow;
}

// ============================================================
// HUD & View Switching
// ============================================================
function updateHud() {
  $('#hud-stars').textContent = state.stars;
  $('#hud-streak').textContent = state.bestStreak;
  $('#hud-mistakes').textContent = state.mistakeIds.length;

  const soundBtn = $('#btn-toggle-sound');
  const muted = isMuted();
  soundBtn.textContent = muted ? '🔇' : '🔊';
  soundBtn.setAttribute('aria-pressed', String(!muted));

  const arBtn = $('#btn-toggle-ar');
  arBtn.setAttribute('aria-pressed', String(state.showArabic));
  document.documentElement.classList.toggle('hide-ar', !state.showArabic);
}

function showView(viewName, pageTitle) {
  stopSpeaking();
  activeView = viewName;
  for (const id of ['home', 'world', 'quiz', 'summary']) {
    const sec = $(`#view-${id}`);
    if (sec) sec.hidden = id !== viewName;
  }
  if (pageTitle) {
    document.title = `${pageTitle} | Yahya's English Adventure`;
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  updateHud();
}

// ============================================================
// VIEW 1: Home Adventure Map
// ============================================================
function renderHome() {
  showView('home', 'Adventure Map');

  const totalQ = ALL_QUESTIONS.length;
  const mastered = state.masteredIds.length;
  const pct = totalQ ? Math.round((mastered / totalQ) * 100) : 0;
  const rank = getRank(pct);

  $('#home-mascot-wrap').innerHTML = mascotSvg(pct >= 90 ? 'cheer' : 'happy', pct >= 50);
  $('#home-rank-badge').innerHTML = `${rank.icon} ${esc(rank.title)} ${state.showArabic ? `· <span class="ar-text" lang="ar" dir="rtl">${esc(rank.ar)}</span>` : ''}`;
  $('#home-progress-fill').style.width = `${pct}%`;
  $('#home-progress-track').setAttribute('aria-valuenow', String(pct));
  $('#home-mastered-text').textContent = `${mastered} / ${totalQ} Questions Mastered`;
  $('#home-pct-text').textContent = `${pct}%`;

  const arSub = $('#home-ar-sub');
  if (arSub) {
    arSub.hidden = !state.showArabic;
    arSub.textContent = state.mistakeIds.length > 0
      ? `عندك ${state.mistakeIds.length} أسئلة محتاجة إعادة عشان تتقنهم ١٠٠٪ — يلا نكسبهم يا بطل!`
      : 'أهلاً يا يحيى! اختار عالم من منهجك واجمع النجوم والكؤوس قبل الامتحان.';
  }

  // Mistakes Mode Card
  const mistakeCount = state.mistakeIds.length;
  const mBtn = $('#btn-mode-mistakes');
  $('#mode-mistakes-badge').textContent = mistakeCount > 0 ? `${mistakeCount} To Fix` : 'All Clear!';
  mBtn.classList.toggle('mode-card--pulse', mistakeCount > 0);
  mBtn.setAttribute('aria-disabled', mistakeCount === 0 ? 'true' : 'false');

  // Render 4 Worlds
  const grid = $('#worlds-grid');
  grid.innerHTML = WORLDS.map(w => {
    const st = getWorldStats(w);
    return `
      <button type="button" class="world-card" data-world="${esc(w.id)}">
        <div class="world-icon" aria-hidden="true">${w.icon}</div>
        <h3 class="world-title">${esc(w.title)}</h3>
        ${state.showArabic ? `<p class="world-ar ar-text" lang="ar" dir="rtl">${esc(w.arTitle)}</p>` : ''}
        <p class="world-meta">${esc(w.description)}</p>
        <div class="world-stars">
          <span>⭐ ${st.stars} / ${st.maxStars}</span>
          <span>${st.mastered} / ${st.total} mastered (${st.pct}%)</span>
          ${st.mistakes > 0 ? `<span class="quest-pill">🎯 ${st.mistakes} to fix</span>` : ''}
        </div>
        <div class="world-bar" aria-hidden="true">
          <span style="width: ${st.pct}%"></span>
        </div>
      </button>
    `;
  }).join('');

  grid.querySelectorAll('.world-card').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('tap');
      renderWorld(btn.dataset.world);
    });
  });
}

// ============================================================
// VIEW 2: World Quests
// ============================================================
function renderWorld(worldId) {
  const world = WORLDS.find(w => w.id === worldId);
  if (!world) return renderHome();
  activeWorldId = worldId;
  showView('world', world.title);

  const st = getWorldStats(world);
  const header = $('#world-header');
  header.dataset.world = world.id;
  header.innerHTML = `
    <button type="button" id="btn-world-back" class="btn-back">← All Worlds</button>
    <div style="flex: 1; min-width: 220px;">
      <h1 id="world-title-h1">${world.icon} ${esc(world.title)}</h1>
      ${state.showArabic ? `<p class="ar-text" lang="ar" dir="rtl">${esc(world.arTitle)} — ${esc(world.arDesc)}</p>` : ''}
      <p class="world-meta">${st.mastered} / ${st.total} questions mastered · ⭐ ${st.stars} / ${st.maxStars} stars</p>
    </div>
    <button type="button" id="btn-world-mix" class="btn-primary">⚡ Play 12-Q World Mix</button>
  `;

  $('#btn-world-back').addEventListener('click', () => {
    playSound('tap');
    renderHome();
  });

  $('#btn-world-mix').addEventListener('click', () => {
    playSound('tap');
    const allW = world.quests.flatMap(q => q.questions.map(x => QUESTION_MAP.get(x.id)));
    const picked = pickSmartQuestions(allW, Math.min(12, allW.length));
    startSession({
      mode: 'world-mix',
      worldId: world.id,
      title: `${world.title} Mix`,
      arTitle: `تحدي ${world.arTitle}`,
      questions: picked
    });
  });

  const masteredSet = new Set(state.masteredIds);
  const mistakeSet = new Set(state.mistakeIds);
  const grid = $('#quests-grid');
  grid.innerHTML = world.quests.map((q, i) => {
    const best = state.questBest[q.id];
    const qMastered = q.questions.filter(item => masteredSet.has(item.id)).length;
    const qMistakes = q.questions.filter(item => mistakeSet.has(item.id)).length;
    const stars = best?.stars || 0;
    const isDone = qMastered === q.questions.length;
    const starText = '★'.repeat(stars) + '☆'.repeat(3 - stars);

    return `
      <button type="button" class="quest-card ${isDone ? 'quest-card--done' : ''} ${qMistakes > 0 ? 'quest-card--has-mistakes' : ''}" data-quest="${esc(q.id)}" data-world="${esc(world.id)}">
        <div class="quest-top">
          <span class="quest-emoji" aria-hidden="true">${q.emoji}</span>
          <span class="quest-stars" aria-label="${stars} out of 3 stars">${starText}</span>
        </div>
        <h2 class="quest-title">${i + 1}. ${esc(q.title)}</h2>
        ${state.showArabic ? `<p class="ar-text" lang="ar" dir="rtl">${esc(q.arTitle)}</p>` : ''}
        <div class="quest-meta">
          <span>${q.questions.length} Qs · ${qMastered}/${q.questions.length} mastered</span>
          ${qMistakes > 0 ? `<span class="quest-pill">🎯 ${qMistakes} retry</span>` : isDone ? `<span class="quest-pill">✅ Mastered</span>` : ''}
        </div>
      </button>
    `;
  }).join('');

  grid.querySelectorAll('.quest-card').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('tap');
      const quest = QUEST_MAP.get(btn.dataset.quest);
      if (!quest) return;
      startSession({
        mode: 'quest',
        questId: quest.id,
        worldId: quest.worldId,
        title: quest.title,
        arTitle: quest.arTitle,
        questions: quest.questions.map(x => QUESTION_MAP.get(x.id))
      });
    });
  });
}

// Prefer unmastered and mistake questions first for smart mixes
function pickSmartQuestions(pool, count) {
  const mistakeSet = new Set(state.mistakeIds);
  const masteredSet = new Set(state.masteredIds);
  const mistakes = shuffleArray(pool.filter(q => mistakeSet.has(q.id)));
  const unseen = shuffleArray(pool.filter(q => !mistakeSet.has(q.id) && !masteredSet.has(q.id)));
  const mastered = shuffleArray(pool.filter(q => !mistakeSet.has(q.id) && masteredSet.has(q.id)));
  return [...mistakes, ...unseen, ...mastered].slice(0, count);
}

// ============================================================
// VIEW 3: Active Quiz Engine (with Adaptive Mistake Loop!)
// ============================================================
function startSession(opts) {
  const queue = opts.questions.map(q => ({
    q,
    shuffled: shuffleChoices(q)
  }));

  session = {
    mode: opts.mode, // 'quest' | 'mistakes' | 'mix' | 'exam' | 'world-mix' | 'retry-round'
    questId: opts.questId || null,
    worldId: opts.worldId || null,
    title: opts.title,
    arTitle: opts.arTitle || '',
    isRetryRound: Boolean(opts.isRetryRound),
    parentFirstTry: opts.parentFirstTry || null, // { correct, total } when entering retry right after a round
    queue,
    index: 0,
    originalCount: queue.length,
    firstTryCorrect: 0,
    answeredCorrectlySet: new Set(),
    wrongThisRoundMap: new Map(), // q.id -> q
    streak: 0,
    maxStreak: 0,
    xpEarned: 0,
    locked: false
  };

  showView('quiz', session.title);
  $('#quiz-quest-title').textContent = session.title;
  $('#retry-banner').hidden = !session.isRetryRound && session.mode !== 'mistakes';
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  if (!session || session.index >= session.queue.length) {
    return finishSession();
  }

  stopSpeaking();
  session.locked = false;

  const entry = session.queue[session.index];
  const { q, shuffled } = entry;
  const num = session.index + 1;
  const total = session.queue.length;
  const pct = Math.round(((num - 1) / total) * 100);

  $('#quiz-progress-fill').style.width = `${pct}%`;
  $('#quiz-progress-bar').setAttribute('aria-valuenow', String(pct));
  $('#quiz-counter').textContent = `${num} / ${total}`;

  const streakEl = $('#quiz-streak-chip');
  streakEl.textContent = `🔥 ${session.streak}`;
  streakEl.classList.toggle('streak-chip--hot', session.streak >= 3);

  // Render Context Panel (Passage / TOC / Word Bank) if present
  const layoutEl = $('#quiz-layout');
  const ctxEl = $('#context-panel');
  const hasContext = Boolean(q.passage || q.toc);

  layoutEl.classList.toggle('quiz-layout--split', hasContext);
  ctxEl.hidden = !hasContext;

  if (hasContext) {
    ctxEl.innerHTML = buildContextPanelHtml(q);
    const speakStoryBtn = ctxEl.querySelector('[data-speak-story]');
    if (speakStoryBtn) {
      speakStoryBtn.addEventListener('click', () => {
        const textToRead = q.passage.lines ? q.passage.lines.join(' ') : q.passage.title;
        triggerSpeech(speakStoryBtn, textToRead, { force: true });
      });
    }
  } else {
    ctxEl.innerHTML = '';
  }

  // Build Question Card
  const card = $('#question-card');
  const isTwoOpt = shuffled.options.length === 2;
  const isListenQ = Boolean(q.listenWord);

  let mediaHtml = '';
  if (q.diagram) {
    mediaHtml = `
      <div class="diagram-wrap">
        <img class="diagram-img" src="${esc(q.diagram.image)}" alt="Labeling diagram for ${esc(q.topic)}" loading="eager">
        <span class="diagram-pin" style="--pin-x: ${q.diagram.pinX}%; --pin-y: ${q.diagram.pinY}%;" aria-label="Target box highlighted">?</span>
      </div>
    `;
  } else if (q.image) {
    mediaHtml = `
      <div class="q-image-wrap">
        <img class="q-image" src="${esc(q.image)}" alt="Illustration for question" loading="eager">
      </div>
    `;
  }

  const tilesHtml = Array.isArray(q.tiles)
    ? `<div class="q-tiles" aria-label="Word tiles to arrange">${q.tiles.map(t => `<span class="q-tile">${esc(t)}</span>`).join('')}</div>`
    : '';

  const listenHeroHtml = isListenQ
    ? `
      <div class="q-listen-hero">
        <button type="button" id="btn-teacher-say" class="btn-speak btn-speak--big">🔊 Listen to Teacher</button>
        <button type="button" id="btn-teacher-slow" class="btn-speak">🐢 Slow</button>
      </div>
    `
    : '';

  const optionsHtml = shuffled.options.map((opt, i) => `
    <button type="button" class="option-btn" data-opt-index="${i}">
      <span class="opt-letter">${LETTERS[i] || i + 1}</span>
      <span class="opt-text">${esc(opt)}</span>
      <span class="opt-status-icon" aria-hidden="true"></span>
    </button>
  `).join('');

  card.innerHTML = `
    <div class="q-header">
      <span class="q-topic-tag">${esc(q.topic)}</span>
      ${isSpeechSupported() && !isListenQ ? `<button type="button" id="btn-read-q" class="btn-speak" aria-label="Read question aloud">🔊 Listen</button>` : ''}
    </div>
    ${listenHeroHtml}
    ${mediaHtml}
    <h2 class="q-prompt">${formatPromptText(q.prompt)}</h2>
    ${tilesHtml}
    <div class="options-grid ${isTwoOpt ? 'options-grid--two' : ''}" role="group" aria-label="Answer choices">
      ${optionsHtml}
    </div>
    <div id="feedback-slot"></div>
  `;

  // Wire Speech Buttons
  if (isListenQ) {
    const sayBtn = $('#btn-teacher-say', card);
    const slowBtn = $('#btn-teacher-slow', card);
    sayBtn?.addEventListener('click', () => triggerSpeech(sayBtn, q.listenWord, { force: true, slow: false }));
    slowBtn?.addEventListener('click', () => triggerSpeech(slowBtn, q.listenWord, { force: true, slow: true }));
    if (!isMuted() && isSpeechSupported()) {
      setTimeout(() => {
        if (activeView === 'quiz' && session && session.queue[session.index]?.q.id === q.id) {
          triggerSpeech(sayBtn, q.listenWord, { force: false, slow: false });
        }
      }, 250);
    }
  } else {
    const readBtn = $('#btn-read-q', card);
    readBtn?.addEventListener('click', () => triggerSpeech(readBtn, q.prompt, { force: true }));
  }

  // Wire Option Buttons
  card.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleAnswer(Number(btn.dataset.optIndex), btn);
    });
  });

  announce(`Question ${num} of ${total}: ${q.prompt}`);
}

function buildContextPanelHtml(q) {
  if (q.toc) {
    const rowsHtml = q.toc.rows.map(([topic, page]) => `
      <tr>
        <td>${esc(topic)}</td>
        <td>${esc(page)}</td>
      </tr>
    `).join('');
    return `
      <div class="context-header">
        <h3 class="context-title">📑 ${esc(q.toc.title)}</h3>
      </div>
      ${q.toc.image ? `<img class="passage-img" src="${esc(q.toc.image)}" alt="${esc(q.toc.title)}">` : ''}
      <div class="toc-card">
        ${q.toc.author ? `<p style="font-weight:800;margin-bottom:0.5rem;">${esc(q.toc.author)}</p>` : ''}
        <table class="toc-table">
          <caption>${esc(q.toc.title)}</caption>
          <thead>
            <tr><th scope="col">Topic</th><th scope="col">Page</th></tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    `;
  }

  const p = q.passage;
  const wordBankHtml = Array.isArray(p.wordBank)
    ? `<div class="word-bank" aria-label="Word bank">${p.wordBank.map(w => `<span class="word-chip">${esc(w)}</span>`).join('')}</div>`
    : '';
  const linesHtml = Array.isArray(p.lines)
    ? `<div class="passage-text">${p.lines.map(l => `<p>${esc(l)}</p>`).join('')}</div>`
    : '';
  const noteHtml = p.note
    ? `<p style="background:#FEF3C7;color:#92400E;padding:0.65rem 0.85rem;border-radius:12px;font-weight:700;margin-bottom:0.75rem;">💡 ${esc(p.note)}</p>`
    : '';

  return `
    <div class="context-header">
      <h3 class="context-title">📖 ${esc(p.title)}</h3>
      ${isSpeechSupported() && Array.isArray(p.lines) ? `<button type="button" class="btn-speak" data-speak-story>🔊 Read Story</button>` : ''}
    </div>
    ${p.image ? `<img class="passage-img" src="${esc(p.image)}" alt="${esc(p.title)}">` : ''}
    ${noteHtml}
    ${linesHtml}
    ${wordBankHtml}
  `;
}

function triggerSpeech(btn, text, opts) {
  if (!isSpeechSupported()) return;
  btn?.classList.add('is-speaking');
  speakText(text, {
    ...opts,
    onEnd: () => btn?.classList.remove('is-speaking')
  });
}

function spawnFloatingXp(anchorEl, text) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!anchorEl) return;
  const rect = anchorEl.getBoundingClientRect();
  const pop = document.createElement('span');
  pop.className = 'float-xp';
  pop.textContent = text;
  pop.style.left = `${rect.left + rect.width / 2}px`;
  pop.style.top = `${rect.top + window.scrollY}px`;
  document.body.appendChild(pop);
  setTimeout(() => pop.remove(), 950);
}

function handleAnswer(chosenIndex, btnEl) {
  if (!session || session.locked) return;
  session.locked = true;
  stopSpeaking();

  const entry = session.queue[session.index];
  const { q, shuffled } = entry;
  const isCorrect = chosenIndex === shuffled.correctIndex;
  const card = $('#question-card');
  const buttons = [...card.querySelectorAll('.option-btn')];

  buttons.forEach((b, i) => {
    b.setAttribute('aria-disabled', 'true');
    if (i === shuffled.correctIndex) {
      b.classList.add('option-btn--correct');
      const icon = b.querySelector('.opt-status-icon');
      if (icon) icon.textContent = '✓';
    } else if (i === chosenIndex && !isCorrect) {
      b.classList.add('option-btn--wrong');
      const icon = b.querySelector('.opt-status-icon');
      if (icon) icon.textContent = '✗';
    } else {
      b.classList.add('option-btn--dim');
    }
  });

  let feedbackHtml = '';

  if (isCorrect) {
    session.streak += 1;
    session.maxStreak = Math.max(session.maxStreak, session.streak);
    state.bestStreak = Math.max(state.bestStreak, session.streak);

    if (session.index < session.originalCount && !session.wrongThisRoundMap.has(q.id)) {
      session.firstTryCorrect += 1;
    }

    const bonus = session.streak >= 3 ? 15 : 10;
    session.xpEarned += bonus;
    state.xp += bonus;

    // Mark mastered & graduate out of Mistakes Bank if it was there!
    if (!state.masteredIds.includes(q.id)) {
      state.masteredIds.push(q.id);
    }
    const wasMistake = state.mistakeIds.includes(q.id);
    if (wasMistake) {
      state.mistakeIds = state.mistakeIds.filter(id => id !== q.id);
      state.rescuedCount += 1;
      state.stars += 1; // Bonus rescue star!
    }

    playSound(session.streak >= 3 && session.streak % 3 === 0 ? 'streak' : 'correct', { streak: session.streak });
    if (session.streak >= 3) {
      launchConfetti({ intensity: 'small' });
    }
    spawnFloatingXp(btnEl, wasMistake ? `+${bonus} XP · ⭐ Rescued!` : `+${bonus} XP`);

    const praise = PRAISE_CORRECT[Math.floor(Math.random() * PRAISE_CORRECT.length)];
    const streakLine = session.streak >= 3 ? ` 🔥 ${session.streak} in a row!` : '';
    feedbackHtml = `
      <div class="feedback-bar feedback-bar--correct" role="status">
        <div class="feedback-mascot">${mascotSvg('cheer')}</div>
        <div class="feedback-copy">
          <div class="feedback-title">${esc(praise.en)}${esc(streakLine)}</div>
          <p class="feedback-explain">${esc(q.explain)}</p>
          ${state.showArabic ? `<p class="feedback-ar ar-text" lang="ar" dir="rtl">${esc(praise.ar)}${wasMistake ? ' — برافو صححت غلطتك القديمة! ⭐' : ''}</p>` : ''}
        </div>
        <button type="button" id="btn-next-q" class="btn-next">Next →</button>
      </div>
    `;
    announce(`Correct! ${q.explain}`);
  } else {
    // WRONG ANSWER — log into Mistakes Bank AND queue for retry!
    session.streak = 0;
    session.wrongThisRoundMap.set(q.id, q);
    if (!state.mistakeIds.includes(q.id)) {
      state.mistakeIds.push(q.id);
    }
    state.mistakeCounts[q.id] = (state.mistakeCounts[q.id] || 0) + 1;

    // In Mistake Retry / Rescue mode, re-append at end of queue with freshly shuffled options until Yahya gets it right!
    if (session.isRetryRound || session.mode === 'mistakes') {
      session.queue.push({ q, shuffled: shuffleChoices(q) });
    }

    playSound('wrong');
    const encourage = PRAISE_WRONG[Math.floor(Math.random() * PRAISE_WRONG.length)];
    const rightText = shuffled.options[shuffled.correctIndex];
    feedbackHtml = `
      <div class="feedback-bar feedback-bar--wrong" role="status">
        <div class="feedback-mascot">${mascotSvg('encourage')}</div>
        <div class="feedback-copy">
          <div class="feedback-title">${esc(encourage.en)}</div>
          <p class="feedback-explain">Right answer: <strong>${esc(rightText)}</strong> — ${esc(q.explain)}</p>
          ${state.showArabic ? `<p class="feedback-ar ar-text" lang="ar" dir="rtl">${esc(encourage.ar)}</p>` : ''}
        </div>
        <button type="button" id="btn-next-q" class="btn-next">Got it! Next →</button>
      </div>
    `;
    announce(`Nice try. The right answer is ${rightText}. ${q.explain}`);
  }

  saveState();
  updateHud();

  const streakEl = $('#quiz-streak-chip');
  streakEl.textContent = `🔥 ${session.streak}`;
  streakEl.classList.toggle('streak-chip--hot', session.streak >= 3);

  const slot = $('#feedback-slot', card);
  slot.innerHTML = feedbackHtml;

  const nextBtn = $('#btn-next-q', slot);
  nextBtn.addEventListener('click', () => {
    playSound('tap');
    session.index += 1;
    renderCurrentQuestion();
  });
  nextBtn.focus({ preventScroll: true });
}

// ============================================================
// VIEW 4: Round Summary & Automatic Mistake Retry Offer
// ============================================================
function finishSession() {
  stopSpeaking();
  const s = session;
  const total = s.originalCount;
  const score = s.firstTryCorrect;
  const pct = total ? Math.round((score / total) * 100) : 100;
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 1;

  // Record best quest score and award stars delta
  let starsAdded = 0;
  if (s.mode === 'quest' && s.questId) {
    const prev = state.questBest[s.questId]?.stars || 0;
    const bestStars = Math.max(prev, stars);
    starsAdded = Math.max(0, bestStars - prev);
    state.stars += starsAdded;
    state.questBest[s.questId] = {
      score: Math.max(state.questBest[s.questId]?.score || 0, score),
      total,
      stars: bestStars,
      masteredAll: s.wrongThisRoundMap.size === 0 || (state.questBest[s.questId]?.masteredAll || false)
    };
  } else if (s.isRetryRound || s.mode === 'mistakes') {
    starsAdded = 2;
    state.stars += starsAdded;
    // Also upgrade parent quest if all mastered now
    if (s.questId && state.questBest[s.questId]) {
      const prev = state.questBest[s.questId].stars || 0;
      const upgraded = Math.max(prev, 3);
      state.stars += Math.max(0, upgraded - prev);
      state.questBest[s.questId].stars = upgraded;
      state.questBest[s.questId].masteredAll = true;
    }
  } else {
    starsAdded = stars;
    state.stars += starsAdded;
  }

  const newlyUnlocked = checkAndAwardTrophies({ questId: s.questId, stars });
  saveState();

  showView('summary', 'Quest Complete!');

  const missedList = [...s.wrongThisRoundMap.values()];
  const isPerfectOrRescued = s.isRetryRound || s.mode === 'mistakes' || missedList.length === 0;

  playSound('fanfare');
  if (isPerfectOrRescued || pct >= 70) {
    launchConfetti({ intensity: isPerfectOrRescued ? 'victory' : 'medium' });
  }

  // Find next quest in same world
  let nextQuest = null;
  if (s.questId && s.worldId) {
    const world = WORLDS.find(w => w.id === s.worldId);
    const idx = world?.quests.findIndex(q => q.id === s.questId) ?? -1;
    if (world && idx >= 0 && idx + 1 < world.quests.length) {
      nextQuest = world.quests[idx + 1];
    }
  }

  const headline = s.isRetryRound
    ? 'All Mistakes Mastered! 🎉'
    : missedList.length === 0
      ? 'Perfect Score, Yahya! 🏆'
      : pct >= 70
        ? 'Great Job, Yahya! 🌟'
        : 'Good Effort! Let\'s Fix the Tricky Ones! 💪';

  const arMissedLabel = missedList.length === 1
    ? 'السؤال اللي غلطت فيه'
    : missedList.length === 2
      ? 'السؤالين اللي غلطت فيهم'
      : `الـ ${missedList.length} أسئلة اللي غلطت فيهم`;

  const arHeadline = s.isRetryRound
    ? 'برافو يا يحيى! صلّحت كل الأخطاء وبقيت ١٠٠٪!'
    : missedList.length === 0
      ? 'درجة نهائية يا بطل! ممتاز جدًا!'
      : `جبت ${score} من ${total} (${pct}٪) — يلا نكرر ${arMissedLabel} عشان تقفّلها ١٠٠٪!`;

  const upgradeHtml = s.isRetryRound && s.parentFirstTry
    ? `<div class="mastery-upgrade">📈 First Try: ${s.parentFirstTry.correct}/${s.parentFirstTry.total} → After Practice: ${s.parentFirstTry.total}/${s.parentFirstTry.total} (100% Mastered!)</div>`
    : '';

  const trophiesHtml = newlyUnlocked.length > 0
    ? `<div class="unlocked-trophies">${newlyUnlocked.map(t => `<span class="trophy-pill">${t.icon} Unlocked: ${esc(t.name)}!</span>`).join('')}</div>`
    : '';

  const mistakesPreviewHtml = !s.isRetryRound && missedList.length > 0
    ? `
      <div class="mistakes-preview">
        <h3>🎯 Questions to Repeat (${missedList.length}):</h3>
        ${missedList.map(m => `
          <div class="mistake-row">
            <span class="mistake-q">${esc(m.prompt)}</span>
            <span class="mistake-ans">✓ ${esc(m.options[m.answer])}</span>
          </div>
        `).join('')}
      </div>
    `
    : '';

  const retryBtnHtml = !s.isRetryRound && missedList.length > 0
    ? `<button type="button" id="btn-repeat-mistakes" class="btn-retry-mistakes">🔄 Repeat My Mistakes Now! (${missedList.length} ${missedList.length === 1 ? 'Question' : 'Questions'})</button>`
    : '';

  const finalStars = s.isRetryRound ? 3 : stars;
  const summaryCard = $('#summary-card');
  summaryCard.innerHTML = `
    <div>${mascotSvg('cheer', finalStars === 3)}</div>
    <div class="summary-stars" aria-label="${finalStars} out of 3 stars">
      ${starSvg(finalStars >= 1)}${starSvg(finalStars >= 2)}${starSvg(finalStars >= 3)}
    </div>
    <h1 id="summary-heading" class="summary-title">${esc(headline)}</h1>
    ${state.showArabic ? `<p class="summary-ar ar-text" lang="ar" dir="rtl">${esc(arHeadline)}</p>` : ''}
    ${upgradeHtml}
    ${trophiesHtml}

    <div class="summary-score-grid">
      <div class="score-box">
        <span class="score-num">${s.isRetryRound ? `${total}/${total}` : `${score}/${total}`}</span>
        <span class="score-label">${s.isRetryRound ? 'Mistakes Fixed' : 'Score'}</span>
      </div>
      <div class="score-box">
        <span class="score-num">${s.isRetryRound ? '100%' : `${pct}%`}</span>
        <span class="score-label">Accuracy</span>
      </div>
      <div class="score-box">
        <span class="score-num">+${s.xpEarned}</span>
        <span class="score-label">XP Earned</span>
      </div>
      <div class="score-box">
        <span class="score-num">🔥 ${s.maxStreak}</span>
        <span class="score-label">Best Streak</span>
      </div>
    </div>

    ${mistakesPreviewHtml}

    <div class="summary-actions">
      ${retryBtnHtml}
      ${nextQuest ? `<button type="button" id="btn-next-quest" class="btn-primary">Next Quest: ${esc(nextQuest.title)} →</button>` : ''}
      <button type="button" id="btn-play-again" class="btn-secondary">🔁 Play Again</button>
      <button type="button" id="btn-back-world" class="btn-secondary">🗺️ ${s.worldId ? 'Back to World' : 'Adventure Map'}</button>
    </div>
  `;

  // Wire Summary Buttons
  $('#btn-repeat-mistakes', summaryCard)?.addEventListener('click', () => {
    playSound('tap');
    stopConfetti();
    startSession({
      mode: 'retry-round',
      questId: s.questId,
      worldId: s.worldId,
      title: `Fix Mistakes: ${s.title}`,
      arTitle: 'إعادة الأخطاء',
      isRetryRound: true,
      parentFirstTry: { correct: score, total },
      questions: missedList
    });
  });

  $('#btn-next-quest', summaryCard)?.addEventListener('click', () => {
    playSound('tap');
    stopConfetti();
    startSession({
      mode: 'quest',
      questId: nextQuest.id,
      worldId: nextQuest.worldId,
      title: nextQuest.title,
      arTitle: nextQuest.arTitle,
      questions: nextQuest.questions.map(x => QUESTION_MAP.get(x.id))
    });
  });

  $('#btn-play-again', summaryCard)?.addEventListener('click', () => {
    playSound('tap');
    stopConfetti();
    if (s.mode === 'quest' && s.questId) {
      const quest = QUEST_MAP.get(s.questId);
      startSession({
        mode: 'quest',
        questId: quest.id,
        worldId: quest.worldId,
        title: quest.title,
        arTitle: quest.arTitle,
        questions: quest.questions.map(x => QUESTION_MAP.get(x.id))
      });
    } else {
      startQuickMode(s.mode === 'exam' ? 'exam' : 'mix');
    }
  });

  $('#btn-back-world', summaryCard)?.addEventListener('click', () => {
    playSound('tap');
    stopConfetti();
    if (s.worldId) renderWorld(s.worldId);
    else renderHome();
  });
}

// ============================================================
// Quick Modes
// ============================================================
function startQuickMode(kind) {
  if (kind === 'mistakes') {
    if (state.mistakeIds.length === 0) {
      announce('Great job! You have no mistakes to fix right now.');
      playSound('correct');
      return;
    }
    const qs = shuffleArray(state.mistakeIds.map(id => QUESTION_MAP.get(id)).filter(Boolean)).slice(0, 15);
    startSession({
      mode: 'mistakes',
      isRetryRound: true,
      title: 'Mistake Rescue Dojo',
      arTitle: 'تدريب تصحيح الأخطاء',
      questions: qs
    });
    return;
  }

  const count = kind === 'exam' ? 20 : 10;
  // Balanced draw across all 4 worlds!
  const perWorld = Math.floor(count / WORLDS.length);
  let picked = [];
  for (const w of WORLDS) {
    const wQs = w.quests.flatMap(q => q.questions.map(x => QUESTION_MAP.get(x.id)));
    picked.push(...pickSmartQuestions(wQs, perWorld));
  }
  picked = shuffleArray(picked).slice(0, count);
  startSession({
    mode: kind,
    title: kind === 'exam' ? 'Term 1 Mini Mock Exam (20 Qs)' : 'Quick Exam Warm-Up (10 Qs)',
    arTitle: kind === 'exam' ? 'اختبار تجريبي شامل' : 'مراجعة سريعة',
    questions: picked
  });
}

// ============================================================
// Dialogs: Parent Progress Report & Trophy Shelf
// ============================================================
function openReportDialog() {
  resetConfirmArmed = false;
  const dialog = $('#report-dialog');
  const body = $('#report-dialog-body');
  const totalQ = ALL_QUESTIONS.length;
  const mastered = state.masteredIds.length;
  const pct = totalQ ? Math.round((mastered / totalQ) * 100) : 0;

  const worldsHtml = WORLDS.map(w => {
    const st = getWorldStats(w);
    return `
      <div class="report-world-row">
        <div>
          <strong>${w.icon} ${esc(w.title)}</strong>
          ${arHtml(w.arTitle)}
        </div>
        <div style="text-align:end;font-weight:800;">
          <span>${st.mastered}/${st.total} (${st.pct}%)</span>
          ${st.mistakes > 0 ? `<div style="color:#BE123C;font-size:0.85rem;">🎯 ${st.mistakes} mistakes</div>` : `<div style="color:#15803D;font-size:0.85rem;">✅ Clean</div>`}
        </div>
      </div>
    `;
  }).join('');

  const mistakesSorted = [...state.mistakeIds]
    .map(id => QUESTION_MAP.get(id))
    .filter(Boolean)
    .sort((a, b) => (state.mistakeCounts[b.id] || 1) - (state.mistakeCounts[a.id] || 1));

  const mistakesHtml = mistakesSorted.length === 0
    ? `<p style="color:#15803D;font-weight:800;">✅ Zero unmastered mistakes right now! ${state.showArabic ? '<span class="ar-text" lang="ar" dir="rtl">لا توجد أخطاء متبقية حالياً!</span>' : ''}</p>`
    : `
      <div class="report-mistakes-list">
        ${mistakesSorted.slice(0, 25).map(m => `
          <div class="mistake-row">
            <div>
              <span class="q-topic-tag" style="margin-bottom:0.25rem;display:inline-block;">${esc(m.worldTitle)} · ${esc(m.topic)} (×${state.mistakeCounts[m.id] || 1})</span>
              <div class="mistake-q">${esc(m.prompt)}</div>
            </div>
            <span class="mistake-ans">✓ ${esc(m.options[m.answer])}</span>
          </div>
        `).join('')}
      </div>
      <button type="button" id="btn-report-practice-mistakes" class="btn-retry-mistakes" style="margin-top:0.85rem;width:100%;">🎯 Practice All ${mistakesSorted.length} Mistakes Now</button>
    `;

  body.innerHTML = `
    <div class="report-grid">
      <div class="score-box"><span class="score-num">${pct}%</span><span class="score-label">Overall Mastery</span></div>
      <div class="score-box"><span class="score-num">${mastered}/${totalQ}</span><span class="score-label">Mastered</span></div>
      <div class="score-box"><span class="score-num">⭐ ${state.stars}</span><span class="score-label">Total Stars</span></div>
      <div class="score-box"><span class="score-num">${state.rescuedCount}</span><span class="score-label">Mistakes Fixed</span></div>
    </div>

    <h3 style="margin:1.1rem 0 0.5rem;">By Exam Section</h3>
    <div style="display:flex;flex-direction:column;gap:0.5rem;">${worldsHtml}</div>

    <h3 style="margin:1.2rem 0 0.5rem;">Current Mistakes to Review (${mistakesSorted.length})</h3>
    ${mistakesHtml}

    <div style="margin-top:1.4rem;padding-top:1rem;border-top:1px solid #E2E8F0;display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;">
      <span id="reset-hint" style="font-size:0.85rem;color:#64748B;">Progress saves automatically on this device.</span>
      <button type="button" id="btn-reset-progress" class="btn-danger-ghost">Reset Progress</button>
    </div>
  `;

  $('#btn-report-practice-mistakes', body)?.addEventListener('click', () => {
    dialog.close();
    startQuickMode('mistakes');
  });

  const resetBtn = $('#btn-reset-progress', body);
  const resetHint = $('#reset-hint', body);
  resetBtn.addEventListener('click', () => {
    if (!resetConfirmArmed) {
      resetConfirmArmed = true;
      resetBtn.textContent = 'Confirm Reset All?';
      resetHint.textContent = 'Tap again to clear all stars, scores & mistakes.';
      return;
    }
    state = defaultState();
    saveState();
    dialog.close();
    renderHome();
  });

  dialog.showModal();
}

function openTrophiesDialog() {
  const dialog = $('#trophies-dialog');
  const body = $('#trophies-dialog-body');
  const unlocked = new Set(state.trophies);

  body.innerHTML = `
    <p style="margin-bottom:0.9rem;font-weight:700;color:#475569;">
      Unlocked ${state.trophies.length} of ${ALL_TROPHIES.length} trophies! Complete quests with 2+ stars to collect them all.
    </p>
    <div class="trophies-grid">
      ${ALL_TROPHIES.map(t => {
        const has = unlocked.has(t.id);
        return `
          <div class="trophy-card ${has ? '' : 'trophy-card--locked'}">
            <div style="font-size:2.2rem;" aria-hidden="true">${has ? t.icon : '🔒'}</div>
            <strong>${esc(t.name)}</strong>
            ${arHtml(t.ar)}
          </div>
        `;
      }).join('')}
    </div>
  `;

  dialog.showModal();
}

// Safari light-dismiss fallback for <dialog closedby="any"> (per modern-web-guidance)
function installDialogLightDismissFallback() {
  if ('closedBy' in HTMLDialogElement.prototype) return;
  const isOutside = (e, dialog) => {
    const r = dialog.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  for (const dialog of document.querySelectorAll('dialog[closedby="any"]')) {
    let pressedOutside = false;
    dialog.addEventListener('pointerdown', (e) => { pressedOutside = isOutside(e, dialog); });
    dialog.addEventListener('pointerup', (e) => { if (pressedOutside && isOutside(e, dialog)) dialog.close(); });
  }
}

// Reset returnValue on dialog close to prevent stale values across browsers
function installDialogCloseCleanup() {
  for (const dialog of document.querySelectorAll('dialog')) {
    dialog.addEventListener('close', () => {
      dialog.returnValue = '';
    });
  }
}

// ============================================================
// Global Event Wiring & Keyboard Support
// ============================================================
function init() {
  installDialogLightDismissFallback();
  installDialogCloseCleanup();

  $('#btn-brand-home').addEventListener('click', () => {
    playSound('tap');
    stopConfetti();
    renderHome();
  });

  $('#btn-hud-mistakes').addEventListener('click', () => {
    playSound('tap');
    if (state.mistakeIds.length > 0) startQuickMode('mistakes');
    else openReportDialog();
  });

  $('#btn-toggle-ar').addEventListener('click', () => {
    playSound('tap');
    state.showArabic = !state.showArabic;
    saveState();
    updateHud();
    if (activeView === 'home') renderHome();
    else if (activeView === 'world' && activeWorldId) renderWorld(activeWorldId);
  });

  $('#btn-toggle-sound').addEventListener('click', () => {
    const nextMuted = !isMuted();
    setMuted(nextMuted);
    if (!nextMuted) playSound('tap');
    updateHud();
  });

  $('#btn-open-trophies').addEventListener('click', () => {
    playSound('tap');
    openTrophiesDialog();
  });

  $('#btn-open-report').addEventListener('click', () => {
    playSound('tap');
    openReportDialog();
  });

  $('#btn-mode-mistakes').addEventListener('click', () => {
    playSound('tap');
    startQuickMode('mistakes');
  });

  $('#btn-mode-mix').addEventListener('click', () => {
    playSound('tap');
    startQuickMode('mix');
  });

  $('#btn-mode-exam').addEventListener('click', () => {
    playSound('tap');
    startQuickMode('exam');
  });

  $('#btn-quiz-exit').addEventListener('click', () => {
    playSound('tap');
    stopSpeaking();
    stopConfetti();
    if (session?.worldId) renderWorld(session.worldId);
    else renderHome();
  });

  // Keyboard shortcuts during active quiz (1-4 or A-D, Enter for Next)
  document.addEventListener('keydown', (e) => {
    if (activeView !== 'quiz' || !session) return;
    if (document.querySelector('dialog[open]')) return;
    const key = e.key.toLowerCase();
    if (!session.locked) {
      const idx = ['1', '2', '3', '4'].indexOf(key) !== -1
        ? ['1', '2', '3', '4'].indexOf(key)
        : ['a', 'b', 'c', 'd'].indexOf(key);
      if (idx >= 0) {
        const btn = document.querySelector(`.option-btn[data-opt-index="${idx}"]`);
        if (btn) {
          e.preventDefault();
          btn.click();
        }
      }
    } else if (key === 'enter') {
      const nextBtn = $('#btn-next-q');
      if (nextBtn && document.activeElement !== nextBtn) {
        e.preventDefault();
        nextBtn.click();
      }
    }
  });

  updateHud();
  renderHome();
}

init();
