// import React from "react";
// import { SiteFooter } from "../components/SiteFooter";
// import { SiteHeader } from "../components/SiteHeader";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const NeuroIpd = () => {
//   return (
//     <>
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Neuro Ipd</h1>
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
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { NewsletterSection } from "../components/NewsletterSection";

const S = {
  teal: "#00b5c8",
  tealDark: "#0097aa",
  tealLight: "#e6f9fb",
  blue: "#1a3c6e",
  gray: "#666",
  lightGray: "#f4f8fb",
};

export const NeuroIpd = () => {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const testimonials = [
    {
      initials: "S.M.",
      name: "S. Mishra",
      role: "Patient, Bhubaneswar",
      text: "After my stroke I was terrified about recovery. The neurology IPD team monitored me around the clock and designed a personalised rehabilitation plan. Their dedication and expertise made a life-changing difference to my recovery.",
    },
    {
      initials: "P.D.",
      name: "P. Das",
      role: "Family Member, Cuttack",
      text: "My mother was admitted for epilepsy management. The neurologists were incredibly thorough — they reviewed her full history, adjusted her medications, and ensured she was stable before discharge. We felt truly cared for.",
    },
    {
      initials: "R.N.",
      name: "R. Nanda",
      role: "Patient, Puri",
      text: "I was diagnosed with Parkinson's disease and admitted for a comprehensive assessment. The multidisciplinary team — neurologists, physiotherapists, and speech therapists — worked together seamlessly. I left with a clear, manageable care plan.",
    },
  ];

  const faqs = [
    {
      q: "What conditions does the Neuro IPD treat?",
      a: "Our Neuro IPD treats a comprehensive range of neurological conditions including stroke and post-stroke rehabilitation, epilepsy and seizure management, Parkinson's disease, multiple sclerosis, Guillain-Barré syndrome, meningitis, encephalitis, brain and spinal cord injuries, movement disorders, and neuro-rehabilitation following surgery or trauma.",
    },
    {
      q: "What diagnostic technology is available in the department?",
      a: "Our department is equipped with advanced diagnostic tools including EEG (Electroencephalography) for brain activity monitoring, NCV (Nerve Conduction Velocity) studies, EMG (Electromyography), CT and MRI brain imaging, lumbar puncture facilities, and continuous cardiac and neurological monitoring systems for admitted patients.",
    },
    {
      q: "How is my treatment plan created?",
      a: "Every patient admitted to our Neuro IPD receives a personalised, multidisciplinary treatment plan. Our team of neurologists, neuro-physiotherapists, speech therapists, nutritionists, and nursing staff collaborate to assess your condition and design a care pathway tailored specifically to your diagnosis, recovery goals, and overall health.",
    },
    {
      q: "What happens after I am discharged?",
      a: "Discharge from our Neuro IPD is carefully planned to ensure continuity of care. You will receive a detailed discharge summary, a personalised follow-up schedule, physiotherapy and rehabilitation guidance, medication plan, and direct contact details for your neurologist. Our team remains available for post-discharge queries and home-care coordination.",
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
                  Specialized <span style={{ color: S.teal }}>Neurological Care,</span><br />In a Healing Environment
                </h1>
                <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                  Our dedicated indoor patient department provides advanced diagnostics and expert treatment for a wide range of neurological conditions, ensuring compassionate and professional care for every patient.
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="#" style={{ background: S.teal, color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Book a Consultation</a>
                  <a href="#" style={{ border: `2px solid ${S.teal}`, color: S.teal, padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Learn More</a>
                </div>
              </div>
              <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,181,200,0.2)", aspectRatio: "4/3", background: "linear-gradient(135deg,#c8f0f5,#e0f7fa)" }}>
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80"
                  alt="Neurology department"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2 — Advanced Diagnostics + 2×2 Services ══ */}
        <section style={{ padding: "80px 0", background: "#fff" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
              {/* Left */}
              <div>
                <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
                  Advanced Diagnostics & Expert Treatment
                </h2>
                <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28 }}>
                  Our neurology department is equipped with state-of-the-art facilities and staffed by a highly experienced team of neurologists and medical professionals, dedicated to diagnosing and treating a broad spectrum of neurological disorders.
                </p>
                {[
                  { label: "Specialized Medical Staff", desc: "Our team includes board-certified neurologists, neurosurgeons, and highly trained nurses." },
                  { label: "Advanced Diagnostics", desc: "We utilise modern technologies like EEG and NCV to ensure accurate diagnosis." },
                  { label: "Comprehensive Treatment Plans", desc: "Each patient receives a personalised, multidisciplinary plan for effective care and recovery." },
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

              {/* Right 2×2 */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M3 12h4l2-5 3 10 2-7 2 4 2-2h3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    ),
                    title: "Stroke Rehabilitation",
                    desc: "Dedicated care and therapy to regain strength and mobility after a stroke.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H13z" fill={S.teal} />
                      </svg>
                    ),
                    title: "Epilepsy Management",
                    desc: "Precise diagnosis and ongoing management of epilepsy with advanced EEG monitoring.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="6" r="3.5" fill={S.teal} opacity=".8" />
                        <path d="M7 21v-2a5 5 0 0 1 10 0v2" stroke={S.teal} strokeWidth="1.8" fill="none" strokeLinecap="round" />
                        <path d="M10 14l-2 4M14 14l2 4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ),
                    title: "Movement Disorders",
                    desc: "Specialised care for conditions like Parkinson's disease and balance disorders.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M9 3C6 3 4 5.5 4 8c0 2 1 3.5 2.5 4.5C5 13.5 4 15 4 17c0 2.5 2 4 5 4h6c3 0 5-1.5 5-4 0-2-1-3.5-2.5-4.5C19 11.5 20 10 20 8c0-2.5-2-5-5-5-1 0-2 .5-3 1.5C11 3.5 10 3 9 3z" fill={S.teal} opacity=".7" />
                        <path d="M12 8v4M10 10h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ),
                    title: "Neuro-Rehabilitation",
                    desc: "Physical, occupational, and speech therapy tailored for neurological recovery.",
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

        {/* ══ SECTION 3 — The Advantages of Our Neurology Department ══ */}
        <section style={{ padding: "80px 0", background: S.lightGray }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>The Advantages of Our Neurology Department</h2>
              <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
                We provide a comprehensive, dedicated environment for neurological care, ensuring the best possible outcomes for our patients.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
              {[
                {
                  icon: (
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" fill="none" />
                      <path d="M12 7v5l3 3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ),
                  title: "24/7 Expert Medical Monitoring",
                  desc: "Our in-house team of neurologists and specialised nurses provides continuous monitoring and immediate response to any changes in a patient's condition.",
                },
                {
                  icon: (
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <circle cx="9" cy="7" r="3" fill={S.teal} />
                      <circle cx="17" cy="9" r="2.5" fill={S.teal} opacity=".6" />
                      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" fill={S.teal} />
                      <path d="M17 15c2.2 0 4 1.5 4 4" stroke={S.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                  ),
                  title: "Collaborative Specialist Care",
                  desc: "Patients benefit from a multidisciplinary team, including neurologists, neuro-physiotherapists, and nurses working together on a single, comprehensive treatment plan.",
                },
                {
                  icon: (
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M3 9l9-7 9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" stroke={S.teal} strokeWidth="1.8" fill="none" />
                      <path d="M9 21V12h6v9" stroke={S.teal} strokeWidth="1.8" />
                    </svg>
                  ),
                  title: "A Dedicated Healing Environment",
                  desc: "Our department provides a structured and supportive environment designed specifically for the care and recovery of neurological patients, ensuring safety and comfort.",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  style={{ background: "#fff", borderRadius: 14, padding: "36px 28px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 12px 36px rgba(0,181,200,0.18)`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
                >
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    {b.icon}
                  </div>
                  <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{b.title}</h3>
                  <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 4 — Your Path to Specialized Neurological Care (4-step) ══ */}
        <section style={{ padding: "80px 0", background: "#fff" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>Your Path to Specialized Neurological Care</h2>
              <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                We've designed a clear and supportive process to ensure a smooth transition for patients.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
              <div style={{ position: "absolute", top: 27, left: "12%", right: "12%", height: 2, background: `linear-gradient(to right,${S.teal},${S.tealDark})`, opacity: 0.22, zIndex: 0 }} />
              {[
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill={S.teal} /></svg>),
                  title: "Initial Consultation",
                  desc: "A comprehensive discussion to understand the patient's symptoms, history, and specific needs.",
                },
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" /><path d="M8 8h8M8 12h8M8 16h5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" /></svg>),
                  title: "Admission & Evaluation",
                  desc: "Our team reviews medical history and performs an in-depth neurological evaluation to create a personalised treatment plan.",
                },
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill={S.teal} opacity=".2" /><path d="M7 12l3 3 7-7" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" /></svg>),
                  title: "Dedicated Treatment",
                  desc: "The patient is admitted to our treatment room department where specialists directly care, manage, and monitoring.",
                },
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 14.93-4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" /><path d="M20 12a8 8 0 0 1-14.93 4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" /><path d="M19 4v4h-4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" /><path d="M5 20v-4H9" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" /></svg>),
                  title: "Recovery & Discharge",
                  desc: "We work closely with the patient and family to ensure a smooth transition to home care or follow-up visits.",
                },
              ].map((s, i) => (
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

        {/* ══ SECTION 5 — Testimonials ══ */}
        <section style={{ padding: "80px 0", background: S.lightGray }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>Patient Stories of Recovery</h2>
              <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                Hear from patients and families who have experienced expert neurological care in our dedicated department.
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
                <button
                  key={i}
                  onClick={() => setActive((p) => (p + dir + testimonials.length) % testimonials.length)}
                  style={{ position: "absolute", top: "50%", [dir === -1 ? "left" : "right"]: -52, transform: "translateY(-50%)", background: S.teal, border: "none", color: "#fff", width: 38, height: 38, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
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
                We are here to provide clarity and reassurance. Here are answers to some of the most common questions about our Neuro IPD.
              </p>
            </div>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ borderBottom: "1px solid #e8eef3" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", background: "none", border: "none", padding: "20px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}
                  >
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
              Need Expert <span style={{ color: S.teal }}>Neurological Care?</span>
            </h2>
            <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.8 }}>
              Our specialist neurology team is ready to provide advanced diagnosis and compassionate inpatient care. Contact us today to arrange a consultation.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="#"
                style={{ display: "inline-block", background: S.teal, color: "#fff", padding: "15px 40px", borderRadius: 7, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: `0 8px 24px rgba(0,181,200,0.35)`, transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,181,200,0.45)`; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,181,200,0.35)`; }}
              >
                Book a Consultation
              </a>
              <a
                href="tel:+918080000000"
                style={{ display: "inline-block", border: `2px solid ${S.teal}`, color: S.teal, padding: "15px 40px", borderRadius: 7, fontWeight: 700, fontSize: 16, textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = S.teal; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = S.teal; }}
              >
                Call Us Now
              </a>
            </div>
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