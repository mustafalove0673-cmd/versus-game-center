"use client";
import { useState, useEffect } from "react";
import {
  Phone, MapPin, Menu, X, Building2,
  Hammer, Shield, Award, Clock, MessageCircle,
  ArrowUpRight, Star, Zap, Eye,
} from "lucide-react";

/* ─── INTRO LOADER ─── */
function IntroLoader({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  useEffect(() => {
    if (phase === 2) { const t = setTimeout(onFinish, 400); return () => clearTimeout(t); }
  }, [phase, onFinish]);

  if (phase >= 2) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050506]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-amber-500/20 anim-spin-slow" />
          <div className="absolute inset-2 rounded-full border border-amber-500/10 anim-spin-reverse" />
          <div className={`h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/25 transition-all duration-500 ${phase >= 1 ? "scale-100 rotate-0" : "scale-0 -rotate-180"}`}>
            <Building2 className="h-5 w-5 text-black" strokeWidth={2} />
          </div>
        </div>
        <div className={`transition-all duration-500 ${phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="text-[20px] font-black tracking-[0.35em] text-white">ELİT YAPI</span>
        </div>
      </div>
    </div>
  );
}

/* ─── FLOATING SHAPES ─── */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[12%] left-[8%] anim-float-1">
        <svg width="100" height="100" viewBox="0 0 100 100" className="anim-spin-slow">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(245,158,11,0.06)" strokeWidth="1" strokeDasharray="8 6" />
        </svg>
      </div>
      <div className="absolute top-[22%] left-[18%] w-2 h-2 rounded-full bg-emerald-500/50 anim-scale-pulse" />
      <div className="absolute top-[40%] left-[5%] anim-float-2">
        <svg width="40" height="40" viewBox="0 0 40 40" className="anim-spin-reverse">
          <rect x="4" y="4" width="32" height="32" fill="none" stroke="rgba(139,92,246,0.08)" strokeWidth="1" rx="2" />
        </svg>
      </div>
      <div className="absolute bottom-[22%] left-[10%] anim-float-3">
        <svg width="35" height="35" viewBox="0 0 35 35" className="anim-spin-slow" style={{ animationDuration: "30s" }}>
          <polygon points="17,2 33,33 2,33" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute top-[35%] left-[15%]">
        <div className="w-14 h-14 rounded-full border border-amber-500/[0.04] anim-scale-pulse" />
      </div>
      <div className="absolute top-[15%] right-[12%] w-[140px] h-[140px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-amber-500/20 anim-scale-pulse" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500/40 anim-orbit-1" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-500/40 anim-orbit-2" />
        </div>
        <div className="absolute inset-[15%] rounded-full border border-white/[0.02]" />
        <div className="absolute inset-[35%] rounded-full border border-white/[0.03]" />
      </div>
      <div className="absolute top-[50%] right-[8%] anim-float-2">
        <svg width="25" height="25" viewBox="0 0 25 25" className="anim-spin-slow" style={{ animationDuration: "25s" }}>
          <rect x="4" y="4" width="17" height="17" fill="none" stroke="rgba(245,158,11,0.07)" strokeWidth="1" transform="rotate(45 12.5 12.5)" />
        </svg>
      </div>
      <div className="absolute bottom-[25%] right-[10%] w-12 h-12 bg-emerald-500/[0.03] anim-blob blur-sm" />
      <div className="absolute top-[30%] left-[40%] w-1 h-1 rounded-full bg-rose-500/30 anim-scale-pulse" />
      <div className="absolute top-[65%] left-[55%] w-1 h-1 rounded-full bg-cyan-500/25 anim-scale-pulse" />
      <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-amber-500/[0.02] rounded-full blur-[120px] anim-pulse-glow" />
    </div>
  );
}

/* ─── HEADER ─── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ${scrolled ? "glass-strong py-2 shadow-lg shadow-black/30" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20">
            <Building2 className="h-4 w-4 text-black" strokeWidth={2.5} />
          </div>
          <span className="text-[13px] font-black tracking-[0.18em] text-white">ELİT YAPI</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] px-1.5 py-1">
          {["Projeler", "Hakkımızda", "İletişim"].map((label) => (
            <button key={label} className="px-4 py-2 text-[11px] font-semibold text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/[0.04]">{label}</button>
          ))}
          <a href="tel:+903121234567" className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-[10.5px] font-bold text-black">
            <Phone className="h-3 w-3" /> Hemen Ara
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] text-zinc-400">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#050506]/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-1">
            {["Projeler", "Hakkımızda", "İletişim"].map((l) => (
              <button key={l} className="block w-full text-left px-4 py-3 text-[13px] font-semibold text-zinc-300 hover:text-amber-400 rounded-xl">{l}</button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── STATS MARQUEE ─── */
function StatsMarquee() {
  const stats = [
    { value: "250+", label: "Proje" }, { value: "15+", label: "Yıl" },
    { value: "35+", label: "Mühendis" }, { value: "%98", label: "Memnuniyet" },
    { value: "12K+", label: "m² Alan" }, { value: "24/7", label: "Destek" },
  ];
  return (
    <div className="absolute bottom-0 inset-x-0 z-20 py-4 marquee-mask">
      <div className="flex whitespace-nowrap anim-marquee" style={{ width: "max-content" }}>
        {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-3 select-none">
            <span className="text-[18px] sm:text-[22px] font-black text-white/[0.06]">{s.value}</span>
            <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.15em]">{s.label}</span>
            <span className="ml-8 w-1 h-1 rounded-full bg-amber-500/10" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── FADE IN ─── */
function FadeIn({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div className={`transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>
      {children}
    </div>
  );
}

/* ─── HERO ─── */
function Hero({ ready }: { ready: boolean }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#050506]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] -left-40 w-[600px] h-[600px] bg-amber-500/[0.06] rounded-full blur-[150px] anim-float-1" />
        <div className="absolute bottom-[5%] -right-40 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[140px] anim-float-2" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-500/[0.025] rounded-full blur-[180px] anim-pulse-glow" />
        <div className="absolute bottom-[30%] left-[20%] w-[250px] h-[250px] bg-rose-500/[0.02] rounded-full blur-[100px] anim-float-3" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      {ready && <FloatingShapes />}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/8 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 pb-40 sm:pt-40 sm:pb-44">
        <div className="max-w-2xl">
          <FadeIn delay={100}>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-500/15 bg-amber-500/[0.04] px-4 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-50" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-amber-500" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400/70 uppercase">Premium İnşaat & Mimarlık</span>
            </div>
          </FadeIn>

          <h1 className="text-[44px] sm:text-[60px] md:text-[76px] lg:text-[92px] font-black leading-[0.9] tracking-tight text-white mb-6">
            <FadeIn delay={250}><span className="block">Hayallerinizi</span></FadeIn>
            <FadeIn delay={500}><span className="block text-grad-gold mt-1 sm:mt-2">İnşa</span></FadeIn>
            <FadeIn delay={800}>
              <span className="block mt-1 sm:mt-2 inline-flex items-center gap-3 sm:gap-4">
                Ediyoruz
                <span className="inline-block w-8 sm:w-12 h-[2px] bg-gradient-to-r from-amber-500/60 to-transparent" />
              </span>
            </FadeIn>
          </h1>

          <FadeIn delay={1000}>
            <p className="text-[14px] sm:text-[15px] text-zinc-500 max-w-lg leading-relaxed mb-10">
              Konut, villa, ticari yapı ve restorasyon projelerinde
              <br className="hidden sm:block" />
              15 yılı aşkın tecrübemizle <span className="text-zinc-300 font-medium">kalitenin ve güvenin</span> adresiyiz.
            </p>
          </FadeIn>

          <FadeIn delay={1200}>
            <div className="flex flex-wrap gap-3 mb-14">
              <a href="#" className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/[0.08] px-7 py-3.5 text-[13px] font-bold text-amber-400 hover:bg-amber-500/[0.15] transition-colors">
                Projelerimiz <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#" className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-7 py-3.5 text-[13px] font-semibold text-zinc-300 hover:bg-white/[0.05] transition-all">
                <Phone className="h-4 w-4 text-amber-500" /> Ücretsiz Keşif
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={1400}>
            <div className="flex flex-wrap gap-2 mb-12">
              {[
                { icon: Shield, label: "Garantili", color: "text-amber-500/70" },
                { icon: Award, label: "Kaliteli", color: "text-emerald-500/70" },
                { icon: Clock, label: "Zamanında", color: "text-violet-500/70" },
                { icon: Zap, label: "Modern", color: "text-rose-500/70" },
              ].map((chip) => (
                <div key={chip.label} className="flex items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.015] px-3 py-1.5">
                  <chip.icon className={`h-3 w-3 ${chip.color}`} />
                  <span className="text-[10px] font-semibold text-zinc-500">{chip.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={1600}>
            <div className="flex items-center gap-6 sm:gap-10">
              {[
                { value: "250+", label: "Proje" },
                { value: "15+", label: "Yıl Deneyim" },
                { value: "%98", label: "Memnuniyet" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[22px] sm:text-[28px] font-black text-grad-gold leading-none">{stat.value}</p>
                  <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.15em] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Right decoration — desktop */}
      <div className={`absolute top-1/2 right-[8%] -translate-y-1/2 z-10 hidden lg:block pointer-events-none transition-all duration-1000 ${ready ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
        <div className="relative w-[260px] h-[320px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-amber-500/[0.04] anim-spin-slow" />
          <div className="absolute inset-4 rounded-full border border-emerald-500/[0.03] anim-spin-reverse" />
          <div className="absolute inset-10 rounded-full border border-violet-500/[0.02] anim-spin-slow" style={{ animationDuration: "30s" }} />
          <div className="anim-float-1">
            <Building2 className="w-20 h-20 text-white/[0.03]" strokeWidth={0.5} />
          </div>
          {[
            { icon: Hammer, pos: "top-0 right-4", color: "#f59e0b" },
            { icon: Star, pos: "top-12 -left-2", color: "#10b981" },
            { icon: Eye, pos: "bottom-8 right-0", color: "#8b5cf6" },
          ].map((item, i) => (
            <div key={i} className={`absolute ${item.pos} transition-all duration-500 ${ready ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} style={{ transitionDelay: `${1400 + i * 200}ms` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-lg" style={{ background: `${item.color}08`, borderColor: `${item.color}15` }}>
                <item.icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}>
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-600">Keşfet</span>
        <div className="w-5 h-8 rounded-full border border-zinc-700/30 flex justify-center pt-1.5 anim-float-1">
          <div className="w-1 h-1.5 rounded-full bg-amber-500/60 animate-pulse" />
        </div>
      </div>

      <StatsMarquee />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050506] to-transparent pointer-events-none z-[15]" />
    </section>
  );
}

/* ─── FIXED BUTTONS ─── */
function FixedButtons({ ready }: { ready: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => { if (ready) { const t = setTimeout(() => setShow(true), 500); return () => clearTimeout(t); } }, [ready]);
  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col gap-2.5">
      {[
        { icon: Phone, label: "Ara", href: "tel:+903121234567", from: "from-amber-400", to: "to-amber-600" },
        { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/903121234567", from: "from-emerald-400", to: "to-emerald-600" },
        { icon: MapPin, label: "Konum", href: "https://maps.google.com/?q=Cankaya,Ankara", from: "from-violet-400", to: "to-violet-600" },
      ].map((btn) => (
        <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-end group">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] font-bold text-white bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-lg whitespace-nowrap shadow-lg translate-x-2 group-hover:translate-x-0 mr-2">
            {btn.label}
          </span>
          <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${btn.from} ${btn.to} shadow-lg hover:scale-110 active:scale-90 transition-transform`}>
            <btn.icon className="h-[18px] w-[18px] text-white" />
          </span>
        </a>
      ))}
    </div>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  const [ready, setReady] = useState(false);
  return (
    <main className="min-h-screen bg-[#050506]">
      <IntroLoader onFinish={() => setReady(true)} />
      <Header />
      <Hero ready={ready} />
      <FixedButtons ready={ready} />
    </main>
  );
}
