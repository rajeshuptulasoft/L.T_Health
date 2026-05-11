// import React from "react";
// import { SiteHeader } from "../components/SiteHeader";
// import { SiteFooter } from "../components/SiteFooter";
// import { FloatingSupport } from "../components/FloatingSupport";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const HomeICUSupport = () => {
//   return (
//     <>
//       <FloatingSupport />
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Home ICU Setup</h1>
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

/* ── Small reusable icon circle ── */
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
      <rect x="3" y="6" width="18" height="12" rx="3" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M7 12h2l2-3 2 6 2-3h2" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  monitor: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M8 21h8M12 17v4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 10l2-3 2 5 2-2 2 2 2-4" stroke={S.teal} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  infusion: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 3v4M9 5h6" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="8" y="7" width="8" height="10" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M12 17v4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="21" r="1" fill={S.teal} />
    </svg>
  ),
  oxygen: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M9 12h6M12 9v6" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" fill={S.tealLight} />
    </svg>
  ),
  comfort: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M3 12h18" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 12c0 5 9 9 9 9s9-4 9-9" fill={S.tealLight} stroke={S.teal} strokeWidth="1.5" />
      <path d="M3 12c0-5 9-9 9-9s9 4 9 9" fill="none" stroke={S.teal} strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  ),
  family: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="9" cy="7" r="3" fill={S.teal} />
      <circle cx="17" cy="9" r="2.5" fill={S.teal} opacity=".6" />
      <path d="M2 20c0-4 3-6 7-6s7 2 7 6" fill={S.teal} />
      <path d="M16 15c2.5 0 5 1.5 5 5" stroke={S.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  savings: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M12 7v1.5M12 15.5V17M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-1 2-2.5 2.5S9.5 13.5 9.5 15H15" stroke={S.teal} strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  ),
  consultation: (
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
  setup: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" fill={S.teal} />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.48M7.76 7.76a6 6 0 0 0 0 8.48" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity=".5" />
    </svg>
  ),
  monitoring247: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M12 7v5l3 3" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
    {/* decorative blobs */}
    <div style={{ position: "absolute", bottom: -50, left: 80, width: 160, height: 160, borderRadius: "50%", background: S.teal, opacity: 0.1, pointerEvents: "none" }} />
    <div style={{ position: "absolute", top: -30, right: 200, width: 100, height: 100, borderRadius: "50%", background: S.teal, opacity: 0.12, pointerEvents: "none" }} />

    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left */}
        <div>
          <h1 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: S.blue, lineHeight: 1.2, marginBottom: 18 }}>
            Hospital-Level Care,{" "}
            <span style={{ color: S.teal }}>In the Comfort of Home</span>
          </h1>
          <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            We bring a complete Intensive Care Unit (ICU) setup to your home with professional nurses and medical equipment, providing critical care when it's needed most.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#" style={{ background: S.teal, color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Request an Urgent Consultation
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
            alt="Home ICU Setup"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — Expert Care & Equipment + Services 2×2
═══════════════════════════════════════════ */
const ExpertCareSection = () => {
  const services = [
    { icon: Icon.ventilator, title: "Ventilator Support", desc: "Professional management and care of life-sustaining ventilators with state-of-the-art equipment." },
    { icon: Icon.monitor, title: "Patient Monitoring", desc: "Continuous vital sign monitoring with alerts and rapid response equipment for immediate response." },
    { icon: Icon.infusion, title: "Infusion Pumps", desc: "Precise and reliable administration of medications and fluids as prescribed by your physician." },
    { icon: Icon.oxygen, title: "Oxygen Support", desc: "High-flow oxygen concentrators and other respiratory devices to maintain healthy blood oxygen." },
  ];

  const features = [
    { label: "Specialized Medical Staff", desc: "Our team includes certified doctors, nurses, and technicians trained in critical care." },
    { label: "24/7 Monitoring", desc: "We provide continuous monitoring and rapid response to ensure patient safety and stability." },
    { label: "Advanced Medical Equipment", desc: "We supply and set up all necessary equipment, from ventilators to infusion pumps." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
              Expert Care & Advanced Equipment, At Home
            </h2>
            <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28 }}>
              We bring a complete Intensive Care Unit (ICU) to your home, ensuring your loved one receives hospital-level medical attention with the comfort and support of family nearby.
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
   SECTION 3 — Benefits of At-Home ICU Care
═══════════════════════════════════════════ */
const BenefitsSection = () => {
  const benefits = [
    { icon: Icon.comfort, title: "Unmatched Comfort and Familiarity", desc: "Patients heal and recover better in a comfortable, familiar environment surrounded by their loved ones, which can reduce stress and anxiety." },
    { icon: Icon.family, title: "Closer Family Involvement", desc: "Family members can stay close to the patient at all times, providing invaluable emotional support and staying updated on their condition without hospital restrictions." },
    { icon: Icon.savings, title: "Significant Cost Savings", desc: "Home ICU care can be a more affordable alternative to long-term hospitalisation, reducing expenses while maintaining a high standard of medical care." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            The Benefits of At-Home ICU Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Receive a higher level of care and support without the stress and inconvenience of a hospital stay.
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
   SECTION 4 — Your Path to At-Home ICU Care (Process)
═══════════════════════════════════════════ */
const ProcessSection = () => {
  const steps = [
    { icon: Icon.consultation, title: "Urgent Consultation", desc: "A quick and compassionate call to understand your needs and begin the process of setting up care." },
    { icon: Icon.assessment, title: "Medical Assessment", desc: "Our medical team conducts a swift evaluation to determine the specific ICU equipment and staff required." },
    { icon: Icon.setup, title: "Rapid Setup", desc: "We promptly procure and set up all necessary equipment at your home, turning it into a fully functional ICU." },
    { icon: Icon.monitoring247, title: "24/7 Monitoring & Care", desc: "Our dedicated medical team begins round-the-clock monitoring and care, ensuring a stable and safe environment." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Your Path to At-Home ICU Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 460, margin: "0 auto", lineHeight: 1.8 }}>
            We've designed a simple and rapid process to set up critical care for your loved one in the comfort of your home.
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
   SECTION 5 — Testimonials (Families' Stories of Recovery)
═══════════════════════════════════════════ */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    { initials: "A.R.", name: "A. Rout", role: "Family Member, Puri", text: "The care team was incredible. They set everything up within hours and we never felt alone through the process. Our father's recovery was remarkable." },
    { initials: "S.S.", name: "S. Singh", role: "Family Member, Bhubaneswar", text: "Having the ICU at home meant my mother was surrounded by her family. The nurses and doctors were highly professional and gave us constant updates. We couldn't have asked for better care for our family." },
    { initials: "P.N.", name: "P. Nanda", role: "Family Member, Cuttack", text: "After my husband's surgery, the home ICU team made the transition from hospital seamless. The monitoring equipment and expert nurses gave us complete peace of mind around the clock." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Families' Stories of Recovery
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Hear from those who found professional, compassionate critical care for their loved ones in the comfort of their own homes.
          </p>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
          {/* Cards row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[active, (active + 1) % testimonials.length].map((idx) => {
              const t = testimonials[idx];
              return (
                <div key={idx} style={{ background: "#fff", borderRadius: 14, padding: "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                  <div style={{ fontSize: 40, color: S.teal, lineHeight: 1, marginBottom: 12, fontFamily: "Georgia, serif" }}>"</div>
                  <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{t.text}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: S.teal, fontSize: 13 }}>
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

          {/* Arrow buttons */}
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
    { q: "What is included in a Home ICU setup?", a: "Our Home ICU setup includes all essential critical care equipment such as ventilators, patient monitoring systems, infusion pumps, oxygen concentrators, suction machines, and hospital-grade beds. We also provide a dedicated team of trained ICU nurses and doctors for round-the-clock care." },
    { q: "Are the medical staff experienced in critical care?", a: "Yes, all our medical professionals are highly trained and experienced in critical and intensive care. Our nurses hold ICU-specific certifications and our doctors specialise in critical care medicine, ensuring your loved one receives the highest quality of medical attention." },
    { q: "How long does it take to set up a Home ICU?", a: "We understand that critical care situations are urgent. Our team is committed to rapid deployment and can typically complete a full Home ICU setup within a few hours of your initial consultation, depending on your location and specific equipment requirements." },
    { q: "Is a Home ICU a viable alternative to a hospital?", a: "For many patients requiring post-operative care, recovery from critical illness, or palliative ICU care, a Home ICU is an excellent alternative. It offers hospital-level care in a familiar, comfortable environment, often with significant cost savings. Our medical team will assess your loved one's condition to determine if Home ICU care is the right choice." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Your Questions, Answered
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Here are answers to some of the most critical questions about our Home ICU Setup services.
          </p>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e8eef3", overflow: "hidden" }}>
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
        When every moment counts, we are here to help. Contact us immediately to arrange a Home ICU setup and give your loved one the care they need.
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
export const HomeICUSupport = () => {
  return (
    <>
      <FloatingSupport />
      <div className="page-wrapper">
        <SiteHeader />

        <HeroSection />
        <ExpertCareSection />
        <BenefitsSection />
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