import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target, BarChart3, RefreshCw, TrendingUp, ArrowLeftRight, Banknote, X, CheckCircle2
} from 'lucide-react';
import { services } from '../data/services';
import { BgRisingLine } from './BgPatterns';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Target, BarChart3, RefreshCw, TrendingUp, ArrowLeftRight, Banknote,
};

export default function Services() {
  const [active, setActive] = useState<string | null>(null);
  const activeService = services.find(s => s.id === active);

  return (
    <section id="uslugi" className="relative bg-[#F5F7F5] py-28 overflow-hidden">
      <BgRisingLine />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">Nasze usługi</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#0A2E1E] leading-tight"
          >
            Kompleksowe doradztwo
            <br />
            <span className="text-[#1A5233]">na każdym etapie</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <motion.button
                key={svc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => setActive(svc.id)}
                className="group text-left bg-white rounded-lg p-7 border border-[#0A2E1E]/8 hover:border-[#C9A84C]/60 hover:shadow-xl hover:shadow-[#0A2E1E]/8 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0A2E1E]/6 flex items-center justify-center mb-5 group-hover:bg-[#0A2E1E] transition-colors duration-300">
                  <Icon size={22} className="text-[#0A2E1E] group-hover:text-[#C9A84C] transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0A2E1E] mb-3 leading-snug">{svc.title}</h3>
                <p className="text-[#0A2E1E]/60 text-sm leading-relaxed">{svc.shortDesc}</p>
                <div className="mt-5 flex items-center gap-2 text-[#C9A84C] text-xs font-semibold tracking-wide uppercase group-hover:gap-3 transition-all duration-200">
                  <span>Szczegóły</span>
                  <span>→</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Service detail modal */}
      <AnimatePresence>
        {activeService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-lg mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="bg-[#0A2E1E] px-7 py-6 flex items-start justify-between">
                <div>
                  <div className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-2">Usługa</div>
                  <h3 className="font-serif text-xl font-bold text-white">{activeService.title}</h3>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="text-white/40 hover:text-white transition-colors mt-1"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="px-7 py-6">
                <p className="text-[#0A2E1E]/70 text-sm leading-relaxed mb-6">{activeService.description}</p>
                <h4 className="text-[#0A2E1E] font-semibold text-xs tracking-widest uppercase mb-4">Zakres usługi</h4>
                <ul className="space-y-2.5">
                  {activeService.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                      <span className="text-[#0A2E1E]/75 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#kontakt"
                    onClick={() => setActive(null)}
                    className="block text-center px-6 py-3 bg-[#C9A84C] text-[#0A2E1E] font-semibold rounded-sm hover:bg-[#E2C77A] transition-colors text-sm"
                  >
                    Zapytaj o tę usługę
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
