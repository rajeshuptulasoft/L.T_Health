// import React from 'react'
// import { SiteHeader } from "../components/SiteHeader";
// import { SiteFooter } from "../components/SiteFooter";
// import { FloatingSupport } from "../components/FloatingSupport";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const About = () => {
//   return (
//     <>
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>About</h1>
//             <p>This page is under development.</p>
//           </div>
//         </section>
//       </div>
//       <NewsletterSection
//         title="Ready to Begin Your Journey to Wellness?"
//         text="Whether you are a patient, partner, or future team member, we are here to support your next step."
//       />
//       <SiteFooter />
//     </>
//   )
// }   
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
  green: "#00c896",
};

/* ── Icon Circle ── */
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
  neurology: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M8 8c0-2.2 1.8-4 4-4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M16 10l2-2M8 10L6 8" stroke={S.teal} strokeWidth="1.2" strokeLinecap="round" opacity=".6" />
    </svg>
  ),
  orthopedics: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <path d="M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  geriatrics: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="3.5" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M9 17l1 3M15 17l-1 3" stroke={S.teal} strokeWidth="1.3" strokeLinecap="round" opacity=".6" />
    </svg>
  ),
  medicine: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M9 9h6M9 13h6M9 17h4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 3v4M16 3v4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
    </svg>
  ),
  physio: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2.5" fill={S.teal} opacity=".7" />
      <path d="M12 8v5M9 11l-3 4h12l-3-4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21l1.5-4h3l1.5 4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  pharmacy: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <rect x="5" y="4" width="14" height="16" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M12 9v6M9 12h6" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  accessibility: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2" fill={S.teal} />
      <path d="M5 9h14M9 9v10M15 9v10" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  empathy: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <path d="M12 21s-8-4.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 10-8 10z" fill={S.teal} opacity=".8" />
    </svg>
  ),
  integrity: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <path d="M12 3l2.5 5.5L20 9.5l-4 4 1 5.5L12 16.5 7 19l1-5.5-4-4 5.5-1z" stroke={S.teal} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    </svg>
  ),
  community: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <circle cx="9" cy="7" r="3" fill={S.teal} opacity=".7" />
      <circle cx="17" cy="9" r="2.5" fill={S.teal} opacity=".4" />
      <path d="M2 20c0-4 3-6 7-6s7 2 7 6" fill={S.teal} opacity=".7" />
      <path d="M16 15c2.5 0 5 1.5 5 5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
  innovation: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="10" r="5" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M9 10a3 3 0 0 1 3-3" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 15v2a2 2 0 0 0 4 0v-2" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  driven: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path d="M5 12l5 5L20 7" stroke={S.teal} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  facility: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="7" width="18" height="14" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M3 11h18" stroke={S.teal} strokeWidth="1.5" />
      <path d="M7 3h10l2 4H5z" fill={S.tealLight} stroke={S.teal} strokeWidth="1.5" />
    </svg>
  ),
};

/* ══════════════════════════════════════════
   SECTION 1 — Hero
══════════════════════════════════════════ */
const HeroSection = () => (
  <section
    style={{
      padding: "80px 0 60px",
      background: "linear-gradient(135deg, #f0fbfd 0%, #ffffff 65%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div style={{ position: "absolute", bottom: -50, left: 80, width: 160, height: 160, borderRadius: "50%", background: S.teal, opacity: 0.1, pointerEvents: "none" }} />
    <div style={{ position: "absolute", top: -30, right: 200, width: 100, height: 100, borderRadius: "50%", background: S.teal, opacity: 0.12, pointerEvents: "none" }} />

    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left */}
        <div>
          <h1 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: S.blue, lineHeight: 1.2, marginBottom: 18 }}>
            Our Mission: Healing with{" "}
            <span style={{ color: S.teal }}>Compassion</span>{" "}
            &amp;{" "}
            <span style={{ color: S.green }}>Excellence</span>
          </h1>
          <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            L.T Way to Healthcare is a trusted Rehabilitation and Orthopaedics centre dedicated to improving health, mobility, and quality of life. We combine medical expertise, modern facilities, and personalised rehabilitation programs to provide the best possible care.
          </p>

          {/* Feature bullets — 2 column */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }}>
            {[
              "Compassionate in every step of care",
              "Excellence in treatment & comprehensive",
              "Integrity & trust in all services",
              "Dedicated to full health recovery",
              "Patient-first approach",
              "Affordable & accessible healthcare",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: S.teal, marginTop: 2, flexShrink: 0 }}>✔</span>
                <span style={{ color: S.gray, fontSize: 14 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — doctor image */}
        <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,181,200,0.2)", aspectRatio: "4/3", background: "linear-gradient(135deg,#c8f0f5,#e0f7fa)", position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
            alt="Doctor"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   SECTION 2 — Trusted Destination / Specialties
══════════════════════════════════════════ */
const SpecialtiesSection = () => {
  const specialties = [
    { icon: Icon.neurology, title: "Neurology", desc: "Advanced neural rehabilitation for stroke, paralysis, and spinal conditions." },
    { icon: Icon.orthopedics, title: "Orthopedics", desc: "Recovery from fractures, joint surgeries, and musculoskeletal issues." },
    { icon: Icon.geriatrics, title: "Geriatrics", desc: "Specialised elder care to provide independence and comfort." },
    { icon: Icon.medicine, title: "General Medicine", desc: "Holistic treatment for acute and chronic illnesses." },
    { icon: Icon.physio, title: "Physiotherapy & Rehabilitation", desc: "Expert physiotherapy and tailored rehabilitation programs for faster recovery." },
    { icon: Icon.pharmacy, title: "In-house Pharmacy", desc: "Patients have easy access to medicines and supplies with a fully stocked in-house pharmacy." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.white }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            A Trusted Destination for Holistic Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Our centre offers a full spectrum of OPD &amp; IPD services, combining modern facilities with medical expertise.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {specialties.map((s, i) => (
            <div
              key={i}
              style={{ background: S.lightGray, borderRadius: 12, padding: "28px 22px", display: "flex", gap: 16, alignItems: "flex-start", transition: "box-shadow 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,181,200,0.18)`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {s.icon}
              </div>
              <div>
                <h4 style={{ color: S.blue, fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{s.title}</h4>
                <p style={{ color: S.gray, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 3 — The OSKY Project
══════════════════════════════════════════ */
const OSKYSection = () => {
  const values = [
    { icon: Icon.accessibility, title: "Accessibility", desc: "Making healthcare care be easily available to everyone regardless of their location or financial status." },
    { icon: Icon.empathy, title: "Empathy", desc: "Committed to the well-being and health of every member, with a compassionate and caring approach." },
    { icon: Icon.integrity, title: "Integrity", desc: "Upholding transparency and ethical standards in everything we do and with all members." },
    { icon: Icon.community, title: "Community Focus", desc: "Focusing on health benefits of communities and addressing prevailing public health issues that exist." },
    { icon: Icon.innovation, title: "Innovation", desc: "Continuously improving our services and technology to best serve and care for the community." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            The OSKY Project: Making Healthcare a Right
          </h2>
          <p style={{ color: S.gray, maxWidth: 640, margin: "0 auto 50px", lineHeight: 1.8 }}>
            The Odhisha Swastha House (OSH) is a pioneering healthcare initiative by L.T Way to Healthcare, designed to provide accessible, affordable, and comprehensive health coverage to the people of Odisha. At OSH, we believe that quality healthcare is a right, not a privilege, and our mission is to bring preventive, curative, and wellness services closer to every community.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
          {values.map((v, i) => (
            <div
              key={i}
              style={{ background: S.white, borderRadius: 14, padding: "28px 18px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,181,200,0.16)`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
            >
              <IconCircle size={56}>{v.icon}</IconCircle>
              <h4 style={{ color: S.blue, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{v.title}</h4>
              <p style={{ color: S.gray, fontSize: 12, lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 4 — Unified Purpose: Values & Mission
══════════════════════════════════════════ */
const ValuesSection = () => {
  const ltValues = [
    "Compassion in every step of care",
    "Excellence in treatment & comprehensive",
    "Integrity & trust in all services",
    "Dedicated to full health recovery",
    "Patient-first approach",
    "Affordable & accessible healthcare",
  ];

  const oskyValues = [
    "Integrity — Upholding the supremacy and ethical standards in every service",
    "Accessibility — Making healthcare easily accessible to all",
    "Accountability — Making healthcare services easily available everywhere",
    "Innovation — Continuously improving to provide the best care and experience",
    "Community Focus — Driving health benefits upon and positively impacting the community",
  ];

  return (
    <section style={{ padding: "80px 0", background: S.white }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Our Unified Purpose: Values &amp; Mission
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 32 }}>
          {/* LT Core Values */}
          <div style={{ background: S.lightGray, borderRadius: 14, padding: "32px 28px" }}>
            <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 17, marginBottom: 20 }}>
              🏥 L.T Way to Healthcare Core Values
            </h3>
            {ltValues.map((v, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  {Icon.driven}
                </div>
                <span style={{ color: S.gray, fontSize: 14, lineHeight: 1.5 }}>{v}</span>
              </div>
            ))}
          </div>

          {/* OSKY Project Core Values */}
          <div style={{ background: S.lightGray, borderRadius: 14, padding: "32px 28px" }}>
            <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 17, marginBottom: 20 }}>
              🌿 OSKY Project Core Values
            </h3>
            {oskyValues.map((v, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  {Icon.driven}
                </div>
                <span style={{ color: S.gray, fontSize: 14, lineHeight: 1.5 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {/* LT Mission & Vision */}
          <div style={{ background: S.lightGray, borderRadius: 14, padding: "32px 28px" }}>
            <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 17, marginBottom: 16 }}>
              🎯 Our Mission &amp; Vision
            </h3>
            <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>
              <strong style={{ color: S.blue }}>Our Mission: </strong>
              To provide affordable, honest, and patient-centred healthcare to all individuals through a professional team, innovative practices, and compassionate care in our facilities within the community.
            </p>
            <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.8 }}>
              <strong style={{ color: S.blue }}>Our Vision: </strong>
              To be a leading Rehabilitation &amp; Healthcare Centre known for excellence in Neuro, Ortho, Geriatric care, while continuously improving the community health through OSKY &amp; L.T Way to Healthcare partnerships, expanding our reach and empowering all communities.
            </p>
          </div>

          {/* OSKY Mission & Vision */}
          <div style={{ background: S.lightGray, borderRadius: 14, padding: "32px 28px" }}>
            <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 17, marginBottom: 16 }}>
              🌍 OSKY Mission &amp; Vision
            </h3>
            <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>
              <strong style={{ color: S.blue }}>OSKY Mission: </strong>
              To provide accessible, affordable, quality healthcare to underserved communities through our network of Odhisha Swastha Houses, ensuring no one is left without essential care due to financial or geographic barriers.
            </p>
            <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.8 }}>
              <strong style={{ color: S.blue }}>OSKY Vision: </strong>
              A healthy Odisha where healthcare is a right, not a privilege. We envision a network of healthcare centres, each staffed by compassionate professionals, providing accessible, comprehensive care and working collaboratively to make healthcare more accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 5 — Meet the Team Behind the Mission
══════════════════════════════════════════ */
const LeadershipSection = () => (
  <section style={{ padding: "80px 0", background: S.lightGray }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
          Meet the Team Behind the Mission
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", background: S.white, borderRadius: 18, padding: "48px 40px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        {/* Left — Team image */}
        <div style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "4/3", background: S.tealLight }}>
          <img
            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80"
            alt="Medical team"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>

        {/* Right — Visionary Leadership */}
        <div>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: S.blue, marginBottom: 16 }}>Our Visionary Leadership</h3>
          <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28, fontSize: 15 }}>
            L.T Way to Healthcare is driven by a team of dedicated professionals who are passionate about providing comprehensive doctors and medical practitioners who are experts in their fields. Together, to preserve well-being as the foundation of everything we do. We aim to have a healthcare team of expert doctors & practitioners who are compassionate, drawing every patient receives the highest standard of care.
          </p>

          {[
            { label: "Driven by Expertise", desc: "Specialists across multiple care disciplines." },
            { label: "Rooted in Compassion", desc: "Every patient is treated with dignity and empathy." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {Icon.driven}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: S.blue, fontSize: 15, marginBottom: 3 }}>{item.label}</div>
                <div style={{ color: S.gray, fontSize: 14 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   SECTION 6 — Meet Our Dedicated Team
══════════════════════════════════════════ */
const TeamSection = () => {
  const team = [
    { name: "Dr. Jane Doe", role: "Neurologist", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&q=80" },
    { name: "John Smith", role: "Physiotherapist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80" },
    { name: "Alex Chen", role: "Care Coordinator", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80" },
    { name: "Dr. ram Patel", role: "Orthopedic Surgeon", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&q=80" },
    { name: "Ankit Singh", role: "Geriatric Specialist", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80" },
    { name: "Maria Garcia", role: "Head Nurse", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80" },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.white }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Meet Our Dedicated Team
          </h2>
          <p style={{ color: S.gray, maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>
            A passionate group of healthcare professionals, technologists, and innovators committed to your mission.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }}>
          {team.slice(0, 5).map((member, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", overflow: "hidden", margin: "0 auto 14px", border: `3px solid ${S.tealLight}`, boxShadow: `0 4px 16px rgba(0,181,200,0.15)` }}>
                <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.target.style.display = "none"; }} />
              </div>
              <div style={{ fontWeight: 700, color: S.blue, fontSize: 14 }}>{member.name}</div>
              <div style={{ color: S.teal, fontSize: 12, marginTop: 3 }}>{member.role}</div>
            </div>
          ))}
        </div>

        {/* 6th member centred below */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
          {[team[5]].map((member, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", overflow: "hidden", margin: "0 auto 14px", border: `3px solid ${S.tealLight}`, boxShadow: `0 4px 16px rgba(0,181,200,0.15)` }}>
                <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.target.style.display = "none"; }} />
              </div>
              <div style={{ fontWeight: 700, color: S.blue, fontSize: 14 }}>{member.name}</div>
              <div style={{ color: S.teal, fontSize: 12, marginTop: 3 }}>{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 7 — Our Facilities
══════════════════════════════════════════ */
const FacilitiesSection = () => (
  <section style={{ padding: "80px 0", background: S.lightGray }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
          Our Facilities: Modern Spaces for a Faster Recovery
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left */}
        <div>
          <h3 style={{ fontWeight: 700, color: S.blue, fontSize: 20, marginBottom: 14 }}>A Space Designed for Healing</h3>
          <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28, fontSize: 14 }}>
            L.T Way to Healthcare has been providing a vital role in the healing process. Our center features modern rehabilitation spaces that are thoughtfully designed to provide the perfect combination of comfort and efficiency. Our environment is structured to always create a space that promotes quick recovery, continuity, and overall well-being.
          </p>

          {[
            { icon: Icon.facility, label: "Advanced Equipment", desc: "State of the art rehabilitation and monitoring equipment for optimal care." },
            { icon: Icon.facility, label: "Comfortable Environment", desc: "Clean facilities and comfortable spaces for patients and their families." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, marginBottom: 20, alignItems: "flex-start" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: S.blue, fontSize: 15, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: S.gray, fontSize: 13 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right — facility image */}
        <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", background: S.tealLight, boxShadow: "0 16px 48px rgba(0,181,200,0.15)" }}>
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80"
            alt="Our facility"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   SECTION 8 — Bottom CTA
══════════════════════════════════════════ */
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
        Ready to Begin Your{" "}
        <span style={{ color: S.teal }}>Journey to Wellness?</span>
      </h2>
      <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.8 }}>
        Whether you are a patient, partner, or future team member, we are here to support your next step towards health and recovery.
      </p>
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
        Connect With Us Today
      </a>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   ROOT EXPORT
══════════════════════════════════════════ */
export const About = () => {
  return (
    <>
      <FloatingSupport />
      <div className="page-wrapper">
        <SiteHeader />

        <HeroSection />
        <SpecialtiesSection />
        <OSKYSection />
        <ValuesSection />
        <LeadershipSection />
        <TeamSection />
        <FacilitiesSection />
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