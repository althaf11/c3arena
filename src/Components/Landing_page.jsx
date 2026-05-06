import { useState, useEffect, useRef } from "react";

// ─── Hook: Intersection Observer for scroll animations ───────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const Icon = {
  Resume: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/>
      <line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="12" y2="15"/>
    </svg>
  ),
  Bell: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  App: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  Video: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
    </svg>
  ),
  Guidance: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Book: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  Card: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  Test: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ),
  Rocket: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Menu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 ml-1">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Trophy: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="11"/>
      <path d="M6.5 6.5l-3 3a2 2 0 0 0 0 2.83L12 21l8.5-8.67a2 2 0 0 0 0-2.83l-3-3"/>
      <path d="M6.5 6.5a5 5 0 0 1 11 0"/>
    </svg>
  ),
};

// ─── Animated Section Wrapper ─────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Home", "Services", "About", "Contact"];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-md shadow-violet-300 group-hover:scale-105 transition-transform">
            <Icon.Rocket />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
            Career<span className="text-orange-500">Portal</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-violet-500 after:transition-all hover:after:w-full"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-orange-300 hover:-translate-y-0.5 transition-all duration-200">
            Login / Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-700" onClick={() => setOpen(!open)}>
          {open ? <Icon.X /> : <Icon.Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white/98 backdrop-blur border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold">
            Login / Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow blob */}
      <div className="absolute -inset-8 bg-gradient-to-br from-violet-400/30 via-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl" />
      {/* Main card */}
      <div className="relative rounded-3xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-2xl shadow-violet-200/50 p-6 overflow-hidden">
        {/* Decorative top bar */}
        <div className="flex items-center gap-1.5 mb-5">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
          <div className="flex-1 h-5 rounded-lg bg-slate-100 ml-2" />
        </div>

        {/* Profile area */}
        <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">A</div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Aryan Mehta</div>
            <div className="text-xs text-orange-500 font-medium">B.Tech Student · Mumbai</div>
          </div>
          <div className="ml-auto">
            <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">Active</div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[["Resume", "Ready", "violet"], ["Tests", "12 Done", "indigo"], ["Score", "94%", "cyan"]].map(([label, val, color]) => (
            <div key={label} className={`rounded-xl p-3 bg-${color}-50 border border-${color}-100 text-center`}>
              <div className={`font-bold text-${color}-700 text-sm`}>{val}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Progress bars */}
        <div className="space-y-3">
          {[["Aptitude", 88, "from-violet-500 to-indigo-500"], ["Communication", 75, "from-indigo-500 to-cyan-500"], ["Technical", 92, "from-cyan-500 to-teal-500"]].map(([skill, pct, grad]) => (
            <div key={skill}>
              <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                <span>{skill}</span><span>{pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${grad} transition-all duration-1000`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA mini */}
        <div className="mt-5 flex items-center gap-3">
          <div className="flex-1 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
            <span className="text-white text-xs font-semibold">View Full Profile →</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-violet-100 cursor-pointer transition-colors">
            <Icon.Bell />
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-3 -right-4 bg-white rounded-2xl px-3 py-2 shadow-xl border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700 animate-bounce" style={{ animationDuration: "3s" }}>
        <span className="text-amber-500">🏆</span> Top Scorer Today
      </div>
      <div className="absolute -bottom-3 -left-4 bg-white rounded-2xl px-3 py-2 shadow-xl border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
        <span className="text-violet-500">✨</span> Resume Generated
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-violet-50/50 to-indigo-100/60" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-violet-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-200/20 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-sm font-semibold mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
            India's #1 Student Career Platform
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            Your Complete<br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
              Career Growth
            </span><br />
            Platform
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
            Build resumes, prepare for exams, get guidance, and access everything in one place. Empowering every student to land their dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-base hover:shadow-xl hover:shadow-orange-300 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Get Started <Icon.ArrowRight />
            </button>
            <button className="px-8 py-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-base hover:border-violet-300 hover:bg-orange-50hover:text-violet-700 transition-all duration-300 flex items-center justify-center gap-2">
              Explore Services
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D", "E"].map((l, i) => (
                <div key={l} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md"
                  style={{ background: `hsl(${250 + i * 15}, 70%, 55%)` }}>
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">50,000+ students</div>
              <div className="text-xs text-slate-500">already growing their careers</div>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center lg:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
const services = [
  {
    icon: Icon.Resume,
    title: "Resume Builder",
    desc: "Generate professional, ATS-optimized resumes in minutes — completely free.",
    gradient: "from-orange-500 to-amber-500",
    light: "from-orange-50 to-amber-50",
    border: "border-orange-100",
  },
  {
    icon: Icon.Bell,
    title: "Alerts Hub",
    desc: "Stay ahead with real-time updates on jobs, exams, scholarships, and deadlines.",
    gradient: "from-amber-500 to-orange-500",
    light: "from-amber-50 to-orange-50",
    border: "border-amber-100",
  },
  {
    icon: Icon.App,
    title: "Career App Access",
    desc: "One-click access to the best career tools and productivity apps for students.",
    gradient: "from-sky-500 to-blue-600",
    light: "from-sky-50 to-blue-50",
    border: "border-sky-100",
  },
  {
    icon: Icon.Video,
    title: "Crash Courses",
    desc: "Watch bite-sized, expert-curated videos to master in-demand skills fast.",
    gradient: "from-rose-500 to-pink-600",
    light: "from-rose-50 to-pink-50",
    border: "border-rose-100",
  },
  {
    icon: Icon.Guidance,
    title: "Career Counselling",
    desc: "1-on-1 sessions with certified mentors who guide you toward the right path.",
    gradient: "from-emerald-500 to-teal-600",
    light: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
  {
    icon: Icon.Book,
    title: "E-Library",
    desc: "Access thousands of study materials, notes, books, and resources — anytime.",
    gradient: "from-indigo-500 to-violet-600",
    light: "from-indigo-50 to-violet-50",
    border: "border-indigo-100",
  },
  {
    icon: Icon.Card,
    title: "E-Access Card",
    desc: "Unlock free counselling, higher studies planning, and exclusive course discounts.",
    gradient: "from-fuchsia-500 to-pink-600",
    light: "from-fuchsia-50 to-pink-50",
    border: "border-fuchsia-100",
    badge: "Premium",
  },
  {
    icon: Icon.Test,
    title: "E-Preparation",
    desc: "Sharpen your skills with full-length mock tests, analytics, and performance reports.",
    gradient: "from-cyan-500 to-sky-600",
    light: "from-cyan-50 to-sky-50",
    border: "border-cyan-100",
  },
];

function ServiceCard({ service, delay }) {
  const IconComp = service.icon;
  return (
    <FadeIn delay={delay}>
      <div className={`group relative rounded-3xl bg-gradient-to-br ${service.light} border ${service.border} p-6 hover:scale-[1.04] hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 cursor-pointer overflow-hidden h-full`}>
        {service.badge && (
          <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-fuchsia-500 to-pink-500 shadow-sm">
            {service.badge}
          </div>
        )}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <IconComp />
        </div>
        <h3 className="font-bold text-lg text-slate-900 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{service.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
        <div className={`mt-4 flex items-center gap-1 text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          Learn more <Icon.ArrowRight />
        </div>
      </div>
    </FadeIn>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-4">
              Everything You Need
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
              Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From resume building to mock tests — we've packed every career tool a student needs into one powerful platform.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── C3 Arena Section ─────────────────────────────────────────────────────────
function ArenaSection() {
  const [ref, inView] = useInView();
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
      </div>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-12 text-center overflow-hidden relative">
              {/* Glow inner */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-semibold mb-6">
                  <Icon.Zap />
                  Special Feature — Time Machine
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Introducing{" "}
                  <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                    C3 Arena 🚀
                  </span>
                </h2>

                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  We conduct skill-based exams to help students test and improve their abilities in a competitive environment. Compete, learn, and rise to the top.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {["Skill Assessment", "Live Rankings", "Certificates", "Prizes", "Monthly Challenges"].map((f) => (
                    <div key={f} className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-white font-medium backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
                      {f}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[["10K+", "Participants"], ["200+", "Exams Conducted"], ["95%", "Satisfaction"]].map(([num, label]) => (
                    <div key={label} className="text-center">
                      <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: "'Sora', sans-serif" }}>{num}</div>
                      <div className="text-sm text-slate-400 mt-1">{label}</div>
                    </div>
                  ))}
                </div>

                <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-bold text-base hover:shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto">
                  Join Arena <Icon.ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
const whyUs = [
  {
    icon: Icon.Globe,
    title: "All-in-One Platform",
    desc: "Resume, tests, counselling, e-library, and more — zero tab switching.",
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    icon: Icon.Shield,
    title: "Free + Premium Benefits",
    desc: "Start free with powerful tools, upgrade for exclusive mentorship and sessions.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Icon.Zap,
    title: "Student-First Design",
    desc: "Built by students, for students. Intuitive, fast, and distraction-free.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Icon.Trophy,
    title: "Real Career Growth",
    desc: "Thousands of students have landed internships, jobs, and admissions through us.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

function WhyUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-violet-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
              Why Students Love Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
              Why <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Choose Us?</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              We're not just another platform — we're your career co-pilot from college to career.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="rounded-3xl bg-white border border-slate-100 p-6 hover:shadow-xl hover:shadow-slate-200/70 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                    <IconComp />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Checklist */}
        <FadeIn delay={200}>
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 shadow-2xl shadow-violet-300/30">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                Everything included. Zero confusion.
              </h3>
              <p className="text-violet-200 text-sm leading-relaxed">
                Students on CareerPortal are 3x more likely to get placed within 6 months.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Free resume builder", "Mock tests & analytics", "Expert counsellors", "Live exam arena", "E-Library access", "Career alerts"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-white text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-emerald-300">
                    <Icon.Check />
                  </div>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Tech CSE, NIT Trichy",
    text: "CareerPortal's resume builder helped me crack my first internship at a product company. The mock tests are incredibly close to real placements!",
    avatar: "P",
    color: "from-violet-500 to-indigo-600",
    rating: 5,
  },
  {
    name: "Rahul Desai",
    role: "MBA Student, IIM Ahmedabad",
    text: "The career counselling sessions were a game-changer. My counsellor helped me chart out my MBA journey step by step. Couldn't be happier!",
    avatar: "R",
    color: "from-emerald-500 to-teal-600",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "B.Com Graduate, Pune",
    text: "The E-Access Card got me free counselling and heavy discounts on certification courses. It literally paid for itself 5x over.",
    avatar: "S",
    color: "from-rose-500 to-pink-600",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold mb-4">
              Student Stories
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
              What Students <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Say</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-100 p-6 hover:shadow-xl hover:shadow-slate-200/70 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400"><Icon.Star /></span>
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed flex-1 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-base shadow-md`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
function CTA() {
  const [ref, inView] = useInView();
  return (
    <section className="py-24 bg-gradient-to-br from-violet-50 to-indigo-100/60">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          ref={ref}
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.96)" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-sm font-semibold mb-6">
            🎓 Join 50,000+ Students
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
            Start Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Career Journey
            </span>{" "}
            Today
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Sign up for free and unlock the tools, guidance, and community you need to launch your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-300/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Get Started Now <Icon.ArrowRight />
            </button>
            <button className="px-10 py-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-lg hover:border-violet-300 hover:bg-orange-50hover:text-violet-700 transition-all duration-300">
              Watch Demo
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-500">No credit card required · Free forever plan available</p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-md shadow-violet-800">
                <Icon.Rocket />
              </div>
              <span className="font-extrabold text-xl text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
                Career<span className="text-orange-400">Portal</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              India's most comprehensive student career platform. Build, prepare, grow — all in one place.
            </p>
            <div className="flex items-center gap-3">
              {[Icon.Twitter, Icon.LinkedIn, Icon.Instagram].map((Ic, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-orange-500 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200">
                  <Ic />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="font-bold text-white text-sm mb-4">Services</div>
            <ul className="space-y-3">
              {["Resume Builder", "Crash Courses", "E-Library", "E-Preparation", "C3 Arena"].map((l) => (
                <li key={l}>
                  <a href="#services" className="text-sm text-slate-500 hover:text-orange-400 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-sm mb-4">Company</div>
            <ul className="space-y-3">
              {["About Us", "Contact", "Privacy Policy", "Terms of Use", "Careers"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-500 hover:text-orange-400 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2025 CareerPortal. All rights reserved. Made with ❤️ for Indian students.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-slate-600 hover:text-orange-400 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-slate-600 hover:text-orange-400 transition-colors">Terms</a>
            <a href="#" className="text-xs text-slate-600 hover:text-orange-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function Landing_page() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(el.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&display=swap');
        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; }
      `}</style>
      <div className="font-sans antialiased bg-white text-slate-900 min-h-screen" style={{ fontFamily: "system-ui, sans-serif" }}>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <ArenaSection />
          <WhyUs />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}