// import React from "react";
// import { SiteHeader } from "../components/SiteHeader";
// import { SiteFooter } from "../components/SiteFooter";
// import { FloatingSupport } from "../components/FloatingSupport";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const HomePatientCareAttendant = () => {
//   return (
//     <>
//       <FloatingSupport />
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Home Patient Care Attendant</h1>
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
  daily: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" fill={S.teal} />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={S.teal} opacity=".7" />
    </svg>
  ),
  postOp: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 3v4m0 10v4M3 12h4m10 0h4" stroke={S.teal} strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="5" stroke={S.teal} strokeWidth="2" fill="none" />
      <path d="M10 12l2 2 3-3" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  ),
  medication: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="8" y="3" width="8" height="5" rx="2" fill={S.teal} />
      <rect x="5" y="8" width="14" height="13" rx="2" fill={S.teal} opacity=".7" />
      <path d="M9 13h6M12 11v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  mobility: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="4" r="2" fill={S.teal} />
      <path d="M8 22l2-6 2 3 3-8 2 5" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M10 10l2-4 3 2" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  ),
  comfort: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9z" fill={S.teal} opacity=".7" />
      <path d="M9 21V12h6v9" fill={S.teal} />
    </svg>
  ),
  personalized: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" fill={S.teal} />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={S.teal} opacity=".5" />
      <path d="M17 13l2 2 3-3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  peace: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 21s-8-4.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 10-8 10z" fill={S.teal} />
      <path d="M9 11c1 1.5 5 1.5 6 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  phone: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill={S.teal} />
    </svg>
  ),
  assessment: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  carePlan: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="3" fill={S.teal} opacity=".2" />
      <path d="M7 12l3 3 7-7" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  consistent: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" />
      <path d="M12 7v5l3 3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" />
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
    <div style={{ position: "absolute", bottom: -50, left: 80, width: 160, height: 160, borderRadius: "50%", background: S.teal, opacity: 0.1, pointerEvents: "none" }} />
    <div style={{ position: "absolute", top: -30, right: 200, width: 100, height: 100, borderRadius: "50%", background: S.teal, opacity: 0.12, pointerEvents: "none" }} />

    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left */}
        <div>
          <h1 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: S.blue, lineHeight: 1.2, marginBottom: 18 }}>
            Personalized{" "}
            <span style={{ color: S.teal }}>Patient Care,</span>
            <br />
            In Your Home
          </h1>
          <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Our compassionate and certified patient care attendants provide dedicated support to help your loved one recover and live comfortably at home.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#" style={{ background: S.teal, color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Book a Consultation
            </a>
            <a href="#" style={{ border: `2px solid ${S.teal}`, color: S.teal, padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Learn More
            </a>
          </div>
        </div>

        {/* Right */}
        <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,181,200,0.2)", aspectRatio: "4/3", background: "linear-gradient(135deg,#c8f0f5,#e0f7fa)", position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80"
            alt="Home patient care"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — Compassionate Care + Services 2×2
═══════════════════════════════════════════ */
const ServicesSection = () => {
  const services = [
    { icon: Icon.daily, title: "Daily Living Assistance", desc: "Help with personal hygiene, dressing, bathing, and other essential daily routines." },
    { icon: Icon.postOp, title: "Post-Operative Support", desc: "Gentle assistance and monitoring to facilitate a smooth and safe recovery after surgery." },
    { icon: Icon.medication, title: "Medication Management", desc: "Ensuring medications are taken on time and as prescribed, with careful adherence to schedules." },
    { icon: Icon.mobility, title: "Mobility & Fall Prevention", desc: "Guiding patients with safe transitions to prevent falls and maintain a patient's independence." },
  ];

  const features = [
    { label: "Trained & Skilled Attendants", desc: "Our team is highly trained in patient support and care techniques." },
    { label: "Personalized Care Plans", desc: "We create a customized care plan that fits the patient's specific needs and recovery goals." },
    { label: "Supportive Home Environment", desc: "Care is provided in the comfort of home, which can significantly improve a patient's well-being." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
              Compassionate Care for a Better Recovery
            </h2>
            <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28 }}>
              Our patient care attendants provide dedicated support to assist with daily living, ensuring your loved one is safe, comfortable, and well-cared for as they recover at home.
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
   SECTION 3 — Advantages of At-Home Care
═══════════════════════════════════════════ */
const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Icon.comfort,
      title: "Holistic Comfort & Healing",
      desc: "Patients recover in a familiar environment, surrounded by their belongings and family, which promotes faster physical and emotional healing.",
    },
    {
      icon: Icon.personalized,
      title: "Dedicated, Personalized Attention",
      desc: "Our attendants provide focused, one-on-one care, ensuring every aspect of the patient's recovery plan is followed with precision and compassion.",
    },
    {
      icon: Icon.peace,
      title: "Peace of Mind for Families",
      desc: "At-home care lessens the burden on family members, giving them peace of mind that their loved one is safe and receiving professional, reliable support.",
    },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            The Advantages of At-Home Patient Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            At-home care provides a superior healing environment, offering comfort, safety, and personalized support that a hospital often cannot.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {advantages.map((a, i) => (
            <div
              key={i}
              style={{ background: "#fff", borderRadius: 14, padding: "36px 28px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 12px 36px rgba(0,181,200,0.18)`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
            >
              <IconCircle size={60}>{a.icon}</IconCircle>
              <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{a.title}</h3>
              <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.7 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 4 — Your Path to Professional Care (Process)
═══════════════════════════════════════════ */
const ProcessSection = () => {
  const steps = [
    { icon: Icon.phone, title: "Initial Consultation", desc: "A friendly call to understand the patient's needs and discuss how we can help." },
    { icon: Icon.assessment, title: "In-Home Assessment", desc: "Our team visits for a detailed assessment of the patient's condition and living environment." },
    { icon: Icon.carePlan, title: "Personalized Care Plan", desc: "We create a customized care plan that fits the patient's specific needs, routines, and preferences." },
    { icon: Icon.consistent, title: "Consistent, Compassionate Care", desc: "A dedicated attendant begins providing professional and supportive care with regular check-ins to ensure satisfaction." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Your Path to Professional Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            We've designed a simple and compassionate process to connect your loved one with a qualified care attendant.
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
   SECTION 5 — Testimonials (Families' Stories)
═══════════════════════════════════════════ */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    { initials: "L.D.", name: "L. Das", role: "Patient's Spouse, Cuttack", text: "The patient care attendant for my husband has been a game-changer. They provide dedicated, compassionate care that has improved his quality of life and given our family peace of mind." },
    { initials: "P.P.", name: "P. Panda", role: "Family Member, Puri", text: "The professional support we received for my grandmother's care was exceptional. Her attendant was trained, highly skilled, and made her feel safe and cared for." },
    { initials: "S.M.", name: "S. Mishra", role: "Patient, Bhubaneswar", text: "Recovering at home with a skilled attendant made all the difference. I felt comfortable and well-supported throughout my entire recovery journey." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Families' Stories of Care and Recovery
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Hear from those who have experienced the difference our patient care attendants make.
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
   SECTION 6 — FAQ (Your Questions, Answered)
═══════════════════════════════════════════ */
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: "What services does a patient care attendant provide?", a: "Our patient care attendants assist with daily living activities such as bathing, dressing, and grooming, as well as post-operative support, medication reminders, mobility assistance, wound care monitoring, and companionship to promote overall well-being." },
    { q: "Are your care attendants certified and reliable?", a: "Yes, all our care attendants are thoroughly vetted, trained, and certified. They undergo background checks and receive ongoing training in patient care, first aid, and safety protocols to ensure the highest standard of care." },
    { q: "Can you provide care 24/7?", a: "Absolutely. We offer flexible care arrangements including part-time, full-time, and round-the-clock 24/7 care depending on your loved one's needs. Our team will work with you to find the most suitable schedule." },
    { q: "How do you create a personalized care plan?", a: "We begin with a thorough in-home assessment conducted by our care specialists. We take into account the patient's medical history, recovery goals, daily routines, and personal preferences to craft a truly personalized care plan." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Your Questions, Answered
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            We are here to provide clarity and reassurance. Here are answers to some of the most common questions about our services.
          </p>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e8eef3" }}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{ width: "100%", background: "none", border: "none", padding: "20px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}
              >
                <span style={{ fontWeight: 600, color: S.blue, fontSize: 16 }}>{f.q}</span>
                <span style={{ color: S.teal, fontSize: 22, transform: openIdx === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0, marginLeft: 16 }}>+</span>
              </button>
              {openIdx === i && (
                <div style={{ paddingBottom: 20, color: S.gray, lineHeight: 1.8, fontSize: 14 }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 7 — Bottom CTA
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
        Ready to Bring{" "}
        <span style={{ color: S.teal }}>Critical Care Home?</span>
      </h2>
      <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.8 }}>
        When every moment counts, we are here to help. Contact us immediately to arrange a home ICU setup and provide your loved one with the care they need.
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
        Request an Urgent Consultation
      </a>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════ */
export const HomePatientCareAttendant = () => {
  return (
    <>
      <FloatingSupport />
      <div className="page-wrapper">
        <SiteHeader />

        <HeroSection />
        <ServicesSection />
        <AdvantagesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
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