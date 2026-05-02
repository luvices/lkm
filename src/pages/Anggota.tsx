import React from 'react';
import { members } from '../data/data';
import MemberCard from '../components/MemberCard';
import { motion } from 'framer-motion';

const Anggota: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
        >
          <span className="text-primary">Struktur Kelompok</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Anggota;
