"use client";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#1c1c1c] text-gray-800 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-4xl font-bold">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Ejemplo de proyecto */}
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <h3 className="font-bold text-xl">Proyecto 1</h3>
            <p className="mt-2">Descripción breve del proyecto.</p>
          </div>
          {/* Puedes añadir más proyectos aquí */}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
