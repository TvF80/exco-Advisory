import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { BgCandlestick } from './BgPatterns';

const stats = [
  { value: '27+', label: 'lat grupy EXCO' },
  { value: '6', label: 'biur w Polsce' },
  { value: '200+', label: 'ekspertów w grupie' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A2E1E] flex flex-col justify-center overflow-hidden">
      <BgCandlestick />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E1E] via-[#0A2E1E]/90 to-[#1A5233]/60 pointer-events-none" />

      {/* decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
              EXCO Advisory · Warszawa
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
          >
            EXCO Finance
            <br />
            <span className="text-[#C9A84C]">Advisory</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Doradztwo finansowe dla firm na każdym etapie rozwoju.
            Wyceny, restrukturyzacje, transakcje M&A — w jednym miejscu,
            bez kompromisów w jakości.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A84C] text-[#0A2E1E] font-semibold rounded-sm hover:bg-[#E2C77A] transition-colors duration-200"
            >
              Umów konsultację
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/80 font-medium rounded-sm hover:border-[#C9A84C]/60 hover:text-white transition-colors duration-200"
            >
              Poznaj usługi
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-10"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.1 }}
              >
                <div className="font-serif text-3xl font-bold text-[#C9A84C]">{s.value}</div>
                <div className="text-white/50 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Przewiń</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
