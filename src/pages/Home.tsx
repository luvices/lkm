import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import fotoGrp from '../assets/foto_grp.jpeg';

// Shared state for photo position - global for performance
const photoState = {
  cx: 0,
  cy: 0,
  r: 0
};

const Letter = React.memo(({ char, isGradient }: { char: string, isGradient?: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });
  const springRotate = useSpring(rotate, { stiffness: 60, damping: 20 });

  useEffect(() => {
    let raf: number;
    const update = () => {
      if (ref.current && photoState.r > 0) {
        const rect = ref.current.getBoundingClientRect();
        const lx = rect.left + rect.width / 2;
        const ly = rect.top + rect.height / 2;
        const dx = lx - photoState.cx;
        const dy = ly - photoState.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < photoState.r) {
          const force = (photoState.r - dist) / photoState.r;
          x.set(x.get() + dx * force * 6);
          y.set(y.get() + dy * force * 6);
          rotate.set(rotate.get() + (Math.random() - 0.5) * 40);
        }
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.span
      ref={ref}
      style={{ x: springX, y: springY, rotate: springRotate }}
      className={`inline-block whitespace-pre select-none pointer-events-none px-[0.02em] ${isGradient ? 'text-gradient' : ''}`}
    >
      {char}
    </motion.span>
  );
});

const Word = React.memo(({ word, isGradient }: { word: string, isGradient?: boolean }) => {
  return (
    <span className="inline-block whitespace-nowrap mr-[0.3em] pointer-events-none">
      {word.split("").map((char, i) => (
        <Letter key={i} char={char} isGradient={isGradient} />
      ))}
    </span>
  );
});

const BinaryBackground = () => {
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
            char: Math.random() > 0.5 ? '0' : '1',
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
            ? `rgba(96, 165, 250, ${char.opacity * 0.8})` // text-blue-400 equivalent
            : `rgba(37, 99, 235, ${char.opacity * 0.5})`; // text-blue-600 equivalent
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

const Home: React.FC = () => {
  const constraintsRef = useRef(null);
  const photoRef = useRef<HTMLDivElement>(null);

  const lines = [
    { text: "Latihan Kepemimpinan", gradient: false },
    { text: "Mahasiswa", gradient: false },
    { text: "Informatika 2026", gradient: true }
  ];

  useEffect(() => {
    const sync = () => {
      if (photoRef.current) {
        const rect = photoRef.current.getBoundingClientRect();
        photoState.cx = rect.left + rect.width / 2;
        photoState.cy = rect.top + rect.height / 2;
        photoState.r = rect.width / 2 + 10;
      }
    };
    const interval = setInterval(sync, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20 min-h-screen overflow-x-hidden relative" ref={constraintsRef}>
      <BinaryBackground />

      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 px-4 md:px-6 z-10">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative z-10 pointer-events-none select-none">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.95] mb-8 md:mb-12 tracking-tighter text-slate-900 dark:text-white flex flex-col uppercase">
              {lines.map((line, idx) => (
                <div key={idx} className="flex flex-wrap">
                  {line.text.split(" ").map((word, i) => (
                    <Word key={i} word={word} isGradient={line.gradient} />
                  ))}
                </div>
              ))}
            </h1>

            {/* Buttons — desktop only (shown in left column) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex flex-wrap gap-6 pointer-events-auto"
            >
              <Link to="/anggota" className="w-full sm:w-auto btn-primary text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center space-x-3 group">
                <span>Kenali Kami</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/materi" className="w-full sm:w-auto btn-secondary text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] text-center">
                Materi LKM
              </Link>
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end lg:translate-x-20">
            <motion.div
              ref={photoRef}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0}
              dragMomentum={false}
              whileDrag={{ scale: 1.02, zIndex: 100 }}
              className="relative z-50 cursor-grab active:cursor-grabbing w-full max-w-2xl"
              style={{ touchAction: 'none' }}
            >
              <div className="p-2 md:p-3 bg-blue-500/10 dark:bg-blue-900/20 backdrop-blur-xl rounded-[2rem] md:rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden border-2 border-white/20 dark:border-slate-800/30">
                <img
                  src={fotoGrp}
                  alt="Kaderisasi Team"
                  draggable={false}
                  className="rounded-[1.6rem] md:rounded-[3.2rem] w-full object-cover aspect-[4/3] shadow-2xl pointer-events-none"
                />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [-5, 5, -5],
                  boxShadow: [
                    "0 10px 20px -5px rgba(250, 204, 21, 0.5)",
                    "0 0 30px 10px rgba(250, 204, 21, 0.7)",
                    "0 10px 20px -5px rgba(250, 204, 21, 0.5)"
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-yellow-400 dark:bg-yellow-500 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border-2 border-white dark:border-slate-900 pointer-events-none z-[110]"
              >
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-900 drop-shadow-sm">Drag Me!</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Buttons — mobile only (shown below photo) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex lg:hidden flex-wrap gap-4 w-full pointer-events-auto"
          >
            <Link to="/anggota" className="flex-1 btn-primary text-base px-6 py-4 rounded-[1.5rem] flex items-center justify-center space-x-2 group">
              <span>Kenali Kami</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/materi" className="flex-1 btn-secondary text-base px-6 py-4 rounded-[1.5rem] text-center flex items-center justify-center">
              Materi LKM
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
