"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const RGB = "232, 163, 61";

function CanvasLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let gridSize = 44;
    let cols = 0;
    let rows = 0;
    let animationFrameId = 0;
    let paused = false;
    const startTime = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      gridSize = width < 640 ? 64 : 44;
      cols = Math.ceil(width / gridSize) + 1;
      rows = Math.ceil(height / gridSize) + 1;
    };

    const draw = (time: number) => {
      if (!paused && width > 0 && height > 0) {
        const t = (time - startTime) / 1000;
        ctx.clearRect(0, 0, width, height);

        ctx.strokeStyle = `rgba(${RGB}, 0.05)`;
        ctx.lineWidth = 1;
        for (let i = 0; i <= cols; i++) {
          const x = i * gridSize;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let j = 0; j <= rows; j++) {
          const y = j * gridSize;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        const cx = width / 2;
        const cy = height / 2;
        const maxDist = Math.sqrt(cx * cx + cy * cy) || 1;

        for (let i = 0; i <= cols; i++) {
          for (let j = 0; j <= rows; j++) {
            const x = i * gridSize;
            const y = j * gridSize;
            const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2) / maxDist;
            const wave = Math.sin(t * 0.5 - dist * 6);
            const pulse = Math.max(0, wave);
            const alpha = 0.15 + pulse * 0.1;
            const radius = 1 + pulse * 1.5;

            ctx.beginPath();
            ctx.fillStyle = `rgba(${RGB}, ${alpha})`;
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      paused = document.hidden;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibility);

    resize();
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen"
    />
  );
}

export default function GlobalCanvasBackground() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return <CanvasLayer />;
}
