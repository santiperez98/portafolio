'use client'; // Asegúrate de que este componente se ejecute en el cliente

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import image1 from '../public/logosanti.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1c1c1c] text-white px-5 py-3 z-50 shadow-lg font-mono">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={image1}
            alt="Logo"
            width={40}
            height={40}
            className="hover:opacity-80 transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link href="#about" className="hover:text-teal-400 transition-colors duration-300">
            <FaUser size={24} />
          </Link>
          <Link href="#projects" className="hover:text-teal-400 transition-colors duration-300">
            <FaProjectDiagram size={24} />
          </Link>
          <Link href="#contact" className="hover:text-teal-400 transition-colors duration-300">
            <FaEnvelope size={24} />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none hover:text-teal-400 transition-colors duration-300"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="flex flex-col space-y-4 mt-3 items-center md:hidden"
        >
          <Link
            href="#about"
            className="py-2 px-4 hover:bg-teal-400 hover:text-black transition-all duration-300 w-full text-center"
            onClick={toggleMenu}
          >
            About <FaUser className="inline-block ml-1" />
          </Link>
          <Link
            href="#projects"
            className="py-2 px-4 hover:bg-teal-400 hover:text-black transition-all duration-300 w-full text-center"
            onClick={toggleMenu}
          >
            Projects <FaProjectDiagram className="inline-block ml-1" />
          </Link>
          <Link
            href="#contact"
            className="py-2 px-4 hover:bg-teal-400 hover:text-black transition-all duration-300 w-full text-center"
            onClick={toggleMenu}
          >
            Contact <FaEnvelope className="inline-block ml-1" />
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
