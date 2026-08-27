import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;
    let scrollY = window.scrollY;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Neural nodes
    const nodeCount = Math.floor(Math.min(width, height) / 18);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.5 + 0.8,
      pulse: Math.random() * Math.PI * 2
    }));

    // Math & AI Symbols
    const mathSymbols = [
      'W·x + b', '∇L(θ)', 'σ(z)', 'P(Y|X)', 'H(X)', 'λ_i', 
      '∂L/∂w', 'CGPA 9.33', 'SVD+SVM', 'ResNet50', 'U-Net', 'SHAP', '6-DOF'
    ];
    const floatingTexts = Array.from({ length: 12 }, (_, i) => ({
      text: mathSymbols[i % mathSymbols.length],
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -0.08 - Math.random() * 0.1,
      opacity: Math.random() * 0.12 + 0.04
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid Lines with subtle parallax
      const gridSize = 64;
      const offsetY = (scrollY * 0.1) % gridSize;
      ctx.strokeStyle = isDark ? 'rgba(51, 65, 85, 0.12)' : 'rgba(203, 213, 225, 0.25)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = -offsetY; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Render Floating Symbols
      floatingTexts.forEach(t => {
        t.y += t.vy;
        if (t.y < -20) {
          t.y = height + 20;
          t.x = Math.random() * width;
        }
        const parallaxY = (t.y - scrollY * 0.05) % (height + 40);
        const finalY = parallaxY < 0 ? parallaxY + height + 40 : parallaxY;
        
        ctx.fillStyle = isDark ? `rgba(20, 184, 166, ${t.opacity * 1.5})` : `rgba(13, 148, 136, ${t.opacity})`;
        ctx.font = '10px "DM Mono", monospace';
        ctx.fillText(t.text, t.x, finalY);
      });

      // Render Neural Network Nodes & Vector Edges
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const parallaxY = (n.y - scrollY * 0.06) % height;
        const drawY = parallaxY < 0 ? parallaxY + height : parallaxY;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const parallaxY2 = (n2.y - scrollY * 0.06) % height;
          const drawY2 = parallaxY2 < 0 ? parallaxY2 + height : parallaxY2;

          const dx = n.x - n2.x;
          const dy = drawY - drawY2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * (isDark ? 0.18 : 0.12);
            ctx.strokeStyle = isDark ? `rgba(13, 148, 136, ${alpha})` : `rgba(15, 118, 110, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, drawY);
            ctx.lineTo(n2.x, drawY2);
            ctx.stroke();
          }
        }

        const glow = Math.sin(n.pulse) * 0.35 + 0.65;
        ctx.fillStyle = isDark ? `rgba(20, 184, 166, ${0.5 * glow})` : `rgba(13, 148, 136, ${0.4 * glow})`;
        ctx.beginPath();
        ctx.arc(n.x, drawY, n.radius * glow, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
