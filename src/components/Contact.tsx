import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { BgCircles } from './BgPatterns';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-sm bg-white border border-[#0A2E1E]/12 text-[#0A2E1E] placeholder-[#0A2E1E]/30 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors";

  return (
    <section id="kontakt" className="relative bg-[#F5F7F5] py-28 overflow-hidden">
      <BgCircles />

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
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">Kontakt</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#0A2E1E] leading-tight"
          >
            Porozmawiajmy
            <br />
            <span className="text-[#1A5233]">o Twoim projekcie</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Imię i nazwisko *"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="Nazwa firmy"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="E-mail *"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <textarea
                  required
                  rows={5}
                  placeholder="Opisz krótko swój projekt lub pytanie *"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className={`${inputClass} resize-none`}
                />
                <p className="text-[#0A2E1E]/35 text-xs">
                  Pola oznaczone * są wymagane. Odpowiadamy w ciągu 24h w dni robocze.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#0A2E1E] text-white font-semibold rounded-sm hover:bg-[#1A5233] transition-colors duration-200"
                >
                  Wyślij wiadomość
                  <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0A2E1E]/8 flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0A2E1E] mb-2">Dziękujemy!</h3>
                <p className="text-[#0A2E1E]/55 text-sm max-w-sm leading-relaxed">
                  Twoja wiadomość dotarła. Skontaktujemy się z Tobą w ciągu 24 godzin roboczych.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Main contact */}
            <div className="bg-[#0A2E1E] rounded-lg p-7 text-white">
              <div className="font-serif text-lg font-bold mb-1">EXCO Advisory</div>
              <div className="text-[#C9A84C] text-xs uppercase tracking-widest mb-5">Doradztwo finansowe</div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <div className="text-white/65 text-sm leading-relaxed">
                    ul. rtm. Witolda Pileckiego 67, lok. 200
                    <br />02-781 Warszawa
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#C9A84C] shrink-0" />
                  <a href="tel:+48228476117" className="text-white/65 text-sm hover:text-white transition-colors">
                    +48 22 847 61 17
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#C9A84C] shrink-0" />
                  <a href="mailto:tomasz.fordymacki@exco.pl" className="text-white/65 text-sm hover:text-white transition-colors break-all">
                    tomasz.fordymacki@exco.pl
                  </a>
                </div>
              </div>
            </div>

            {/* EXCO Group */}
            <div>
              <p className="text-[#0A2E1E]/40 text-xs font-semibold tracking-widest uppercase mb-4">
                Cała rodzina EXCO
              </p>
              <div className="space-y-2">
                {[
                  { name: 'EXCO A2A Polska', desc: 'Audyt i podatki', url: 'https://excopl.vercel.app' },
                  { name: 'EXCO Legal', desc: 'Kancelaria prawna', url: 'https://exco-legal.vercel.app' },
                  { name: 'EXCO International', desc: '27 krajów', url: 'https://exco-international.com' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target={item.url.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 rounded-sm border border-[#0A2E1E]/10 hover:border-[#C9A84C]/40 hover:bg-[#0A2E1E]/4 transition-all duration-200 group"
                  >
                    <div>
                      <span className="text-sm font-medium text-[#0A2E1E]">{item.name}</span>
                      <span className="text-[#0A2E1E]/35 text-xs ml-2">{item.desc}</span>
                    </div>
                    <span className="text-[#C9A84C] text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
