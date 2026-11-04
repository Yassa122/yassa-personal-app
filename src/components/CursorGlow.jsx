// src/components/CursorGlow.jsx

import React, { useEffect, useRef } from 'react';

// Soft spotlight that trails the mouse and lights up the background grid around it.
// Only runs for a mouse or trackpad; touch devices never see it.
const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let visible = false;
    let frame = null;

    const paint = () => {
      node.style.setProperty('--x', `${pos.x}px`);
      node.style.setProperty('--y', `${pos.y}px`);
    };

    // Ease toward the pointer each frame so the glow trails behind it, and stop once it has caught up
    const step = () => {
      pos.x += (target.x - pos.x) * 0.15;
      pos.y += (target.y - pos.y) * 0.15;
      paint();
      const settled = Math.abs(target.x - pos.x) < 0.5 && Math.abs(target.y - pos.y) < 0.5;
      frame = settled ? null : requestAnimationFrame(step);
    };

    const onMove = (event) => {
      if (event.pointerType === 'touch') return;
      target.x = event.clientX;
      target.y = event.clientY;

      // Appear where the pointer is instead of sliding in from the last position
      if (!visible || reduceMotion) {
        pos.x = target.x;
        pos.y = target.y;
        paint();
      }
      if (!visible) {
        visible = true;
        node.style.opacity = '1';
      }
      if (!reduceMotion && frame === null) frame = requestAnimationFrame(step);
    };

    const onLeave = () => {
      visible = false;
      node.style.opacity = '0';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 opacity-0 transition-opacity duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(45,212,191,0.1),transparent_70%)]" />
      {/* Same 56px grid as the ambient background, so the lit lines sit exactly on top of it */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,212,191,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.14)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(260px_circle_at_var(--x)_var(--y),black,transparent)]" />
    </div>
  );
};

export default CursorGlow;
