import React from 'react';
import { UserCheck, Mail, Phone, MapPin, Globe, Share2, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-500 p-2 rounded-lg">
                <UserCheck className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-slate-800 dark:text-slate-100">LKM Profile</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Platform profil kelompok kaderisasi untuk mencetak pemimpin masa depan yang kompeten dan berintegritas.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-800 dark:text-slate-100">Quick Links</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><a href="/" className="hover:text-primary-500 transition-colors">Home</a></li>
              <li><a href="/anggota" className="hover:text-primary-500 transition-colors">Anggota</a></li>
              <li><a href="/materi" className="hover:text-primary-500 transition-colors">Materi</a></li>
              <li><a href="/pembimbing" className="hover:text-primary-500 transition-colors">Pembimbing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-800 dark:text-slate-100">Kontak Kami</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500" />
                <span>info@lkmprofile.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-500" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary-500" />
                <span>Jl. Kampus No. 1, Jakarta</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-800 dark:text-slate-100">Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition-all">
                <Globe size={20} />
              </a>
              <a href="#" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition-all">
                <Share2 size={20} />
              </a>
              <a href="#" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 dark:text-slate-500 text-sm">
          <p>© 2024 LKM Profile Kelompok Kaderisasi. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
