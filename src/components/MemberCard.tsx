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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="glass-card rounded-3xl overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4">
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-primary-500 transition-colors">
            <Globe size={20} />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-primary-500 transition-colors">
            <Mail size={20} />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-primary-500 transition-colors">
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{member.name}</h3>
          {member.nim && (
            <span className="flex items-center space-x-1 text-xs font-mono bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 px-2 py-1 rounded">
              <IdCard size={12} />
              <span>{member.nim}</span>
            </span>
          )}
        </div>
        <p className="text-sm font-semibold text-primary-500 mb-3">{member.role}</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
};

export default MemberCard;
