import React from 'react';
import { materials } from '../data/dummy';
import MaterialCard from '../components/MaterialCard';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Materi: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-4"
          >
            <BookOpen size={24} />
          </motion.div>
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
          <button className="px-6 py-2 bg-white dark:bg-slate-700 shadow-sm rounded-lg font-semibold">Semua</button>
          <button className="px-6 py-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Terbaru</button>
        </div>
      </div>

      <div className="space-y-6">
        {materials.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </div>
  );
};

export default Materi;
