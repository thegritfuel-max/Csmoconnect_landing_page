import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.8;

      // Draw atmosphere glow
      const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.2);
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)");
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
      ctx.fill();

      // Draw globe base
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#0a0a0a";
      ctx.fill();
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw grid lines
      ctx.beginPath();
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)";
      for (let i = 0; i < 10; i++) {
        const angle = (i / 10) * Math.PI;
        const r = radius * Math.sin(angle);
        const y = centerY + radius * Math.cos(angle);
        
        ctx.moveTo(centerX - r, y);
        ctx.lineTo(centerX + r, y);
      }
      ctx.stroke();

      // Draw rotating dots (simulating nodes)
      rotation += 0.002;
      const dotCount = 40;
      for (let i = 0; i < dotCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / dotCount);
        const theta = Math.sqrt(dotCount * Math.PI) * phi + rotation;

        const x = centerX + radius * Math.sin(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        if (z > 0) {
          const size = (z / radius + 1) * 1.5;
          const opacity = (z / radius + 0.5) * 0.5;
          ctx.fillStyle = `rgba(96, 165, 250, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={800}
        height={800}
        className="max-w-full max-h-full opacity-80"
      />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none" />
    </div>
  );
}
