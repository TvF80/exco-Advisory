import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BgCandlestick } from './BgPatterns';
import { useLangContext } from '../LangContext';
import { translations } from '../translations';

// ─── Floating Finance Emblem ──────────────────────────────────────────────────

function FinanceEmblem() {
  return (
    <svg viewBox="0 0 360 360" width="100%" height="100%" aria-hidden="true" style={{ maxWidth: 420, maxHeight: 420 }}>
      <defs>
        <radialGradient id="fe-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(201,168,76,0.18)" />
          <stop offset="60%" stopColor="rgba(201,168,76,0.04)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0)" />
        </radialGradient>
        <filter id="fe-soft">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="fe-glow-filter">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="1 0.8 0 0 0.1  0.8 0.6 0 0 0.05  0 0 0 0 0  0 0 0 2 -0.5"
            result="gold" />
          <feComposite in="SourceGraphic" in2="gold" operator="over" />
        </filter>
        <path id="fe-arc-top" d="M 82 180 A 98 98 0 0 1 278 180" fill="none" />
        <path id="fe-arc-bot" d="M 82 180 A 98 98 0 0 0 278 180" fill="none" />
      </defs>

      {/* Background glow */}
      <circle cx="180" cy="180" r="180" fill="url(#fe-glow)" />

      {/* Outer dashed ring */}
      <circle cx="180" cy="180" r="162" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8" strokeDasharray="5 7" />
      {/* Main ring */}
      <circle cx="180" cy="180" r="152" fill="none" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5" />
      {/* Inner ring */}
      <circle cx="180" cy="180" r="128" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8" />
      {/* Core fill */}
      <circle cx="180" cy="180" r="110" fill="rgba(201,168,76,0.03)" />

      {/* Octagon frame */}
      <polygon
        points="180,52 248,74 292,142 292,218 248,286 180,308 112,286 68,218 68,142 112,74"
        fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="0.8"
      />

      {/* Cross hairs */}
      <line x1="180" y1="52" x2="180" y2="308" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5" />
      <line x1="52" y1="180" x2="308" y2="180" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5" />

      {/* Dollar sign — main */}
      <g transform="translate(180,180)" filter="url(#fe-glow-filter)">
        {/* Vertical bar through $ */}
        <rect x="-4" y="-78" width="8" height="156" rx="4" fill="#C9A84C" opacity="0.95" />

        {/* Upper S curve */}
        <path
          d="M 30,-28 C 30,-52 -30,-52 -30,-28 C -30,-4 30,-4 30,20 C 30,44 -30,44 -30,20"
          fill="none" stroke="#C9A84C" strokeWidth="12" strokeLinecap="round" opacity="0.95"
        />

        {/* Tick marks at ends of bar */}
        <rect x="-16" y="-82" width="32" height="6" rx="3" fill="#C9A84C" opacity="0.7" />
        <rect x="-16" y="76" width="32" height="6" rx="3" fill="#C9A84C" opacity="0.7" />
      </g>

      {/* Arc text top */}
      <text fill="rgba(201,168,76,0.65)" fontSize="9.5" letterSpacing="5.5"
        fontFamily="'Playfair Display', Georgia, serif" fontWeight="600" textAnchor="middle">
        <textPath href="#fe-arc-top" startOffset="50%">EXCO FINANCE ADVISORY</textPath>
      </text>

      {/* Arc text bottom */}
      <text fill="rgba(201,168,76,0.35)" fontSize="8" letterSpacing="4"
        fontFamily="'Inter', system-ui, sans-serif" fontWeight="400" textAnchor="middle">
        <textPath href="#fe-arc-bot" startOffset="50%">DORADZTWO FINANSOWE</textPath>
      </text>

      {/* Diamond ticks at cardinal points */}
      {[0, 90, 180, 270].map(angle => {
        const rad = (angle * Math.PI) / 180;
        const x = 180 + 152 * Math.cos(rad);
        const y = 180 + 152 * Math.sin(rad);
        return (
          <rect key={angle} x={x - 4} y={y - 4} width="8" height="8"
            fill="#C9A84C" opacity="0.75" transform={`rotate(45,${x},${y})`} />
        );
      })}

      {/* Small accent dots at 45° */}
      {[45, 135, 225, 315].map(angle => {
        const rad = (angle * Math.PI) / 180;
        const x = 180 + 152 * Math.cos(rad);
        const y = 180 + 152 * Math.sin(rad);
        return <circle key={angle} cx={x} cy={y} r="2.5" fill="#C9A84C" opacity="0.4" />;
      })}
    </svg>
  );
}

export default function Hero() {
  const { lang } = useLangContext();
  const t = translations[lang];

  return (
    <section className="relative min-h-screen bg-[#0A2E1E] flex flex-col justify-center overflow-hidden">
      <BgCandlestick />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E1E] via-[#0A2E1E]/90 to-[#1A5233]/60 pointer-events-none" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent pointer-events-none" />

      {/* Ambient orb right */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-8%] top-[10%] w-[55vh] h-[55vh] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT ── */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">{t.hero.eyebrow}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
              {t.hero.h1}
              <br />
              <span className="text-[#C9A84C] relative inline-block">
                {t.hero.h1gold}
                <motion.span
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' }}
                  className="absolute bottom-[-4px] left-0 w-full h-[2px] origin-left"
                  style={{ background: 'linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))' }}
                />
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4 mb-10">
              <motion.a href="#kontakt" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A84C] text-[#0A2E1E] font-semibold rounded-sm hover:bg-[#E2C77A] transition-colors duration-200 shadow-lg shadow-[#C9A84C]/20">
                {t.hero.btn1}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a href="#uslugi" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/80 font-medium rounded-sm hover:border-[#C9A84C]/60 hover:text-white transition-colors duration-200">
                {t.hero.btn2}
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-10 pt-8 border-t border-white/10">
              {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.1 }}>
                  <div className="font-serif text-3xl font-bold text-[#C9A84C]">{s.val}</div>
                  <div className="text-white/50 text-sm mt-1">{s.lbl}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — floating $ emblem ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Particle dots */}
            {[
              { top: '8%', left: '12%', size: 4, delay: 0 },
              { top: '18%', right: '8%', size: 3, delay: 1.4 },
              { bottom: '20%', left: '6%', size: 5, delay: 0.8 },
              { bottom: '10%', right: '16%', size: 3, delay: 2.1 },
              { top: '52%', left: '1%', size: 2, delay: 1.6 },
            ].map((dot, i) => (
              <motion.span key={i}
                animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.8, 1.3, 0.8] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  ...(dot.top ? { top: dot.top } : { bottom: (dot as { bottom: string }).bottom }),
                  ...(dot.left ? { left: dot.left } : { right: (dot as { right: string }).right }),
                  width: dot.size, height: dot.size,
                  borderRadius: '50%', background: '#C9A84C',
                }}
              />
            ))}

            {/* Outer glow pulse */}
            <motion.div
              animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[-16px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)' }}
            />

            {/* The floating emblem */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [-1, 1, -1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-[420px] aspect-square relative"
            >
              <FinanceEmblem />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-10">
        <motion.div
          animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.7), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
