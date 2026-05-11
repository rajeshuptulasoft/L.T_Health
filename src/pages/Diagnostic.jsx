import React, { useState, useEffect, useRef } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSection } from "../components/NewsletterSection";
import { subpagesHomeAlignCss } from "../styles/subpagesHomeAlign";

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Animated Section Wrapper ─── */
function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(40px)", left: "translateX(-40px)", right: "translateX(40px)", down: "translateY(-40px)" };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);
  return (
    <section className="lt-hero-home" style={{ overflow: "hidden", position: "relative" }}>
      {/* decorative blobs */}
      <div style={{ position: "absolute", top: -60, right: -60, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(22,163,146,0.14) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: 0, left: -80, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(5,189,236,0.1) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
        {/* Left Text */}
        <div style={{ flex: "1 1 420px", paddingBottom: 80, opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateX(-50px)", transition: "all 0.9s ease 0.1s" }}>
          <p style={{ color: "var(--mediplace-black)", fontWeight: 700, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            Healthcare Partnership
          </p>
          <h1 style={{ marginBottom: 20 }}>
            Partner with Us to<br />
            <span>Enhance Diagnostic</span><br />
            Excellence in Odisha
          </h1>
          <p style={{ marginBottom: 32, maxWidth: 480 }}>
            Join our network of certified diagnostic labs and expand your reach to thousands of patients and doctors.
          </p>
          <a
            href="#apply"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg, #05bdec 0%, #16a392 100%)",
              color: "#fff", padding: "14px 28px", borderRadius: 10,
              fontWeight: 700, fontSize: 15, textDecoration: "none",
              boxShadow: "0 10px 24px rgba(5, 189, 236, 0.25)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 26px rgba(103, 148, 53, 0.28)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 10px 24px rgba(5, 189, 236, 0.25)"; }}
          >
            ✦ Apply Now to Become a Partner
          </a>
        </div>

        {/* Right Image */}
        <div style={{ flex: "1 1 380px", display: "flex", justifyContent: "flex-end", alignItems: "flex-end", opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateX(50px)", transition: "all 0.9s ease 0.3s" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 480 }}>
            {/* Floating badge */}
            <div style={{
              position: "absolute", top: 24, left: 0, zIndex: 2,
              background: "#fff", borderRadius: 16, padding: "10px 18px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              display: "flex", alignItems: "center", gap: 10,
              animation: "floatBadge 3s ease-in-out infinite",
            }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#1a3c6e" }}>500+ Partner Labs</div>
                <div style={{ fontSize: 11, color: "#00b5c8" }}>Across Odisha</div>
              </div>
            </div>
            {/* Main lab image placeholder with gradient */}
            <div style={{
              width: "100%", height: 360,
              background: "linear-gradient(135deg, #00b5c8 0%, #00c8dc 40%, #b8eef5 100%)",
              borderRadius: "24px 24px 0 0",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
            }}>
              {/* Lab illustration */}
              <svg viewBox="0 0 420 360" style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
                {/* Background shapes */}
                <ellipse cx="300" cy="80" rx="120" ry="80" fill="rgba(255,255,255,0.1)" />
                <ellipse cx="80" cy="280" rx="100" ry="70" fill="rgba(255,255,255,0.08)" />
                {/* Test tubes */}
                <rect x="160" y="120" width="20" height="90" rx="10" fill="rgba(255,255,255,0.9)" />
                <rect x="160" y="180" width="20" height="30" rx="0 0 10 10" fill="#00c875" opacity="0.8" />
                <rect x="195" y="100" width="20" height="110" rx="10" fill="rgba(255,255,255,0.85)" />
                <rect x="195" y="170" width="20" height="40" rx="0 0 10 10" fill="#007bff" opacity="0.6" />
                <rect x="230" y="130" width="20" height="80" rx="10" fill="rgba(255,255,255,0.9)" />
                <rect x="230" y="185" width="20" height="25" rx="0 0 10 10" fill="#ff6b6b" opacity="0.7" />
                {/* Microscope */}
                <rect x="270" y="180" width="14" height="70" rx="7" fill="rgba(255,255,255,0.9)" />
                <ellipse cx="277" cy="175" rx="22" ry="14" fill="rgba(255,255,255,0.85)" />
                <circle cx="277" cy="165" r="10" fill="rgba(255,255,255,0.7)" />
                <rect x="255" y="248" width="44" height="8" rx="4" fill="rgba(255,255,255,0.75)" />
                {/* DNA helix hint */}
                <path d="M100 100 Q120 130 100 160 Q80 190 100 220" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none" />
                <path d="M130 100 Q110 130 130 160 Q150 190 130 220" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none" />
                {/* Cross-links */}
                <line x1="105" y1="115" x2="125" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                <line x1="98" y1="145" x2="132" y2="145" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                <line x1="103" y1="175" x2="127" y2="175" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                <line x1="100" y1="205" x2="130" y2="205" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                {/* Person silhouette */}
                <circle cx="320" cy="160" r="28" fill="rgba(255,255,255,0.25)" />
                <path d="M290 250 Q320 220 350 250 L360 320 H280 Z" fill="rgba(255,255,255,0.2)" />
                {/* Lab coat detail */}
                <path d="M295 255 Q310 240 320 245 Q330 240 345 255 L350 310 H290 Z" fill="rgba(255,255,255,0.15)" />
              </svg>
              <div style={{ position: "absolute", bottom: 20, right: 20, background: "rgba(255,255,255,0.9)", borderRadius: 12, padding: "8px 14px", fontSize: 12, fontWeight: 600, color: "#00b5c8" }}>
                ISO Certified Labs
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}

/* ─── Benefits Section ─── */
const benefits = [
  { title: "Expand Your Business", desc: "Access a large patient and doctor network, increasing your lab's test volume." },
  { title: "Seamless Integration", desc: "Effortlessly receive test requests and share reports through our centralized platform." },
  { title: "Boost Your Brand", desc: "Enhance your lab's reputation by being part of a trusted healthcare ecosystem." },
  { title: "Dedicated Support", desc: "Get a dedicated relationship manager for all your partnership needs." },
  { title: "No Upfront Costs", desc: "A transparent, revenue-sharing model with no initial investment required." },
];

function BenefitsSection() {
  return (
    <section style={{ padding: "90px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#1a3c6e", marginBottom: 12 }}>
              Our Partnership Benefits
            </h2>
            <p style={{ color: "#666", fontSize: 16 }}>Discover how joining our network can help your lab grow and succeed.</p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}>
          {benefits.map((b, i) => (
            <Reveal key={i} delay={i * 0.1} direction="up">
              <div
                style={{
                  background: "#f4f8fb", border: "1.5px solid #e8eef3", borderRadius: 20, padding: "32px 24px",
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s", cursor: "default",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,181,200,0.15)"; e.currentTarget.style.borderColor = "#00b5c8"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#e8eef3"; }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a3c6e", marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trusted by Labs ─── */
function TrustedSection() {
  return (
    <section style={{ padding: "70px 0", background: "linear-gradient(180deg, #f4f8fb 0%, #fff 100%)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#1a3c6e", marginBottom: 12 }}>
            Trusted by Leading Labs
          </h2>
          <p style={{ color: "#666", fontSize: 15, marginBottom: 40 }}>
            We are proud to partner with Crowned and other upcoming healthcare providers in Odisha.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
            {["Crowned", "MediPath", "LabCore", "DiagnoPlus"].map((name, i) => (
              <div key={i} style={{
                padding: "14px 32px", borderRadius: 12,
                border: "1.5px solid #e8eef3", background: "#fff",
                color: "#1a3c6e", fontWeight: 700, fontSize: 15,
                boxShadow: "0 4px 16px rgba(0,181,200,0.08)",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#00b5c8"; e.currentTarget.style.color = "#00b5c8"; e.currentTarget.style.transform = "scale(1.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eef3"; e.currentTarget.style.color = "#1a3c6e"; e.currentTarget.style.transform = "none"; }}
              >
                {name}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, color: "#888", fontSize: 13 }}>Partnering with Odisha's most trusted diagnostics.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Partnership Steps ─── */
const steps = [
  { num: 1, title: "Submit Application", desc: "Fill out our simple online form with your lab's details and certifications. It only takes a few minutes.", side: "left" },
  { num: 2, title: "Document & Site Verification", desc: "Our team will review your documents and schedule a physical or virtual site visit for certification.", side: "right" },
  { num: 3, title: "Seamless Platform Integration", desc: "We guide your team through integrating your systems with our platform for a smooth, automated workflow.", side: "left" },
  { num: 4, title: "Go Live & Start Consulting", desc: "Once onboarded, you can begin accepting test bookings and serving new patients across Odisha.", side: "right" },
];

function StepsSection() {
  return (
    <section style={{ padding: "90px 0", background: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#1a3c6e", marginBottom: 12 }}>
              A Simple Path to Partnership
            </h2>
            <p style={{ color: "#666", fontSize: 16 }}>Our streamlined process is designed to get your lab connected quickly and efficiently.</p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Center line */}
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg, #00b5c8, #b8eef5)", transform: "translateX(-50%)", borderRadius: 4 }} />

          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.15} direction={step.side === "left" ? "left" : "right"}>
              <div style={{ display: "flex", justifyContent: step.side === "left" ? "flex-start" : "flex-end", marginBottom: 48, position: "relative" }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: "50%", top: 24, transform: "translate(-50%, -50%)",
                  width: 20, height: 20, borderRadius: "50%",
                  background: "#00b5c8", border: "3px solid #fff",
                  boxShadow: "0 0 0 4px rgba(0,181,200,0.2)", zIndex: 1,
                }} />

                <div style={{ width: "44%", background: "#f4f8fb", border: "1.5px solid #e8eef3", borderRadius: 20, padding: "24px 28px", boxShadow: "0 4px 20px rgba(0,181,200,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #00b5c8, #00c8dc)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13 }}>
                      {step.num}
                    </div>
                    <p style={{ fontSize: 11, color: "#00b5c8", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Step {step.num}</p>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1a3c6e", marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote: "The partnership with 1 Way Healthcare has been a game-changer for our lab. Our patient base has increased significantly, and the system for test requests is incredibly efficient.",
    name: "Dr. Alok Mohapatra",
    role: "Lab Director, Crest Diagnostics",
  },
  {
    quote: "The seamless integration with their platform has streamlined our workflow, and we now focus more on diagnostic tests on all administrative tasks through their dedicated support team.",
    name: "Ms. Priti Patnaik",
    role: "Operations Manager, Next Step Lab",
  },
  {
    quote: "Joining their network doubled our monthly tests within the first quarter. The onboarding was smooth and the team was incredibly helpful throughout the entire process.",
    name: "Dr. Ramesh Sahu",
    role: "Chief Pathologist, DiagnoPlus",
  },
];

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const visible = [testimonials[current], testimonials[(current + 1) % testimonials.length]];

  return (
    <section style={{ padding: "90px 0", background: "linear-gradient(180deg, #f4f8fb 0%, #e8f7fa 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#1a3c6e", marginBottom: 12 }}>
              Hear From Labs in Our Network
            </h2>
            <p style={{ color: "#666", fontSize: 16 }}>Our partners appreciate the growth, flexibility, and support that 1 Way Healthcare provides.</p>
          </div>
        </Reveal>

        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 16 }}>
          {/* Prev */}
          <button onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
            style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid #00b5c8", background: "#fff", color: "#00b5c8", fontSize: 18, cursor: "pointer", flexShrink: 0, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#00b5c8"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#00b5c8"; }}
          >‹</button>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1 }}>
            {visible.map((t, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", boxShadow: "0 4px 24px rgba(0,181,200,0.1)", border: "1.5px solid #e8eef3" }}>
                <div style={{ color: "#00b5c8", fontSize: 32, lineHeight: 1, marginBottom: 16, fontFamily: "Georgia, serif" }}>"</div>
                <p style={{ color: "#666", fontSize: 15, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #00b5c8, #00c8dc)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 16 }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1a3c6e" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next */}
          <button onClick={() => setCurrent((current + 1) % testimonials.length)}
            style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid #00b5c8", background: "#fff", color: "#00b5c8", fontSize: 18, cursor: "pointer", flexShrink: 0, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#00b5c8"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#00b5c8"; }}
          >›</button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, background: i === current ? "#00b5c8" : "#c5e8ec", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Section ─── */
const faqs = [
  { q: "WHAT IS THE REVENUE MODEL?", a: "We work on a transparent revenue-sharing model — no upfront fees or hidden charges. You earn per test processed through our platform, and we take a small service commission." },
  { q: "HOW IS PATIENT DATA PRIVACY HANDLED?", a: "We follow strict HIPAA-compliant data security protocols. All patient data is encrypted, stored securely, and never shared with unauthorized parties." },
  { q: "WHAT ARE THE TECHNICAL REQUIREMENTS FOR INTEGRATION?", a: "A computer with internet access and a modern browser is all you need. Our team handles the entire integration setup and provides full training to your staff." },
  { q: "WHAT KIND OF SUPPORT WILL I RECEIVE?", a: "Each partner lab is assigned a dedicated relationship manager available during business hours. We also provide 24/7 technical support for platform-related issues." },
];

function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ padding: "90px 0", background: "#fff" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#1a3c6e", marginBottom: 12 }}>
              Your Questions, Answered
            </h2>
            <p style={{ color: "#666", fontSize: 16 }}>Here are answers to some common questions from labs considering our partnership.</p>
          </div>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                style={{ borderRadius: 14, overflow: "hidden", border: "1.5px solid #e8eef3", transition: "border-color 0.3s", borderColor: open === i ? "#00b5c8" : "#e8eef3" }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%", textAlign: "left", padding: "18px 24px",
                    background: open === i ? "linear-gradient(135deg, #00b5c8, #0097aa)" : "#f4f8fb",
                    border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                    color: open === i ? "#fff" : "#1a3c6e", fontWeight: 700, fontSize: 14, letterSpacing: 0.5,
                    transition: "all 0.3s",
                  }}
                >
                  {f.q}
                  <span style={{ fontSize: 20, fontWeight: 400, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.3s", color: open === i ? "#fff" : "#00b5c8" }}>+</span>
                </button>
                <div style={{
                  maxHeight: open === i ? 200 : 0, overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}>
                  <p style={{ padding: "16px 24px 20px", color: "#666", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Form Section ─── */
function CTASection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "", state: "Odisha" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" style={{ padding: "90px 0", background: "linear-gradient(135deg, #f0fbfd 0%, #e8f7fa 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" }}>
        {/* Left */}
        <Reveal direction="left" style={{ flex: "1 1 380px" }}>
          <div style={{ flex: "1 1 380px" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#1a3c6e", lineHeight: 1.25, marginBottom: 16 }}>
              Ready to <span style={{ color: "#00b5c8" }}>Elevate Your Lab's Growth?</span>
            </h2>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
              Join us today and unlock a new channel for growth and a broader patient base. A dedicated relationship manager is ready to assist you.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {["500+ certified partner labs in Odisha", "Dedicated relationship manager assigned", "Revenue-sharing, no upfront costs", "Go live in as little as 7 days"].map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg, #00b5c8, #00c8dc)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontSize: 14, color: "#666" }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal direction="right" delay={0.15} style={{ flex: "1 1 380px" }}>
          <div style={{ flex: "1 1 380px", background: "#fff", borderRadius: 24, padding: "40px 36px", boxShadow: "0 16px 48px rgba(0,181,200,0.12)", border: "1.5px solid #e8eef3" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <h3 style={{ color: "#00b5c8", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Application Submitted!</h3>
                <p style={{ color: "#666", fontSize: 14 }}>Our team will reach out within 24 hours to schedule your verification call.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#1a3c6e", marginBottom: 6 }}>Fill The Form</h3>
                <p style={{ fontSize: 13, color: "#666", marginBottom: 24 }}>Fill out the form below to get in touch with our team and explore partnership opportunities.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { label: "Name", key: "name", placeholder: "Your full name", type: "text" },
                    { label: "Email Address", key: "email", placeholder: "your@email.com", type: "email" },
                    { label: "Phone Number", key: "phone", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                    { label: "City", key: "city", placeholder: "Your city", type: "text" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#666", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.key]}
                        onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e8eef3", borderRadius: 10, fontSize: 14, color: "#1a3c6e", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                        onFocus={e => e.currentTarget.style.borderColor = "#00b5c8"}
                        onBlur={e => e.currentTarget.style.borderColor = "#e8eef3"}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#666", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>State</label>
                    <select
                      value={formData.state}
                      onChange={e => setFormData({ ...formData, state: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e8eef3", borderRadius: 10, fontSize: 14, color: "#1a3c6e", outline: "none", background: "#fff", cursor: "pointer" }}
                    >
                      <option>Odisha</option>
                      <option>West Bengal</option>
                      <option>Jharkhand</option>
                      <option>Chhattisgarh</option>
                    </select>
                  </div>
                  <button
                    onClick={handleSubmit}
                    style={{ marginTop: 8, padding: "15px 0", borderRadius: 50, background: "linear-gradient(135deg, #00b5c8, #00c8dc)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", boxShadow: "0 8px 24px rgba(0,181,200,0.35)", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,181,200,0.45)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,181,200,0.35)"; }}
                  >
                    Submit Application →
                  </button>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Main Export ─── */
export const Diagnostic = () => {
  return (
    <>
      <style>{subpagesHomeAlignCss}</style>
      <div className="page-wrapper">
        <SiteHeader />
        <div className="lt-home-type" style={{ fontFamily: '"Manrope", sans-serif', color: "#6d7e8e" }}>
          <HeroSection />
          <BenefitsSection />
          <TrustedSection />
          <StepsSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
          <NewsletterSection
            title="Ready to Begin Your Journey to Wellness?"
            text="Whether you are a patient, partner, or future team member, we are here to support your next step."
          />
        </div>
        <SiteFooter />
      </div>
    </>
  );
};
