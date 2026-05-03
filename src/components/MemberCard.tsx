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
      <div className="relative h-96 overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-10">
        <div className="mb-6">
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{member.name}</h3>
          
          {member.nim && (
            <div className="mt-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-black bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 px-4 py-2 rounded-full border border-indigo-100 dark:border-indigo-800 uppercase tracking-tight">
                <IdCard size={14} />
                <span>{member.nim}</span>
              </span>
            </div>
          )}
          
          <p className="text-indigo-600 dark:text-indigo-400 font-bold text-base tracking-wide uppercase mt-4">
            {member.role}
          </p>

          <div className="flex items-center space-x-3 mt-4">
            <button className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white transition-all flex items-center justify-center">
              <Globe size={18} />
            </button>
            <button className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white transition-all flex items-center justify-center">
              <Mail size={18} />
            </button>
            <button className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white transition-all flex items-center justify-center">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium line-clamp-3">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
};

export default MemberCard;
