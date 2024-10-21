"use client"; 

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../public/yo.png"; // Asegúrate de reemplazar con la ruta de tu imagen
import techLogo1 from "../public/js.png"; // Ruta del logo de la tecnología 1
import techLogo2 from "../public/react.png"; // Ruta del logo de la tecnología 2
import techLogo3 from "../public/redux.png"; // Ruta del logo de la tecnología 3
import techLogo4 from "../public/css.png"; // Ruta del logo de la tecnología 4
import techLogo5 from "../public/node.png"; // Ruta del logo de la tecnología 5
import techLogo6 from "../public/tail.png"; // Ruta del logo de la tecnología 6
import techLogo7 from "../public/next.png"; // Ruta del logo de la tecnología 7
import techLogo8 from "../public/post.png"; // Ruta del logo de la tecnología 8
import techLogo9 from "../public/figma.png"; // Ruta del logo de la tecnología 9
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    "Bienvenido a mi portafolio. Aquí puedes encontrar mis proyectos y habilidades.", // Español
    "Welcome to my portfolio. Here you can find my projects and skills.", // Inglés
    "Soy un desarrollador Full Stack.", // Español
    "I am a Full Stack Developer.", // Inglés
  ];

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (typedText.length < messages[currentIndex].length) {
        setTypedText((prev) => prev + messages[currentIndex][typedText.length]);
      } else {
        // Mueve al siguiente mensaje y reinicia el texto
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setTypedText(""); // Reset para el siguiente mensaje
      }
    }, 100); // Ajusta la velocidad de escritura aquí

    return () => clearInterval(typingEffect); // Limpia el intervalo al desmontar el componente
  }, [currentIndex, typedText, messages]);

  return (
    <section className="relative bg-[#1c1c1c] text-white h-screen flex items-center justify-center px-10 font-mono overflow-hidden">
      {/* Logos de las tecnologías como fondo */}
      <div className="absolute inset-0 flex justify-center items-center">
        {[techLogo1, techLogo2, techLogo3, techLogo4, techLogo5, techLogo6, techLogo7, techLogo8, techLogo9].map((logo, index) => (
          <ReboundingImage key={index} src={logo} alt={`Logo tecnología ${index + 1}`} />
        ))}
      </div>

      {/* Contenedor principal dividiendo en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
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
          <h1 className="text-5xl font-bold">👋 ¡Hola! Soy Santiago Perez</h1>
          <p className="mt-4 text-xl">
            {typedText} {/* Aquí se muestra el texto con el efecto de máquina de escribir */}
          </p>

          {/* Botones de acción */}
          <div className="mt-6 space-x-4">
            <motion.a
              href="#projects" // Puedes enlazar a la sección de proyectos
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-teal-400 text-black rounded-lg text-lg font-semibold shadow-md hover:bg-teal-500 transition-colors"
            >
              Ver Mis Proyectos
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tu-perfil" // Reemplaza con tu perfil de LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="mailto:tu-email@example.com" // Reemplaza con tu correo electrónico
              className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-gray-700 transition-colors"
            >
              Contactar
            </motion.a>

            <motion.a
              href="/ruta/a/tu/cv.pdf" // Reemplaza con la ruta a tu CV
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

const ReboundingImage = ({ src, alt }) => {
  const [position, setPosition] = useState({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight });
  const [direction, setDirection] = useState({ x: (Math.random() > 0.5 ? 1 : -1) * 2, y: (Math.random() > 0.5 ? 1 : -1) * 2 }); // Direcciones aleatorias

  useEffect(() => {
    const handleMovement = () => {
      setPosition((prev) => {
        let newX = prev.x + direction.x;
        let newY = prev.y + direction.y;

        // Colisión con los límites de la ventana
        if (newX <= 0 || newX >= window.innerWidth - 100) { // Ajusta el valor 100 al ancho de tus imágenes
          newX = Math.max(0, Math.min(newX, window.innerWidth - 100)); // Mantiene la posición en límites
          direction.x = -direction.x; // Cambia la dirección en X
        }
        if (newY <= 0 || newY >= window.innerHeight - 100) { // Ajusta el valor 100 a la altura de tus imágenes
          newY = Math.max(0, Math.min(newY, window.innerHeight - 100)); // Mantiene la posición en límites
          direction.y = -direction.y; // Cambia la dirección en Y
        }

        return { x: newX, y: newY }; // Retorna la nueva posición
      });
    };

    const interval = setInterval(handleMovement, 16); // Actualiza la posición cada 16 ms

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <motion.div
      className="absolute"
      style={{ left: `${position.x}px`, top: `${position.y}px` }} // Posición de la imagen
      transition={{ duration: 0, ease: "linear" }} // Sin transición para el movimiento instantáneo
    >
      <Image src={src} alt={alt} width={100} height={100} />
    </motion.div>
  );
};

export default Hero;
