import { motion } from 'framer-motion';
import { Scale, Calculator, FileSearch, Building2 } from 'lucide-react';

const pillars = [
  {
    icon: Building2,
    title: 'Jeden dom, pełna obsługa',
    desc: 'EXCO Advisory działa ramię w ramię z EXCO Legal i EXCO Audit & Tax. Klient dostaje wszystko w jednym miejscu — bez koordynacji kilku firm i rozbieżnych rekomendacji.',
  },
  {
    icon: Calculator,
    title: 'Finanse i prawo razem',
    desc: 'Nasze rozwiązania finansowe są od razu weryfikowane pod kątem prawnym i podatkowym. To realna przewaga przy transakcjach, restrukturyzacjach i wycenach.',
  },
  {
    icon: FileSearch,
    title: 'Fakty, nie szablony',
    desc: 'Nie kopiujemy rozwiązań z innych projektów. Każde zlecenie analizujemy od podstaw — model finansowy, branżę, sytuację klienta i jego cele.',
  },
  {
    icon: Scale,
    title: 'Sieć EXCO International',
    desc: 'Należymy do sieci EXCO International działającej w 27 krajach. Projekty transgraniczne, due diligence zagranicznych podmiotów, ekspansja zagraniczna — mamy zasięg i zasoby.',
  },
];

export default function WhyExco() {
  return (
    <section id="dlaczego" className="bg-[#0A2E1E] py-28 relative overflow-hidden">
      {/* decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A84C]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1A5233]/60 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">Dlaczego EXCO</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              Siła grupy EXCO
              <br />
              <span className="text-[#C9A84C]">to Twoja przewaga</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/60 text-base leading-relaxed mb-8"
            >
              Większość firm doradczych specjalizuje się w jednej dziedzinie. EXCO jest wyjątkiem.
              Pod jednym dachem łączymy finanse, prawo i audyt — bo najważniejsze decyzje
              biznesowe zawsze leżą na styku tych obszarów.
            </motion.p>

            {/* EXCO Group links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="space-y-3"
            >
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Rodzina EXCO w Polsce</p>
              {[
                { name: 'EXCO A2A Polska', desc: 'Audyt i podatki', url: 'https://excopl.vercel.app' },
                { name: 'EXCO Legal', desc: 'Kancelaria prawna', url: 'https://exco-legal.vercel.app' },
                { name: 'EXCO Advisory', desc: 'Doradztwo finansowe', url: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  className={`flex items-center justify-between px-4 py-3 rounded-sm border transition-colors duration-200 ${
                    item.url === '#'
                      ? 'border-[#C9A84C]/40 bg-[#C9A84C]/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <span className={`text-sm font-semibold ${item.url === '#' ? 'text-[#C9A84C]' : 'text-white/80'}`}>
                      {item.name}
                    </span>
                    <span className="text-white/40 text-xs ml-2">·</span>
                    <span className="text-white/40 text-xs ml-2">{item.desc}</span>
                  </div>
                  {item.url !== '#' && (
                    <span className="text-white/30 text-xs">↗</span>
                  )}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="bg-white/5 rounded-lg p-6 border border-white/8 hover:border-[#C9A84C]/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/15 flex items-center justify-center mb-4">
                  <p.icon size={20} className="text-[#C9A84C]" />
                </div>
                <h4 className="font-serif text-base font-bold text-white mb-2">{p.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
