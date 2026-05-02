import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, UserCheck, ShieldCheck, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-multiply filter animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-multiply filter animate-pulse delay-700" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-8 border border-indigo-100 dark:border-indigo-800"
            >
              <Zap size={14} className="animate-pulse" />
              <span>Official Profile 2024</span>
            </motion.div>
            
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80"
                alt="Kaderisasi Team"
                className="rounded-[2.5rem] object-cover aspect-[4/3] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 z-20 glass-card p-6 rounded-3xl flex items-center space-x-4 max-w-xs"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white shadow-lg">
                <Users size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Total Kader</p>
                <p className="text-xl font-black">10 Anggota Aktif</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Users size={32} />, title: "Tim Solid", desc: "Kolaborasi intensif antar kader.", color: "indigo" },
              { icon: <BookOpen size={32} />, title: "Kurikulum Terpadu", desc: "Materi disusun secara sistematis.", color: "purple" },
              { icon: <UserCheck size={32} />, title: "Mentoring Ahli", desc: "Dibimbing oleh praktisi berpengalaman.", color: "pink" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card glass-card-hover p-12 rounded-[2.5rem] text-center"
              >
                <div className={`w-20 h-20 rounded-3xl bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center text-${stat.color}-600 dark:text-${stat.color}-400 mx-auto mb-8 shadow-sm`}>
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{stat.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Mengapa Kaderisasi?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg">Kami tidak hanya belajar teori, tapi kami mempraktekkan nilai-nilai kepemimpinan secara langsung.</p>
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
                  <h4 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
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
