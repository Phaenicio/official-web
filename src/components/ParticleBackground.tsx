import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const location = useLocation();
  const [isHiddenOnHero, setIsHiddenOnHero] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CONFIG = {
      noiseDensity: 0.00006,
      blobAlpha: 0.34,
    };

    let animationFrameId = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const blobs = [
      { x: 0.22, y: 0.24, size: 0.48, speedX: 0.00012, speedY: 0.00009, phase: 0, color: '0,4,51' },
      { x: 0.72, y: 0.3, size: 0.44, speedX: 0.0001, speedY: 0.00008, phase: 1.3, color: '85,85,92' },
      { x: 0.5, y: 0.78, size: 0.52, speedX: 0.00008, speedY: 0.00011, phase: 2.1, color: '115,120,130' },
    ];
    const startTime = performance.now();

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBase = () => {
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, '#f3f5f9');
      gradient.addColorStop(0.5, '#e9edf3');
      gradient.addColorStop(1, '#e0e5ec');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    };

    const drawBlobs = (elapsed: number) => {
      for (const blob of blobs) {
        const x = (blob.x + Math.sin(elapsed * blob.speedX + blob.phase) * 0.08) * w;
        const y = (blob.y + Math.cos(elapsed * blob.speedY + blob.phase) * 0.07) * h;
        const radius = blob.size * Math.min(w, h);

        const radial = ctx.createRadialGradient(x, y, radius * 0.12, x, y, radius);
        radial.addColorStop(0, `rgba(${blob.color}, ${CONFIG.blobAlpha})`);
        radial.addColorStop(1, `rgba(${blob.color}, 0)`);
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawGrain = () => {
      const count = Math.floor(w * h * CONFIG.noiseDensity);
      ctx.fillStyle = 'rgba(18, 25, 38, 0.022)';
      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        ctx.fillRect(x, y, 1, 1);
      }
    };

    const drawVignette = () => {
      const radial = ctx.createRadialGradient(w * 0.5, h * 0.4, h * 0.25, w * 0.5, h * 0.5, h * 0.95);
      radial.addColorStop(0, 'rgba(255,255,255,0)');
      radial.addColorStop(1, 'rgba(15,23,42,0.14)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, w, h);
    };

    const renderFrame = (isStatic = false) => {
      const elapsed = performance.now() - startTime;
      drawBase();
      drawBlobs(isStatic ? 0 : elapsed);
      drawGrain();
      drawVignette();
    };

    const animate = () => {
      renderFrame(false);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      renderFrame(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    resize();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      renderFrame(true);
    } else {
      animate();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      const shouldHide = location.pathname === '/' && window.scrollY < window.innerHeight * 0.82;
      setIsHiddenOnHero(shouldHide);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [location.pathname]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-500 ${isHiddenOnHero ? 'opacity-0' : 'opacity-100'}`}
    />
  );
};

export default ParticleBackground;