"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import image1 from '../public/este.png';


const CEOSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-[#1c1c1c] text-white font-mono">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={image1}
            alt="CEO of Desweby"
            className="w-48 h-48   mx-auto mb-6"
            width={192} // Ancho de la imagen
            height={192} // Alto de la imagen
          />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl font-semibold"
        >
          Santi - CEO de Desweby
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg mt-4"
        >
          Desweby es una empresa dedicada al desarrollo de páginas web, tiendas online, marketing digital, community management, SEO y diseño UX/UI.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6"
        >

        </motion.div>
      </motion.div>
    </section>
  );
};

export default CEOSection;
