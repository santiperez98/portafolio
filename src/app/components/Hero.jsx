"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../public/yo.png";
import techLogo1 from "../public/js.png";
import techLogo2 from "../public/css.png";
import techLogo3 from "../public/figma.png";
import techLogo4 from "../public/next.png";
import techLogo5 from "../public/node.png";
import techLogo6 from "../public/react.png";
import techLogo7 from "../public/vite.png";
import techLogo8 from "../public/html.png";
import techLogo9 from "../public/redux1.png";
import techLogo10 from "../public/tail.png";
import techLogo11 from "../public/postgre.png";
import { useEffect, useState } from "react"; 
const logos = [techLogo1, techLogo2, techLogo3, techLogo4, techLogo5, techLogo6, techLogo7, techLogo8, techLogo9, techLogo10, techLogo11];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [logosData, setLogosData] = useState([]);

  const messages = [
    "Bienvenido a mi portafolio. Aquí puedes encontrar mis proyectos y habilidades.",
    "Welcome to my portfolio. Here you can find my projects and skills.",
    "Soy un desarrollador Full Stack.",
    "I am a Full Stack Developer.",
  ];

  useEffect(() => {
    if (isTyping) {
      const typingEffect = setTimeout(() => {
        if (typedText.length < messages[currentIndex].length) {
          setTypedText((prev) => prev + messages[currentIndex][typedText.length]);
        } else {
          setIsTyping(false);
        }
      }, 15);

      return () => clearTimeout(typingEffect);
    } else {
      const pauseBeforeNextMessage = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setTypedText("");
        setIsTyping(true);
      }, 2000);

      return () => clearTimeout(pauseBeforeNextMessage);
    }
  }, [typedText, isTyping, currentIndex, messages]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const generateLogosData = (count) => {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          dx: (Math.random() * 2 - 1) * 1,
          dy: (Math.random() * 2 - 1) * 1,
        });
      }
      return data;
    };

    setLogosData(generateLogosData(logos.length));

    const moveLogos = () => {
      setLogosData((prevLogosData) =>
        prevLogosData.map((logo) => {
          let newX = logo.x + logo.dx;
          let newY = logo.y + logo.dy;

          if (newX <= 0 || newX >= window.innerWidth - 100) {
            logo.dx = -logo.dx;
          }
          if (newY <= 0 || newY >= window.innerHeight - 100) {
            logo.dy = -logo.dy;
          }

          return {
            ...logo,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(moveLogos, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#1c1c1c] text-white h-screen flex items-center justify-center px-10 font-mono overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {logosData.map((logo, i) => (
          <motion.div
            key={i}
            animate={{ x: logo.x, y: logo.y }}
            transition={{ duration: 0.02, ease: "linear" }}
            className="absolute"
          >
            <Image
              src={logos[i]}
              alt={`Logo ${i}`}
              className="opacity-40 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          </motion.div>
        ))}
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src={heroImage}
            alt="Imagen de Santi"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-contain max-w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl font-bold">👋 ¡Hola! Soy Santiago Perez</h1>
          <p className="mt-4 text-xl">{typedText}</p>

          <div className="mt-6 space-x-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-teal-400 text-black rounded-lg text-lg font-semibold shadow-md hover:bg-teal-500 transition-colors"
            >
              Ver Mis Proyectos
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px -6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="mailto:tu-email@example.com"
              className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-gray-700 transition-colors"
            >
              Contactar
            </motion.a>

            <motion.a
              href="/ruta/a/tu/cv.pdf"
              download
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 transition-colors"
            >
              Descargar CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;