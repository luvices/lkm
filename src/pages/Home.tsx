import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import fotoGrp from '../assets/foto_grp.jpeg';
import RollingText from '../components/RollingText';

const Home: React.FC = () => {
  return (
    <div className="pb-10 min-h-screen overflow-x-hidden relative">
      <section className="relative pt-20 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content - Spans 7 columns on LG */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  KELOMPOK 19 • LKM IF 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black uppercase leading-[0.85] tracking-[-0.04em] mb-12 text-slate-100 flex flex-col items-start gap-2">
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Latihan</motion.span>
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Kepemimpinan</motion.span>
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>Mahasiswa</motion.span>
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-blue-600">Informatika</motion.span>
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-blue-600">2026</motion.span>
              </h1>

              <div className="flex flex-wrap gap-6">
                <Link to="/anggota" className="btn-primary flex items-center space-x-3 group">
                  <RollingText text="Kenali Kami" />
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/materi" className="btn-secondary flex items-center justify-center">
                  <RollingText text="Materi LKM" />
                </Link>
              </div>
            </div>

            {/* Image Grid - Spans 5 columns on LG */}
            <div className="lg:col-span-5 relative h-[500px] md:h-[650px] mt-12 lg:mt-0">
              {/* Main Photo - Floating Layer 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-0 right-0 w-4/5 aspect-[3/4] z-20 rounded-xl overflow-hidden border border-white/10 glass-card p-2"
              >
                <img
                  src={fotoGrp}
                  alt="Team Group"
                  draggable={false}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </motion.div>

              {/* Decorative Photo - Floating Layer 2 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-10 left-0 w-3/5 aspect-square z-30 rounded-xl overflow-hidden border border-white/10 glass-card p-2 shadow-2xl"
              >
                <img
                  src={fotoGrp}
                  alt="Team Detail"
                  draggable={false}
                  className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Badge/Sticker Layer */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                className="absolute top-1/2 -right-6 md:-right-10 z-40 bg-blue-600 px-6 py-4 rounded-xl border-4 border-[#020617] shadow-xl"
              >
                <p className="text-white font-black uppercase text-xl italic tracking-tighter">IF'25</p>
                <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest">Solidarity First</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
