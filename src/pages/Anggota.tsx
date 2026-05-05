import React from 'react';
import { members } from '../data/data';
import MemberCard from '../components/MemberCard';
import { motion } from 'framer-motion';

const Anggota: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <div className="text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-impact-lg text-slate-100"
        >
          <span className="text-blue-500">Struktur</span> Kelompok
        </motion.h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {members.map((member) => (
          <div key={member.id} className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(25%-30px)]">
            <MemberCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anggota;
