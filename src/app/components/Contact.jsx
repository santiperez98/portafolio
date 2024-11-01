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
      className="bg-[#1c1c1c] text-gray-800 py-20 font-mono overflow-hidden flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg p-8 shadow-lg w-full max-w-md"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contacto</h2>
        <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4">
          <motion.input
            type="text"
            placeholder="Tu nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border-2 border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105 ${
              formik.touched.name && formik.errors.name ? "border-red-500" : ""
            }`}
            required
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}

          <motion.input
            type="email"
            placeholder="Tu correo"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border-2 border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105 ${
              formik.touched.email && formik.errors.email ? "border-red-500" : ""
            }`}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          <motion.textarea
            placeholder="Tu mensaje"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border-2 border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105 ${
              formik.touched.message && formik.errors.message ? "border-red-500" : ""
            }`}
            required
            rows={4}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm">{formik.errors.message}</p>
          )}

          <motion.button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded transition duration-300 transform hover:scale-105 hover:bg-blue-700 w-full"
          >
            Enviar
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
