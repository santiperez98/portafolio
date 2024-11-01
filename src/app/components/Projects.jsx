"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"; // Ejemplo de iconos de tecnología
import Image from 'next/image';
import image1 from '../public/este.png';
import image2 from '../public/este.png';

const projectsData = [
  {
    id: 1, // Agregar un identificador único
    title: "Proyecto 1",
    description: "Descripción breve del proyecto 1.",
    image: image2,
    technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
  },
  {
    id: 2, // Agregar un identificador único
    title: "Proyecto 2",
    description: "Descripción breve del proyecto 2.",
    image: image1,
    technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
  },
  // Agrega más proyectos aquí
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#1c1c1c] text-gray-200 py-20 font-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Proyectos</h2>
        <div className="flex flex-col gap-12">
          {projectsData.map((project) => (
            <motion.div
              key={project.id} // Asegúrate de que cada proyecto tenga un 'id' único
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: project.id * 0.3, // Cambiar para usar project.id
              }}
              viewport={{ once: true }}
              className="flex bg-white/10 backdrop-blur-lg shadow-lg p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-cyan-400/50 w-full md:w-3/4 lg:w-2/3 mx-auto"
            >
              <div className="relative w-1/3 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Imagen de ${project.title}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-6 flex flex-col justify-center text-left w-2/3">
                <h3 className="text-2xl font-semibold text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 my-4">{project.description}</p>
                <div className="flex gap-4 text-2xl text-cyan-400">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="hover:text-cyan-600 transition duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};


export default Projects;
