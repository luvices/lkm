import React from 'react';
import { mentors } from '../data/data';
import { motion } from 'framer-motion';
import { Quote, Globe } from 'lucide-react';

const Pembimbing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-impact-lg text-slate-100"
        >
          Profil <span className="text-blue-500">Mentor</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {mentors.map((mentor, index) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 rounded-[3px] overflow-hidden">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-600 rounded-[3px] flex items-center justify-center text-white">
                <Quote size={24} />
              </div>
            </div>

            <div className="flex-grow">
              <h2 className="mb-1 text-slate-100 uppercase font-black tracking-tight">{mentor.name}</h2>
              <p className="text-blue-500 font-black uppercase tracking-[0.2em] text-[11px] mb-4">{mentor.role}</p>
              <p className="text-slate-400 italic mb-8 leading-relaxed font-medium">
                "{mentor.description}"
              </p>

              <div className="flex space-x-4">
                {mentor.linkedin && (
                  <a
                    href={mentor.linkedin}
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
          </motion.div>
        ))}
      </div>

      {/* Mentor Philosophy Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 glass-card p-12 text-center"
      >
        <h2 className="mb-6 text-impact-lg text-slate-100">Kata kata <span className="text-blue-500">masseh</span></h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed mb-10 font-medium">
          "Pilihlah pemimpin yang tidak hanya pandai bicara, tapi juga pandai mendengar. Karena kepemimpinan sejati dimulai dari empati."
        </p>
        <div className="flex justify-center space-x-3">
          <div className="w-2 h-2 bg-blue-600 rounded-[1px]"></div>
          <div className="w-12 h-2 bg-white/20 rounded-[1px]"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-[1px]"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pembimbing;
