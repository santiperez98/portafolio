import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CEOSection from './components/CEOSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CEOSection />
      <Projects />
      <Contact />
    </main>
  );
}
