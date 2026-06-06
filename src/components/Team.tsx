import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle2 } from 'lucide-react';
import { team, type TeamMember } from '../data/team';
import { BgNetwork } from './BgPatterns';

function Initials({ name }: { name: string }) {
  const parts = name.split(' ');
  const initials = parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0][0];
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0A2E1E] to-[#1A5233]">
      <span className="font-serif text-3xl font-bold text-[#C9A84C]">{initials}</span>
    </div>
  );
}

function PhotoCard({
  member,
  size = 'large',
  onClick,
}: {
  member: TeamMember;
  size?: 'large' | 'small';
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Photo */}
      <div className={`w-full ${size === 'large' ? 'aspect-[4/5]' : 'aspect-[3/4]'} rounded-lg overflow-hidden mb-4 relative`}>
        <div className="w-full h-full">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={e => {
                const img = e.target as HTMLImageElement;
                img.style.display = 'none';
                const fallback = img.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="w-full h-full" style={{ display: member.photo ? 'none' : 'flex' }}>
            <Initials name={member.name} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E1E]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-white text-xs font-medium tracking-wide uppercase bg-[#C9A84C] px-3 py-1 rounded-sm">
            Zobacz profil
          </span>
        </div>
      </div>

      <h3 className={`font-serif font-bold text-[#0A2E1E] group-hover:text-[#1A5233] transition-colors ${size === 'large' ? 'text-lg' : 'text-base'}`}>
        {member.name}
      </h3>
      <p className="text-[#C9A84C] text-sm font-medium mt-1">{member.role}</p>
      <p className="text-[#0A2E1E]/40 text-xs mt-0.5">{member.title}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {member.expertise.slice(0, 2).map((tag, j) => (
          <span key={j} className="px-2 py-0.5 bg-[#0A2E1E]/6 rounded text-xs text-[#0A2E1E]/60">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function MemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="bg-[#0A2E1E] p-6 flex items-center gap-5">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-[#C9A84C]/50">
            {member.photo ? (
              <img src={member.photo} alt={member.name} className="w-full h-full object-cover"
                onError={e => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = 'none';
                  const fb = img.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="w-full h-full" style={{ display: member.photo ? 'none' : 'flex' }}>
              <Initials name={member.name} />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-lg font-bold text-white">{member.name}</h3>
            <p className="text-[#C9A84C] text-sm mt-0.5">{member.role}</p>
            <p className="text-white/40 text-xs mt-0.5">{member.title}</p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white shrink-0 transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-[#0A2E1E]/65 text-sm leading-relaxed mb-5">{member.bio}</p>
          <h4 className="text-[#0A2E1E]/40 text-xs font-semibold tracking-widest uppercase mb-3">Obszary specjalizacji</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {member.expertise.map((tag, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1 bg-[#F5F7F5] rounded-full text-xs text-[#0A2E1E] font-medium">
                <CheckCircle2 size={11} className="text-[#C9A84C]" />
                {tag}
              </span>
            ))}
          </div>
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0A2E1E] text-white rounded-sm text-sm font-medium hover:bg-[#1A5233] transition-colors w-full"
            >
              <Mail size={14} />
              Napisz e-mail
            </a>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default function Team() {
  const [active, setActive] = useState<TeamMember | null>(null);

  const advisoryTeam = team.filter(m => m.group === 'advisory');
  const boardTeam = team.filter(m => m.group === 'board');

  return (
    <section id="zespol" className="relative bg-[#F5F7F5] py-28 overflow-hidden">
      <BgNetwork />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">Zespół ekspertów</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#0A2E1E] leading-tight"
          >
            Ludzie,
            <span className="text-[#1A5233]"> na których
            <br />możesz polegać</span>
          </motion.h2>
        </div>

        {/* Advisory experts — 3 columns, larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-20">
          {advisoryTeam.map((member, i) => (
            <motion.div key={member.id} transition={{ delay: i * 0.1 }}>
              <PhotoCard member={member} size="large" onClick={() => setActive(member)} />
            </motion.div>
          ))}
        </div>

        {/* Divider + board section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px flex-1 bg-[#0A2E1E]/10" />
            <span className="text-[#0A2E1E]/30 text-xs font-semibold tracking-[0.2em] uppercase shrink-0">
              Wsparcie Zarządu EXCO
            </span>
            <div className="h-px flex-1 bg-[#0A2E1E]/10" />
          </div>
          <p className="text-[#0A2E1E]/40 text-sm text-center max-w-xl mx-auto mt-3 leading-relaxed">
            Każdy projekt doradczy korzysta z doświadczenia i sieci kontaktów partnerów zarządzających grupy EXCO.
          </p>
        </motion.div>

        {/* Board — 2 smaller columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
          {boardTeam.map((member, i) => (
            <motion.div key={member.id} transition={{ delay: i * 0.1 }}>
              <PhotoCard member={member} size="small" onClick={() => setActive(member)} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <MemberModal member={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
