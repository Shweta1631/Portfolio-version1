import React, { useEffect, useRef, useState } from 'react';

interface TrailParticle {
  x: number;
  y: number;
}

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

const PARTICLE_COUNT = 7;

// Theme palette accents for the trail particles
const PARTICLE_STYLES = [
  { size: 5, color: '#89ceff', shadow: '0 0 8px rgba(137, 206, 255, 0.9)', opacity: 0.8 },
  { size: 4.5, color: '#8083ff', shadow: '0 0 7px rgba(128, 131, 255, 0.8)', opacity: 0.7 },
  { size: 4, color: '#6366f1', shadow: '0 0 6px rgba(99, 102, 241, 0.7)', opacity: 0.6 },
  { size: 3.5, color: '#4edea3', shadow: '0 0 6px rgba(78, 222, 163, 0.65)', opacity: 0.5 },
  { size: 3, color: '#6366f1', shadow: '0 0 5px rgba(99, 102, 241, 0.6)', opacity: 0.4 },
  { size: 2.5, color: '#c0c1ff', shadow: '0 0 5px rgba(192, 193, 255, 0.5)', opacity: 0.3 },
  { size: 2, color: '#89ceff', shadow: '0 0 4px rgba(137, 206, 255, 0.45)', opacity: 0.2 }
];

export const CustomCursor: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  // Coordinate tracking references (bypass React re-renders during mouse move for 60-120fps smoothness)
  const mousePos = useRef({ x: -200, y: -200 });
  const magneticTarget = useRef({ x: -200, y: -200, isMagnetic: false });
  const mainCursorPos = useRef({ x: -200, y: -200 });
  const auraGlowPos = useRef({ x: -200, y: -200 });
  const trailPositions = useRef<TrailParticle[]>(
    Array.from({ length: PARTICLE_COUNT }, () => ({ x: -200, y: -200 }))
  );

  // DOM node references
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nextRippleId = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Determine whether we are on a desktop environment with fine pointer
    const checkIsDesktop = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isWideScreen = window.innerWidth >= 768;
      return hasFinePointer && isWideScreen;
    };

    const isFineDesktop = checkIsDesktop();
    setIsDesktop(isFineDesktop);

    if (!isFineDesktop) return;

    // Apply class to hide system cursor only on desktop
    document.body.classList.add('custom-cursor-active');

    const handleResize = () => {
      const desktop = checkIsDesktop();
      setIsDesktop(desktop);
      if (desktop) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mousePos.current = { x, y };

      if (!isVisible) setIsVisible(true);

      // Instant center dot position update for true zero perceived latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Check for interactive targets under the cursor
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'button, a, input, textarea, select, [role="button"], [id*="-card"], [id*="-btn"], .hover-target, label, summary'
        ) as HTMLElement | null;

        if (interactive) {
          setIsHovered(true);

          // Calculate subtle magnetic pull toward center of interactive element
          const rect = interactive.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          // Subtle pull (max 18px offset toward center)
          const pullFactor = 0.22;
          const dx = (centerX - x) * pullFactor;
          const dy = (centerY - y) * pullFactor;

          magneticTarget.current = {
            x: x + dx,
            y: y + dy,
            isMagnetic: true
          };
        } else {
          setIsHovered(false);
          magneticTarget.current = { x, y, isMagnetic: false };
        }
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicked(true);

      // Spawn a ripple effect at cursor position
      const newRipple: ClickRipple = {
        id: nextRippleId.current++,
        x: e.clientX,
        y: e.clientY
      };

      setRipples((prev) => [...prev.slice(-4), newRipple]);

      // Remove ripple after animation finishes (500ms)
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 500);
    };

    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // High performance animation loop
    const animate = () => {
      const targetX = magneticTarget.current.x;
      const targetY = magneticTarget.current.y;

      // 1. Smoothly interpolate main cursor ring
      const ringLerp = magneticTarget.current.isMagnetic ? 0.3 : 0.22;
      mainCursorPos.current.x += (targetX - mainCursorPos.current.x) * ringLerp;
      mainCursorPos.current.y += (targetY - mainCursorPos.current.y) * ringLerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${mainCursorPos.current.x}px, ${mainCursorPos.current.y}px, 0)`;
      }

      // 2. Smoothly interpolate ambient glow aura behind cursor
      auraGlowPos.current.x += (mousePos.current.x - auraGlowPos.current.x) * 0.12;
      auraGlowPos.current.y += (mousePos.current.y - auraGlowPos.current.y) * 0.12;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraGlowPos.current.x}px, ${auraGlowPos.current.y}px, 0)`;
      }

      // 3. Smooth flowing trail particles with cascade delay
      const trail = trailPositions.current;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const leader = i === 0 ? mousePos.current : trail[i - 1];
        // Gradual damping: head particles are snappier, trailing particles follow fluidly
        const lerpFactor = 0.34 - i * 0.035;

        trail[i].x += (leader.x - trail[i].x) * lerpFactor;
        trail[i].y += (leader.y - trail[i].y) * lerpFactor;

        const particleEl = particleRefs.current[i];
        if (particleEl) {
          particleEl.style.transform = `translate3d(${trail[i].x}px, ${trail[i].y}px, 0)`;
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div
      id="custom-cursor-layer"
      className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Subtle Glow Trail Aura moving softly across the page */}
      <div
        ref={auraRef}
        className="absolute top-0 left-0 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(137, 206, 255, 0.08) 45%, transparent 70%)',
          filter: 'blur(14px)'
        }}
      />

      {/* 2. Soft Trailing Effect: 7 small flowing particles */}
      {PARTICLE_STYLES.map((style, idx) => (
        <div
          key={idx}
          ref={(el) => {
            particleRefs.current[idx] = el;
          }}
          className="absolute top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none"
          style={{
            width: `${style.size}px`,
            height: `${style.size}px`,
            backgroundColor: style.color,
            boxShadow: style.shadow,
            opacity: isHovered ? style.opacity * 0.5 : style.opacity,
            transition: 'opacity 0.2s ease-out'
          }}
        />
      ))}

      {/* 3. Outer Interactive Smooth Ring (Expands into glowing circular shape when hovering over clickable elements) */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform transition-[width,height,background-color,border-color,box-shadow,opacity] duration-250 ease-out pointer-events-none ${
          isHovered
            ? 'w-14 h-14 border-2 border-[#89ceff] bg-[#6366f1]/15 shadow-[0_0_24px_rgba(99,102,241,0.5),inset_0_0_12px_rgba(137,206,255,0.25)]'
            : isClicked
            ? 'w-6 h-6 border-2 border-[#4edea3] bg-[#4edea3]/20 shadow-[0_0_18px_rgba(78,222,163,0.6)]'
            : 'w-8 h-8 border border-[#8083ff]/80 bg-[#6366f1]/10 shadow-[0_0_12px_rgba(99,102,241,0.35)]'
        }`}
      />

      {/* 4. Click Ripple / Pulse Effect */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 border border-[#4edea3] animate-ping will-change-transform"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '28px',
            height: '28px',
            boxShadow: '0 0 16px rgba(78, 222, 163, 0.7)',
            animationDuration: '500ms',
            animationIterationCount: 1
          }}
        />
      ))}

      {/* 5. Zero-lag Center Dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform transition-[width,height,background-color,box-shadow] duration-150 ease-out pointer-events-none ${
          isHovered
            ? 'w-1.5 h-1.5 bg-[#89ceff] shadow-[0_0_8px_#89ceff]'
            : isClicked
            ? 'w-2 h-2 bg-[#4edea3] shadow-[0_0_10px_#4edea3]'
            : 'w-2 h-2 bg-[#c0c1ff] shadow-[0_0_6px_#6366f1]'
        }`}
      />
    </div>
  );
};
