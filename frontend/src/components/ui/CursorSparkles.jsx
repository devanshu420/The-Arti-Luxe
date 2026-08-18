import React, { useEffect, useRef } from "react";

export default function CursorSparkles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    let lastSpawn = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastSpawn < 35) return; // Throttle to 30fps spawn
      lastSpawn = now;

      // Add 2-3 tiny sparkles on mouse move
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: e.clientX + (Math.random() * 16 - 8),
          y: e.clientY + (Math.random() * 16 - 8),
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: Math.random() * 1.5 + 0.5,
          opacity: 1,
          decay: Math.random() * 0.03 + 0.02,
          rotation: Math.random() * Math.PI,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 4-pointed golden sparkle draw function
    const drawStar = (cx, cy, spikes, outerRadius, innerRadius, opacity) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`;
      ctx.shadowColor = "#FFE57F";
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= p.decay;

        if (p.opacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        drawStar(p.x, p.y, 4, p.size, p.size / 2.5, p.opacity);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[99999] select-none"
    />
  );
}