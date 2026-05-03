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
        className="flex items-center space-x-2 text-slate-500 hover:text-primary-500 transition-colors mb-8 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Kembali ke Daftar Materi</span>
      </motion.button>

      <article>
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-4"
          >
            <div className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold rounded-full uppercase tracking-wider">
              Kaderisasi
            </div>
            <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
              <Calendar size={16} className="mr-2" />
              {material.date ? new Date(material.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Tanggal tidak tersedia'}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6"
          >
            {material.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 italic border-l-4 border-primary-500 pl-6 py-2"
          >
            {material.description}
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {material.content ? (
              material.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <div className="flex flex-col items-center py-12 text-slate-400">
                <BookOpen size={48} className="mb-4 opacity-20" />
                <p>Konten materi sedang dalam proses penyusunan.</p>
              </div>
            )}
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-lg">
              <Clock size={16} />
              <span>Estimasi baca: 5 menit</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-lg">
              <Tag size={16} />
              <span>Matematika & Seni</span>
            </div>
          </div>
        </motion.div>
      </article>

      <section className="mt-16">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">Materi Lainnya</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.filter(m => m.id !== id).slice(0, 2).map((other) => (
            <Link 
              key={other.id} 
              to={`/materi/${other.id}`}
              className="glass-card p-6 rounded-2xl group hover:border-primary-500/50 transition-all"
            >
              <h4 className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary-500 transition-colors mb-2">
                {other.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
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
