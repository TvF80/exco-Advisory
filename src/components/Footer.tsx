export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#060F09] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-sm bg-[#C9A84C] flex items-center justify-center">
            <span className="font-serif font-bold text-[#0A2E1E] text-xs">EF</span>
          </div>
          <span className="font-serif text-white/70 text-sm">
            EXCO <span className="text-[#C9A84C]">Advisory</span>
          </span>
        </div>

        <div className="text-white/25 text-xs text-center">
          © {year} EXCO Advisory · Część grupy EXCO A2A Polska · Wszelkie prawa zastrzeżone
        </div>

        <div className="flex items-center gap-6">
          <a href="https://excopl.vercel.app" className="text-white/35 hover:text-white/60 text-xs transition-colors">EXCO A2A</a>
          <a href="https://exco-legal.vercel.app" className="text-white/35 hover:text-white/60 text-xs transition-colors">EXCO Legal</a>
          <a href="#" className="text-white/35 hover:text-white/60 text-xs transition-colors">Polityka prywatności</a>
        </div>
      </div>
    </footer>
  );
}
