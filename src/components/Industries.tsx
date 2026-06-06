import { motion } from 'framer-motion';
import { Building, Users, Globe2, Rocket, Warehouse, Handshake } from 'lucide-react';

const segments = [
  {
    icon: Building,
    title: 'MŚP',
    desc: 'Firmy z przychodami 5–200 mln PLN, które potrzebują jakości large-cap bez kosztów wielkiego domu doradczego.',
  },
  {
    icon: Users,
    title: 'Spółki rodzinne',
    desc: 'Sukcesja, wejście zewnętrznego inwestora, professionalizacja zarządzania finansami — z poszanowaniem wartości rodziny.',
  },
  {
    icon: Globe2,
    title: 'Grupy kapitałowe',
    desc: 'Konsolidacje, wyceny aktywów, optymalizacja struktury grupy — doświadczenie w skomplikowanych strukturach korporacyjnych.',
  },
  {
    icon: Rocket,
    title: 'Startupy w fazie wzrostu',
    desc: 'Pozyskiwanie kapitału VC/PE, przygotowanie do exit, modele finansowe dla inwestorów — rozumiemy dynamikę scale-up.',
  },
  {
    icon: Warehouse,
    title: 'Firmy w trudnej sytuacji',
    desc: 'Restrukturyzacja, negocjacje z bankami, plany naprawcze — działamy szybko i dyskretnie, z naciskiem na ratowanie wartości.',
  },
  {
    icon: Handshake,
    title: 'Inwestorzy i fundusze',
    desc: 'Due diligence, wyceny portfelowe, wsparcie przy akwizycjach — rzetelna analiza po stronie buy-side.',
  },
];

export default function Industries() {
  return (
    <section id="branże" className="bg-white py-28 relative overflow-hidden">
      {/* subtle bg pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, #0A2E1E 40px, #0A2E1E 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #0A2E1E 40px, #0A2E1E 41px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">Dla kogo pracujemy</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#0A2E1E] leading-tight"
          >
            Branże i
            <br />
            <span className="text-[#1A5233]">profile klientów</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((seg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex gap-5 p-6 rounded-lg border border-[#0A2E1E]/8 hover:border-[#C9A84C]/40 hover:bg-[#F5F7F5] transition-all duration-300 group"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-[#0A2E1E]/5 flex items-center justify-center group-hover:bg-[#0A2E1E] transition-colors duration-300">
                <seg.icon size={20} className="text-[#0A2E1E] group-hover:text-[#C9A84C] transition-colors duration-300" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#0A2E1E] mb-1.5">{seg.title}</h4>
                <p className="text-[#0A2E1E]/55 text-sm leading-relaxed">{seg.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
