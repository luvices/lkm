import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import BinaryBackground from './BinaryBackground';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="bg-mesh" />
      <BinaryBackground />
      <Navbar />
      <main className="flex-grow pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
