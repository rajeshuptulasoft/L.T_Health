// import React from "react";
// import { SiteHeader } from "../components/SiteHeader";
// import { SiteFooter } from "../components/SiteFooter";
// import { FloatingSupport } from "../components/FloatingSupport";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const HomeTechnicianSupport = () => {
//   return (
//     <>
//       <FloatingSupport />
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Home Technician Support</h1>
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
import React, { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { FloatingSupport } from "../components/FloatingSupport";
import { NewsletterSection } from "../components/NewsletterSection";

/* ── Design tokens ── */
const S = {
  teal: "#00b5c8",
  tealDark: "#0097aa",
  tealLight: "#e6f9fb",
  blue: "#1a3c6e",
  gray: "#666",
  lightGray: "#f4f8fb",
  white: "#ffffff",
};

/* ── Icon circle ── */
const IconCircle = ({ children, size = 54, bg = S.tealLight }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 14px",
      flexShrink: 0,
    }}
  >
    {children}
  </div>
);

/* ── SVG Icons ── */
const Icon = {
  ventilator: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M3 12h4l2-5 3 10 2-7 2 4 2-2h3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  monitor: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="13" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M8 21h8M12 17v4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 10l2-2 2 4 2-3 2 2" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
  oxygen: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="8" y="2" width="8" height="14" rx="3" fill={S.teal} opacity=".7" />
      <path d="M10 16v4M14 16v4M8 20h8" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 8h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  equipment: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 3l1.5 4h4l-3.5 2.5 1.5 4L12 11l-3.5 2.5 1.5-4L6.5 7h4z" fill={S.teal} />
      <circle cx="12" cy="18" r="3" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M12 15v-4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  swift: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H13z" fill={S.teal} />
    </svg>
  ),
  certified: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L12 14l-4.8 2.5.9-5.2L4.3 7.6l5.3-.8z" fill={S.teal} />
      <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
  peace: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="3" fill={S.teal} opacity=".2" />
      <path d="M7 12l3 3 7-7" stroke={S.teal} strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  phone: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill={S.teal} />
    </svg>
  ),
  diagnosis: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" stroke={S.teal} strokeWidth="2" fill="none" />
      <path d="M16.5 16.5l4 4" stroke={S.teal} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 11h6M11 8v6" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  visit: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M9 21V12h6v9" stroke={S.teal} strokeWidth="1.8" />
    </svg>
  ),
  verify: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L12 14l-4.8 2.5.9-5.2L4.3 7.6l5.3-.8z" fill={S.teal} opacity=".8" />
      <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
};

/* ═══════════════════════════════════════════
   SECTION 1 — Hero
═══════════════════════════════════════════ */
const HeroSection = () => (
  <section
    style={{
      padding: "80px 0 60px",
      background: "linear-gradient(135deg, #f0fbfd 0%, #ffffff 65%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div style={{ position: "absolute", bottom: -50, left: 60, width: 160, height: 160, borderRadius: "50%", background: S.teal, opacity: 0.09, pointerEvents: "none" }} />
    <div style={{ position: "absolute", top: -30, right: 180, width: 110, height: 110, borderRadius: "50%", background: S.teal, opacity: 0.1, pointerEvents: "none" }} />

    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left */}
        <div>
          <h1 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: S.blue, lineHeight: 1.2, marginBottom: 18 }}>
            Immediate Expert{" "}
            <span style={{ color: S.teal }}>Technical Support,</span>
            <br />
            At Your Service
          </h1>
          <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            When medical equipment fails, every second counts. Our certified technicians provide rapid, expert assistance right to your doorstep, ensuring your peace of mind.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="#"
              style={{ background: S.teal, color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}
            >
              Request Emergency Support
            </a>
            <a
              href="#"
              style={{ border: `2px solid ${S.teal}`, color: S.teal, padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,181,200,0.2)",
            aspectRatio: "4/3",
            background: "linear-gradient(135deg,#c8f0f5,#e0f7fa)",
            position: "relative",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80"
            alt="Home technician support"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — Rapid, Reliable Support + Services 2×2
═══════════════════════════════════════════ */
const ServicesSection = () => {
  const services = [
    { icon: Icon.ventilator, title: "Ventilator Service", desc: "Emergency repair and routine maintenance for respiratory support systems." },
    { icon: Icon.monitor, title: "Patient Monitoring", desc: "Troubleshooting and calibration for vital sign monitors and other devices." },
    { icon: Icon.oxygen, title: "Oxygen Concentrators", desc: "Emergency repair and replacement choices for oxygen therapy equipment." },
    { icon: Icon.equipment, title: "Equipment Setup & Installation", desc: "Professional setup and testing of new home medical equipment in your home." },
  ];

  const features = [
    { label: "Certified Technicians", desc: "Our team is highly skilled and trained to service complex medical devices." },
    { label: "Fast Emergency Response", desc: "We prioritize urgent calls to get your equipment up and running as quickly as possible." },
    { label: "Comprehensive Diagnostics", desc: "We provide thorough diagnostics and repairs to prevent future issues and ensure safety." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
              Rapid, Reliable Support for Your Equipment
            </h2>
            <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28 }}>
              Our certified technicians provide emergency support and routine maintenance for a wide range of medical devices, ensuring they function perfectly when you need them most.
            </p>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <span style={{ color: S.teal, flexShrink: 0, marginTop: 2 }}>✔</span>
                <div>
                  <strong style={{ color: S.blue }}>{f.label}: </strong>
                  <span style={{ color: S.gray }}>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right — 2×2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {services.map((s, i) => (
              <div
                key={i}
                style={{ background: S.lightGray, borderRadius: 12, padding: "26px 18px", textAlign: "center", transition: "box-shadow 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,181,200,0.18)`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <IconCircle>{s.icon}</IconCircle>
                <h4 style={{ color: S.blue, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{s.title}</h4>
                <p style={{ color: S.gray, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 3 — Benefits of Emergency Technician Support
═══════════════════════════════════════════ */
const BenefitsSection = () => {
  const benefits = [
    {
      icon: Icon.swift,
      title: "Swift Emergency Response",
      desc: "Our team is on standby to respond quickly to critical equipment failures, minimising downtime and ensuring continuous patient care.",
    },
    {
      icon: Icon.certified,
      title: "Certified Technical Expertise",
      desc: "Our technicians are certified and experienced in diagnosing and repairing a wide range of home medical equipment, ensuring a reliable and safe fix.",
    },
    {
      icon: Icon.peace,
      title: "Total Peace of Mind",
      desc: "With our on-call support, you and your family can have the confidence that professional help is just a phone call away, 24/7.",
    },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            The Benefits of Emergency Technician Support
          </h2>
          <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Don't let equipment failure disrupt care. Our services provide rapid, expert assistance when you need it most.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{ background: "#fff", borderRadius: 14, padding: "36px 28px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 12px 36px rgba(0,181,200,0.18)`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
            >
              <IconCircle size={60}>{b.icon}</IconCircle>
              <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{b.title}</h3>
              <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 4 — Your Path to Emergency Technical Support (Process)
═══════════════════════════════════════════ */
const ProcessSection = () => {
  const steps = [
    { icon: Icon.phone, title: "Emergency Call", desc: "Call us on our emergency line to report the issue. Our team is ready to respond immediately." },
    { icon: Icon.diagnosis, title: "Remote Diagnosis", desc: "We attempt a remote diagnosis to understand the problem and prepare the right tools and parts for the on-site visit." },
    { icon: Icon.visit, title: "On-Site Technician Visit", desc: "Our certified technician arrives at your home to fix the equipment quickly and efficiently." },
    { icon: Icon.verify, title: "Verification & Follow-up", desc: "The technician verifies the equipment is running correctly and provides a follow-up to ensure your complete satisfaction." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Your Path to Emergency Technical Support
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            We've designed a simple and rapid process to get you the help you need when every second counts.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
          {/* connecting line */}
          <div style={{ position: "absolute", top: 27, left: "12%", right: "12%", height: 2, background: `linear-gradient(to right, ${S.teal}, ${S.tealDark})`, opacity: 0.22, zIndex: 0 }} />
          {steps.map((s, i) => (
            <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "0 8px" }}>
              <div style={{ width: 54, height: 54, borderRadius: "50%", background: S.tealLight, border: `2px solid ${S.teal}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                {s.icon}
              </div>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: S.teal, color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "-10px auto 16px" }}>
                {i + 1}
              </div>
              <h4 style={{ color: S.blue, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.title}</h4>
              <p style={{ color: S.gray, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 5 — Testimonials (Stories of Fast, Reliable Support)
═══════════════════════════════════════════ */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      initials: "R.K.",
      name: "R. Kumar",
      role: "Family Member, Bhubaneswar",
      text: "My father's ventilator suddenly stopped working. Their technician arrived in less than an hour and had it fixed. Their quick response in Bhubaneswar was a lifesaver.",
    },
    {
      initials: "D.M.",
      name: "D. Mishra",
      role: "Patient, Cuttack",
      text: "I'm so grateful for their service. The technician was incredibly knowledgeable and resolved the issue with our infusion pump quickly and professionally. A fantastic service that brings peace of mind.",
    },
    {
      initials: "S.P.",
      name: "S. Patel",
      role: "Caregiver, Puri",
      text: "The oxygen concentrator for my mother broke down late at night. Their on-call team was at our home within the hour. Professional, efficient, and truly lifesaving.",
    },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Stories of Fast, Reliable Support
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Hear from those who have relied on our technicians when they needed help most.
          </p>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[active, (active + 1) % testimonials.length].map((idx) => {
              const t = testimonials[idx];
              return (
                <div key={idx} style={{ background: "#fff", borderRadius: 14, padding: "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                  <div style={{ fontSize: 40, color: S.teal, lineHeight: 1, marginBottom: 12, fontFamily: "Georgia, serif" }}>"</div>
                  <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{t.text}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: S.teal, fontSize: 12 }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: S.blue, fontSize: 14 }}>{t.name}</div>
                      <div style={{ color: S.teal, fontSize: 12 }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          {[-1, 1].map((dir, i) => (
            <button
              key={i}
              onClick={() => setActive((prev) => (prev + dir + testimonials.length) % testimonials.length)}
              style={{ position: "absolute", top: "50%", [dir === -1 ? "left" : "right"]: -52, transform: "translateY(-50%)", background: S.teal, border: "none", color: "#fff", width: 38, height: 38, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {dir === -1 ? "‹" : "›"}
            </button>
          ))}

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} style={{ width: 10, height: 10, borderRadius: "50%", border: "none", background: i === active ? S.teal : "#ccc", cursor: "pointer", padding: 0 }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 6 — Bottom CTA
═══════════════════════════════════════════ */
const CTASection = () => (
  <section
    style={{
      padding: "80px 0",
      background: "linear-gradient(135deg, #f0fbfd 0%, #e8f7fa 100%)",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: S.teal, opacity: 0.07, pointerEvents: "none" }} />
    <div style={{ position: "absolute", bottom: -60, left: -40, width: 240, height: 240, borderRadius: "50%", background: S.teal, opacity: 0.06, pointerEvents: "none" }} />

    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
        Equipment Failure?{" "}
        <span style={{ color: S.teal }}>We're On Our Way.</span>
      </h2>
      <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.8 }}>
        Don't wait when critical medical equipment breaks down. Our emergency technicians are available 24/7 and ready to respond immediately to your location.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href="#"
          style={{
            display: "inline-block",
            background: S.teal,
            color: "#fff",
            padding: "15px 40px",
            borderRadius: 7,
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "none",
            boxShadow: `0 8px 24px rgba(0,181,200,0.35)`,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,181,200,0.45)`; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,181,200,0.35)`; }}
        >
          Request Emergency Support
        </a>
        <a
          href="tel:+918080000000"
          style={{
            display: "inline-block",
            border: `2px solid ${S.teal}`,
            color: S.teal,
            padding: "15px 40px",
            borderRadius: 7,
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = S.teal; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = S.teal; }}
        >
          Call Us Now — 24/7
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════ */
export const HomeTechnicianSupport = () => {
  return (
    <>
      <FloatingSupport />
      <div className="page-wrapper">
        <SiteHeader />

        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />

        <NewsletterSection
          title="Ready to Begin Your Journey to Wellness?"
          text="Whether you are a patient, partner, or future team member, we are here to support your next step."
        />
        <SiteFooter />
      </div>
    </>
  );
};