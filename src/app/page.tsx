"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Phone,
  MapPin,
  Menu,
  X,
  Building2,
  Hammer,
  Shield,
  Award,
  Clock,
  MessageCircle,
  ArrowUpRight,
  Star,
  Zap,
  Eye,
} from "lucide-react";

/* ═══════════════════════════════════════════════════
   INTRO LOADER — Cinematic Entrance
   ═══════════════════════════════════════════════════ */
function IntroLoader() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => setPhase(3), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050506]"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated rings */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-amber-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-amber-500/10"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "radial-gradient(circle, transparent 48%, rgba(245,158,11,0.15) 49%, transparent 50%)",
                  backgroundSize: "12px 12px",
                }}
              />
              {/* Logo */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={phase >= 1 ? { scale: 1, rotate: 0 } : {}}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/25"
              >
                <Building2 className="h-5 w-5 text-black" strokeWidth={2} />
              </motion.div>
            </div>

            {/* Title reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[20px] font-black tracking-[0.35em] text-white">
                ELİT YAPI
              </span>
            </motion.div>

            {/* Animated line */}
            <div className="relative w-16 h-[2px] bg-white/[0.04] overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={phase >= 2 ? { x: "100%" } : {}}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-amber-500 to-amber-300"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════
   FLOATING SHAPES — Decorative Geometry
   ═══════════════════════════════════════════════════ */
function FloatingShapes({ ready }: { ready: boolean }) {
  return (
    <AnimatePresence>
      {ready && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          {/* Large rotating wireframe circle — top-left */}
          <div className="absolute top-[12%] left-[8%] anim-float-1">
            <svg width="120" height="120" viewBox="0 0 120 120" className="anim-spin-slow">
              <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(245,158,11,0.06)" strokeWidth="1" strokeDasharray="8 6" className="anim-dash-flow" />
            </svg>
          </div>

          {/* Small emerald dot */}
          <div className="absolute top-[22%] left-[18%] w-2 h-2 rounded-full bg-emerald-500/50 anim-scale-pulse" />

          {/* Rotating square outline — left */}
          <div className="absolute top-[40%] left-[5%] anim-float-2">
            <svg width="50" height="50" viewBox="0 0 50 50" className="anim-spin-reverse">
              <rect x="5" y="5" width="40" height="40" fill="none" stroke="rgba(139,92,246,0.08)" strokeWidth="1" rx="2" />
            </svg>
          </div>

          {/* Horizontal dashed line — left */}
          <div className="absolute top-[55%] left-[3%] anim-slide-r">
            <svg width="80" height="2" viewBox="0 0 80 2">
              <line x1="0" y1="1" x2="80" y2="1" stroke="rgba(245,158,11,0.1)" strokeWidth="1" strokeDasharray="4 8" className="anim-dash-flow" />
            </svg>
          </div>

          {/* Triangle — bottom-left */}
          <div className="absolute bottom-[22%] left-[10%] anim-float-3">
            <svg width="40" height="40" viewBox="0 0 40 40" className="anim-spin-slow" style={{ animationDuration: "30s" }}>
              <polygon points="20,2 38,38 2,38" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="1" />
            </svg>
          </div>

          {/* Pulsing ring — left-center */}
          <div className="absolute top-[35%] left-[15%]">
            <div className="w-16 h-16 rounded-full border border-amber-500/[0.04] anim-scale-pulse" />
          </div>

          {/* Orbiting dots group — top-right */}
          <div className="absolute top-[15%] right-[12%] w-[160px] h-[160px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-amber-500/20 anim-scale-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500/40 anim-orbit-1" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500/40 anim-orbit-2" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-rose-500/30 anim-orbit-3" />
            </div>
            <div className="absolute inset-[10%] rounded-full border border-white/[0.02]" />
            <div className="absolute inset-[30%] rounded-full border border-white/[0.03]" />
          </div>

          {/* Vertical dashed line — right */}
          <div className="absolute top-[25%] right-[6%] anim-slide-l">
            <svg width="2" height="100" viewBox="0 0 2 100">
              <line x1="1" y1="0" x2="1" y2="100" stroke="rgba(16,185,129,0.1)" strokeWidth="1" strokeDasharray="4 8" className="anim-dash-flow" />
            </svg>
          </div>

          {/* Diamond — right */}
          <div className="absolute top-[50%] right-[8%] anim-float-2" style={{ animationDelay: "3s" }}>
            <svg width="30" height="30" viewBox="0 0 30 30" className="anim-spin-slow" style={{ animationDuration: "25s" }}>
              <rect x="5" y="5" width="20" height="20" fill="none" stroke="rgba(245,158,11,0.07)" strokeWidth="1" transform="rotate(45 15 15)" />
            </svg>
          </div>

          {/* Blob — bottom-right */}
          <div className="absolute bottom-[25%] right-[10%] w-14 h-14 bg-emerald-500/[0.03] anim-blob blur-sm" />

          {/* Dot cluster — right-bottom */}
          <div className="absolute bottom-[18%] right-[20%] flex items-center gap-1.5 anim-float-1" style={{ animationDelay: "5s" }}>
            <div className="w-1 h-1 rounded-full bg-amber-500/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500/25" />
            <div className="w-1 h-1 rounded-full bg-emerald-500/20" />
          </div>

          {/* Cross pattern — bottom-right */}
          <div className="absolute bottom-[35%] right-[4%]">
            <svg width="24" height="24" viewBox="0 0 24 24" className="anim-spin-slow" style={{ animationDuration: "35s" }}>
              <line x1="12" y1="2" x2="12" y2="22" stroke="rgba(139,92,246,0.06)" strokeWidth="1" />
              <line x1="2" y1="12" x2="22" y2="12" stroke="rgba(139,92,246,0.06)" strokeWidth="1" />
            </svg>
          </div>

          {/* Large faint glow blob — center */}
          <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/[0.02] rounded-full blur-[120px] anim-pulse-glow" />

          {/* Tiny scattered dots */}
          <div className="absolute top-[30%] left-[40%] w-1 h-1 rounded-full bg-rose-500/30 anim-scale-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[65%] left-[55%] w-1.5 h-1.5 rounded-full bg-cyan-500/25 anim-scale-pulse" style={{ animationDelay: "2.5s" }} />
          <div className="absolute top-[20%] left-[65%] w-1 h-1 rounded-full bg-amber-500/35 anim-scale-pulse" style={{ animationDelay: "0.8s" }} />
          <div className="absolute top-[70%] left-[35%] w-1 h-1 rounded-full bg-emerald-500/30 anim-scale-pulse" style={{ animationDelay: "3.2s" }} />

          {/* Floating horizontal line — bottom */}
          <div className="absolute bottom-[12%] left-[30%] anim-slide-r" style={{ animationDelay: "2s" }}>
            <svg width="120" height="1" viewBox="0 0 120 1">
              <line x1="0" y1="0.5" x2="120" y2="0.5" stroke="rgba(245,158,11,0.06)" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════
   HEADER — Minimal Floating Nav
   ═══════════════════════════════════════════════════ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ${
        scrolled
          ? "glass-strong py-2 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2.5"
        >
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20">
            <Building2 className="h-4 w-4 text-black" strokeWidth={2.5} />
          </div>
          <span className="text-[13px] font-black tracking-[0.18em] text-white">
            ELİT YAPI
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] px-1.5 py-1">
          {["Projeler", "Hakkımızda", "İletişim"].map((label) => (
            <button
              key={label}
              className="relative px-4 py-2 text-[11px] font-semibold text-zinc-400 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/[0.04] group"
            >
              {label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-amber-500 group-hover:w-4 transition-all duration-300" />
            </button>
          ))}
          <a
            href="tel:+903121234567"
            className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-[10.5px] font-bold text-black hover:shadow-lg hover:shadow-amber-500/20 transition-all"
          >
            <Phone className="h-3 w-3" />
            Hemen Ara
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] text-zinc-400"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1 bg-[#050506]/95 backdrop-blur-xl">
              {["Projeler", "Hakkımızda", "İletişim"].map((l) => (
                <button key={l} className="block w-full text-left px-4 py-3 text-[13px] font-semibold text-zinc-300 hover:text-amber-400 rounded-xl transition-colors">
                  {l}
                </button>
              ))}
              <a href="tel:+903121234567" className="flex items-center gap-2 px-4 py-3 text-[13px] font-bold text-amber-400">
                <Phone className="h-4 w-4" /> 0312 123 45 67
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ═══════════════════════════════════════════════════
   STATS BAR — Marquee strip
   ═══════════════════════════════════════════════════ */
function StatsMarquee() {
  const stats = [
    { value: "250+", label: "Proje" },
    { value: "15+", label: "Yıl" },
    { value: "35+", label: "Mühendis" },
    { value: "%98", label: "Memnuniyet" },
    { value: "12K+", label: "m² Alan" },
    { value: "24/7", label: "Destek" },
  ];
  return (
    <div className="absolute bottom-0 inset-x-0 z-20 py-4 marquee-mask bg-gradient-to-t from-transparent via-amber-500/[0.01] to-transparent">
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

/* ═══════════════════════════════════════════════════
   HERO — The ONLY Section
   ═══════════════════════════════════════════════════ */
function Hero() {
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={headerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* LAYER 1: Solid Base */}
      <div className="absolute inset-0 bg-[#050506]" />

      {/* LAYER 2: Gradient Mesh Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] -left-40 w-[600px] h-[600px] bg-amber-500/[0.06] rounded-full blur-[150px] anim-float-1" />
        <div className="absolute bottom-[5%] -right-40 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[140px] anim-float-2" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-500/[0.025] rounded-full blur-[180px] anim-pulse-glow" />
        <div className="absolute bottom-[30%] left-[20%] w-[250px] h-[250px] bg-rose-500/[0.02] rounded-full blur-[100px] anim-float-3" />
        <div className="absolute top-[15%] right-[25%] w-[200px] h-[200px] bg-cyan-500/[0.02] rounded-full blur-[90px] anim-float-1" style={{ animationDelay: "4s" }} />
      </div>

      {/* LAYER 3: Grid + Dot Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* LAYER 4: Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* LAYER 5: Floating Shapes */}
      <FloatingShapes ready={ready} />

      {/* LAYER 6: Gradient Edge Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/8 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-amber-500/8 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-emerald-500/8 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════
         CONTENT
         ═══════════════════════════════════════════ */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 pb-40 sm:pt-40 sm:pb-44"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-500/15 bg-amber-500/[0.04] px-4 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-50" />
              <span className="relative rounded-full h-1.5 w-1.5 bg-amber-500" />
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400/70 uppercase">
              Premium İnşaat & Mimarlık
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-[44px] sm:text-[60px] md:text-[76px] lg:text-[92px] font-black leading-[0.9] tracking-tight text-white mb-6">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Hayallerinizi
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={ready ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="block text-grad-gold mt-1 sm:mt-2"
            >
              İnşa
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block mt-1 sm:mt-2 inline-flex items-center gap-3 sm:gap-4"
            >
              <span>Ediyoruz</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={ready ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="inline-block w-8 sm:w-12 h-[2px] bg-gradient-to-r from-amber-500/60 to-transparent origin-left"
              />
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-[14px] sm:text-[15px] text-zinc-500 max-w-lg leading-relaxed mb-10"
          >
            Konut, villa, ticari yapı ve restorasyon projelerinde
            <br className="hidden sm:block" />
            15 yılı aşkın tecrübemizle{" "}
            <span className="text-zinc-300 font-medium">kalitenin ve güvenin</span>{" "}
            adresiyiz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            <div className="animated-border">
              <a
                href="#"
                className="relative z-10 flex items-center gap-2 rounded-[calc(1rem-1.5px)] bg-[#08080a] px-7 py-3.5 text-[13px] font-bold text-amber-400 hover:bg-[#0c0c0e] transition-colors"
              >
                Projelerimiz
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-7 py-3.5 text-[13px] font-semibold text-zinc-300 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 shimmer"
            >
              <Phone className="h-4 w-4 text-amber-500" />
              Ücretsiz Keşif
            </a>
          </motion.div>

          {/* Feature Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {[
              { icon: Shield, label: "Garantili", color: "text-amber-500/70" },
              { icon: Award, label: "Kaliteli", color: "text-emerald-500/70" },
              { icon: Clock, label: "Zamanında", color: "text-violet-500/70" },
              { icon: Zap, label: "Modern", color: "text-rose-500/70" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.015] px-3 py-1.5 hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-300 cursor-default"
              >
                <chip.icon className={`h-3 w-3 ${chip.color}`} />
                <span className="text-[10px] font-semibold text-zinc-500">{chip.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Mini Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="flex items-center gap-6 sm:gap-10"
          >
            {[
              { value: "250+", label: "Proje" },
              { value: "15+", label: "Yıl Deneyim" },
              { value: "%98", label: "Memnuniyet" },
            ].map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <p className="text-[22px] sm:text-[28px] font-black text-grad-gold leading-none group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.15em] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT SIDE — Decorative Building Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 100 }}
        className="absolute top-1/2 right-[5%] sm:right-[10%] -translate-y-1/2 z-10 hidden lg:block pointer-events-none"
      >
        <div className="relative w-[280px] h-[350px] flex items-center justify-center">
          {/* Background rings */}
          <div className="absolute inset-0 rounded-full border border-amber-500/[0.04] anim-spin-slow" />
          <div className="absolute inset-4 rounded-full border border-emerald-500/[0.03] anim-spin-reverse" />
          <div className="absolute inset-10 rounded-full border border-violet-500/[0.02] anim-spin-slow" style={{ animationDuration: "30s" }} />

          {/* Central icon */}
          <div className="relative">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Building2
                className="w-20 h-20 text-white/[0.03]"
                strokeWidth={0.5}
              />
            </motion.div>
          </div>

          {/* Floating mini cards */}
          {[
            { icon: Hammer, pos: "top-0 right-4", delay: 0, color: "#f59e0b" },
            { icon: Star, pos: "top-12 -left-2", delay: 0.3, color: "#10b981" },
            { icon: Eye, pos: "bottom-8 right-0", delay: 0.6, color: "#8b5cf6" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.5 + item.delay, type: "spring", stiffness: 200 }}
              className={`absolute ${item.pos}`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-lg"
                style={{
                  background: `${item.color}08`,
                  borderColor: `${item.color}15`,
                  boxShadow: `0 4px 20px ${item.color}08`,
                }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-600">
          Keşfet
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-zinc-700/30 flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-amber-500/60"
          />
        </motion.div>
      </motion.div>

      {/* Stats Marquee */}
      <StatsMarquee />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050506] to-transparent pointer-events-none z-[15]" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FIXED STICKY BUTTONS — WhatsApp, Phone, Location
   ═══════════════════════════════════════════════════ */
function FixedButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const buttons = [
    { icon: Phone, label: "Ara", href: "tel:+903121234567", from: "from-amber-400", to: "to-amber-600", shadow: "shadow-amber-500/20" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/903121234567", from: "from-emerald-400", to: "to-emerald-600", shadow: "shadow-emerald-500/20" },
    { icon: MapPin, label: "Konum", href: "https://maps.google.com/?q=Cankaya,Ankara", from: "from-violet-400", to: "to-violet-600", shadow: "shadow-violet-500/20" },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col gap-2.5">
      {buttons.map((btn, i) => (
        <AnimatePresence key={btn.label}>
          {show && (
            <motion.a
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30, scale: 0.7 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 250, damping: 20 }}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="group flex items-center gap-2 justify-end"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] font-bold text-white bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-lg whitespace-nowrap shadow-lg translate-x-2 group-hover:translate-x-0">
                {btn.label}
              </span>
              <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${btn.from} ${btn.to} shadow-lg ${btn.shadow}`}>
                <btn.icon className="h-[18px] w-[18px] text-white" />
              </span>
            </motion.a>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE — Only Hero
   ═══════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050506]">
      <IntroLoader />
      <Header />
      <Hero />
      <FixedButtons />
    </main>
  );
}
