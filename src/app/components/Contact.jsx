"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log({ name, email, message });
  };

  return (
    <section id="contact" className="bg-[#1c1c1c] text-gray-800 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-4xl font-bold">Contacto</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full md:w-1/2 mx-auto"
            required
          />
          <input
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full md:w-1/2 mx-auto"
            required
          />
          <textarea
            placeholder="Tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded w-full md:w-1/2 mx-auto"
            required
          />
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded"
          >
            Enviar
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
