import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyExco from './components/WhyExco';
import Industries from './components/Industries';
import Team from './components/Team';
import Numbers from './components/Numbers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const progress = typeof window !== 'undefined'
    ? Math.min(scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1), 1)
    : 0;

  return (
    <>
      {/* scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[100] bg-[#0A2E1E]/20">
        <motion.div
          className="h-full bg-[#C9A84C] origin-left"
          style={{ scaleX: progress }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyExco />
        <Industries />
        <Team />
        <Numbers />
        <Contact />
      </main>
      <Footer />

      {/* scroll to top */}
      <AnimatePresence>
        {scrollY > 400 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-sm bg-[#C9A84C] text-[#0A2E1E] flex items-center justify-center shadow-lg hover:bg-[#E2C77A] transition-colors"
            aria-label="Wróć na górę"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
