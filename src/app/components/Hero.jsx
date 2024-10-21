"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../public/yo.png"; // Asegúrate de reemplazar con la ruta de tu imagen

const Hero = () => {
  return (
    <section className="bg-[#1c1c1c] text-white h-screen flex items-center justify-center px-10 font-mono">
      {/* Contenedor principal dividiendo en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen a la izquierda */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src={heroImage}
            alt="Imagen de Santi"
            width={400} // Ajusta el tamaño de la imagen
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Texto a la derecha */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl font-bold">Hola, soy Santi</h1>
          <p className="mt-4 text-xl">
            Bienvenido a mi portafolio. Aquí puedes encontrar mis proyectos y
            habilidades. Soy el CEO y fundador de <span className="text-teal-400">DesWeby</span>.
          </p>

          {/* Botón de llamada a la acción */}
          <motion.a
            href="#projects" // Puedes enlazar a la sección de proyectos
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-8 py-4 bg-teal-400 text-black rounded-lg text-lg font-semibold shadow-md hover:bg-teal-500 transition-colors"
          >
            Ver Mis Proyectos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
