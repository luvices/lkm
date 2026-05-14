import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Zap, Shield } from 'lucide-react';

const Swot: React.FC = () => {
  const swotData = [
    {
      title: 'Strengths',
      icon: <Zap className="text-yellow-500" size={32} />,
      color: 'border-yellow-500/20',
      bgColor: 'bg-yellow-500/5',
      items: [
        'Solidaritas kelompok yang sangat kuat',
        'Kemampuan teknis yang merata antar anggota',
        'Komunikasi yang terbuka dan efektif',
        'Visi dan tujuan yang selaras'
      ]
    },
    {
      title: 'Weaknesses',
      icon: <Shield className="text-blue-500" size={32} />,
      color: 'border-blue-500/20',
      bgColor: 'bg-blue-500/5',
      items: [
        'Manajemen waktu yang perlu ditingkatkan',
        'Keterbatasan pengalaman dalam proyek skala besar',
        'Ketergantungan pada beberapa individu kunci',
        'Kurangnya cadangan sumber daya teknis'
      ]
    },
    {
      title: 'Opportunities',
      icon: <TrendingUp className="text-green-500" size={32} />,
      color: 'border-green-500/20',
      bgColor: 'bg-green-500/5',
      items: [
        'Adopsi teknologi terbaru yang sedang tren',
        'Jejaring luas di lingkungan Informatika',
        'Dukungan penuh dari organisasi kemahasiswaan',
        'Potensi kolaborasi antar kelompok'
      ]
    },
    {
      title: 'Threats',
      icon: <AlertTriangle className="text-red-500" size={32} />,
      color: 'border-red-500/20',
      bgColor: 'bg-red-500/5',
      items: [
        'Persaingan yang ketat antar kelompok',
        'Perubahan regulasi atau kebijakan akademik',
        'Tekanan deadline yang sangat padat',
        'Masalah teknis yang tidak terduga'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-impact-lg text-slate-100"
        >
          SWOT <span className="text-blue-500">Analysis</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 mt-4 max-w-2xl mx-auto font-bold uppercase text-[11px] tracking-[0.2em]"
        >
          Evaluasi strategis Kelompok 19 LKM Informatika 2026.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {swotData.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 rounded-3xl border ${section.color} ${section.bgColor} backdrop-blur-sm relative overflow-hidden group`}
          >
            {/* Background Icon Watermark */}
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 group-hover:scale-125 transform">
              {React.cloneElement(section.icon as React.ReactElement, { size: 200 })}
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {section.icon}
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-100">
                {section.title}
              </h2>
            </div>

            <ul className="space-y-4 relative z-10">
              {section.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  className="flex items-start space-x-3 text-slate-300 group/item"
                >
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${section.title === 'Strengths' ? 'bg-yellow-500' : section.title === 'Weaknesses' ? 'bg-blue-500' : section.title === 'Opportunities' ? 'bg-green-500' : 'bg-red-500'} group-hover/item:scale-150 transition-transform`} />
                  <span className="font-bold uppercase text-[12px] tracking-wide leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Swot;
