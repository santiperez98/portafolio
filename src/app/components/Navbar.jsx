'use client'; // Asegúrate de que este componente se ejecute en el cliente

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image'; // Importar componente de imagen
import image1 from '../public/logosanti.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 h-full bg-[#1c1c1c] text-white p-5 z-50 font-mono shadow-lg"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-between h-full">
        {/* Logo */}
        <Link href="/" className="mb-10">
          <Image
            src={image1} // Ruta de tu logo
            alt="Logo"
            width={50}  // Ajusta el tamaño según tu preferencia
            height={50}
            className="hover:opacity-80 transition-opacity duration-300" // Efecto hover en el logo
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col space-y-6 text-lg items-center">
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

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 flex flex-col space-y-6 items-center"
          >
            <Link
              href="#about"
              className="block py-2 px-4 hover:bg-teal-400 hover:text-black transition-all duration-300"
              onClick={toggleMenu}
            >
              <FaUser size={24} />
            </Link>
            <Link
              href="#projects"
              className="block py-2 px-4 hover:bg-teal-400 hover:text-black transition-all duration-300"
              onClick={toggleMenu}
            >
              <FaProjectDiagram size={24} />
            </Link>
            <Link
              href="#contact"
              className="block py-2 px-4 hover:bg-teal-400 hover:text-black transition-all duration-300"
              onClick={toggleMenu}
            >
              <FaEnvelope size={24} />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
