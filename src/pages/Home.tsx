import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import fotoGrp from '../assets/foto_grp.jpeg';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/20 blur-[120px] rounded-full filter animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/20 blur-[100px] rounded-full filter animate-pulse delay-700" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] mb-10 tracking-tight text-slate-900 dark:text-white">
              Eksplorasi <br />
              <span className="text-gradient">Potensi Diri.</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-xl font-medium">
              Dokumentasi perjalanan intelektual dan karakter Kelompok Kaderisasi (LKM) dalam mencetak pemimpin masa depan yang berintegritas.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link to="/anggota" className="btn-primary flex items-center space-x-3 group">
                <span>Mulai Eksplorasi</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/materi" className="btn-secondary">
                Pelajari Kurikulum
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3rem] shadow-2xl">
              <img
                src={fotoGrp}
                alt="Kaderisasi Team"
                className="rounded-[2.5rem] object-cover aspect-[4/3] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
