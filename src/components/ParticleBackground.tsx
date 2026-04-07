import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── Config ────────────────────────────────────────────────────
    const CONFIG = {
      connectDist: 130,
      mouseDist: 200,
      repelRadius: 160,
      repelStrength: 0.55,
      friction: 0.06,
      baseSpeed: 0.55,
      minRadius: 1,
      maxRadius: 2.2,
      particleDensity: 9000, // lower = more particles
      maxVelocity: 4,
      color: '60, 60, 55',
      mouseLineColor: '90, 90, 85',
    };

    // ── State ─────────────────────────────────────────────────────
    let particles: Particle[] = [];
    let animationFrameId: number;
    let w: number;
    let h: number;
    let dpr: number;

    const mouse = { x: -9999, y: -9999 };

    // ── Resize ────────────────────────────────────────────────────
    const resize = () => {
      if (!ctx) return;
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      initParticles();
    };

    // ── Particle class ────────────────────────────────────────────
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseVx: number;
      baseVy: number;
      radius: number;
      alpha: number;

      constructor(randomPosition = true) {
        // Spawn at random position or from a random edge
        if (randomPosition) {
          this.x = Math.random() * w;
          this.y = Math.random() * h;
        } else {
          const edge = Math.floor(Math.random() * 4);
          if (edge === 0) { this.x = -5; this.y = Math.random() * h; }
          else if (edge === 1) { this.x = w + 5; this.y = Math.random() * h; }
          else if (edge === 2) { this.x = Math.random() * w; this.y = -5; }
          else { this.x = Math.random() * w; this.y = h + 5; }
        }

        const angle = Math.random() * Math.PI * 2;
        const speed = CONFIG.baseSpeed * (0.5 + Math.random());
        this.baseVx = Math.cos(angle) * speed;
        this.baseVy = Math.sin(angle) * speed;
        this.vx = this.baseVx;
        this.vy = this.baseVy;

        this.radius = CONFIG.minRadius + Math.random() * (CONFIG.maxRadius - CONFIG.minRadius);
        this.alpha = 0.25 + Math.random() * 0.5;
      }

      update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        // Quadratic ease repulsion — snappy near the cursor
        if (dist < CONFIG.repelRadius) {
          const f = (CONFIG.repelRadius - dist) / CONFIG.repelRadius;
          const ease = f * f;
          this.vx += (dx / dist) * ease * CONFIG.repelStrength;
          this.vy += (dy / dist) * ease * CONFIG.repelStrength;
        }

        // Drift back toward base velocity
        this.vx += (this.baseVx - this.vx) * CONFIG.friction;
        this.vy += (this.baseVy - this.vy) * CONFIG.friction;

        // Clamp max speed
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > CONFIG.maxVelocity) {
          this.vx = (this.vx / speed) * CONFIG.maxVelocity;
          this.vy = (this.vy / speed) * CONFIG.maxVelocity;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Recycle off-screen particles from a random edge instead of bouncing
        if (this.x < -10 || this.x > w + 10 || this.y < -10 || this.y > h + 10) {
          // Re-initialise from a random edge so density stays constant
          Object.assign(this, new Particle(false));
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CONFIG.color}, ${this.alpha})`;
        ctx.fill();
      }
    }

    // ── Init ──────────────────────────────────────────────────────
    const initParticles = () => {
      particles = [];
      const count = Math.max(60, Math.floor((w * h) / CONFIG.particleDensity));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(true));
      }
    };

    // ── Draw connections ──────────────────────────────────────────
    const drawConnections = () => {
      if (!ctx) return;
      const len = particles.length;

      for (let i = 0; i < len; i++) {
        const pi = particles[i];

        // Particle → particle
        for (let j = i + 1; j < len; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const d2 = dx * dx + dy * dy;

          if (d2 < CONFIG.connectDist * CONFIG.connectDist) {
            const t = 1 - Math.sqrt(d2) / CONFIG.connectDist;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${CONFIG.color}, ${t * 0.28})`;
            ctx.lineWidth = t * 0.8;
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.stroke();
          }
        }

        // Particle → mouse
        const mdx = mouse.x - pi.x;
        const mdy = mouse.y - pi.y;
        const md2 = mdx * mdx + mdy * mdy;

        if (md2 < CONFIG.mouseDist * CONFIG.mouseDist) {
          const mt = 1 - Math.sqrt(md2) / CONFIG.mouseDist;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${CONFIG.mouseLineColor}, ${mt * 0.45})`;
          ctx.lineWidth = mt * 1.1;
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    };

    // ── Animate ───────────────────────────────────────────────────
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      drawConnections();
      for (const p of particles) {
        p.update();
        p.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // ── Event handlers ────────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleResize = () => {
      // Cancel scale accumulation by resetting transform before next resize
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      resize();
    };

    // ── Boot ──────────────────────────────────────────────────────
    resize();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default ParticleBackground;