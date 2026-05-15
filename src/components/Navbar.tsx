import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import RollingText from './RollingText';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const expandTimer = setTimeout(() => setIsExpanded(true), 2000);
    const retractTimer = setTimeout(() => setIsExpanded(false), 7000);
    
    return () => {
      clearTimeout(expandTimer);
      clearTimeout(retractTimer);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    // Basic show/hide logic based on scroll direction
    if (current < 10) {
      setVisible(true);
    } else if (current > lastScrollY.current) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
    }
    lastScrollY.current = current;
  });

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Anggota', path: '/anggota' },
    { name: 'Materi', path: '/materi' },
    { name: 'SWOT', path: '/swot' },
  ];

  const showFullLogo = isExpanded || isHovered;

  return (
    <AnimatePresence mode="wait">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 inset-x-0 mx-auto z-50 px-4 flex justify-center pointer-events-none"
      >
        <div className="glass-card flex items-center justify-between w-full max-w-[800px] px-6 py-3 rounded-full pointer-events-auto shadow-2xl border border-white/10">
          <Link 
            to="/" 
            className="flex items-center group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              animate={{ 
                width: showFullLogo ? 'auto' : 0,
                opacity: showFullLogo ? 1 : 0,
                marginRight: showFullLogo ? 12 : 0
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="text-xl font-black tracking-tight text-slate-100">
                Kelompok
              </span>
            </motion.div>
            
            <motion.div 
              className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center group-hover:rotate-[10deg] transition-all duration-500 shrink-0"
            >
              <span className="text-white text-xl font-black">19</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <RollingText
                key={item.path}
                to={item.path}
                text={item.name}
                className={`flex items-center justify-center px-6 py-2.5 rounded-full text-[13px] uppercase font-semibold tracking-[0.1em] transition-all duration-300 active:scale-95 ${location.pathname === item.path
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                    : 'text-slate-400 hover:text-slate-100'
                  }`}
              />
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-slate-400 hover:text-slate-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-full mt-4 w-[calc(100%-2rem)] glass-card p-6 rounded-3xl flex flex-col space-y-3 pointer-events-auto border border-white/10"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-4 rounded-2xl font-semibold uppercase tracking-[0.1em] text-[12px] transition-all ${location.pathname === item.path
                      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
