import React from 'react';
import type { Material } from '../types';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

interface MaterialCardProps {
  material: Material;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 group"
    >
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
            <Calendar size={20} />
          </div>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {material.date ? new Date(material.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Tanggal tidak tersedia'}
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary-500 transition-colors">
          {material.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          {material.description}
        </p>
      </div>
      
      <button className="flex items-center space-x-2 text-primary-500 font-semibold group/btn">
        <span>Lihat Detail</span>
        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export default MaterialCard;
