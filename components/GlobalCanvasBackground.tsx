"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const RGB = "232, 163, 61";
const MOUSE_RADIUS = 180;
const MOUSE_PUSH = 4;

type MeshPoint = {
  originX: number;
  originY: number;
  x: number;
  y: number;
  force: number;
};

function CanvasLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x?: number; y?: number }>({});

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
    let points: MeshPoint[] = [];
    let animationFrameId = 0;
    let paused = false;
    const startTime = performance.now();

    const buildPoints = () => {
      const next: MeshPoint[] = [];
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          next.push({ originX: x, originY: y, x, y, force: 0 });
        }
      }
      points = next;
    };

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
      buildPoints();
    };

    const updatePoints = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      for (const p of points) {
        if (mx !== undefined && my !== undefined) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            const angle = Math.atan2(dy, dx);
            const push = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            p.x += Math.cos(angle) * push * MOUSE_PUSH;
            p.y += Math.sin(angle) * push * MOUSE_PUSH;
            p.force += (push - p.force) * 0.15;
          } else {
            p.force += (0 - p.force) * 0.08;
          }
        } else {
          p.force += (0 - p.force) * 0.08;
        }
        p.x += (p.originX - p.x) * 0.08;
        p.y += (p.originY - p.y) * 0.08;
      }
    };

    const draw = (time: number) => {
      if (!paused && width > 0 && height > 0) {
        const t = (time - startTime) / 1000;
        ctx.clearRect(0, 0, width, height);

        updatePoints();

        const stride = rows + 1;
        ctx.strokeStyle = `rgba(${RGB}, 0.05)`;
        ctx.lineWidth = 1;
        for (let i = 0; i <= cols; i++) {
          ctx.beginPath();
          for (let j = 0; j <= rows; j++) {
            const p = points[i * stride + j];
            if (j === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          }
          ctx.stroke();
        }
        for (let j = 0; j <= rows; j++) {
          ctx.beginPath();
          for (let i = 0; i <= cols; i++) {
            const p = points[i * stride + j];
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          }
          ctx.stroke();
        }

        const cx = width / 2;
        const cy = height / 2;
        const maxDist = Math.sqrt(cx * cx + cy * cy) || 1;

        for (const p of points) {
          const dist =
            Math.sqrt((p.originX - cx) ** 2 + (p.originY - cy) ** 2) / maxDist;
          const wave = Math.sin(t * 0.5 - dist * 6);
          const pulse = Math.max(0, wave);
          const alpha = Math.min(0.9, 0.18 + pulse * 0.12 + p.force * 0.35);
          const radius = 1 + pulse * 1.5 + p.force * 2;

          ctx.beginPath();
          ctx.fillStyle = `rgba(${RGB}, ${alpha})`;
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      paused = document.hidden;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = {};
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    resize();
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
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
