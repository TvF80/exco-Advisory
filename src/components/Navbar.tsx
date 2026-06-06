import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#uslugi', label: 'Usługi' },
  { href: '#dlaczego', label: 'Dlaczego EXCO' },
  { href: '#branże', label: 'Dla kogo' },
  { href: '#zespol', label: 'Zespół' },
  { href: '#liczby', label: 'O nas' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A2E1E]/97 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-sm bg-[#C9A84C] flex items-center justify-center">
              <span className="font-serif font-bold text-[#0A2E1E] text-sm leading-none">EF</span>
            </div>
            <div className="leading-none">
              <div className="font-serif font-semibold text-white text-base tracking-wide">
                EXCO <span className="text-[#C9A84C]">Finance</span>
              </div>
              <div className="text-[10px] text-white/40 tracking-widest uppercase mt-0.5">Advisory</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#kontakt"
              className="px-5 py-2 rounded-sm bg-[#C9A84C] text-[#0A2E1E] text-sm font-semibold tracking-wide hover:bg-[#E2C77A] transition-colors duration-200"
            >
              Umów konsultację
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0A2E1E] border-t border-[#C9A84C]/20 py-4 px-6 md:hidden"
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/80 hover:text-[#C9A84C] text-sm font-medium border-b border-white/5 last:border-0 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="block mt-4 text-center px-5 py-3 bg-[#C9A84C] text-[#0A2E1E] font-semibold rounded-sm text-sm"
            >
              Umów konsultację
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
