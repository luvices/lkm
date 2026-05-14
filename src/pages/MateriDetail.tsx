import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { materials } from '../data/data';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, BookOpen, Clock, Tag } from 'lucide-react';

const MateriDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const material = materials.find((m) => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!material) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Materi tidak ditemukan</h2>
        <button
          onClick={() => navigate('/materi')}
          className="mt-4 px-6 py-2 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors"
        >
          Kembali ke Materi
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/materi')}
        className="flex items-center space-x-2 text-slate-400 hover:text-blue-500 transition-colors mb-8 group uppercase text-[10px] font-black tracking-widest"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Kembali ke Daftar Materi</span>
      </motion.button>

      <article>
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-4"
          >
            <div className="px-3 py-1 bg-white/5 text-blue-500 text-[10px] font-bold rounded-[3px] border border-white/10 uppercase tracking-widest">
              Kaderisasi
            </div>
            <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              <Calendar size={14} className="mr-2" />
              {material.date ? new Date(material.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Tanggal tidak tersedia'}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-100 mb-6 uppercase font-black tracking-tight leading-[1.1] text-5xl"
          >
            {material.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 border-l-2 border-blue-600 pl-6 py-2 font-medium"
          >
            {material.description}
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 md:p-12 rounded-[3px]"
        >
          <div className="prose prose-invert max-w-none">
            {material.content ? (
              material.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-[#dde1d2] leading-relaxed mb-6 font-medium">
                  {paragraph}
                </p>
              ))
            ) : (
              <div className="flex flex-col items-center py-12 text-[#b4b8a5]">
                <BookOpen size={48} className="mb-4 opacity-20" />
                <p className="uppercase text-[10px] font-black tracking-widest">Konten materi sedang dalam proses penyusunan.</p>
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-[#b4b8a5] bg-white/5 px-4 py-2 rounded-[3px]">
              <Clock size={14} />
              <span>Estimasi baca: 5 menit</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-[#b4b8a5] bg-white/5 px-4 py-2 rounded-[3px]">
              <Tag size={14} />
              <span>LKM Informatika</span>
            </div>
          </div>
        </motion.div>
      </article>

      <section className="mt-16">
        <h2 className="text-slate-100 mb-8 uppercase font-black tracking-tighter">Materi Lainnya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.filter(m => m.id !== id).slice(0, 2).map((other) => (
            <Link
              key={other.id}
              to={`/materi/${other.id}`}
              className="glass-card p-6 rounded-[3px] group hover:border-blue-500/50 transition-all"
            >
              <h4 className="font-black uppercase tracking-tight text-slate-100 group-hover:text-blue-500 transition-colors mb-2">
                {other.title}
              </h4>
              <p className="text-[11px] text-slate-400 line-clamp-2 font-medium">
                {other.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MateriDetail;
