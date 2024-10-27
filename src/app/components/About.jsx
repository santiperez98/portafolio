"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiRedux, SiTailwindcss, SiNextdotjs, SiPostgresql, SiNodedotjs, SiFigma } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="bg-[#1c1c1c] text-white py-20 px-10 font-mono">
      <div className="container mx-auto flex flex-col items-center">
        {/* Texto del Sobre mí */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center"
        >
          Sobre mí
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 max-w-2xl text-center"
        >
          Soy un desarrollador Full Stack con experiencia en crear aplicaciones modernas y responsivas. Me especializo en tecnologías como JavaScript, HTML, CSS, React, Redux, Tailwind, Next.js, Node.js, PostgreSQL y Sequelize.
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 max-w-2xl text-center"
        >
          Me motiva la programación porque lo vengo haciendo desde hace casi 2 años y me encanta saber que de un código sale a producción una web funcional con una interfaz para el usuario. Disfruto liderar estos proyectos.
        </motion.p>
                {/* Enlaces de contacto */}
        <div className="mt-8 flex justify-center gap-6">
          <motion.a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#181717" }} // Color de GitHub
            className="flex items-center transition-colors duration-300"
          >
            <FaGithub size={24} className="mr-2" /> GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0A66C2" }} // Color de LinkedIn
            className="flex items-center transition-colors duration-300"
          >
            <FaLinkedin size={24} className="mr-2" /> LinkedIn
          </motion.a>
        </div>

        {/* Habilidades con iconos */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {[
            { icon: <SiJavascript size={24} />, label: "JavaScript", color: "#F7DF1E" },
            { icon: <SiHtml5 size={24} />, label: "HTML", color: "#E34F26" },
            { icon: <SiCss3 size={24} />, label: "CSS", color: "#1572B6" },
            { icon: <SiReact size={24} />, label: "React", color: "#61DAFB" },
            { icon: <SiRedux size={24} />, label: "Redux", color: "#764ABC" },
            { icon: <SiTailwindcss size={24} />, label: "Tailwind CSS", color: "#06B6D4" },
            { icon: <SiNextdotjs size={24} />, label: "Next.js", color: "#000000" },
            { icon: <SiNodedotjs size={24} />, label: "Node.js", color: "#8CC84B" },
            { icon: <SiPostgresql size={24} />, label: "PostgreSQL", color: "#336791" },
            { icon: <SiFigma size={24} />, label: "Figma", color: "#F24E1E" },
          ].map(({ icon, label, color }) => (
            <motion.div
              key={label}
              whileHover={{ color: color }}
              className="flex items-center transition-colors duration-300 cursor-pointer"
            >
              {icon}
              <span className="ml-2">{label}</span>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default About;
