import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { X, Mail, CheckCircle2, ChevronRight } from 'lucide-react';
import { team, type TeamMember } from '../data/team';
import { BgNetwork } from './BgPatterns';


function MemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="bg-[#0A2E1E] p-6 flex items-center gap-5">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-[#C9A84C]/50">
            <img src={member.photo} alt={member.name} className="w-full h-full object-cover"
              onError={e => { (e.target as HTMLImageElement).style.display='none'; }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-lg font-bold text-white">{member.name}</h3>
            <p className="text-[#C9A84C] text-sm mt-0.5">{member.role}</p>
            <p className="text-white/40 text-xs mt-0.5">{member.title}</p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white shrink-0 transition-colors"><X size={20} /></button>
        </div>
        <div className="p-6">
          <p className="text-[#0A2E1E]/65 text-sm leading-relaxed mb-5">{member.bio}</p>
          <h4 className="text-[#0A2E1E]/40 text-xs font-semibold tracking-widest uppercase mb-3">Obszary specjalizacji</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {member.expertise.map((tag, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1 bg-[#F5F7F5] rounded-full text-xs text-[#0A2E1E] font-medium">
                <CheckCircle2 size={11} className="text-[#C9A84C]" />{tag}
              </span>
            ))}
          </div>
          {member.email && (
            <a href={`mailto:${member.email}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0A2E1E] text-white rounded-sm text-sm font-medium hover:bg-[#1A5233] transition-colors w-full">
              <Mail size={14} />Napisz e-mail
            </a>
          )}
        </div>
      </motion.div>
    </>
  );
}

/* Tilt-on-hover card for advisory team */
function AdvisoryCard({ member, index, onClick }: { member: TeamMember; index: number; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 relative shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        <img src={member.photo} alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => { (e.target as HTMLImageElement).style.display='none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E1E]/80 via-[#0A2E1E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between"
          initial={false}
          animate={{ opacity: 1 }}
        >
          <span className="text-white text-xs font-semibold tracking-widest uppercase bg-[#C9A84C] px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Zobacz profil
          </span>
          <ChevronRight size={16} className="text-white/0 group-hover:text-white/60 transition-colors duration-300" />
        </motion.div>
      </div>
      <h3 className="font-serif text-lg font-bold text-[#0A2E1E] group-hover:text-[#1A5233] transition-colors">{member.name}</h3>
      <p className="text-[#C9A84C] text-sm font-medium mt-1">{member.role}</p>
      <p className="text-[#0A2E1E]/40 text-xs mt-0.5">{member.title}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {member.expertise.slice(0, 2).map((tag, j) => (
          <span key={j} className="px-2 py-0.5 bg-[#0A2E1E]/6 rounded text-xs text-[#0A2E1E]/60">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

/* Horizontal card for board members — like EXCO Legal */
function BoardCard({ member, index, onClick }: { member: TeamMember; index: number; onClick: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ scale: expanded ? 1 : 1.015, y: expanded ? 0 : -3 }}
      onClick={() => setExpanded(v => !v)}
      className={`cursor-pointer rounded-xl border overflow-hidden transition-colors duration-300 ${
        expanded
          ? 'border-[#C9A84C]/50 bg-[#0A2E1E] shadow-xl shadow-[#0A2E1E]/25'
          : 'border-[#0A2E1E]/10 bg-white hover:border-[#C9A84C]/40 hover:shadow-lg'
      }`}
    >
      <div className="flex items-start gap-0">
        {/* Photo column */}
        <div className="shrink-0 w-28 sm:w-36 h-full self-stretch relative overflow-hidden">
          <img
            src={member.photo}
            alt={member.name}
            className={`w-full h-full object-cover object-top transition-all duration-500 ${expanded ? 'scale-105' : ''}`}
            style={{ minHeight: '160px' }}
            onError={e => { (e.target as HTMLImageElement).style.display='none'; }}
          />
          <div className={`absolute inset-0 transition-opacity duration-300 ${expanded ? 'bg-[#0A2E1E]/30 opacity-100' : 'opacity-0'}`} />
        </div>

        {/* Content column */}
        <div className="flex-1 min-w-0 p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className={`font-serif text-base font-bold leading-snug transition-colors duration-300 ${expanded ? 'text-white' : 'text-[#0A2E1E]'}`}>
                {member.name}
              </h3>
              <p className="text-[#C9A84C] text-xs font-semibold mt-1">{member.role}</p>
              <p className={`text-xs mt-0.5 transition-colors duration-300 ${expanded ? 'text-white/40' : 'text-[#0A2E1E]/35'}`}>{member.title}</p>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.22 }}
              className={`shrink-0 mt-0.5 transition-colors duration-300 ${expanded ? 'text-[#C9A84C]/60' : 'text-[#0A2E1E]/20'}`}
            >
              <ChevronRight size={16} />
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {member.expertise.map((tag, j) => (
              <span key={j} className={`px-2 py-0.5 rounded text-xs transition-colors duration-300 ${
                expanded ? 'bg-[#C9A84C]/15 text-[#C9A84C]' : 'bg-[#0A2E1E]/5 text-[#0A2E1E]/55'
              }`}>{tag}</span>
            ))}
          </div>

          {/* Expanded bio */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="text-white/60 text-xs leading-relaxed mt-4 border-t border-white/10 pt-4">
                  {member.bio}
                </p>
                <button
                  onClick={e => { e.stopPropagation(); onClick(); }}
                  className="mt-3 flex items-center gap-1.5 text-[#C9A84C] text-xs font-semibold hover:text-[#E2C77A] transition-colors"
                >
                  <Mail size={11} /> {member.email}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const [modal, setModal] = useState<TeamMember | null>(null);
  const advisoryTeam = team.filter(m => m.group === 'advisory');
  const boardTeam = team.filter(m => m.group === 'board');

  return (
    <section id="zespol" className="relative bg-[#F5F7F5] py-28 overflow-hidden" style={{ perspective: '1000px' }}>
      <BgNetwork />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">Zespół ekspertów</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#0A2E1E] leading-tight">
            Ludzie,<span className="text-[#1A5233]"> na których<br />możesz polegać</span>
          </motion.h2>
        </div>

        {/* Advisory — tilt cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-24">
          {advisoryTeam.map((member, i) => (
            <AdvisoryCard key={member.id} member={member} index={i} onClick={() => setModal(member)} />
          ))}
        </div>

        {/* Board divider */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 bg-[#0A2E1E]/12" />
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-[#0A2E1E]/35 text-xs font-semibold tracking-[0.2em] uppercase">Zarząd EXCO A2A Polska</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            </div>
            <div className="h-px flex-1 bg-[#0A2E1E]/12" />
          </div>
          <p className="text-[#0A2E1E]/38 text-sm text-center max-w-lg mx-auto leading-relaxed">
            Każdy projekt doradczy korzysta z bezpośredniego zaangażowania partnerów zarządzających grupy EXCO — ich sieci kontaktów i wieloletniego doświadczenia.
          </p>
        </motion.div>

        {/* Board — horizontal cards, click to expand */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {boardTeam.map((member, i) => (
            <BoardCard key={member.id} member={member} index={i} onClick={() => setModal(member)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modal && <MemberModal member={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </section>
  );
}
