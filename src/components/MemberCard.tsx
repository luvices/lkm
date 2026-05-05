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
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-96 overflow-hidden flex-shrink-0">
        <img
          src={member.photo}
          alt={member.name}
          draggable={false}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="h-20 flex items-start"> {/* Increased height for name area */}
            <h2 className="text-slate-100 tracking-tight uppercase font-black leading-tight">
              {member.name}
            </h2>
          </div>

          {member.nim && (
            <div className="mt-6"> {/* Increased margin top */}
              <span className="inline-flex items-center space-x-1.5 bg-white/5 text-slate-400 px-4 py-2 rounded-[3px] border border-white/10 uppercase text-[10px] font-bold tracking-widest">
                <IdCard size={12} />
                <span>{member.nim}</span>
              </span>
            </div>
          )}
        </div>

        <div className="mt-auto">
          <p className="text-blue-500 font-black tracking-[0.2em] uppercase text-[11px] mt-6">
            {member.role}
          </p>

          <div className="flex items-center space-x-3 mt-6">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-[3px] text-slate-400 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center border border-white/5"
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
