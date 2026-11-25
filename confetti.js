/**
 * Zero-dependency celebratory canvas confetti module
 * for Yahya's English Quest.
 * - Honors prefers-reduced-motion.
 * - Lazily mounts a pointer-events-none fixed canvas and removes it cleanly
 *   as soon as all particles finish (zero idle CPU/GPU).
 */

const DEFAULT_COLORS = [
  '#FF6B6B',
  '#FFD93D',
  '#6BCB77',
  '#4D96FF',
  '#A855F7',
  '#FF9F43',
];

const MAX_PARTICLES = 320;
const DEFAULT_Z_INDEX = 99999;

let canvas = null;
let ctx = null;
let width = 0;
let height = 0;
let rafId = null;
let lastFrameTime = 0;
let particles = [];
const pendingTimers = new Set();

function prefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

function pickShape(starBias = 0.25) {
  const r = Math.random();
  if (r < starBias) return 'star';
  if (r < starBias + 0.3) return 'circle';
  return 'rect';
}

function resizeCanvas() {
  if (!canvas || !ctx || typeof window === 'undefined') return;
  width = window.innerWidth || 0;
  height = window.innerHeight || 0;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(width * dpr));
  canvas.height = Math.max(1, Math.floor(height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function ensureCanvas(zIndex = DEFAULT_Z_INDEX) {
  if (typeof window === 'undefined' || typeof document === 'undefined' || !document.body) {
    return false;
  }

  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.inset = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = String(zIndex);
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    if (!ctx) {
      canvas.remove();
      canvas = null;
      return false;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
  } else {
    canvas.style.zIndex = String(zIndex);
  }

  return true;
}

function drawStar(context, outerR, innerR, points = 5) {
  context.beginPath();
  for (let i = 0; i < points * 2; i += 1) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    if (i === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }
  context.closePath();
  context.fill();
}

function spawnBurst({
  count,
  originX,
  originY,
  angleDeg,
  spreadDeg,
  speedMin,
  speedMax,
  lifeMin,
  lifeMax,
  colors,
  starBias = 0.25,
}) {
  if (!width || !height) resizeCanvas();
  const baseX = width * originX;
  const baseY = height * originY;
  const palette = Array.isArray(colors) && colors.length > 0 ? colors : DEFAULT_COLORS;

  for (let i = 0; i < count; i += 1) {
    if (particles.length >= MAX_PARTICLES) {
      particles.shift();
    }

    const angleRad = ((angleDeg + randomRange(-spreadDeg / 2, spreadDeg / 2)) * Math.PI) / 180;
    const speed = randomRange(speedMin, speedMax);
    const shape = pickShape(starBias);
    const size = shape === 'star'
      ? randomRange(6, 10.5)
      : shape === 'circle'
        ? randomRange(4, 7.5)
        : randomRange(7, 13);

    particles.push({
      x: baseX + randomRange(-18, 18),
      y: baseY + randomRange(-12, 12),
      vx: Math.cos(angleRad) * speed,
      vy: Math.sin(angleRad) * speed,
      gravity: randomRange(520, 740),
      drag: randomRange(0.982, 0.992),
      swayAmp: randomRange(22, 65),
      swaySpeed: randomRange(3.2, 6.4),
      swayPhase: randomRange(0, Math.PI * 2),
      rotation: randomRange(0, Math.PI * 2),
      rotationSpeed: randomRange(-7, 7),
      tilt: randomRange(0, Math.PI * 2),
      tiltSpeed: randomRange(5, 11),
      shape,
      size,
      aspect: randomRange(0.45, 0.72),
      color: palette[Math.floor(Math.random() * palette.length)],
      age: 0,
      life: randomRange(lifeMin, lifeMax),
    });
  }
}

function renderFrame(timestamp) {
  if (!ctx || !canvas) {
    rafId = null;
    return;
  }

  const dt = lastFrameTime ? Math.min((timestamp - lastFrameTime) / 1000, 0.05) : 1 / 60;
  lastFrameTime = timestamp;

  ctx.clearRect(0, 0, width, height);

  const nextParticles = [];
  const dragStep = dt * 60;

  for (let i = 0; i < particles.length; i += 1) {
    const p = particles[i];
    p.age += dt;
    if (p.age >= p.life) continue;

    const dragFactor = Math.pow(p.drag, dragStep);
    p.vx *= dragFactor;
    p.vy = p.vy * dragFactor + p.gravity * dt;

    p.x += (p.vx + Math.sin(p.age * p.swaySpeed + p.swayPhase) * p.swayAmp) * dt;
    p.y += p.vy * dt;

    if (p.y > height + 40) continue;

    p.rotation += p.rotationSpeed * dt;
    p.tilt += p.tiltSpeed * dt;

    const progress = p.age / p.life;
    const alpha = progress > 0.7 ? Math.max(0, 1 - (progress - 0.7) / 0.3) : 1;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.fillStyle = p.color;

    if (p.shape === 'rect') {
      const flipY = Math.max(0.22, Math.abs(Math.cos(p.tilt)));
      ctx.scale(1, flipY);
      const w = p.size;
      const h = p.size * p.aspect;
      ctx.fillRect(-w / 2, -h / 2, w, h);
    } else if (p.shape === 'circle') {
      const squash = 0.75 + 0.25 * Math.abs(Math.cos(p.tilt));
      ctx.scale(1, squash);
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.55, 0, Math.PI * 2);
      ctx.fill();
    } else {
      const shimmer = 0.72 + 0.28 * Math.abs(Math.cos(p.tilt));
      ctx.scale(shimmer, 1);
      drawStar(ctx, p.size, p.size * 0.46, 5);
    }

    ctx.restore();
    nextParticles.push(p);
  }

  particles = nextParticles;

  if (particles.length > 0 || pendingTimers.size > 0) {
    rafId = window.requestAnimationFrame(renderFrame);
  } else {
    stopConfetti();
  }
}

function scheduleWave(delayMs, fn) {
  const id = setTimeout(() => {
    pendingTimers.delete(id);
    if (!canvas) return;
    fn();
  }, delayMs);
  pendingTimers.add(id);
}

function startLoop() {
  if (rafId === null && typeof window !== 'undefined') {
    lastFrameTime = 0;
    rafId = window.requestAnimationFrame(renderFrame);
  }
}

/**
 * Stop any active confetti animation and cleanly remove the canvas element.
 */
export function stopConfetti() {
  for (const id of pendingTimers) {
    clearTimeout(id);
  }
  pendingTimers.clear();

  if (rafId !== null && typeof window !== 'undefined') {
    window.cancelAnimationFrame(rafId);
    rafId = null;
  }

  particles = [];
  lastFrameTime = 0;

  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', resizeCanvas);
  }

  if (canvas) {
    canvas.remove();
    canvas = null;
  }
  ctx = null;
}

/**
 * Launch celebratory confetti particles.
 * @param {object} [options]
 * @param {'small'|'medium'|'victory'} [options.intensity='medium']
 * @param {string[]} [options.colors]
 * @param {{ x?: number, y?: number }} [options.origin] Normalized 0..1 viewport coordinates
 * @param {number} [options.zIndex=99999]
 */
export function launchConfetti(options = {}) {
  if (prefersReducedMotion()) return;

  const {
    intensity = 'medium',
    colors = DEFAULT_COLORS,
    origin,
    zIndex = DEFAULT_Z_INDEX,
  } = options || {};

  if (!ensureCanvas(zIndex)) return;

  const ox = typeof origin?.x === 'number' ? origin.x : 0.5;
  const oy = typeof origin?.y === 'number' ? origin.y : null;

  if (intensity === 'small') {
    spawnBurst({
      count: 28,
      originX: ox,
      originY: oy ?? 0.44,
      angleDeg: -90,
      spreadDeg: 115,
      speedMin: 220,
      speedMax: 470,
      lifeMin: 1.25,
      lifeMax: 1.9,
      colors,
      starBias: 0.28,
    });
  } else if (intensity === 'victory') {
    // Wave 1: joyful center fountain
    spawnBurst({
      count: 72,
      originX: ox,
      originY: oy ?? 0.42,
      angleDeg: -90,
      spreadDeg: 135,
      speedMin: 300,
      speedMax: 680,
      lifeMin: 2.3,
      lifeMax: 3.4,
      colors,
      starBias: 0.32,
    });

    // Wave 2: left and right celebratory cannons
    scheduleWave(240, () => {
      spawnBurst({
        count: 42,
        originX: 0.1,
        originY: 0.62,
        angleDeg: -58,
        spreadDeg: 48,
        speedMin: 420,
        speedMax: 760,
        lifeMin: 2.2,
        lifeMax: 3.3,
        colors,
        starBias: 0.3,
      });
      spawnBurst({
        count: 42,
        originX: 0.9,
        originY: 0.62,
        angleDeg: -122,
        spreadDeg: 48,
        speedMin: 420,
        speedMax: 760,
        lifeMin: 2.2,
        lifeMax: 3.3,
        colors,
        starBias: 0.3,
      });
    });

    // Wave 3: twinkling star & confetti crown from top center
    scheduleWave(600, () => {
      spawnBurst({
        count: 48,
        originX: 0.5,
        originY: 0.16,
        angleDeg: -90,
        spreadDeg: 170,
        speedMin: 180,
        speedMax: 460,
        lifeMin: 2.2,
        lifeMax: 3.3,
        colors,
        starBias: 0.42,
      });
    });
  } else {
    // 'medium' (default)
    spawnBurst({
      count: 64,
      originX: ox,
      originY: oy ?? 0.38,
      angleDeg: -90,
      spreadDeg: 135,
      speedMin: 270,
      speedMax: 600,
      lifeMin: 1.85,
      lifeMax: 2.8,
      colors,
      starBias: 0.28,
    });
  }

  startLoop();
}

export default {
  launchConfetti,
  stopConfetti,
};
