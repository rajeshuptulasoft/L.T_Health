// import React from "react";
// import { SiteHeader } from "../components/SiteHeader";
// import { SiteFooter } from "../components/SiteFooter";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const HomeBedsoreCare = () => {
//   return (
//     <>
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Home Bedsore Care</h1>
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
import { NewsletterSection } from "../components/NewsletterSection";

const S = {
  teal: "#00b5c8",
  tealDark: "#0097aa",
  tealLight: "#e6f9fb",
  blue: "#1a3c6e",
  gray: "#666",
  lightGray: "#f4f8fb",
};

export const HomeBedsoreCare = () => {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const testimonials = [
    {
      initials: "A.K.",
      name: "A. Kumar",
      role: "Family Member, Cuttack",
      text: "We were so worried about my father's condition. The bedsore care attendant in Cuttack was a lifesaver. My father had stage-3 sores and we are so grateful for the dedicated, expert care.",
    },
    {
      initials: "P.S.",
      name: "P. Sahoo",
      role: "Patient, Puri",
      text: "The preventative advice and care plan we received was exceptional. We were able to address the issue before it worsened. The nurse was thorough and caring. Highly recommended.",
    },
    {
      initials: "S.N.",
      name: "S. Nanda",
      role: "Caregiver, Bhubaneswar",
      text: "My mother developed bedsores after a long surgery recovery. The daily dressing changes and repositioning guidance from the nurse made a visible difference within two weeks.",
    },
  ];

  const faqs = [
    {
      q: "What is a bedsore and who is at risk?",
      a: "Bedsores (pressure ulcers) are wounds that form when sustained pressure cuts off blood supply to the skin. They most commonly affect bedridden patients, wheelchair users, elderly individuals, post-surgical patients, and those with diabetes or circulation problems. Any person with reduced mobility is at risk.",
    },
    {
      q: "How do you treat bedsores at home?",
      a: "Our certified nurses perform thorough wound assessment to determine the stage of the bedsore, followed by professional cleaning, debridement (removal of damaged tissue), sterile dressing changes, infection control, and pain management. We also guide family members on repositioning techniques and skin care routines between visits.",
    },
    {
      q: "Do you provide equipment to prevent bedsores?",
      a: "Yes. We can advise on and help arrange pressure-relief mattresses, foam wedges, heel protectors, and other positioning aids that significantly reduce the risk of new pressure sores developing or existing sores worsening. Our nurses will assess your home setup and recommend the most suitable equipment.",
    },
    {
      q: "How many visits per week are needed?",
      a: "Frequency depends on the wound's severity and stage. Early-stage sores may require 2–3 visits per week, while advanced or infected wounds often need daily nursing visits. After the first assessment, our nurse will create a visit schedule tailored to your loved one's specific needs.",
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <SiteHeader />

        {/* ══ HERO ══ */}
        <section style={{ padding: "80px 0 60px", background: "linear-gradient(135deg,#f0fbfd 0%,#ffffff 65%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", bottom: -50, left: 60, width: 180, height: 180, borderRadius: "50%", background: S.teal, opacity: 0.09, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: -30, right: 180, width: 120, height: 120, borderRadius: "50%", background: S.teal, opacity: 0.1, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 80, left: "42%", width: 65, height: 65, borderRadius: "50%", background: S.teal, opacity: 0.07, pointerEvents: "none" }} />
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
              <div>
                <h1 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: S.blue, lineHeight: 1.2, marginBottom: 18 }}>
                  Expert <span style={{ color: S.teal }}>Bedsore Care,</span> For<br />a Swift Recovery
                </h1>
                <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                  Our certified nurses provide specialized and compassionate bedsore care, right in the comfort of your home. We focus on healing, pain relief, and prevention.
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="#" style={{ background: S.teal, color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Book a Nurse Visit</a>
                  <a href="#" style={{ border: `2px solid ${S.teal}`, color: S.teal, padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Learn More</a>
                </div>
              </div>
              <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,181,200,0.2)", aspectRatio: "4/3", background: "linear-gradient(135deg,#c8f0f5,#e0f7fa)" }}>
                <img src="https://images.unsplash.com/photo-1576765608622-067973a79f53?w=600&q=80" alt="Bedsore care nurse" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.target.style.display = "none"; }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2 — Specialized Care + 2×2 Services ══ */}
        <section style={{ padding: "80px 0", background: "#fff" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
              <div>
                <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
                  Specialized Care for Healing and Comfort
                </h2>
                <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28 }}>
                  We provide expert bedsore care, focusing on proper treatment, pain management, and preventative measures to ensure a safe and comfortable recovery for your loved one in the home environment.
                </p>
                {[
                  { label: "Certified Nurses", desc: "Our team is composed of licensed nurses with specialized training in bedsore management and wound care." },
                  { label: "Pain Management", desc: "We focus on relieving discomfort and managing symptoms to ensure a better quality of life for the patient." },
                  { label: "Preventative Care", desc: "Our care plans include proactive preventive measures to discourage the development of new bedsores and promote overall skin health." },
                ].map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                    <span style={{ color: S.teal, flexShrink: 0, marginTop: 2 }}>✔</span>
                    <div>
                      <strong style={{ color: S.blue }}>{f.label}: </strong>
                      <span style={{ color: S.gray }}>{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <rect x="4" y="2" width="16" height="20" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
                        <path d="M8 8h8M8 12h8M8 16h5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M13 15l4 4M15 15l-2 2" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ),
                    title: "Wound Assessment & Dressing",
                    desc: "Professional inspection and sterile dressing changes to accelerate healing.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M12 21s-8-4.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 10-8 10z" fill={S.teal} opacity=".8" />
                        <path d="M9 11c1 1.5 5 1.5 6 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                      </svg>
                    ),
                    title: "Pain & Symptom Management",
                    desc: "Effective strategies to manage discomfort and improve the patient's quality of life.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L12 14l-4.8 2.5.9-5.2L4.3 7.6l5.3-.8z" fill={S.teal} opacity=".8" />
                        <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      </svg>
                    ),
                    title: "Infection Prevention",
                    desc: "Strict hygiene protocols and professional care to prevent infection and complications.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4" fill={S.teal} opacity=".8" />
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={S.teal} opacity=".5" />
                        <path d="M17 14l2 2m0-2l-2 2" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    ),
                    title: "Patient Repositioning",
                    desc: "Safe and proper repositioning techniques to alleviate pressure and prevent further skin damage.",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{ background: S.lightGray, borderRadius: 12, padding: "26px 18px", textAlign: "center", transition: "box-shadow 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,181,200,0.18)`)}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                  >
                    <div style={{ width: 54, height: 54, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                      {s.icon}
                    </div>
                    <h4 style={{ color: S.blue, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{s.title}</h4>
                    <p style={{ color: S.gray, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3 — The At-Home Advantage ══ */}
        <section style={{ padding: "80px 0", background: S.lightGray }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>The At-Home Advantage</h2>
              <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
                Discover the significant benefits of receiving professional bedsore treatment where you are most comfortable — your home.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
              {[
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" stroke={S.teal} strokeWidth="1.8" fill="none" /><path d="M9 21V12h6v9" stroke={S.teal} strokeWidth="1.8" /></svg>),
                  title: "Skip the Clinic, Not the Care",
                  desc: "Receive top-tier bedsore treatment without the stress and inconvenience of travel or waiting rooms. We bring the expertise to you.",
                },
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill={S.teal} /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={S.teal} opacity=".6" /><path d="M17 13l2 2 3-3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" /></svg>),
                  title: "Truly Personalised Sessions",
                  desc: "Your therapist's focus is entirely on you, tailoring every exercise and technique to your needs and unique home environment.",
                },
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 21s-8-4.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 10-8 10z" fill={S.teal} opacity=".8" /><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" /></svg>),
                  title: "Comfort Breeds Confidence",
                  desc: "Recovering in a familiar, stress-free space reduces anxiety and can significantly improve your mobility and confidence.",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  style={{ background: "#fff", borderRadius: 14, padding: "36px 28px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 12px 36px rgba(0,181,200,0.18)`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
                >
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>{b.icon}</div>
                  <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{b.title}</h3>
                  <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 4 — Your Path to Healing and Relief ══ */}
        <section style={{ padding: "80px 0", background: "#fff" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>Your Path to Healing and Relief</h2>
              <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                We've designed a simple and compassionate process to ensure your loved one receives expert bedsore care without delay.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
              <div style={{ position: "absolute", top: 27, left: "12%", right: "12%", height: 2, background: `linear-gradient(to right,${S.teal},${S.tealDark})`, opacity: 0.22, zIndex: 0 }} />
              {[
                { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill={S.teal} /></svg>), title: "Initial Call", desc: "A brief assessment call to understand the patient's condition and to inform you of the full range of options available." },
                { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" /><path d="M8 8h8M8 12h8M8 16h5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" /></svg>), title: "Expert Assessment", desc: "A certified nurse conducts a thorough in-home assessment to evaluate the bedsore and recommend a course of action." },
                { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill={S.teal} opacity=".2" /><path d="M7 12l3 3 7-7" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" /></svg>), title: "Personalized Care Plan", desc: "We create a customized care plan, including pain management, wound care, and prevention strategies to ensure a safe and comfortable recovery." },
                { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" fill="none" /><path d="M12 7v5l3 3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" /></svg>), title: "Consistent Care & Monitoring", desc: "Our nurses provide consistent care and monitor the bedsore's progress, adjusting the treatment plan as needed until full healing is achieved." },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "0 8px" }}>
                  <div style={{ width: 54, height: 54, borderRadius: "50%", background: S.tealLight, border: `2px solid ${S.teal}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>{s.icon}</div>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: S.teal, color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "-10px auto 16px" }}>{i + 1}</div>
                  <h4 style={{ color: S.blue, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.title}</h4>
                  <p style={{ color: S.gray, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 5 — Testimonials ══ */}
        <section style={{ padding: "80px 0", background: S.lightGray }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>Stories of Healing and Comfort</h2>
              <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                Hear from patients and families who found compassionate and expert bedsore care in the comfort of their home.
              </p>
            </div>
            <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                {[active, (active + 1) % testimonials.length].map((idx) => {
                  const t = testimonials[idx];
                  return (
                    <div key={idx} style={{ background: "#fff", borderRadius: 14, padding: "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                      <div style={{ fontSize: 40, color: S.teal, lineHeight: 1, marginBottom: 12, fontFamily: "Georgia,serif" }}>"</div>
                      <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{t.text}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 40, height: 40, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: S.teal, fontSize: 12 }}>{t.initials}</div>
                        <div>
                          <div style={{ fontWeight: 700, color: S.blue, fontSize: 14 }}>{t.name}</div>
                          <div style={{ color: S.teal, fontSize: 12 }}>{t.role}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {[-1, 1].map((dir, i) => (
                <button key={i} onClick={() => setActive((p) => (p + dir + testimonials.length) % testimonials.length)} style={{ position: "absolute", top: "50%", [dir === -1 ? "left" : "right"]: -52, transform: "translateY(-50%)", background: S.teal, border: "none", color: "#fff", width: 38, height: 38, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {dir === -1 ? "‹" : "›"}
                </button>
              ))}
              <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} style={{ width: 10, height: 10, borderRadius: "50%", border: "none", background: i === active ? S.teal : "#ccc", cursor: "pointer", padding: 0 }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 6 — FAQ ══ */}
        <section style={{ padding: "80px 0", background: "#fff" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>Your Questions, Answered</h2>
              <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                We are here to provide clarity and reassurance. Here are answers to some of the most common questions about bedsore care.
              </p>
            </div>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ borderBottom: "1px solid #e8eef3" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: "none", border: "none", padding: "20px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
                    <span style={{ fontWeight: 600, color: S.blue, fontSize: 16 }}>{f.q}</span>
                    <span style={{ color: S.teal, fontSize: 22, transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0, marginLeft: 16 }}>+</span>
                  </button>
                  {openFaq === i && <div style={{ paddingBottom: 20, color: S.gray, lineHeight: 1.8, fontSize: 14 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 7 — CTA ══ */}
        <section style={{ padding: "80px 0", background: "linear-gradient(135deg,#f0fbfd 0%,#e8f7fa 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: S.teal, opacity: 0.07, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, left: -40, width: 240, height: 240, borderRadius: "50%", background: S.teal, opacity: 0.06, pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
              Ready to Take the First Step Towards<br />
              <span style={{ color: S.teal }}>Healing?</span>
            </h2>
            <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.8 }}>
              Our certified nurses are ready to provide the compassionate and expert bedsore care your loved one needs. Contact us today for a free consultation.
            </p>
            <a
              href="#"
              style={{ display: "inline-block", background: S.teal, color: "#fff", padding: "15px 40px", borderRadius: 7, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: `0 8px 24px rgba(0,181,200,0.35)`, transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,181,200,0.45)`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,181,200,0.35)`; }}
            >
              Request Your Free Consultation
            </a>
          </div>
        </section>

        <NewsletterSection
          title="Ready to Begin Your Journey to Wellness?"
          text="Whether you are a patient, partner, or future team member, we are here to support your next step."
        />
        <SiteFooter />
      </div>
    </>
  );
};