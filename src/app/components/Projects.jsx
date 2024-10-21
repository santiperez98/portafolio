"use client";

import { motion } from "framer-motion";

const projectsData = [
  { title: "Proyecto 1", description: "Descripción breve del proyecto 1." },
  { title: "Proyecto 2", description: "Descripción breve del proyecto 2." },
  { title: "Proyecto 3", description: "Descripción breve del proyecto 3." },
  { title: "Proyecto 4", description: "Descripción breve del proyecto 4." },
  { title: "Proyecto 5", description: "Descripción breve del proyecto 5." },
  { title: "Proyecto 6", description: "Descripción breve del proyecto 6." },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#1c1c1c] text-gray-800 py-20 font-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-4xl font-bold">Proyectos</h2>
        <div className="grid grid-cols-1 gap-6 mt-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Aumenta el delay para un efecto en cascada
              }}
              className={`bg-white shadow-lg p-5 rounded-lg transition-transform transform ${
                index % 2 === 0 ? "scale-100" : "scale-100"
              }`}
            >
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
