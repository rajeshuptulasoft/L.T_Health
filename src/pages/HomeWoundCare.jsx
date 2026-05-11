// import React from "react"; 
// import { SiteHeader } from "../components/SiteHeader";
// import { SiteFooter } from "../components/SiteFooter";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const HomeWoundCare = () => {
//   return (
//     <>
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Home Wound Care</h1>
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

export const HomeWoundCare = () => {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const testimonials = [
    {
      initials: "R.P.",
      name: "R. Patra",
      role: "Patient, Bhubaneswar",
      text: "The nurse who visited our home in Bhubaneswar was fantastic. She provided professional care for my post-operative wound, cleaned it thoroughly without any complications. A truly reliable service.",
    },
    {
      initials: "S.K.",
      name: "S. Kar",
      role: "Family Member, Cuttack",
      text: "My father has a chronic wound that requires regular dressing changes. The consistent, professional care from this team has made an enormous difference. We feel so much relief knowing he is cared for at home in Cuttack.",
    },
    {
      initials: "M.D.",
      name: "M. Das",
      role: "Patient, Puri",
      text: "After my surgery I was worried about wound care at home. The nurse was incredibly skilled, changed my dressings with expert precision, and explained every step. Healing has been swift and complication-free.",
    },
  ];

  const faqs = [
    {
      q: "What types of wounds do you treat?",
      a: "We treat a wide range of wounds including post-operative surgical wounds, chronic wounds (such as diabetic foot ulcers and venous leg ulcers), pressure sores (bedsores), traumatic wounds, burns, and minor injuries requiring professional dressing and care. Our nurses assess each wound individually and tailor the treatment to ensure the best healing outcome.",
    },
    {
      q: "How do you ensure a sterile environment at home?",
      a: "Our nurses arrive with all necessary sterile supplies — including gloves, sterile dressings, antiseptics, and clinical waste disposal bags. They follow strict infection control protocols at every step: hand hygiene, sterile field preparation, and proper disposal of all used materials. You do not need to provide any medical supplies.",
    },
    {
      q: "How often will a nurse visit?",
      a: "Visit frequency depends entirely on the wound type and severity. Minor or healing wounds may need dressings every 2–3 days, while complex or infected wounds may require daily visits. Our nurse will assess the wound at the first visit and recommend the most appropriate schedule, reviewing it regularly as the wound heals.",
    },
    {
      q: "Do I need to provide any medical supplies?",
      a: "No. Our nurses bring everything needed for professional wound care — sterile dressings, bandages, antiseptic solutions, gloves, and disposal kits. All supplies are included in our service. If any specialist dressings are required (e.g., silver-coated or foam dressings), we will inform you in advance.",
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
                  Expert <span style={{ color: S.teal }}>Wound Care</span> for a<br />Faster Recovery
                </h1>
                <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                  We bring professional fast aid and wound care services directly to your home, ensuring a sterile, safe, and comfortable environment for a quick and effective healing process.
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="#" style={{ background: S.teal, color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Book a Nurse Visit</a>
                  <a href="#" style={{ border: `2px solid ${S.teal}`, color: S.teal, padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Learn More</a>
                </div>
              </div>
              <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,181,200,0.2)", aspectRatio: "4/3", background: "linear-gradient(135deg,#c8f0f5,#e0f7fa)" }}>
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80"
                  alt="Wound care nurse at home"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2 — Safe, Sterile + 2×2 Services ══ */}
        <section style={{ padding: "80px 0", background: "#fff" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
              {/* Left */}
              <div>
                <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
                  Safe, Sterile, and Speedy Wound Care at Home
                </h2>
                <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28 }}>
                  From minor cuts to post-operative dressings, our certified nurses provide expert wound care with the utmost hygiene and professionalism, ensuring a fast and comfortable healing process.
                </p>
                {[
                  { label: "Certified Professionals", desc: "Our nurses are trained in advanced wound care and sterile procedures." },
                  { label: "Infection Prevention", desc: "We follow strict protocols to prevent infection and promote optimal healing." },
                  { label: "At-Home Comfort", desc: "Receive care in a familiar and calming environment, which can reduce anxiety and aid recovery." },
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
                        <path d="M12 3v4m0 10v4M3 12h4m10 0h4" stroke={S.teal} strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="5" stroke={S.teal} strokeWidth="2" fill="none" />
                        <path d="M10 12l2 2 3-3" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      </svg>
                    ),
                    title: "Post-Operative Care",
                    desc: "Professional dressing changes and tissue removal for a safe and clean recovery.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M4 12a8 8 0 0 1 14.93-4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
                        <path d="M20 12a8 8 0 0 1-14.93 4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
                        <path d="M19 4v4h-4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
                        <path d="M5 20v-4H9" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      </svg>
                    ),
                    title: "Chronic Wound Management",
                    desc: "Specialized care for long-term wounds, bedsores, and ulcers to promote full healing.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H13z" fill={S.teal} />
                      </svg>
                    ),
                    title: "Fast Aid for Minor Injuries",
                    desc: "Immediate and professional care for minor cuts, scrapes, and bruises to prevent infection.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" fill="none" />
                        <path d="M9 12l2 2 4-4" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" />
                      </svg>
                    ),
                    title: "Diabetic Foot Care",
                    desc: "Preventative and active care to manage and heal foot wounds for diabetic patients.",
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

        {/* ══ SECTION 3 — Benefits of At-Home Wound Care ══ */}
        <section style={{ padding: "80px 0", background: S.lightGray }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>The Benefits of At-Home Wound Care</h2>
              <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
                At-home wound care provides a safe and effective path to healing, offering benefits that go beyond a clinical setting.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
              {[
                {
                  icon: (
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L12 14l-4.8 2.5.9-5.2L4.3 7.6l5.3-.8z" fill={S.teal} opacity=".8" />
                      <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    </svg>
                  ),
                  title: "Advanced Infection Control",
                  desc: "Our nurses follow rigorous sterile procedures at home, significantly reducing the risk of hospital-acquired infections and complications.",
                },
                {
                  icon: (
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <rect x="4" y="3" width="16" height="18" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
                      <path d="M8 8h8M8 12h8M8 16h5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                  title: "Expert Monitoring for Healing",
                  desc: "Receive consistent, professional assessments from a skilled nurse who monitors your wound's progress to ensure optimal healing and swift recovery.",
                },
                {
                  icon: (
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M3 9l9-7 9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" stroke={S.teal} strokeWidth="1.8" fill="none" />
                      <path d="M9 21V12h6v9" stroke={S.teal} strokeWidth="1.8" />
                    </svg>
                  ),
                  title: "Comfort of Your Own Home",
                  desc: "Avoid painful travel and long waiting times. Our services bring quality care to you, allowing for a stress-free and more comfortable recovery environment.",
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

        {/* ══ SECTION 4 — Your Path to Expert Wound Care (4-step process) ══ */}
        <section style={{ padding: "80px 0", background: "#fff" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>Your Path to Expert Wound Care</h2>
              <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                We have designed a simple and efficient process to provide you with fast and professional wound care in your home.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
              <div style={{ position: "absolute", top: 27, left: "12%", right: "12%", height: 2, background: `linear-gradient(to right,${S.teal},${S.tealDark})`, opacity: 0.22, zIndex: 0 }} />
              {[
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill={S.teal} /></svg>),
                  title: "Initial Call",
                  desc: "Call us to discuss your wound care needs and schedule an appointment at a time that suits you.",
                },
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill={S.teal} /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={S.teal} opacity=".6" /><path d="M17 13l2 2 3-3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" /></svg>),
                  title: "Nurse Assignment",
                  desc: "We assign a certified and experienced nurse who is matched to your case, ensuring you receive the best care.",
                },
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" /><path d="M8 8h8M8 12h8M8 16h5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" /></svg>),
                  title: "In-Home Assessment & Care",
                  desc: "The nurse arrives at your home to provide a full assessment, clean the wound, and apply a professional dressing in a sterile manner.",
                },
                {
                  icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" fill="none" /><path d="M12 7v5l3 3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" /></svg>),
                  title: "Follow-up and Monitoring",
                  desc: "We arrange follow-up visits to ensure the wound is healing correctly, providing continued support until full recovery.",
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
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>Stories of Fast & Effective Healing</h2>
              <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                Hear from patients who have experienced the difference our expert wound care services have made.
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
                We are here to provide clarity and reassurance. Here are answers to some of the most common questions about our wound care services.
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
              Don't Wait, Get <span style={{ color: S.teal }}>Expert Wound Care</span> Today
            </h2>
            <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.8 }}>
              Our certified nurses are ready to provide professional wound care in the comfort of your home. Contact us today to ensure a safe and fast recovery.
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