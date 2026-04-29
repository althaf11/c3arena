import { useState, useEffect } from "react";

// ─── DUMMY DATA ────────────────────────────────────────────────────────────────

const CURRENT_USER = {
  id: "u_001",
  name: "Arjun Sharma",
  email: "arjun.sharma@bits-pilani.ac.in",
  college: "BITS Pilani",
  avatar: "AS",
  registered: false,
};

const EXAMS_DATA = {
  active: {
    id: "exam_py_2026",
    title: "Python Coding Challenge",
    subtitle: "Master the art of Pythonic thinking",
    language: "Python",
    prize: "₹50,000 Prize Pool",
    difficulty: "Intermediate",
    participants: 2847,
    startTime: new Date(Date.now() + 2 * 60 * 60 * 1000 + 34 * 60 * 1000),
    duration: "3 Hours",
    state: "active",
  },
  upcoming: {
    id: "exam_java_2026",
    title: "Java Spring Boot Challenge",
    subtitle: "Build enterprise-grade applications",
    language: "Java",
    prize: "₹75,000 Prize Pool",
    difficulty: "Advanced",
    participants: 1243,
    startTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    duration: "4 Hours",
    state: "upcoming",
  },
  none: null,
};

const RESOURCES = {
  Python: [
    {
      id: 1,
      type: "E-Material",
      icon: "📘",
      title: "Python Mastery Guide",
      desc: "300+ pages covering data structures, OOP, and advanced Python patterns.",
      tag: "PDF · 12 MB",
      color: "#3B82F6",
      bg: "rgba(59,130,246,0.08)",
    },
    {
      id: 2,
      type: "Mock Tests",
      icon: "🧪",
      title: "Python Practice Arena",
      desc: "50 curated problems — easy to hard — with solutions and explanations.",
      tag: "50 Problems",
      color: "#8B5CF6",
      bg: "rgba(139,92,246,0.08)",
    },
    {
      id: 3,
      type: "Crash Course",
      icon: "⚡",
      title: "Python in 48 Hours",
      desc: "High-intensity video course covering everything you need for the exam.",
      tag: "6h 20min",
      color: "#F59E0B",
      bg: "rgba(245,158,11,0.08)",
    },
  ],
  Java: [
    {
      id: 1,
      type: "E-Material",
      icon: "📘",
      title: "Java Spring Boot Deep Dive",
      desc: "Comprehensive guide covering Spring ecosystem, microservices, and REST APIs.",
      tag: "PDF · 18 MB",
      color: "#3B82F6",
      bg: "rgba(59,130,246,0.08)",
    },
    {
      id: 2,
      type: "Mock Tests",
      icon: "🧪",
      title: "Java Competitive Problems",
      desc: "60 problems focused on algorithms, design patterns, and Spring Boot scenarios.",
      tag: "60 Problems",
      color: "#8B5CF6",
      bg: "rgba(139,92,246,0.08)",
    },
    {
      id: 3,
      type: "Crash Course",
      icon: "⚡",
      title: "Java Sprint Bootcamp",
      desc: "Accelerated video series: Spring Boot, JPA, security, and deployment.",
      tag: "8h 45min",
      color: "#F59E0B",
      bg: "rgba(245,158,11,0.08)",
    },
  ],
};

const WINNERS = [
  {
    rank: 1,
    name: "Priya Nair",
    college: "IIT Bombay",
    prize: "₹25,000",
    avatar: "PN",
    bg: "#F59E0B",
    exam: "Python Challenge 2025",
  },
  {
    rank: 2,
    name: "Rohan Gupta",
    college: "NIT Trichy",
    prize: "₹15,000",
    avatar: "RG",
    bg: "#64748B",
    exam: "Python Challenge 2025",
  },
  {
    rank: 3,
    name: "Meera Pillai",
    college: "VIT Vellore",
    prize: "₹10,000",
    avatar: "MP",
    bg: "#CD7F32",
    exam: "Python Challenge 2025",
  },
];

// ─── UTILITIES ─────────────────────────────────────────────────────────────────

function getTimeLeft(targetDate) {
  const diff = Math.max(0, targetDate - Date.now());
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { h, m, s, total: diff };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function CountdownTimer({ targetDate, size = "md" }) {
  const [time, setTime] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const isLg = size === "lg";

  return (
    <div style={{ display: "flex", gap: isLg ? 12 : 8, alignItems: "flex-end" }}>
      {[
        { label: "HRS", val: time.h },
        { label: "MIN", val: time.m },
        { label: "SEC", val: time.s },
      ].map(({ label, val }, i) => (
        <div key={label} style={{ display: "flex", alignItems: "flex-end", gap: i < 2 ? (isLg ? 12 : 8) : 0 }}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 12,
                padding: isLg ? "12px 18px" : "8px 12px",
                minWidth: isLg ? 72 : 52,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: isLg ? 36 : 24,
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1,
                transition: "all 0.3s ease",
              }}
            >
              {pad(val)}
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", marginTop: 4, letterSpacing: 2 }}>
              {label}
            </div>
          </div>
          {i < 2 && (
            <div
              style={{
                fontSize: isLg ? 28 : 20,
                color: "rgba(255,255,255,0.5)",
                marginBottom: isLg ? 14 : 8,
                fontWeight: 700,
              }}
            >
              :
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ResourceCard({ resource }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1.5px solid",
        borderColor: hovered ? resource.color : "#E8EAF0",
        borderRadius: 20,
        padding: "24px",
        cursor: "pointer",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        boxShadow: hovered ? `0 16px 48px ${resource.color}22` : "0 2px 12px rgba(0,0,0,0.06)",
        flex: "1 1 220px",
        minWidth: 220,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 80,
          height: 80,
          background: resource.bg,
          borderRadius: "0 20px 0 80px",
        }}
      />
      <div style={{ fontSize: 32, marginBottom: 12 }}>{resource.icon}</div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 1.5,
          color: resource.color,
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {resource.type}
      </div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "#1A1D2E", marginBottom: 8, lineHeight: 1.3 }}>
        {resource.title}
      </div>
      <div style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.6, marginBottom: 16 }}>
        {resource.desc}
      </div>
      <div
        style={{
          display: "inline-block",
          background: resource.bg,
          color: resource.color,
          fontSize: 12,
          fontWeight: 600,
          padding: "4px 10px",
          borderRadius: 20,
        }}
      >
        {resource.tag}
      </div>
    </div>
  );
}

function WinnerCard({ winner }) {
  const isFirst = winner.rank === 1;
  const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
  const bgGrad = {
    1: "linear-gradient(135deg, #1A1D2E 0%, #2D1A5E 100%)",
    2: "linear-gradient(135deg, #1E2433 0%, #2A3045 100%)",
    3: "linear-gradient(135deg, #1E2433 0%, #2A2D1E 100%)",
  };

  return (
    <div
      style={{
        background: bgGrad[winner.rank],
        borderRadius: isFirst ? 24 : 20,
        padding: isFirst ? "32px 24px" : "24px 20px",
        textAlign: "center",
        border: isFirst ? "1.5px solid rgba(245,158,11,0.4)" : "1.5px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
        transform: isFirst ? "scale(1.05)" : "scale(1)",
        boxShadow: isFirst ? "0 24px 64px rgba(245,158,11,0.2)" : "0 8px 32px rgba(0,0,0,0.3)",
        flex: isFirst ? "1.15" : "1",
        minWidth: isFirst ? 200 : 170,
        alignSelf: isFirst ? "flex-start" : "flex-start",
        marginTop: isFirst ? 0 : 24,
      }}
    >
      {isFirst && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(90deg, #F59E0B, #FBBF24)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#1A1D2E",
            padding: "4px 16px",
            borderRadius: "0 0 12px 12px",
          }}
        >
          CHAMPION
        </div>
      )}
      <div style={{ fontSize: isFirst ? 36 : 28, marginBottom: 8, marginTop: isFirst ? 16 : 0 }}>
        {medals[winner.rank]}
      </div>
      <div
        style={{
          width: isFirst ? 64 : 52,
          height: isFirst ? 64 : 52,
          borderRadius: "50%",
          background: winner.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: isFirst ? 22 : 18,
          color: "#fff",
          margin: "0 auto 12px",
          border: isFirst ? "3px solid rgba(245,158,11,0.5)" : "2px solid rgba(255,255,255,0.1)",
        }}
      >
        {winner.avatar}
      </div>
      <div style={{ fontSize: isFirst ? 18 : 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
        {winner.name}
      </div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
        {winner.college}
      </div>
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: "8px 16px",
          fontSize: isFirst ? 20 : 16,
          fontWeight: 800,
          color: winner.rank === 1 ? "#FBBF24" : winner.rank === 2 ? "#CBD5E1" : "#CD7F32",
        }}
      >
        {winner.prize}
      </div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 8 }}>
        {winner.exam}
      </div>
    </div>
  );
}

function SessionCard() {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)",
        borderRadius: 24,
        padding: "40px",
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid rgba(99,102,241,0.3)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(239,68,68,0.2)",
            border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: 20,
            padding: "4px 12px",
            fontSize: 12,
            fontWeight: 600,
            color: "#FCA5A5",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#EF4444",
              display: "inline-block",
              animation: "pulse 1.5s infinite",
            }}
          />
          LIVE NOW
        </div>
        <h3
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#fff",
            marginBottom: 12,
            lineHeight: 1.2,
          }}
        >
          Join Our Live Orientation Session
        </h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.6, maxWidth: 480 }}>
          Get personalized mentorship from top performers, exam strategy guidance, and live Q&A with
          instructors — all in real time.
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}>
          {["Expert Mentors", "Live Q&A", "Strategy Tips"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: 8,
                padding: "4px 12px",
                fontSize: 12,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => setClicked(true)}
        style={{
          background: clicked
            ? "linear-gradient(135deg, #059669, #047857)"
            : "linear-gradient(135deg, #6366F1, #8B5CF6)",
          color: "#fff",
          border: "none",
          borderRadius: 16,
          padding: "18px 36px",
          fontSize: 16,
          fontWeight: 700,
          cursor: "pointer",
          whiteSpace: "nowrap",
          transition: "all 0.3s ease",
          transform: clicked ? "scale(0.97)" : "scale(1)",
          boxShadow: "0 8px 32px rgba(99,102,241,0.4)",
        }}
      >
        {clicked ? "✓ Joining…" : "Join Live Meeting Now"}
      </button>
    </div>
  );
}

function FeaturePill({ icon, label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 40,
        padding: "8px 16px",
        fontSize: 13,
        color: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(8px)",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontSize: 16 }}>{icon}</span>
      {label}
    </div>
  );
}

function StatBadge({ value, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{value}</div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{label}</div>
    </div>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

function HeroCard({ exam, user, onRegister, registered }) {
  const [registering, setRegistering] = useState(false);

  function handleRegister() {
    setRegistering(true);
    setTimeout(() => {
      setRegistering(false);
      onRegister();
    }, 1200);
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E0A3C 40%, #0C1A3C 100%)",
        borderRadius: 28,
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 240,
          height: 240,
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ padding: "48px 48px 40px", position: "relative" }}>
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(251,146,60,0.15)",
                border: "1px solid rgba(251,146,60,0.3)",
                borderRadius: 20,
                padding: "6px 14px",
                marginBottom: 16,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#FB923C" }}>
                ◉ {exam.state === "active" ? "REGISTRATION OPEN" : "COMING SOON"}
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: 8,
                letterSpacing: -1,
              }}
            >
              Welcome to <span style={{ color: "#FB923C" }}>C3 Arena</span>
            </h1>
            <h2
              style={{
                fontSize: "clamp(16px, 3vw, 26px)",
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
                marginBottom: 12,
              }}
            >
              {exam.title}
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 520, lineHeight: 1.7 }}>
              Compete in skill-based tests and challenges, win exciting prizes, and earn certificates
              that set you apart from the competition.
            </p>
          </div>

          {/* User info */}
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FB923C, #F59E0B)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 16,
                color: "#fff",
              }}
            >
              {user.avatar}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{user.name}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{user.college}</div>
            </div>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22C55E",
                marginLeft: 4,
                boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
              }}
            />
          </div>
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
          <FeaturePill icon="🏆" label="Prizes & Certificates" />
          <FeaturePill icon="🧠" label="Skill Challenges" />
          <FeaturePill icon="🎯" label="Test Competitions" />
          <FeaturePill icon="🌐" label="Open for All Students" />
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 32,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.06)",
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          <StatBadge value={exam.prize} label="Prize Pool" />
          <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
          <StatBadge value={exam.participants.toLocaleString() + "+"} label="Registered" />
          <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
          <StatBadge value={exam.duration} label="Duration" />
          <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
          <StatBadge value={exam.difficulty} label="Level" />
        </div>

        {/* CTA area */}
        {!registered ? (
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={handleRegister}
              disabled={registering}
              style={{
                background: registering
                  ? "rgba(251,146,60,0.6)"
                  : "linear-gradient(135deg, #FB923C 0%, #F97316 100%)",
                color: "#fff",
                border: "none",
                borderRadius: 16,
                padding: "18px 40px",
                fontSize: 17,
                fontWeight: 800,
                cursor: registering ? "default" : "pointer",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                transform: registering ? "scale(0.97)" : "scale(1)",
                boxShadow: "0 8px 32px rgba(249,115,22,0.45)",
                letterSpacing: -0.3,
              }}
            >
              {registering ? "Registering…" : "Register Now →"}
            </button>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
              Logged in as <span style={{ color: "rgba(255,255,255,0.7)" }}>{user.email}</span>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: 8,
                  textTransform: "uppercase",
                }}
              >
                Starts In
              </div>
              <CountdownTimer targetDate={exam.startTime} size="lg" />
            </div>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(34,197,94,0.15)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: 12,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#86EFAC",
                  marginBottom: 12,
                }}
              >
                ✓ You're Registered!
              </div>
              <br />
              <button
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 12,
                  padding: "12px 24px",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Get Ready! 🚀
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── UPCOMING STATE ────────────────────────────────────────────────────────────

function UpcomingState({ exam }) {
  const [notified, setNotified] = useState(false);
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #0C1A3C 100%)",
        borderRadius: 28,
        padding: "56px 48px",
        textAlign: "center",
        border: "1px solid rgba(99,102,241,0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          display: "inline-block",
          background: "rgba(99,102,241,0.15)",
          border: "1px solid rgba(99,102,241,0.3)",
          borderRadius: 20,
          padding: "6px 16px",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 2,
          color: "#A5B4FC",
          marginBottom: 20,
        }}
      >
        UPCOMING
      </div>
      <h2
        style={{
          fontSize: "clamp(24px,4vw,42px)",
          fontWeight: 900,
          color: "#fff",
          marginBottom: 8,
        }}
      >
        {exam.title}
      </h2>
      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, marginBottom: 40 }}>
        Registration opens soon. Stay tuned!
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
        <CountdownTimer targetDate={exam.startTime} size="lg" />
      </div>
      <button
        onClick={() => setNotified(true)}
        style={{
          background: notified ? "rgba(34,197,94,0.2)" : "linear-gradient(135deg, #6366F1, #8B5CF6)",
          border: notified ? "1px solid rgba(34,197,94,0.4)" : "none",
          color: notified ? "#86EFAC" : "#fff",
          borderRadius: 16,
          padding: "16px 40px",
          fontSize: 16,
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        {notified ? "✓ We'll notify you!" : "Notify Me When Open"}
      </button>
    </div>
  );
}

// ─── EMPTY STATE ──────────────────────────────────────────────────────────────

function NoCompetitionState() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div
      style={{
        background: "linear-gradient(160deg, #0F172A 0%, #1A0A2E 50%, #0C1A3C 100%)",
        borderRadius: 28,
        padding: "72px 48px",
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Trophy illustration */}
      <div style={{ position: "relative", display: "inline-block", marginBottom: 32 }}>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(251,146,60,0.1)",
            border: "2px solid rgba(251,146,60,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            margin: "0 auto",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          🏆
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(251,146,60,0.15), transparent)",
            animation: "ping 2s ease-in-out infinite",
          }}
        />
      </div>
      <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, color: "#fff", marginBottom: 16 }}>
        No Competitions Yet!
      </h2>
      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, maxWidth: 440, margin: "0 auto 48px", lineHeight: 1.7 }}>
        Check back later for new skill-based challenges and test competitions. Big things are
        coming — be the first to know!
      </p>

      {subscribed ? (
        <div
          style={{
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: 16,
            padding: "20px 32px",
            display: "inline-block",
            color: "#86EFAC",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          ✓ You're on the list! We'll email you when competitions open.
        </div>
      ) : (
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", maxWidth: 480, margin: "0 auto" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email…"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 14,
              padding: "14px 20px",
              fontSize: 15,
              color: "#fff",
              outline: "none",
              flex: 1,
              minWidth: 220,
            }}
          />
          <button
            onClick={() => email && setSubscribed(true)}
            style={{
              background: "linear-gradient(135deg, #FB923C, #F97316)",
              color: "#fff",
              border: "none",
              borderRadius: 14,
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(249,115,22,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            Notify Me 🔔
          </button>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 56, flexWrap: "wrap" }}>
        {[
          { icon: "📅", text: "New competitions added monthly" },
          { icon: "🎓", text: "Certificates for top performers" },
          { icon: "💰", text: "Real cash prizes" },
        ].map(({ icon, text }) => (
          <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
            <span style={{ fontSize: 18 }}>{icon}</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SECTION LABEL ─────────────────────────────────────────────────────────────

function SectionLabel({ children, accent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
      <div
        style={{
          width: 4,
          height: 28,
          borderRadius: 4,
          background: accent || "linear-gradient(180deg, #FB923C, #F97316)",
        }}
      />
      <h2 style={{ fontSize: 22, fontWeight: 800, color: "#fff", margin: 0 }}>{children}</h2>
    </div>
  );
}

// ─── STATE SWITCHER (DEV TOOL) ─────────────────────────────────────────────────

function StateSwitcher({ current, onChange }) {
  const states = ["active", "upcoming", "none"];
  return (
    <div
      style={{
        display: "flex",
        gap: 0,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: 4,
        alignSelf: "flex-start",
      }}
    >
      {states.map((s) => (
        <button
          key={s}
          onClick={() => onChange(s)}
          style={{
            background: current === s ? "rgba(251,146,60,0.2)" : "transparent",
            border: current === s ? "1px solid rgba(251,146,60,0.4)" : "1px solid transparent",
            color: current === s ? "#FB923C" : "rgba(255,255,255,0.4)",
            borderRadius: 8,
            padding: "6px 14px",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            textTransform: "capitalize",
            transition: "all 0.2s",
          }}
        >
          {s === "active" ? "🟢 Active" : s === "upcoming" ? "🔵 Upcoming" : "🔴 None"}
        </button>
      ))}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function C3Arena() {
  const [pageState, setPageState] = useState("active");
  const [registered, setRegistered] = useState(false);
  // const [darkMode] = useState(true);

  const exam = EXAMS_DATA[pageState];
  const resources = exam ? RESOURCES[exam.language] || RESOURCES["Python"] : [];

  useEffect(() => {
    setRegistered(false);
  }, [pageState]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080D1A",
        fontFamily: "'Sora', 'Inter', sans-serif",
        color: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=JetBrains+Mono:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes ping {
          0% { transform: translateX(-50%) scale(1); opacity: 0.6; }
          100% { transform: translateX(-50%) scale(2); opacity: 0; }
        }
        @keyframes pulse {
          0%,100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        ::-webkit-scrollbar { width: 0; }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(8,13,26,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, #FB923C, #F97316)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 900,
                color: "#fff",
              }}
            >
              C³
            </div>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>C3 Arena</span>
            <span
              style={{
                background: "rgba(251,146,60,0.15)",
                border: "1px solid rgba(251,146,60,0.3)",
                color: "#FB923C",
                fontSize: 11,
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: 6,
                letterSpacing: 1,
              }}
            >
              BETA
            </span>
          </div>

          <StateSwitcher current={pageState} onChange={setPageState} />

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FB923C, #F59E0B)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 800,
              }}
            >
              {CURRENT_USER.avatar}
            </div>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
              {CURRENT_USER.name.split(" ")[0]}
            </span>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 80px" }}>
        {pageState === "none" ? (
          <NoCompetitionState />
        ) : pageState === "upcoming" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <UpcomingState exam={exam} />

            <div>
              <SectionLabel>Prepare in Advance</SectionLabel>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {resources.map((r) => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
              </div>
            </div>

            <div>
              <SectionLabel accent="linear-gradient(180deg,#EF4444,#DC2626)">
                Previous Champions
              </SectionLabel>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  padding: "16px 0",
                }}
              >
                {[WINNERS[1], WINNERS[0], WINNERS[2]].map((w) => (
                  <WinnerCard key={w.rank} winner={w} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {/* Hero */}
            <HeroCard
              exam={exam}
              user={CURRENT_USER}
              registered={registered}
              onRegister={() => setRegistered(true)}
            />

            {/* Resources */}
            <div>
              <SectionLabel>
                Preparation Resources — {exam.language}
              </SectionLabel>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {resources.map((r) => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
              </div>
            </div>

            {/* Live Session */}
            <div>
              <SectionLabel accent="linear-gradient(180deg,#6366F1,#8B5CF6)">
                Live Session
              </SectionLabel>
              <SessionCard />
            </div>

            {/* Winners */}
            <div>
              <SectionLabel accent="linear-gradient(180deg,#F59E0B,#D97706)">
                Previous Champions
              </SectionLabel>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  padding: "16px 0",
                }}
              >
                {[WINNERS[1], WINNERS[0], WINNERS[2]].map((w) => (
                  <WinnerCard key={w.rank} winner={w} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px",
          textAlign: "center",
          color: "rgba(255,255,255,0.25)",
          fontSize: 13,
        }}
      >
        C3 Arena · Coding Competition Platform · {new Date().getFullYear()}
      </footer>
    </div>
  );
}