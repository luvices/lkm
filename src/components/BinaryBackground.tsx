import React, { useRef, useEffect } from 'react';

const BinaryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let characters: { x: number, y: number, char: string, opacity: number, targetOpacity: number }[] = [];
    
    const fontSize = 18;
    let columns = 0;
    let rows = 0;

    const initGrid = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.ceil(canvas.width / fontSize);
      rows = Math.ceil(canvas.height / fontSize);
      
      characters = [];
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          characters.push({
            x: i * fontSize,
            y: j * fontSize,
            char: Math.random() > 0.5 ? 'IF' : '25',
            opacity: 0,
            targetOpacity: 0
          });
        }
      }
    };

    window.addEventListener('resize', initGrid);
    initGrid();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const isDark = () => document.documentElement.classList.contains('dark');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `600 ${fontSize * 0.8}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const dark = isDark();

      // Randomly change a few characters to create a dynamic feel
      for (let i = 0; i < characters.length * 0.03; i++) {
        const randomIdx = Math.floor(Math.random() * characters.length);
        if (characters[randomIdx]) {
          characters[randomIdx].char = Math.random() > 0.5 ? 'IF' : '25';
        }
      }

      characters.forEach(char => {
        const dx = mouse.current.x - char.x;
        const dy = mouse.current.y - char.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 250; // Radius

        if (distance < maxDistance) {
          char.targetOpacity = 1 - (distance / maxDistance);
        } else {
          char.targetOpacity = 0;
        }

        // Smooth opacity transition
        char.opacity += (char.targetOpacity - char.opacity) * 0.1;

        if (char.opacity > 0.01) {
          ctx.fillStyle = dark
            ? `rgba(29, 78, 216, ${char.opacity * 0.4})`
            : `rgba(29, 78, 216, ${char.opacity * 0.3})`;
          ctx.fillText(char.char, char.x + fontSize / 2, char.y + fontSize / 2);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', initGrid);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default BinaryBackground;
