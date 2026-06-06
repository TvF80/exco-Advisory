import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Users, Globe2, Rocket, Warehouse, Handshake, ChevronDown } from 'lucide-react';

interface Segment {
  icon: React.FC<{ size?: number; className?: string }>;
  title: string;
  desc: string;
  detail: string;
  tags: string[];
}

const segments: Segment[] = [
  {
    icon: Building,
    title: 'MŚP',
    desc: 'Firmy z przychodami 5–200 mln PLN, które potrzebują jakości large-cap bez kosztów wielkiego domu doradczego.',
    detail: 'Rozumiemy, że właściciele MŚP nie mają czasu na długie briefingi — dlatego szybko diagnozujemy problem i przechodzimy do działania. Oferujemy elastyczne modele współpracy: od jednorazowego projektu po stałe wsparcie CFO. Pracowaliśmy z firmami produkcyjnymi, usługowymi i handlowymi z całej Polski.',
    tags: ['Przychody 5–200 mln PLN', 'Elastyczne zaangażowanie', 'Szybka diagnoza'],
  },
  {
    icon: Users,
    title: 'Spółki rodzinne',
    desc: 'Sukcesja, wejście zewnętrznego inwestora, professionalizacja zarządzania finansami — z poszanowaniem wartości rodziny.',
    detail: 'Spółki rodzinne mają unikalne wyzwania: sukcesja, konflikty interesów, brak formalnych struktur zarządczych. Pomagamy przejść przez te procesy z minimalnym ryzykiem — niezależnie czy celem jest przekazanie firmy następnemu pokoleniu, sprzedaż inwestorowi, czy po prostu uporządkowanie finansów.',
    tags: ['Sukcesja', 'Profesjonalizacja', 'Wejście inwestora'],
  },
  {
    icon: Globe2,
    title: 'Grupy kapitałowe',
    desc: 'Konsolidacje, wyceny aktywów, optymalizacja struktury grupy — doświadczenie w skomplikowanych strukturach korporacyjnych.',
    detail: 'Duże grupy wymagają rozumienia zależności między spółkami, transferów wewnętrznych i konsolidacji sprawozdań. Dzięki sieci EXCO International możemy obsługiwać projekty transgraniczne i struktury holdingowe z podmiotami w wielu krajach jednocześnie.',
    tags: ['Struktury holdingowe', 'Konsolidacja', 'Projekty transgraniczne'],
  },
  {
    icon: Rocket,
    title: 'Startupy w fazie wzrostu',
    desc: 'Pozyskiwanie kapitału VC/PE, przygotowanie do exit, modele finansowe dla inwestorów — rozumiemy dynamikę scale-up.',
    detail: 'Inwestorzy VC/PE oczekują precyzyjnych modeli, solidnych prognoz i jasnej narracji finansowej. Przygotowujemy spółki do rund inwestycyjnych i procesów due diligence po stronie inwestora — tak, żeby rozmowy skupiały się na wartości, a nie na błędach w arkuszach.',
    tags: ['Rundy inwestycyjne', 'Modele VC/PE', 'Exit preparation'],
  },
  {
    icon: Warehouse,
    title: 'Firmy w trudnej sytuacji',
    desc: 'Restrukturyzacja, negocjacje z bankami, plany naprawcze — działamy szybko i dyskretnie, z naciskiem na ratowanie wartości.',
    detail: 'Gdy firma traci płynność lub relacja z bankiem staje się trudna, liczy się każdy dzień. Wchodzimy szybko, oceniamy sytuację bez emocji i przygotowujemy realny plan naprawczy — nie optymistyczny, lecz wykonalny. Mamy doświadczenie w negocjacjach z wierzycielami i instytucjami finansowymi.',
    tags: ['Szybka interwencja', 'Negocjacje z bankami', 'Plan naprawczy'],
  },
  {
    icon: Handshake,
    title: 'Inwestorzy i fundusze',
    desc: 'Due diligence, wyceny portfelowe, wsparcie przy akwizycjach — rzetelna analiza po stronie buy-side.',
    detail: 'Fundusze PE i inwestorzy branżowi potrzebują partnera, który nie tylko przygotuje raport, ale zrozumie ich cel inwestycyjny. Robimy due diligence finansowe i operacyjne, wyceniamy spółki portfelowe i doradzamy przy strukturyzacji transakcji — zawsze z perspektywy inwestora.',
    tags: ['Due diligence buy-side', 'Wyceny portfelowe', 'Strukturyzacja transakcji'],
  },
];

export default function Industries() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (i: number) => setExpanded(prev => (prev === i ? null : i));

  return (
    <section id="branże" className="bg-white py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 40px, #0A2E1E 40px, #0A2E1E 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #0A2E1E 40px, #0A2E1E 41px)',
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#0A2E1E]/45 text-sm mt-4"
          >
            Kliknij kafelek, aby rozwinąć szczegóły.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((seg, i) => {
            const isOpen = expanded === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ scale: isOpen ? 1 : 1.025, y: isOpen ? 0 : -4 }}
                onClick={() => toggle(i)}
                className={`rounded-lg border cursor-pointer transition-colors duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#C9A84C]/60 bg-[#0A2E1E] shadow-xl shadow-[#0A2E1E]/20'
                    : 'border-[#0A2E1E]/8 bg-white hover:border-[#C9A84C]/40 hover:shadow-lg hover:shadow-[#0A2E1E]/6'
                }`}
              >
                {/* Main content — always visible */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? 'bg-[#C9A84C]/20' : 'bg-[#0A2E1E]/5'
                    }`}>
                      <seg.icon size={20} className={isOpen ? 'text-[#C9A84C]' : 'text-[#0A2E1E]'} />
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`mt-1 shrink-0 ${isOpen ? 'text-[#C9A84C]/60' : 'text-[#0A2E1E]/25'}`}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>

                  <h4 className={`font-serif text-base font-bold mb-2 transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-[#0A2E1E]'
                  }`}>
                    {seg.title}
                  </h4>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isOpen ? 'text-white/60' : 'text-[#0A2E1E]/55'
                  }`}>
                    {seg.desc}
                  </p>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-white/10 pt-4">
                        <p className="text-white/65 text-sm leading-relaxed mb-4">
                          {seg.detail}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {seg.tags.map((tag, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 bg-[#C9A84C]/15 border border-[#C9A84C]/25 rounded-sm text-[#C9A84C] text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
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
