import React from 'react';
import type { Member } from '../types';
import { motion } from 'framer-motion';
import { IdCard } from 'lucide-react';

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
      className="glass-card glass-card-hover rounded-[2.5rem] overflow-hidden group border border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="relative h-96 overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-10">
        <div className="mb-4">
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{member.name}</h3>

          {member.nim && (
            <div className="mt-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-black bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full border border-blue-100 dark:border-blue-800 uppercase tracking-tight">
                <IdCard size={14} />
                <span>{member.nim}</span>
              </span>
            </div>
          )}

          <p className="text-blue-700 dark:text-blue-400 font-bold text-base tracking-wide uppercase mt-4">
            {member.role}
          </p>

          <div className="flex items-center space-x-3 mt-4">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-blue-700 hover:text-white transition-all flex items-center justify-center"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
