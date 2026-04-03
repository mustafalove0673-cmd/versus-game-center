"use client";
import { useState, useEffect } from "react";
import {
  Phone, MapPin, Menu, X, Building2,
  Hammer, Shield, Clock, MessageCircle,
  ArrowRight, HardHat, Ruler, TrendingUp, Users,
} from "lucide-react";

/* ── mount delay hook ── */
function useMountDelay(delay: number) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return show;
}

/* ═══════ BACKGROUND ═══════ */
function Background() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#0b0f1a]" />
      <div className="absolute inset-0 diagonal-bg" />

      {/* Orbs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#06d6a0]/[0.06] blur-[120px] a-drift" />
      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#0ea5e9]/[0.05] blur-[120px] a-drift-reverse" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#ff6b6b]/[0.02] blur-[150px] a-pulse-soft" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,214,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,214,160,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Scan line */}
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#06d6a0]/10 to-transparent a-scan" />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-[#06d6a0]/10 rounded-tl-lg a-slide-down" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-[#0ea5e9]/10 rounded-br-lg" style={{ animation: "slide-up 0.8s 0.3s cubic-bezier(0.16,1,0.3,1) forwards", opacity: 0 }} />

      {/* Crosshairs */}
      <div className="absolute top-[30%] right-[15%] w-20 h-20 crosshair" style={{ animation: "slide-up 1s 0.7s forwards", opacity: 0 }} />
      <div className="absolute bottom-[35%] left-[20%] w-16 h-16 crosshair" style={{ animation: "slide-up 1s 0.5s forwards", opacity: 0 }} />

      {/* Dashed circle */}
      <div className="absolute top-[20%] right-[10%] w-[180px] h-[180px] rounded-full border border-dashed border-white/[0.03] a-rotate" />

      {/* Dot cluster */}
      <div className="absolute bottom-[25%] right-[25%] flex gap-2">
        {[0, 200, 400].map((d) => (
          <div key={d} className="w-1 h-1 rounded-full bg-[#06d6a0]/30" style={{ animation: `dot-blink 2s ease-in-out infinite ${d}ms` }} />
        ))}
      </div>
    </div>
  );
}

/* ═══════ HEADER ═══════ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#06d6a0] to-[#0ea5e9] flex items-center justify-center shadow-lg shadow-[#06d6a0]/10 group-hover:shadow-[#06d6a0]/20 transition-shadow">
            <Building2 className="h-[18px] w-[18px] text-[#0b0f1a]" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-black tracking-[0.15em] text-white leading-none">ELİT YAPI</span>
            <span className="text-[8px] font-medium tracking-[0.2em] text-[#06d6a0]/50 uppercase leading-none mt-0.5">Construction</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {["Projeler", "Hizmetler", "Hakkımızda", "İletişim"].map((label) => (
            <button key={label} className="relative text-[12px] font-semibold text-zinc-500 hover:text-white transition-colors duration-300 group py-1">
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#06d6a0] to-[#0ea5e9] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a href="tel:+903121234567" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#06d6a0]/10 border border-[#06d6a0]/20 text-[12px] font-bold text-[#06d6a0] hover:bg-[#06d6a0]/20 transition-all">
            <Phone className="h-3.5 w-3.5" /> Hemen Ara
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 hover:text-white transition-colors">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#0b0f1a]/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-1">
            {["Projeler", "Hizmetler", "Hakkımızda", "İletişim"].map((l) => (
              <button key={l} className="block w-full text-left px-4 py-3 text-[13px] font-semibold text-zinc-400 hover:text-[#06d6a0] rounded-lg transition-colors">{l}</button>
            ))}
            <a href="tel:+903121234567" className="flex items-center gap-2 px-4 py-3 text-[13px] font-bold text-[#06d6a0]">
              <Phone className="h-4 w-4" /> 0312 123 45 67
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ═══════ COUNTER ═══════ */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const started = useMountDelay(200);
  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = Math.ceil(end / 60);
    const timer = setInterval(() => {
      cur += step;
      if (cur >= end) { setCount(end); clearInterval(timer); } else setCount(cur);
    }, 30);
    return () => clearInterval(timer);
  }, [started, end]);
  return <>{count}{suffix}</>;
}

/* ═══════ STATS BAR ═══════ */
function StatsBar() {
  const show = useMountDelay(800);
  const stats = [
    { value: 250, suffix: "+", label: "Tamamlanan Proje", icon: Building2 },
    { value: 15, suffix: "+", label: "Yıllık Deneyim", icon: Clock },
    { value: 98, suffix: "%", label: "Müşteri Memnuniyeti", icon: TrendingUp },
    { value: 35, suffix: "+", label: "Profesyonel Ekip", icon: Users },
  ];

  return (
    <div className={`absolute bottom-0 inset-x-0 z-20 transition-all duration-700 ${show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
      <div className="border-t border-white/[0.04] bg-[#0b0f1a]/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 group cursor-default">
              <div className="h-10 w-10 rounded-lg bg-[#06d6a0]/[0.06] border border-[#06d6a0]/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#06d6a0]/20 transition-colors">
                <stat.icon className="h-4 w-4 text-[#06d6a0]/60" />
              </div>
              <div>
                <p className="text-[20px] md:text-[24px] font-black text-white counter-glow leading-none">
                  {show ? <Counter end={stat.value} suffix={stat.suffix} /> : "0"}
                </p>
                <p className="text-[9px] font-semibold text-zinc-600 uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════ HERO ═══════ */
function Hero() {
  const s1 = useMountDelay(100);
  const s2 = useMountDelay(200);
  const s3 = useMountDelay(400);
  const s4 = useMountDelay(600);
  const s5 = useMountDelay(700);
  const s6 = useMountDelay(900);
  const s7 = useMountDelay(1100);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <Background />

      <div className="relative z-10 flex-1 flex items-center justify-center pt-24 pb-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className={`transition-all duration-700 ${s1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#06d6a0]/10 bg-[#06d6a0]/[0.04] px-4 py-1.5 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-[#06d6a0] animate-ping opacity-40" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-[#06d6a0]" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#06d6a0]/60 uppercase">Ankara'nın Güvenilir İnşaat Partneri</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-8">
            <div className={`transition-all duration-800 ${s2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="block text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-black leading-[0.85] tracking-tight text-grad-white">Daha İyi Bir</span>
            </div>
            <div className={`transition-all duration-800 ${s3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="block text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] tracking-tight text-grad-teal mt-1">Gelecek İnşa</span>
            </div>
            <div className={`transition-all duration-800 ${s4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="block text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] tracking-tight text-grad-coral mt-1">Ediyoruz.</span>
            </div>
          </h1>

          {/* Description */}
          <div className={`transition-all duration-700 ${s5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-[15px] sm:text-[16px] text-zinc-500 max-w-xl mx-auto leading-relaxed mb-10">
              15 yılı aşkın tecrübemizle konut, villa ve ticari projelerde
              <span className="text-zinc-300"> hayalinizdeki yaşam alanlarını</span> kaliteli
              ve güvenilir şekilde hayata geçiriyoruz.
            </p>
          </div>

          {/* CTA */}
          <div className={`transition-all duration-700 ${s6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              <a href="#" className="a-shimmer group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#06d6a0] to-[#0ea5e9] text-[13px] font-bold text-[#0b0f1a] shadow-lg shadow-[#06d6a0]/15 hover:shadow-[#06d6a0]/25 transition-shadow">
                Projelerimizi Gör
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="a-shimmer flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-[13px] font-semibold text-zinc-300 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all">
                <Phone className="h-4 w-4 text-[#06d6a0]" />
                Ücretsiz Keşif
              </a>
            </div>
          </div>

          {/* Tags */}
          <div className={`transition-all duration-700 ${s7 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: HardHat, label: "Konut & Villa" },
                { icon: Building2, label: "Ticari Yapı" },
                { icon: Hammer, label: "Restorasyon" },
                { icon: Ruler, label: "Anahtar Teslim" },
                { icon: Shield, label: "Garantili" },
              ].map((tag) => (
                <div key={tag.label} className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-white/[0.04] bg-white/[0.01] hover:border-[#06d6a0]/10 hover:bg-[#06d6a0]/[0.02] transition-all cursor-default">
                  <tag.icon className="h-3 w-3 text-zinc-600" />
                  <span className="text-[10.5px] font-semibold text-zinc-500">{tag.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2" style={{ animation: "slide-up 0.8s 1.2s forwards", opacity: 0 }}>
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-700">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#06d6a0]/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-3 bg-[#06d6a0]/80 animate-bounce" />
        </div>
      </div>

      <StatsBar />
    </section>
  );
}

/* ═══════ FIXED BUTTONS ═══════ */
function FixedButtons() {
  const show = useMountDelay(1500);
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-2.5">
      {[
        { icon: Phone, label: "Ara", href: "tel:+903121234567", bg: "bg-[#06d6a0]", shadow: "shadow-[#06d6a0]/20" },
        { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/903121234567", bg: "bg-[#0ea5e9]", shadow: "shadow-[#0ea5e9]/20" },
        { icon: MapPin, label: "Konum", href: "https://maps.google.com/?q=Cankaya,Ankara", bg: "bg-[#ff6b6b]", shadow: "shadow-[#ff6b6b]/20" },
      ].map((btn, i) => (
        <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-end group"
          style={{ animation: `slide-up 0.5s ${i * 100}ms cubic-bezier(0.16,1,0.3,1) forwards`, opacity: 0 }}>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] font-bold text-white bg-[#0b0f1a]/90 backdrop-blur-sm px-2.5 py-1 rounded-lg whitespace-nowrap shadow-lg translate-x-2 group-hover:translate-x-0 mr-2 border border-white/[0.06]">
            {btn.label}
          </span>
          <span className={`flex h-11 w-11 items-center justify-center rounded-full ${btn.bg} shadow-lg ${btn.shadow} hover:scale-110 active:scale-90 transition-transform`}>
            <btn.icon className="h-[18px] w-[18px] text-white" />
          </span>
        </a>
      ))}
    </div>
  );
}

/* ═══════ PAGE ═══════ */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f1a]">
      <Header />
      <Hero />
      <FixedButtons />
    </main>
  );
}
