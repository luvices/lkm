import React, { useState, useMemo } from 'react';
import { materials } from '../data/data';
import MaterialCard from '../components/MaterialCard';
import { motion, AnimatePresence } from 'framer-motion';

const Materi: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'latest'>('all');

  const displayedMaterials = useMemo(() => {
    const list = [...materials];
    if (filter === 'latest') {
      return list.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });
    }
    return list; // 'all' returns original order (or could be sorted by id)
  }, [filter]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-extrabold"
          >
            Materi <span className="text-primary-500">Kaderisasi</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 mt-2 max-w-xl"
          >
            Kumpulan materi yang telah dipelajari untuk meningkatkan kapasitas diri dan pemahaman organisasi.
          </motion.p>
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              filter === 'all' 
                ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Semua
          </button>
          <button 
            onClick={() => setFilter('latest')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              filter === 'latest' 
                ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Terbaru
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {displayedMaterials.map((material) => (
            <motion.div
              key={material.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <MaterialCard material={material} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Materi;
