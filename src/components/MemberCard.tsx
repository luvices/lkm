import React, { useState } from 'react';
import type { Member } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { IdCard, ChevronDown } from 'lucide-react';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-96 overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <img
          src={member.photo}
          alt={member.name}
          draggable={false}
          className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex-grow flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl lg:text-2xl text-slate-100 tracking-tight uppercase font-black leading-tight">
              {member.name}
            </h2>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-500 transition-colors w-fit"
          >
            <span>{isExpanded ? 'Sembunyikan' : 'Selengkapnya'}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={14} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {member.nim && (
                  <div>
                    <span className="inline-flex items-center space-x-1.5 bg-white/5 text-slate-400 px-4 py-2 rounded-[3px] border border-white/10 uppercase text-[10px] font-bold tracking-widest">
                      <IdCard size={12} />
                      <span>{member.nim}</span>
                    </span>
                  </div>
                )}
                
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
