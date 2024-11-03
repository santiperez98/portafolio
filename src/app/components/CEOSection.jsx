"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import image1 from '../public/este.png';

const CEOSection = () => {
  return (
    <section className="bg-[#1c1c1c] text-[#10f7c4] py-20 px-10 font-mono flex flex-col items-center">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Imagen con animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, opacity: 0.9 }} // Efecto de escalado al pasar el mouse
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 0.3 } }} // Añade un efecto de destello
            className="absolute inset-0 bg-[#10f7c4] opacity-30 rounded-lg"
          />
          <Image
            src={image1}
            alt="CEO of Desweby"
            className="w-48 h-48 mx-auto mb-6 object-cover relative" // Añadido "relative" para el overlay
            width={192} 
            height={192} 
          />
        </motion.div>

        {/* Título animado */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-center"
        >
          Desarrollador y Fundador de Desweby
        </motion.h2>

        {/* Descripción humilde */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg mt-4 text-center"
        >
          Soy desarrollador especializado en la creación de soluciones web funcionales y de calidad. Con Desweby, me dedico a brindar servicios en desarrollo web, marketing digital, community management, SEO y diseño UX/UI.
        </motion.p>
      </div>
    </section>
  );
};

export default CEOSection;
