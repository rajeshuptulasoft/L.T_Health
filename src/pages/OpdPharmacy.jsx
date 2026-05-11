import React, { useState, useEffect, useRef } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSection } from "../components/NewsletterSection";
import { subpagesHomeAlignCss } from "../styles/subpagesHomeAlign";

/* ─── Scroll-reveal hook ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealSection({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── SVG Icons ─── */
const IconRx = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#e6f7fb" />
    <path d="M13 10h12a2 2 0 012 2v14a2 2 0 01-2 2H13a2 2 0 01-2-2V12a2 2 0 012-2z" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <line x1="15" y1="16" x2="23" y2="16" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="15" y1="20" x2="23" y2="20" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="15" y1="24" x2="19" y2="24" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconPill = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#e6f7fb" />
    <ellipse cx="19" cy="19" rx="8" ry="5" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <line x1="11" y1="19" x2="27" y2="19" stroke="#2ab4d6" strokeWidth="1.8" />
    <path d="M11 19a8 5 0 008 5" stroke="#2ab4d6" strokeWidth="1.8" fill="#d0f0f8" />
  </svg>
);

const IconCounseling = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#e6f7fb" />
    <circle cx="19" cy="16" r="4" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <path d="M11 29c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);

const IconLocation = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#e6f7fb" />
    <path d="M19 10a6 6 0 016 6c0 5-6 12-6 12s-6-7-6-12a6 6 0 016-6z" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <circle cx="19" cy="16" r="2" fill="#2ab4d6" />
  </svg>
);

const IconClock = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#e6f7fb" />
    <circle cx="22" cy="22" r="10" stroke="#2ab4d6" strokeWidth="2" fill="none" />
    <line x1="22" y1="15" x2="22" y2="22" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="22" x2="27" y2="22" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconShield = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#e6f7fb" />
    <path d="M22 12l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10v-6l9-4z" stroke="#2ab4d6" strokeWidth="2" fill="none" />
    <polyline points="17,22 20,25 27,18" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const IconProfessional = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#e6f7fb" />
    <circle cx="22" cy="18" r="5" stroke="#2ab4d6" strokeWidth="2" fill="none" />
    <path d="M12 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const IconDoctor = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#e6f7fb" />
    <path d="M15 14h14a2 2 0 012 2v12a2 2 0 01-2 2H15a2 2 0 01-2-2V16a2 2 0 012-2z" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <line x1="22" y1="19" x2="22" y2="25" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="19" y1="22" x2="25" y2="22" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconPharmacist = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#e6f7fb" />
    <rect x="15" y="15" width="14" height="16" rx="3" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <line x1="19" y1="20" x2="25" y2="20" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="19" y1="24" x2="22" y2="24" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconPatient = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#e6f7fb" />
    <circle cx="22" cy="17" r="5" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <path d="M13 34c0-5 4-9 9-9s9 4 9 9" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);

const IconExpert = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#e6f7fb" />
    <path d="M22 13l2.5 5 5.5.8-4 3.9.9 5.5L22 25.5l-4.9 2.7.9-5.5-4-3.9 5.5-.8z" stroke="#2ab4d6" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
  </svg>
);

const IconQuote = () => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
    <path d="M0 22V13C0 5.5 4.2 1.4 12.6 0L14 3C9.1 4.4 7 7 6.3 11H11V22H0zm16 0V13C16 5.5 20.2 1.4 28.6 0L30 3C25.1 4.4 23 7 22.3 11H27V22H16z" fill="#2ab4d6" opacity="0.25" />
  </svg>
);

/* ─── Hover card wrapper ─── */
function HoverCard({ children, style = {} }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "28px 22px",
        boxShadow: hovered ? "0 16px 48px rgba(42,180,214,.18)" : "0 4px 20px rgba(42,180,214,.07)",
        border: "1px solid #e6f2f6",
        transform: hovered ? "translateY(-7px)" : "translateY(0)",
        transition: "all .3s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── FAQ ─── */
const faqData = [
  { q: "How do I get my prescription filled?", a: "Simply visit our in-house OPD pharmacy with your doctor's prescription after your consultation. Our pharmacists will verify and dispense your medications promptly." },
  { q: "Do I need to carry a physical copy of my prescription?", a: "Yes, a valid doctor's prescription is required. However, if your prescription is from our in-house doctors, it will be available digitally at the pharmacy counter." },
  { q: "How long is the waiting time at the pharmacy?", a: "We aim to keep waiting times minimal, typically 5–10 minutes for standard prescriptions. Our team ensures efficient service for all outpatients." },
  { q: "What are the pharmacy's operating hours?", a: "Our OPD pharmacy is open Monday to Saturday, 9:00 AM to 8:00 PM, and Sundays 10:00 AM to 4:00 PM." },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderBottom: "1px solid #e5eef2", padding: "18px 0", cursor: "pointer" }}
      onClick={() => setOpen(o => !o)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <span style={{ fontWeight: 600, color: "#1a2e3b", fontSize: "1rem" }}>{question}</span>
        <span style={{
          fontSize: "1.4rem", color: "#2ab4d6", flexShrink: 0,
          transition: "transform .3s", transform: open ? "rotate(45deg)" : "rotate(0)",
          lineHeight: 1
        }}>+</span>
      </div>
      <div style={{
        maxHeight: open ? 200 : 0, overflow: "hidden",
        transition: "max-height .35s ease",
      }}>
        <p style={{ marginTop: 10, color: "#5a7080", lineHeight: 1.75, fontSize: ".93rem" }}>{answer}</p>
      </div>
    </div>
  );
}

/* ─── Testimonial Slider ─── */
const testimonials = [
  {
    text: "I needed a specialised medication, and I was so relieved that the pharmacy had it fully in stock. The service was excellent and a huge time-saver.",
    name: "R. Panda",
    role: "OPD Patient, Puri",
    initials: "RP",
  },
  {
    text: "After my consultation, getting my prescription filled at the on-site pharmacy in Bhubaneswar was quick and easy. The pharmacist was very helpful and answered all my questions.",
    name: "V. Sahu",
    role: "OPD Patient, Bhubaneswar",
    initials: "VS",
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  return (
    <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", padding: "0 52px" }}>
      <button onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
        style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: "2rem", color: "#2ab4d6", cursor: "pointer", lineHeight: 1 }}>
        ‹
      </button>
      <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            background: "#fff", borderRadius: 16, padding: "32px 28px",
            flex: "1 1 280px", maxWidth: 380,
            boxShadow: "0 4px 24px rgba(42,180,214,.08)",
            border: "1px solid #e6f2f6",
            opacity: 1, transition: "opacity .4s",
          }}>
            <IconQuote />
            <p style={{ color: "#3a5060", lineHeight: 1.75, margin: "16px 0 24px", fontSize: ".93rem", fontStyle: "italic" }}>
              "{t.text}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#2ab4d6", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: ".9rem" }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#1a2e3b", fontSize: ".9rem" }}>{t.name}</div>
                <div style={{ color: "#7a9aaa", fontSize: ".8rem" }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setIdx(i => (i + 1) % testimonials.length)}
        style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: "2rem", color: "#2ab4d6", cursor: "pointer", lineHeight: 1 }}>
        ›
      </button>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
        {testimonials.map((_, i) => (
          <div key={i} onClick={() => setIdx(i)}
            style={{ width: 10, height: 10, borderRadius: "50%", background: i === idx ? "#2ab4d6" : "#cde8f0", cursor: "pointer", transition: "background .3s" }} />
        ))}
      </div>
    </div>
  );
}

/* ─── Shared styles ─── */
const C = {
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 24px" },
  title: { fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#1a2e3b", marginBottom: 12, lineHeight: 1.2 },
  sub: { color: "#5a7080", lineHeight: 1.75, maxWidth: 520, marginBottom: 44 },
  accent: { color: "#2ab4d6" },
};

/* ─── Main Component ─── */
export const OpdPharmacy = () => {

  const services = [
    { icon: <IconRx />, title: "Prescription Verification", desc: "We carefully verify each prescription with a doctor to ensure patient safety and accuracy." },
    { icon: <IconPill />, title: "Medication Dispensing", desc: "Accurate and timely dispensing of all medications as prescribed by the patient's physician." },
    { icon: <IconCounseling />, title: "Patient Counseling", desc: "A pharmacist is available for counseling on medication use, side effects, and proper dosage." },
    { icon: <IconLocation />, title: "Convenient Location", desc: "Our pharmacy is conveniently located within the department, making it easy to fill prescriptions after your visit." },
  ];

  const advantages = [
    { icon: <IconClock />, title: "24/7 Availability", desc: "Our in-house pharmacy ensures that all medicines are available around the clock, so our medical staff can act immediately when needed." },
    { icon: <IconShield />, title: "Guaranteed Accuracy & Safety", desc: "Our pharmacists follow strict protocols to minimise the risk of dispensing errors, ensuring each patient receives the correct medication and dosage." },
    { icon: <IconProfessional />, title: "Immediate Access to Professionals", desc: "Patients and their families can easily consult with the pharmacists for questions or concerns about their medications without any delay." },
  ];

  const steps = [
    { icon: <IconDoctor />, title: "Doctor Prescribes", desc: "Your doctor's prescription is sent to our in-house pharmacy immediately after your consultation." },
    { icon: <IconPharmacist />, title: "Pharmacist Dispenses", desc: "Our expert pharmacist verifies and accurately dispenses the prescribed medications." },
    { icon: <IconPatient />, title: "Patient Collects", desc: "You receive a notification that your prescription is ready and can collect it from the pharmacy desk." },
    { icon: <IconExpert />, title: "Expert Counseling", desc: "Our pharmacists provide expert guidance on medication use and any potential side effects." },
  ];

  return (
    <>
      <style>{subpagesHomeAlignCss}</style>
      <div className="page-wrapper">
        <SiteHeader />
        <div className="opp-page lt-home-type">

      {/* ── HERO (Home-aligned banner) ── */}
      <section className="opp-hero" style={{ position: "relative", overflow: "hidden" }}>
        <div className="opp-hero-inner" style={C.container}>
          <div className="opp-hero-text">
            <RevealSection>
              <div className="opp-hero-kicker">OPD Pharmacy</div>
              <h1 style={{ marginBottom: 18 }}>
                Quick & Reliable <span>OPD</span><br />
                <span>Pharmacy</span> Services
              </h1>
              <p style={{ maxWidth: 440, marginBottom: 28 }}>
                Our in-house pharmacy ensures you get your medications efficiently and accurately after your consultation, with expert guidance from our pharmacists.
              </p>
              <a
                href="#"
                className="opp-cta-btn"
                style={{
                  display: "inline-block",
                  padding: "14px 32px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "transform .2s, box-shadow .2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
              >
                Visit Our Pharmacy Today
              </a>
            </RevealSection>
          </div>
          <RevealSection delay={180} className="opp-hero-media">
            <div className="opp-hero-img">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&auto=format&fit=crop&q=80"
                alt="In-house OPD pharmacy and medication care"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80";
                }}
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── SEAMLESS SERVICES ── */}
      <section style={{ padding: "84px 0", background: "#fff" }}>
        <div style={{ ...C.container, display: "flex", gap: 56, flexWrap: "wrap", alignItems: "flex-start" }}>
          <RevealSection style={{ flex: "1 1 300px" }}>
            <h2 style={C.title}>Seamless Pharmacy Services for Outpatient Care</h2>
            <p style={{ color: "#5a7080", lineHeight: 1.8, marginBottom: 22 }}>
              Our on-site pharmacy is an integral part of our patient care, ensuring all medications are available immediately after your consultation. We guarantee accurate dispensing, secure handling, and expert guidance for all our patients.
            </p>
            {[
              { label: "Expert Pharmacist Support:", text: "Our certified pharmacists are available to provide expert advice and counseling." },
              { label: "Accurate & Secure Dispensing:", text: "We use strict protocols to ensure the right medication is dispensed accurately every time." },
              { label: "Minimal Waiting Time:", text: "Get your prescriptions filled quickly and efficiently, so you can get home sooner." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                <span style={{ color: "#2ab4d6", marginTop: 3, flexShrink: 0 }}>●</span>
                <p style={{ color: "#5a7080", margin: 0, lineHeight: 1.7 }}>
                  <strong style={{ color: "#1a2e3b" }}>{item.label}</strong> {item.text}
                </p>
              </div>
            ))}
          </RevealSection>

          {/* 2×2 service cards */}
          <div style={{ flex: "1 1 320px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            {services.map((s, i) => (
              <RevealSection key={i} delay={i * 80}>
                <HoverCard>
                  <div style={{ marginBottom: 12 }}>{s.icon}</div>
                  <h4 style={{ color: "#1a2e3b", fontWeight: 700, fontSize: ".97rem", marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ color: "#7a9aaa", fontSize: ".86rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </HoverCard>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section style={{ padding: "84px 0", background: "#f4fbfd" }}>
        <div style={C.container}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={C.title}>The Advantages of Our In-House Pharmacy</h2>
              <p style={{ color: "#5a7080", maxWidth: 500, margin: "0 auto" }}>
                We provide a comprehensive, dedicated environment for medication management, ensuring the best possible outcomes for our patients.
              </p>
            </div>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 26 }}>
            {advantages.map((a, i) => (
              <RevealSection key={i} delay={i * 110}>
                <HoverCard>
                  <div style={{ marginBottom: 18 }}>{a.icon}</div>
                  <h3 style={{ color: "#1a2e3b", fontWeight: 800, fontSize: "1.07rem", marginBottom: 10 }}>{a.title}</h3>
                  <p style={{ color: "#5a7080", lineHeight: 1.75, margin: 0, fontSize: ".93rem" }}>{a.desc}</p>
                </HoverCard>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATH / STEPS ── */}
      <section style={{ padding: "84px 0", background: "#fff" }}>
        <div style={C.container}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={C.title}>Your Path to Seamless Medication Access</h2>
              <p style={{ color: "#5a7080", maxWidth: 480, margin: "0 auto" }}>
                Getting your medications is simple and secure. Here is our straightforward process for a seamless experience.
              </p>
            </div>
          </RevealSection>

          {/* Steps row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, position: "relative" }}>
            {/* connector bar */}
            <div style={{
              position: "absolute", top: 36, left: "12%", right: "12%", height: 2,
              background: "linear-gradient(90deg,#d0eef6,#2ab4d6,#d0eef6)", borderRadius: 2, zIndex: 0,
            }} />
            {steps.map((s, i) => (
              <RevealSection key={i} delay={i * 100} style={{ position: "relative", zIndex: 1 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    background: "#fff", border: "2px solid #d0eef6",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 18px",
                    boxShadow: "0 4px 20px rgba(42,180,214,.12)",
                    transition: "transform .3s, box-shadow .3s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(42,180,214,.22)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(42,180,214,.12)"; }}
                  >
                    {s.icon}
                  </div>
                  <h4 style={{ color: "#1a2e3b", fontWeight: 800, fontSize: ".97rem", marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ color: "#7a9aaa", fontSize: ".86rem", lineHeight: 1.65, maxWidth: 185, margin: "0 auto" }}>{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "84px 0", background: "#f4fbfd" }}>
        <div style={C.container}>
          <RevealSection>
            <p style={{ textAlign: "center", color: "#7a9aaa", letterSpacing: 2, textTransform: "uppercase", fontSize: ".8rem", marginBottom: 32 }}>
              Hear from patients about our in-house pharmacy
            </p>
          </RevealSection>
          <RevealSection delay={100}>
            <Testimonials />
          </RevealSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "84px 0", background: "#fff" }}>
        <div style={{ ...C.container, maxWidth: 760 }}>
          <RevealSection>
            <h2 style={{ ...C.title, textAlign: "center" }}>Your Questions, Answered</h2>
            <p style={{ color: "#5a7080", textAlign: "center", marginBottom: 44 }}>
              We are here to provide clarity and reassurance. Here are some of the most common questions about our services.
            </p>
          </RevealSection>
          {faqData.map(item => (
            <RevealSection key={item.q}>
              <FaqItem question={item.q} answer={item.a} />
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "84px 24px", background: "#f4fbfd", textAlign: "center" }}>
        <RevealSection>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, color: "#1a2e3b", marginBottom: 14 }}>
            Ready to Experience <span style={C.accent}>Hassle-Free</span><br />Pharmacy ?
          </h2>
          <p style={{ color: "#5a7080", maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.8 }}>
            Get your medications quickly and with expert guidance. Our dedicated OPD pharmacy is here to serve you.
          </p>
          <a
            href="#"
            className="opp-cta-btn"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "transform .2s, box-shadow .2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
          >
            Visit Our Pharmacy Today
          </a>
        </RevealSection>
      </section>

        </div>
        <NewsletterSection
          title="Ready to Begin Your Journey to Wellness?"
          text="Whether you are a patient, partner, or future team member, we are here to support your next step."
        />
        <SiteFooter />
      </div>
    </>
  );
};