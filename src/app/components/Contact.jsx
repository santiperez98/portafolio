"use client";

import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Por favor ingresa tu nombre")
        .max(50, "El nombre no puede exceder los 50 caracteres"),
      email: Yup.string()
        .email("Correo electrónico no válido")
        .required("Por favor ingresa tu correo electrónico"),
      message: Yup.string()
        .required("Por favor ingresa tu mensaje")
        .max(500, "El mensaje no puede exceder los 500 caracteres"),
    }),
    onSubmit: (values) => {
      console.log(values);
      
    },
  });

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] text-gray-200 py-20 font-mono flex justify-center items-center min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-10 shadow-lg w-full max-w-md mx-4"
      >
        <h2 className="text-5xl font-extrabold mb-8 text-center text-[#10f7c4] glow-text">
          Contacto
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            name="name" 
            placeholder="Tu nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-4 rounded-lg bg-transparent border-2 border-[#10f7c4] text-white focus:ring-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-105 ${
              formik.touched.name && formik.errors.name ? "border-red-500" : ""
            }`}
            required
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-400 text-sm">{formik.errors.name}</p>
          )}

          <motion.input
            type="email"
            name="email" 
            placeholder="Tu correo"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-4 rounded-lg bg-transparent border-2 border-[#10f7c4]text-white focus:ring-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-105 ${
              formik.touched.email && formik.errors.email ? "border-[#10f7c4]" : ""
            }`}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-400 text-sm">{formik.errors.email}</p>
          )}

          <motion.textarea
            name="message" 
            placeholder="Tu mensaje"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-4 rounded-lg bg-transparent border-2 border-[#10f7c4] text-white focus:ring-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-105 ${
              formik.touched.message && formik.errors.message ? "border-red-500" : ""
            }`}
            required
            rows={4}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-400 text-sm">{formik.errors.message}</p>
          )}

          <motion.button
            type="submit"
            className="w-full bg-[#10f7c4] text-blue-600 font-bold py-3 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-cyan-700 shadow-lg shadow-cyan-600/50"
          >
            Enviar Mensaje
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
