// import React from "react";
// import { SiteHeader } from "../components/SiteHeader";
// import { SiteFooter } from "../components/SiteFooter";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const PharmacyIpd = () => {
//   return (
//     <>
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Pharmacy Ipd</h1>
//             <p>This page is under development.</p>
//           </div>
//         </section>
//         <NewsletterSection
//             title="Ready to Begin Your Journey to Wellness?"
//             text="Whether you are a patient, partner, or future team member, we are here to support your next step."
//         />
//         <SiteFooter />
//       </div>
//     </>
//   );
// };



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

/* ─── Hover card ─── */
function HoverCard({ children, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "28px 22px",
        border: "1px solid #e6f2f6",
        boxShadow: hov ? "0 16px 48px rgba(42,180,214,.18)" : "0 4px 20px rgba(42,180,214,.07)",
        transform: hov ? "translateY(-7px)" : "translateY(0)",
        transition: "all .3s ease",
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
    <path d="M11 19a8 5 0 008 5V14a8 5 0 00-8 5z" fill="#d0f0f8" />
  </svg>
);
const IconInventory = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#e6f7fb" />
    <rect x="11" y="13" width="16" height="14" rx="2" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <line x1="15" y1="18" x2="23" y2="18" stroke="#2ab4d6" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="19" y1="15" x2="19" y2="21" stroke="#2ab4d6" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="15" y1="22" x2="22" y2="22" stroke="#2ab4d6" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconEducation = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#e6f7fb" />
    <circle cx="19" cy="15" r="4" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <path d="M11 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <line x1="24" y1="12" x2="27" y2="9" stroke="#2ab4d6" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="27" cy="9" r="2" fill="#2ab4d6" />
  </svg>
);

const IconClock = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#e6f7fb" />
    <circle cx="22" cy="22" r="10" stroke="#2ab4d6" strokeWidth="2" fill="none" />
    <line x1="22" y1="15" x2="22" y2="22" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="22" x2="27" y2="22" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconShield = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#e6f7fb" />
    <path d="M22 12l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10v-6l9-4z" stroke="#2ab4d6" strokeWidth="2" fill="none" />
    <polyline points="17,22 20,25 27,18" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconPeople = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#e6f7fb" />
    <circle cx="18" cy="18" r="4" stroke="#2ab4d6" strokeWidth="2" fill="none" />
    <path d="M10 34c0-4.4 3.6-8 8-8" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="27" cy="17" r="3.5" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <path d="M24 34c0-3.5 2.7-6.5 6-7" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

/* Step icons */
const IconDoctor = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M10 11h16a2 2 0 012 2v13a2 2 0 01-2 2H10a2 2 0 01-2-2V13a2 2 0 012-2z" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <line x1="18" y1="16" x2="18" y2="22" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="15" y1="19" x2="21" y2="19" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const IconPharmacist = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="11" y="10" width="14" height="18" rx="3" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <line x1="15" y1="16" x2="21" y2="16" stroke="#2ab4d6" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="15" y1="20" x2="19" y2="20" stroke="#2ab4d6" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconNurse = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="14" r="5" stroke="#2ab4d6" strokeWidth="1.8" fill="none" />
    <path d="M9 30c0-5 4-9 9-9s9 4 9 9" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <line x1="18" y1="9" x2="18" y2="8" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 8h4" stroke="#2ab4d6" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconRefill = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 8c5.5 0 10 4.5 10 10S23.5 28 18 28 8 23.5 8 18" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <polyline points="8,18 8,12 14,12" stroke="#2ab4d6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="18" y1="14" x2="18" y2="19" stroke="#2ab4d6" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="18" y1="19" x2="21" y2="19" stroke="#2ab4d6" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconQuote = () => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
    <path d="M0 22V13C0 5.5 4.2 1.4 12.6 0L14 3C9.1 4.4 7 7 6.3 11H11V22H0zm16 0V13C16 5.5 20.2 1.4 28.6 0L30 3C25.1 4.4 23 7 22.3 11H27V22H16z" fill="#2ab4d6" opacity="0.25" />
  </svg>
);

/* ─── Testimonials ─── */
const testimonials = [
  {
    text: "The entire experience, from surgery to recovery for my knee replacement, was fantastic. The orthopaedic team in Bhubaneswar was professional and supportive, and the rehabilitation program got me back on my feet quickly.",
    name: "V. Sahoo",
    role: "Joint Replacement Patient, Bhubaneswar",
    initials: "VS",
  },
  {
    text: "We were so worried about my son's sports injury, but the orthopaedic consultation in Cuttack was quick and easy. They gave us a clear plan and the recovery has been remarkable. We are so thankful for their expertise.",
    name: "A. Kumar",
    role: "Parent of Patient, Cuttack",
    initials: "AK",
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  return (
    <div style={{ position: "relative", maxWidth: 920, margin: "0 auto", padding: "0 52px" }}>
      <button onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
        style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: "2rem", color: "#2ab4d6", cursor: "pointer" }}>‹</button>
      <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            background: "#fff", borderRadius: 16, padding: "32px 28px",
            flex: "1 1 280px", maxWidth: 390,
            boxShadow: "0 4px 24px rgba(42,180,214,.08)", border: "1px solid #e6f2f6",
          }}>
            <IconQuote />
            <p style={{ color: "#3a5060", lineHeight: 1.75, margin: "16px 0 24px", fontSize: ".93rem", fontStyle: "italic" }}>
              "{t.text}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#2ab4d6", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: ".88rem", flexShrink: 0 }}>
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
        style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: "2rem", color: "#2ab4d6", cursor: "pointer" }}>›</button>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
        {testimonials.map((_, i) => (
          <div key={i} onClick={() => setIdx(i)}
            style={{ width: 10, height: 10, borderRadius: "50%", background: i === idx ? "#2ab4d6" : "#cde8f0", cursor: "pointer", transition: "background .3s" }} />
        ))}
      </div>
    </div>
  );
}

/* ─── FAQ ─── */
const faqData = [
  { q: "How do patients receive medications from the pharmacy?", a: "Medications are dispensed directly to the patient's ward or room. For IPD patients, nurses collect prescriptions and administer them as per the doctor's orders." },
  { q: "Is a valid prescription required for all medicines?", a: "Yes, a valid prescription from a registered doctor is mandatory for all medications dispensed from our in-house pharmacy." },
  { q: "How is billing for medications handled?", a: "Medication costs are added to the patient's consolidated hospital bill. Patients or their families can review itemised billing at the pharmacy or billing counter." },
  { q: "Is the pharmacy open 24/7?", a: "Yes, our in-house IPD pharmacy operates 24 hours a day, 7 days a week to ensure continuous medication supply for all indoor patients." },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #e5eef2", padding: "18px 0", cursor: "pointer" }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <span style={{ fontWeight: 600, color: "#1a2e3b", fontSize: "1rem" }}>{question}</span>
        <span style={{ fontSize: "1.4rem", color: "#2ab4d6", flexShrink: 0, transition: "transform .3s", transform: open ? "rotate(45deg)" : "rotate(0)", lineHeight: 1 }}>+</span>
      </div>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        <p style={{ marginTop: 10, color: "#5a7080", lineHeight: 1.75, fontSize: ".93rem" }}>{answer}</p>
      </div>
    </div>
  );
}

/* ─── Shared constants ─── */
const C = {
  wrap: { maxWidth: 1100, margin: "0 auto", padding: "0 24px" },
  title: { fontSize: "clamp(1.55rem,3vw,2.15rem)", fontWeight: 800, color: "#1a2e3b", marginBottom: 12, lineHeight: 1.2 },
  accent: { color: "#2ab4d6" },
};

/* ─── Main Component ─── */
export const PharmacyIpd = () => {

  const services = [
    { icon: <IconRx />, title: "Prescription Verification", desc: "We carefully verify each prescription with a doctor to ensure patient safety and accuracy." },
    { icon: <IconPill />, title: "Medication Dispensing", desc: "Accurate and timely dispensing of all medications as prescribed by the patient's physician." },
    { icon: <IconInventory />, title: "Inventory & Supply Management", desc: "Efficient inventory management to ensure all critical and routine medications are always in stock." },
    { icon: <IconEducation />, title: "Patient Education", desc: "Our pharmacists are available to counsel and educate patients about their medications and dosages." },
  ];

  const advantages = [
    { icon: <IconClock />, title: "24/7 Availability", desc: "Our in-house pharmacy ensures that all medicines are available around the clock, so our medical staff can act immediately when needed." },
    { icon: <IconShield />, title: "Guaranteed Accuracy & Safety", desc: "Our pharmacists follow strict protocols to minimise the risk of dispensing errors, ensuring each patient receives the correct medication and dosage." },
    { icon: <IconPeople />, title: "Immediate Access to Professionals", desc: "Patients and their families can easily consult with our pharmacists for questions or concerns about their medications without any delay." },
  ];

  const steps = [
    { icon: <IconDoctor />, title: "Doctor Prescribes", desc: "The doctor's prescription is digitally sent to our in-house pharmacy for immediate processing." },
    { icon: <IconPharmacist />, title: "Pharmacist Dispenses", desc: "Our expert pharmacist verifies the prescription and dispenses the correct medication with care." },
    { icon: <IconNurse />, title: "Nurse Administers", desc: "The floor nurse prepares medication and administers it to the patient at the correct time and dosage." },
    { icon: <IconRefill />, title: "Monitoring & Refills", desc: "The patient's medication schedule is continuously monitored, and the pharmacy ensures timely refills for every shift." },
  ];

  return (
    <>
      <style>{subpagesHomeAlignCss}</style>
      <div className="page-wrapper">
        <SiteHeader />
        <div className="ipp-page lt-home-type">

      {/* ── HERO (Home-aligned banner) ── */}
      <section className="ipp-hero" style={{ position: "relative", overflow: "hidden" }}>
        <div className="ipp-hero-inner" style={C.wrap}>
          <div className="ipp-hero-text">
            <RevealSection>
              <div className="ipp-hero-kicker">IPD Pharmacy</div>
              <h1 style={{ marginBottom: 18 }}>
                Reliable <span>Pharmacy</span><br />
                <span>Services</span> for Indoor<br />Patients
              </h1>
              <p style={{ maxWidth: 430, marginBottom: 28 }}>
                Our in-house pharmacy ensures your medicines are accurately dispensed and readily available for our indoor patients, with expert support and continuous supply.
              </p>
              <a
                href="#"
                className="ipp-cta-btn"
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
                Inquire About Our Pharmacy Services
              </a>
            </RevealSection>
          </div>
          <RevealSection delay={180} className="ipp-hero-media">
            <div className="ipp-hero-img">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900&auto=format&fit=crop&q=80"
                alt="Inpatient pharmacy and hospital medication care"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80";
                }}
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── SEAMLESS SERVICES ── */}
      <section style={{ padding: "84px 0", background: "#fff" }}>
        <div style={{ ...C.wrap, display: "flex", gap: 56, flexWrap: "wrap", alignItems: "flex-start" }}>
          <RevealSection style={{ flex: "1 1 300px" }}>
            <h2 style={C.title}>Seamless Pharmacy Services for Inpatient Care</h2>
            <p style={{ color: "#5a7080", lineHeight: 1.8, marginBottom: 22 }}>
              In-house pharmacy is an essential part of our patient care, ensuring all medications are available 24/7. We guarantee accurate dispensing, secure storage, and timely delivery for all indoor patients.
            </p>
            {[
              { label: "24/7 Access to Medicines:", text: "Medications are always available, day or night, for all of our inpatients." },
              { label: "Expert Pharmacist Support:", text: "Our certified pharmacists provide expert advice and oversight for every prescription." },
              { label: "Secure & Accurate Dispensing:", text: "We use strict protocols to ensure the right medication is delivered to the right patient every time." },
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
                  <h4 style={{ color: "#1a2e3b", fontWeight: 700, fontSize: ".96rem", marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ color: "#7a9aaa", fontSize: ".85rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </HoverCard>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section style={{ padding: "84px 0", background: "#f4fbfd" }}>
        <div style={C.wrap}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={C.title}>The Advantages of Our In-House Pharmacy</h2>
              <p style={{ color: "#5a7080", maxWidth: 500, margin: "0 auto" }}>
                We provide a comprehensive, dedicated environment for medication management, ensuring the best possible outcomes for our patients.
              </p>
            </div>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(265px,1fr))", gap: 26 }}>
            {advantages.map((a, i) => (
              <RevealSection key={i} delay={i * 110}>
                <HoverCard>
                  <div style={{ marginBottom: 18 }}>{a.icon}</div>
                  <h3 style={{ color: "#1a2e3b", fontWeight: 800, fontSize: "1.06rem", marginBottom: 10 }}>{a.title}</h3>
                  <p style={{ color: "#5a7080", lineHeight: 1.75, margin: 0, fontSize: ".93rem" }}>{a.desc}</p>
                </HoverCard>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section style={{ padding: "84px 0", background: "#fff" }}>
        <div style={C.wrap}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={C.title}>Your Path to Seamless Medication Access</h2>
              <p style={{ color: "#5a7080", maxWidth: 500, margin: "0 auto" }}>
                We've designed a straightforward process to ensure our indoor patients receive their medications quickly and accurately.
              </p>
            </div>
          </RevealSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, position: "relative" }}>
            {/* horizontal connector */}
            <div style={{
              position: "absolute", top: 34, left: "10%", right: "10%", height: 2,
              background: "linear-gradient(90deg,#d0eef6 0%,#2ab4d6 50%,#d0eef6 100%)",
              borderRadius: 2, zIndex: 0,
            }} />
            {steps.map((s, i) => (
              <RevealSection key={i} delay={i * 100} style={{ position: "relative", zIndex: 1 }}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 68, height: 68, borderRadius: "50%",
                      background: "#fff", border: "2px solid #d0eef6",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 18px",
                      boxShadow: "0 4px 18px rgba(42,180,214,.13)",
                      transition: "transform .3s, box-shadow .3s",
                      cursor: "default",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.13)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(42,180,214,.24)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 18px rgba(42,180,214,.13)"; }}
                  >
                    {s.icon}
                  </div>
                  <h4 style={{ color: "#1a2e3b", fontWeight: 800, fontSize: ".96rem", marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ color: "#7a9aaa", fontSize: ".85rem", lineHeight: 1.65, maxWidth: 180, margin: "0 auto" }}>{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "84px 0", background: "#f4fbfd" }}>
        <div style={C.wrap}>
          <RevealSection>
            <h2 style={{ ...C.title, textAlign: "center", marginBottom: 8 }}>Stories of Successful Recovery</h2>
            <p style={{ color: "#7a9aaa", textAlign: "center", fontSize: ".88rem", letterSpacing: 1, marginBottom: 40 }}>
              Hear from patients and their families about our in-house pharmacy.
            </p>
          </RevealSection>
          <RevealSection delay={100}>
            <Testimonials />
          </RevealSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "84px 0", background: "#fff" }}>
        <div style={{ ...C.wrap, maxWidth: 760 }}>
          <RevealSection>
            <h2 style={{ ...C.title, textAlign: "center" }}>Your Questions, Answered</h2>
            <p style={{ color: "#5a7080", textAlign: "center", marginBottom: 44 }}>
              We are here to provide clarity and reassurance. Here are answers to some of the most common questions about our in-house pharmacy services.
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
            Ready for <span style={C.accent}>Seamless Medication<br />Support ?</span>
          </h2>
          <p style={{ color: "#5a7080", maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.8 }}>
            Our in-house pharmacy ensures your loved one's medication needs are met with accuracy and speed, so you can focus on their recovery.
          </p>
          <a
            href="#"
            className="ipp-cta-btn"
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
            🏥 Inquire About Our Pharmacy Services
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