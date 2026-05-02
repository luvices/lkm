import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, UserCheck, ShieldCheck, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm mb-6">
              Official Profile v1.0
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
              Membangun <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">Karakter</span> Pemimpin Masa Depan
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              Platform Profile Kelompok Kaderisasi (LKM) hadir untuk mendokumentasikan perjalanan, pencapaian, dan kolaborasi kami dalam mencetak kader berkualitas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/anggota" className="px-8 py-4 bg-primary-500 text-white rounded-2xl font-bold hover:bg-primary-600 transition-all flex items-center space-x-2 shadow-lg shadow-primary-500/25">
                <span>Lihat Anggota</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/materi" className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                Pelajari Materi
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-card p-4 rounded-[40px] rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Kaderisasi Team"
                className="rounded-[32px] shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-400/20 blur-[80px] rounded-full -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-400/20 blur-[60px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-10 rounded-[32px] text-center"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/40 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">10 Anggota Aktif</h3>
              <p className="text-slate-600 dark:text-slate-400">Tim yang solid dan berdedikasi tinggi dalam setiap agenda kaderisasi.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-10 rounded-[32px] text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-6">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">8+ Materi Inti</h3>
              <p className="text-slate-600 dark:text-slate-400">Kurikulum yang terstruktur untuk mengasah kemampuan kepemimpinan.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-10 rounded-[32px] text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-6">
                <UserCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">2 Pembimbing</h3>
              <p className="text-slate-600 dark:text-slate-400">Didampingi oleh mentor ahli yang berpengalaman di bidangnya.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Mengapa Kaderisasi?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Kami tidak hanya belajar teori, tapi kami mempraktekkan nilai-nilai kepemimpinan secara langsung.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="text-indigo-500" />, title: "Integritas Tinggi", desc: "Menanamkan nilai kejujuran dan tanggung jawab dalam setiap tindakan." },
              { icon: <Zap className="text-yellow-500" />, title: "Inovatif", desc: "Mendorong pemikiran kritis dan solusi kreatif dalam berorganisasi." },
              { icon: <Heart className="text-red-500" />, title: "Solidaritas", desc: "Membangun ikatan kekeluargaan yang kuat antar anggota kader." },
            ].map((item, i) => (
              <div key={i} className="flex space-x-6 p-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
