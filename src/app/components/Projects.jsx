"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaStripe } from "react-icons/fa";
import { SiSupabase, SiTailwindcss, SiExpress, SiPostgresql, SiSocketdotio, SiVite, SiSequelize } from "react-icons/si";
import Image from 'next/image';
import image1 from '../public/nyg.png';
import image2 from '../public/frio.png';
import image3 from '../public/cera.png';
import image4 from '../public/ladia.png';
import image5 from '../public/dogs.png';
import image6 from '../public/food.png';

const Projects = () => {
  const projectsData = [
    {
      id: 1, 
      title: "NyG Accesorios",
      duration: "Sep. 2023 – Oct. 2023 | Freelance",
      description: "E-commerce para la venta de accesorios de automóviles. Diseño de interfaz con HTML y CSS. Implementación de lógica de interacción con JavaScript. Administración de productos y gestión del inventario.",
      technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaBootstrap />],
      image: image1,
      link: "https://nyg--accesorios.web.app/"
    },
    {
      id: 2,
      title: "Frio Mundo",
      duration: "Dic. 2023 – Ene. 2024 | Freelance",
      description: "Plataforma de e-commerce para productos de refrigeración. Desarrollo del frontend utilizando React y Tailwind CSS. Integración de Supabase para la gestión de datos en tiempo real.",
      technologies: [<FaReact />, <SiTailwindcss />, <FaJsSquare />, <SiSupabase />],
      image: image2,
      link: "https://pruebaa-226bf.web.app/"
    },
    {
      id: 3,
      title: "Cerámicas San Rafael",
      duration: "Abr. 2024 – May. 2024 | Freelance",
      description: "E-commerce para productos cerámicos. Diseño y desarrollo de interfaces con React y Tailwind CSS. Integración de bases de datos en tiempo real mediante Supabase.",
      technologies: [<FaReact />, <SiTailwindcss />, <FaJsSquare />, <SiSupabase />],
      image: image3,
      link: "https://www.ceramicassanrafael.com/"
    },
    {
      id: 4,
      title: "La Diamantina",
      duration: "Sep. 2024 – Oct. 2024 | Freelance",
      description: "E-commerce para productos de piedras de afilar. Creación de una página web con React, Vite y Tailwind CSS. Backend en Node.js y base de datos PostgreSQL.",
      technologies: [<FaReact />, <SiVite />, <SiTailwindcss />, <FaJsSquare />, <FaNodeJs />, <SiPostgresql />],
      image: image4,
      link: "https://ladiamantina.com.ar/"
    },
    {
      id: 5,
      title: "Dogs",
      duration: "Ago. 2023 – Sept. 2023 | Henry Bootcamp",
      description: "Aplicación web sobre razas de perros. Interfaz con React y module.css. Backend con Node.js, Express y PostgreSQL.",
      technologies: [<FaReact />, <FaJsSquare />, <SiExpress />, <FaNodeJs />, <SiPostgresql />, <SiSequelize />],
      image: image5,
      link: "https://dogs-i2ap3lu0c-santiagois-projects.vercel.app/"
    },
    {
      id: 6,
      title: "Food Global",
      duration: "Oct. 2023 – Nov. 2023 | Henry Bootcamp",
      description: "Plataforma de e-commerce global para compras de alimentos. Frontend en React y Tailwind CSS. Notificaciones en tiempo real con Socket.io y pasarela de pago con Stripe.",
      technologies: [<FaReact />, <FaJsSquare />, <SiTailwindcss />, <SiExpress />, <FaNodeJs />, <SiPostgresql />, <SiSocketdotio />, <FaStripe />],
      image: image6,
      link: "https://front-food-global-pf.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="bg-[#1c1c1c] text-gray-200 py-20 font-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-[#10f7c4] mb-12">Proyectos</h2>
        <div className="flex flex-col gap-12">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: project.id * 0.3,
              }}
              viewport={{ once: true }}
              className="flex bg-white/10 backdrop-blur-lg shadow-lg p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-[#10f7c4] w-full md:w-3/4 lg:w-2/3 mx-auto"
            >
<div className="relative w-1/3 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
  <Image
    src={project.image}
    alt={`Imagen de ${project.title}`}
    className="object-cover w-full h-auto"
    layout="responsive" 
    width={1280}
    height={720}
  />
</div>
              <div className="ml-6 flex flex-col justify-center text-left w-2/3">
                <h3 className="text-2xl font-semibold text-[#10f7c4]">{project.title}</h3>
                <p className="text-gray-300 text-sm italic">{project.duration}</p>
                <p className="text-gray-300 my-4">{project.description}</p>
                <div className="flex gap-4 text-2xl text-[#10f7c4]">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={`${project.id}-${techIndex}`} className="hover:text-[#10f7c4] transition duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
  href={project.link} 
  className="text-sm text-[#10f7c4] mt-4 hover:underline"
  target="_blank" 
  rel="noopener noreferrer"
>
  Ver sitio web
</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
