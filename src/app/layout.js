// src/app/layout.js
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Santiago Perez | Portafolio',
  description: 'Bienvenido a mi portafolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white"> {/* Fondo negro y texto blanco */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
