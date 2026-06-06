import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: Stat[] = [
  { value: 27, suffix: '+', label: 'lat', sublabel: 'EXCO na rynku od 1997 roku' },
  { value: 6, suffix: '', label: 'biur', sublabel: 'w Polsce: Warszawa, Wrocław, Gdańsk i inne' },
  { value: 200, suffix: '+', label: 'ekspertów', sublabel: 'w całej grupie EXCO w Polsce' },
  { value: 27, suffix: '', label: 'krajów', sublabel: 'w sieci EXCO International' },
  { value: 500, suffix: '+', label: 'projektów', sublabel: 'doradczych zrealizowanych w Polsce' },
  { value: 15, suffix: '+', label: 'branż', sublabel: 'obsługiwanych przez EXCO Advisory' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Numbers() {
  return (
    <section id="liczby" className="bg-[#0A2E1E] py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">Fakty</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white"
          >
            EXCO w liczbach
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <div className="font-serif text-5xl md:text-6xl font-bold text-[#C9A84C] leading-none mb-1">
                <AnimatedNumber target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/70 text-base font-medium mb-1">{s.label}</div>
              <div className="text-white/35 text-xs leading-relaxed">{s.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/8 text-center"
        >
          <p className="text-white/30 text-sm italic">
            "Liczby ważne są tyle, ile stoi za nimi — doświadczenie, metodologia i odpowiedzialność."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
