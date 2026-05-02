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
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Profil Mentor<span className="text-primary-500"></span>
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
            className="glass-card rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Quote size={24} />
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-1">{mentor.name}</h3>
              <p className="text-primary-500 font-semibold mb-4">{mentor.role}</p>
              <p className="text-slate-600 dark:text-slate-400 italic mb-8 leading-relaxed">
                "{mentor.description}"
              </p>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-primary-500 hover:text-white transition-all font-medium text-sm">
                  <Globe size={16} />
                  <span>Linkedin </span>
                </button>
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
        className="mt-20 bg-gradient-to-br from-primary-600 to-primary-400 rounded-[40px] p-12 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-6">Kata kata masseh</h2>
        <p className="text-primary-50 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod."
        </p>
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-12 h-2 bg-white/40 rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pembimbing;
