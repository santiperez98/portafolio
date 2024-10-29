"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiRedux, SiTailwindcss, SiNextdotjs, SiPostgresql, SiNodedotjs, SiFigma, SiVite } from "react-icons/si";

const About = () => {
  const skills = {
    "Lenguajes": [
      { icon: <SiJavascript size={30} />, label: "JavaScript", color: "#F7DF1E" },
      { icon: <SiHtml5 size={30} />, label: "HTML", color: "#E34F26" },
      { icon: <SiCss3 size={30} />, label: "CSS", color: "#1572B6" },
    ],
    "Librerías / Frameworks": [
      { icon: <SiReact size={30} />, label: "React", color: "#61DAFB" },
      { icon: <SiRedux size={30} />, label: "Redux", color: "#764ABC" },
      { icon: <SiTailwindcss size={30} />, label: "Tailwind CSS", color: "#06B6D4" },
      { icon: <SiNextdotjs size={30} />, label: "Next.js", color: "#000000" },
      { icon: <SiNodedotjs size={30} />, label: "Node.js", color: "#8CC84B" },
      { icon: <SiVite size={30} />, label: "Vite", color: "#646CFF" },
    ],
    "Bases de datos": [
      { icon: <SiPostgresql size={30} />, label: "PostgreSQL", color: "#336791" },
    ],
    "Herramientas de diseño": [
      { icon: <SiFigma size={30} />, label: "Figma", color: "#F24E1E" },
    ],
  };

  return (
    <section id="about" className="bg-[#1c1c1c] text-[#10f7c4] py-20 px-10 font-mono">
      <div className="container mx-auto flex flex-col items-center">

        {/* Título estilo comentario */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center"
        >
          Sobre mí
        </motion.h2>

        {/* Caja estilo código con efecto de luz de fondo */}
        <motion.div
          initial={{ borderRadius: "25%", boxShadow: "0 0 30px rgba(0, 150, 255, 0.7)" }}
          animate={{
            borderRadius: ["25%", "50%", "35%", "50%", "25%"],
            boxShadow: ["0 0 30px rgba(0, 150, 255, 0.7)", "0 0 50px rgba(0, 150, 255, 0.9)", "0 0 30px rgba(0, 150, 255, 0.7)"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mt-10 p-8 max-w-3xl bg-[#262626] relative overflow-hidden"
        >
          <motion.div
            whileTap={{ scale: 1.2 }}
            className="text-left relative text-[#10f7c4]"
          >
            <span className="text-gray-400">// Código de presentación</span> <br />
            <span className="text-blue-400">const</span> <span className="text-yellow-400">aboutMe</span> <span className="text-blue-400">=</span> <span className="text-blue-500">&#123;</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">description</span>: <span className="text-green-400">'Desarrollador Full Stack especializado en la creación de aplicaciones web modernas y funcionales.'</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">experience</span>: <span className="text-green-400">'2 años de experiencia en desarrollo web, desde la planificación hasta la producción.'</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">skills</span>: <span className="text-blue-500">[</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'JavaScript'</span>, <span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'Redux'</span>, <span className="text-green-400">'PostgreSQL'</span>, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'HTML'</span>, <span className="text-green-400">'CSS'</span>, <span className="text-green-400">'Tailwind CSS'</span>, <span className="text-green-400">'Next.js'</span>, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Figma'</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">]</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">motivation</span>: <span className="text-green-400">'Apasionado por el desarrollo de soluciones tecnológicas que mejoran la experiencia de usuario y optimizan procesos.'</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">openToOpportunities</span>: <span className="text-blue-400">true</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">&#125;</span><br />
            <span className="text-blue-500">&#125;</span>;
          </motion.div>

          {/* Fondo de luz detrás del "código" */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-30 rounded-full blur-2xl scale-150 z-0"></div>
        </motion.div>

        {/* Enlaces de contacto */}
        <div className="mt-12 flex justify-center gap-6">
          <motion.a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#181717" }}
            className="flex items-center transition-colors duration-300"
          >
            <FaGithub size={24} className="mr-2" /> GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0A66C2" }}
            className="flex items-center transition-colors duration-300"
          >
            <FaLinkedin size={24} className="mr-2" /> LinkedIn
          </motion.a>
        </div>

        {/* Habilidades agrupadas por categorías */}
        <div className="mt-12 w-full">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category} className="mb-8">
              <h3 className="text-2xl font-semibold text-center mb-4">{category}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {skillsList.map(({ icon, label, color }) => (
                  <motion.div
                    key={label}
                    whileTap={{ scale: 1.2 }}
                    whileHover={{ color }}
                    className="flex flex-col items-center transition-colors duration-300 cursor-pointer"
                  >
                    {icon}
                    <span className="mt-2">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
