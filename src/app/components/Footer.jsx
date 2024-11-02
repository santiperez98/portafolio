"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import image1 from '../public/yo.png'
const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-[#10f7c4] text-center py-8 relative overflow-hidden">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500 opacity-30 rounded-lg blur-xl scale-150"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      />

      <div className="relative z-10">
        <Image
          src={image1} // Cambia esta ruta por la tuya
          alt="Santiago Perez"
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
        />
        <p className="text-lg font-semibold mb-2">Santiago Pérez</p>
        <p className="text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>

        {/* Redes Sociales */}
        <div className="flex justify-center mt-4 gap-6">
          <motion.a
            href="https://github.com/santiperez98"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#F7DF1E" }}
            className="flex items-center transition-colors duration-300"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/santiago-perez-0248b622a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            className="flex items-center transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </motion.a>
        </div>

        {/* Elementos adicionales */}
        <div className="mt-8">
          <motion.div
            className="bg-[#262626] p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-lg font-semibold">Contáctame</h4>
            <p className="text-sm">santip19982022@gmail.com</p>
          </motion.div>

          <motion.div
            className="bg-[#262626] p-4 rounded-lg shadow-md mt-4"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-lg font-semibold">Últimos Proyectos</h4>
            <p className="text-sm">Visita mi portafolio en GitHub</p>
          </motion.div>

          <motion.div
            className="bg-[#262626] p-4 rounded-lg shadow-md mt-4"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-lg font-semibold">¡Hablemos!</h4>
            <p className="text-sm">Estoy abierto a oportunidades y colaboraciones.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
