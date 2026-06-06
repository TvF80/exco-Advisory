import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target, BarChart3, RefreshCw, TrendingUp, ArrowLeftRight, Banknote, CheckCircle2, ChevronDown
} from 'lucide-react';
import { services } from '../data/services';
import { BgRisingLine } from './BgPatterns';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Target, BarChart3, RefreshCw, TrendingUp, ArrowLeftRight, Banknote,
};

export default function Services() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="uslugi" className="relative bg-[#F5F7F5] py-28 overflow-hidden">
      <BgRisingLine />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">Nasze usługi</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#0A2E1E] leading-tight">
            Kompleksowe doradztwo
            <br /><span className="text-[#1A5233]">na każdym etapie</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="text-[#0A2E1E]/40 text-sm mt-4">
            Kliknij usługę, aby zobaczyć pełny zakres.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            const isOpen = expanded === svc.id;

            return (
              <motion.div
                key={svc.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ layout: { duration: 0.3, ease: 'easeInOut' }, duration: 0.5, delay: i * 0.07 }}
                whileHover={!isOpen ? { scale: 1.025, y: -5 } : {}}
                onClick={() => setExpanded(isOpen ? null : svc.id)}
                className={`rounded-xl border cursor-pointer transition-colors duration-300 ${
                  isOpen
                    ? 'border-[#C9A84C]/50 bg-[#0A2E1E] shadow-2xl shadow-[#0A2E1E]/30'
                    : 'border-[#0A2E1E]/8 bg-white hover:border-[#C9A84C]/50 hover:shadow-xl hover:shadow-[#0A2E1E]/8'
                }`}
              >
                {/* Always-visible top */}
                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? 'bg-[#C9A84C]/20' : 'bg-[#0A2E1E]/6'
                    }`}>
                      <Icon size={22} className={`transition-colors duration-300 ${isOpen ? 'text-[#C9A84C]' : 'text-[#0A2E1E]'}`} />
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`mt-1 transition-colors duration-300 ${isOpen ? 'text-[#C9A84C]/60' : 'text-[#0A2E1E]/20'}`}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>

                  <h3 className={`font-serif text-lg font-bold mb-3 leading-snug transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-[#0A2E1E]'
                  }`}>{svc.title}</h3>

                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isOpen ? 'text-white/55' : 'text-[#0A2E1E]/60'
                  }`}>{svc.shortDesc}</p>
                </div>

                {/* Expandable detail — layout-driven, no height animation bug */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div className="px-7 pb-7 pt-0">
                        <div className="border-t border-white/10 pt-5">
                          <p className="text-white/65 text-sm leading-relaxed mb-5">
                            {svc.description}
                          </p>
                          <p className="text-[#C9A84C]/70 text-[10px] font-semibold tracking-widest uppercase mb-3">
                            Zakres usługi
                          </p>
                          <ul className="space-y-2 mb-6">
                            {svc.scope.map((item, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + j * 0.05 }}
                                className="flex items-start gap-2.5"
                              >
                                <CheckCircle2 size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                                <span className="text-white/65 text-xs leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                          <a
                            href="#kontakt"
                            onClick={e => e.stopPropagation()}
                            className="block text-center px-5 py-2.5 bg-[#C9A84C] text-[#0A2E1E] font-semibold rounded-sm hover:bg-[#E2C77A] transition-colors text-sm"
                          >
                            Zapytaj o tę usługę
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
