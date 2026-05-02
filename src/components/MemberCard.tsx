import React from 'react';
import type { Member } from '../types';
import { motion } from 'framer-motion';
import { Mail, Globe, ExternalLink, IdCard } from 'lucide-react';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      viewport={{ once: true }}
      className="glass-card glass-card-hover rounded-[2.5rem] overflow-hidden group border border-white/20 dark:border-slate-800/20"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8 space-x-4">
          <button className="w-11 h-11 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-indigo-500 hover:scale-110 transition-all flex items-center justify-center border border-white/20">
            <Globe size={18} />
          </button>
          <button className="w-11 h-11 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-indigo-500 hover:scale-110 transition-all flex items-center justify-center border border-white/20">
            <Mail size={18} />
          </button>
          <button className="w-11 h-11 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-indigo-500 hover:scale-110 transition-all flex items-center justify-center border border-white/20">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{member.name}</h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-bold text-sm tracking-wide uppercase mt-1">{member.role}</p>
          </div>
          {member.nim && (
            <span className="flex items-center space-x-1.5 text-[10px] font-black bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 px-3 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800 uppercase tracking-tighter">
              <IdCard size={12} />
              <span>{member.nim}</span>
            </span>
          )}
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium line-clamp-3">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
};

export default MemberCard;
