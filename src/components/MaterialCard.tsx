import React from 'react';
import type { Material } from '../types';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

interface MaterialCardProps {
  material: Material;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-[3px] flex flex-col md:flex-row md:items-center justify-between gap-4 group"
    >
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-[3px] bg-white/5 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
            <Calendar size={18} />
          </div>
          <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
            {material.date ? new Date(material.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Tanggal tidak tersedia'}
          </span>
        </div>
        <h2 className="text-slate-100 uppercase font-black tracking-tight group-hover:text-blue-500 transition-colors">
          {material.title}
        </h2>
        <p className="text-slate-400 mt-2 text-[11px] font-medium leading-relaxed">
          {material.description}
        </p>
      </div>
      
      <button 
        onClick={() => navigate(`/materi/${material.id}`)}
        className="flex items-center space-x-2 text-blue-500 font-black uppercase text-[10px] tracking-widest group/btn border border-blue-500/20 px-4 py-2 rounded-[3px] hover:bg-blue-600 hover:text-white transition-all"
      >
        <span>Lihat Detail</span>
        <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export default MaterialCard;
