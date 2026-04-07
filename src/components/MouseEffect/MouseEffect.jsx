import React, { useRef, useEffect } from 'react';

// Moved outside component — constant values, no need to redefine on every render
const PARAMS = {
  pointsNumber: 10,
  widthFactor: 0.3,
  spring: 0.5,
  friction: 0.4,
};

const MouseEffect = () => {
  const canvasRef = useRef(null);

  // useRef instead of useState — mouse position updates shouldn't trigger re-renders
  const pointerRef = useRef({
    x: typeof window !== 'undefined' ? 0.5 * window.innerWidth : 0,
    y: typeof window !== 'undefined' ? 0.5 * window.innerHeight : 0,
  });

  const trailRef = useRef(
    new Array(PARAMS.pointsNumber).fill(null).map(() => ({
      x: pointerRef.current.x,
      y: pointerRef.current.y,
      dx: 0,
      dy: 0,
    }))
  );

  useEffect(() => {
    if (window.innerWidth <= 1100) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const trail = trailRef.current;
    let animationFrameId;

    const handleMouseMove = (e) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
    };

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updateCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointerRef.current : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * PARAMS.spring : PARAMS.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= PARAMS.friction;
        p.dy *= PARAMS.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = 'round';
      ctx.strokeStyle = '#1a202310';
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = PARAMS.widthFactor * (PARAMS.pointsNumber - i);
        ctx.stroke();
      }

      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(updateCanvas);
    };

    setupCanvas();
    updateCanvas();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // ✅ empty array is now correct — nothing inside changes between renders

  return (
    <canvas
      className='mouse'
      id='mouseCanvas'
      ref={canvasRef}
    />
  );
};

export default MouseEffect;