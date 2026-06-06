import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Calculator, FileSearch, Building2, ChevronDown, ExternalLink } from 'lucide-react';

interface Pillar {
  icon: React.FC<{ size?: number; className?: string }>;
  title: string;
  desc: string;
  detail: string;
  links?: { label: string; url: string }[];
}

const pillars: Pillar[] = [
  {
    icon: Building2,
    title: 'Jeden dom, pełna obsługa',
    desc: 'EXCO Advisory działa ramię w ramię z EXCO Legal i EXCO Audit & Tax. Klient dostaje wszystko w jednym miejscu.',
    detail: 'Koniec z koordynowaniem kilku firm i rozbieżnymi rekomendacjami. W EXCO prawnicy, finansiści i audytorzy pracują razem od pierwszego dnia projektu — wspólna strategia, spójna komunikacja, jedna odpowiedzialność.',
    links: [
      { label: 'EXCO Legal — kancelaria prawna', url: 'https://exco-legal.vercel.app' },
      { label: 'EXCO A2A — audyt i podatki', url: 'https://excopl.vercel.app' },
    ],
  },
  {
    icon: Calculator,
    title: 'Finanse i prawo razem',
    desc: 'Nasze rozwiązania finansowe są od razu weryfikowane pod kątem prawnym i podatkowym.',
    detail: 'Przy transakcjach M&A, restrukturyzacjach i wycenach każda decyzja finansowa ma swoje implikacje prawne i podatkowe. Pracujemy w zintegrowanych zespołach, a nie w silosach — klient dostaje jedną, spójną rekomendację.',
    links: [
      { label: 'Dowiedz się więcej o EXCO Legal', url: 'https://exco-legal.vercel.app' },
    ],
  },
  {
    icon: FileSearch,
    title: 'Fakty, nie szablony',
    desc: 'Nie kopiujemy rozwiązań z innych projektów. Każde zlecenie analizujemy od podstaw.',
    detail: 'Model finansowy budowany na realnych danych klienta, nie benchmarkach branżowych. Strategia oparta na konkretnej sytuacji firmy, nie na "best practices" z prezentacji. Dlatego nasze rekomendacje są wykonalne — a nie tylko inspirujące.',
    links: [
      { label: 'Zobacz nasze usługi', url: '#uslugi' },
      { label: 'Umów konsultację', url: '#kontakt' },
    ],
  },
  {
    icon: Scale,
    title: 'Sieć EXCO International',
    desc: 'Należymy do sieci EXCO International działającej w 27 krajach.',
    detail: 'Gdy projekt wymaga wiedzy o rynku niemieckim, francuskiej spółce holdingowej lub lokalnych regulacjach podatkowych w Europie Środkowej — mamy bezpośredni dostęp do ekspertów lokalnych. Bez pośredników, z pełnym rozumieniem lokalnych realiów.',
    links: [
      { label: 'EXCO A2A Polska — strona grupy', url: 'https://excopl.vercel.app' },
    ],
  },
];

export default function WhyExco() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="dlaczego" className="bg-[#0A2E1E] py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A84C]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1A5233]/60 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">Dlaczego EXCO</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Siła grupy EXCO<br /><span className="text-[#C9A84C]">to Twoja przewaga</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.15 }} className="text-white/60 text-base leading-relaxed mb-8">
              Większość firm doradczych specjalizuje się w jednej dziedzinie. EXCO jest wyjątkiem.
              Pod jednym dachem łączymy finanse, prawo i audyt — bo najważniejsze decyzje
              biznesowe zawsze leżą na styku tych obszarów.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.25 }} className="space-y-3">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Rodzina EXCO w Polsce</p>
              {[
                { name: 'EXCO A2A Polska', desc: 'Audyt i podatki', url: 'https://excopl.vercel.app' },
                { name: 'EXCO Legal', desc: 'Kancelaria prawna', url: 'https://exco-legal.vercel.app' },
                { name: 'EXCO Advisory', desc: 'Doradztwo finansowe', url: '#' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`flex items-center justify-between px-4 py-3 rounded-sm border transition-colors duration-200 ${
                    item.url === '#'
                      ? 'border-[#C9A84C]/40 bg-[#C9A84C]/10'
                      : 'border-white/10 hover:border-white/25 hover:bg-white/5'
                  }`}
                >
                  <div>
                    <span className={`text-sm font-semibold ${item.url === '#' ? 'text-[#C9A84C]' : 'text-white/80'}`}>{item.name}</span>
                    <span className="text-white/30 text-xs ml-2">·</span>
                    <span className="text-white/30 text-xs ml-2">{item.desc}</span>
                  </div>
                  {item.url !== '#' && <ExternalLink size={12} className="text-white/25" />}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — interactive pillars with layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            {pillars.map((p, i) => {
              const isOpen = expanded === i;
              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ layout: { duration: 0.3, ease: 'easeInOut' }, duration: 0.5, delay: i * 0.09 }}
                  whileHover={!isOpen ? { scale: 1.03, y: -4 } : {}}
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className={`rounded-xl border cursor-pointer transition-colors duration-300 ${
                    isOpen
                      ? 'border-[#C9A84C]/40 bg-white/8 shadow-lg shadow-black/20'
                      : 'border-white/8 bg-white/5 hover:border-[#C9A84C]/25 hover:bg-white/8'
                  }`}
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? 'bg-[#C9A84C]/25' : 'bg-[#C9A84C]/15'
                      }`}>
                        <p.icon size={18} className="text-[#C9A84C]" />
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.22 }}
                        className="text-[#C9A84C]/30 mt-1"
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </div>
                    <h4 className="font-serif text-sm font-bold text-white mb-1.5">{p.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{p.desc}</p>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="pillar-detail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 border-t border-white/8 pt-4">
                          <p className="text-white/55 text-xs leading-relaxed mb-4">{p.detail}</p>
                          {p.links && p.links.length > 0 && (
                            <div className="space-y-1.5">
                              {p.links.map((link, j) => (
                                <a
                                  key={j}
                                  href={link.url}
                                  onClick={e => e.stopPropagation()}
                                  className="flex items-center gap-1.5 text-[#C9A84C] text-xs hover:text-[#E2C77A] transition-colors"
                                >
                                  <ExternalLink size={10} className="shrink-0" />
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
