// import React from "react";
// import { SiteHeader } from "../components/SiteHeader";
// import { SiteFooter } from "../components/SiteFooter";
// import { FloatingSupport } from "../components/FloatingSupport";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const HomeDoctorVisit = () => {
//   return (
//     <>
//       <FloatingSupport />
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Home Doctor Visit</h1>
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
  surgery: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 3v4m0 10v4M3 12h4m10 0h4" stroke={S.teal} strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="5" stroke={S.teal} strokeWidth="2" fill="none" />
      <path d="M10 12l2 2 3-3" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  ),
  pain: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 21s-8-4.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 10-8 10z" fill={S.teal} opacity=".8" />
      <path d="M9 11c1 1.5 5 1.5 6 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  elderly: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="6" r="3.5" fill={S.teal} />
      <path d="M7 21v-2a5 5 0 0 1 10 0v2" stroke={S.teal} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M10 14l-2 4M14 14l2 4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  neuro: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M9 3C6 3 4 5.5 4 8c0 2 1 3.5 2.5 4.5C5 13.5 4 15 4 17c0 2.5 2 4 5 4h6c3 0 5-1.5 5-4 0-2-1-3.5-2.5-4.5C19 11.5 20 10 20 8c0-2.5-2-5-5-5-1 0-2 .5-3 1.5C11 3.5 10 3 9 3z" fill={S.teal} opacity=".7" />
      <path d="M12 8v4M10 10h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  time: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" fill="none" />
      <path d="M12 7v5l3 3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  oneonone: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="9" cy="7" r="3" fill={S.teal} />
      <circle cx="17" cy="9" r="2.5" fill={S.teal} opacity=".6" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" fill={S.teal} />
      <path d="M17 15c2.2 0 4 1.5 4 4" stroke={S.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  comfort: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M9 21V12h6v9" stroke={S.teal} strokeWidth="1.8" />
    </svg>
  ),
  schedule: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M8 2v4M16 2v4M3 10h18" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 14h2m2 0h4M8 18h2" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  match: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" fill={S.teal} />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={S.teal} opacity=".6" />
      <path d="M17 13l2 2 3-3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  consult: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill={S.teal} opacity=".7" />
      <path d="M8 10h8M8 14h5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  followup: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M4 12a8 8 0 0 1 14.93-4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M20 12a8 8 0 0 1-14.93 4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M19 4v4h-4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M5 20v-4H9" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
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
    <div style={{ position: "absolute", bottom: -50, left: 60, width: 180, height: 180, borderRadius: "50%", background: S.teal, opacity: 0.09, pointerEvents: "none" }} />
    <div style={{ position: "absolute", top: -30, right: 180, width: 120, height: 120, borderRadius: "50%", background: S.teal, opacity: 0.1, pointerEvents: "none" }} />
    <div style={{ position: "absolute", top: 80, left: "40%", width: 70, height: 70, borderRadius: "50%", background: S.teal, opacity: 0.07, pointerEvents: "none" }} />

    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left */}
        <div>
          <h1 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: S.blue, lineHeight: 1.2, marginBottom: 18 }}>
            Expert{" "}
            <span style={{ color: S.teal }}>Doctor Visits,</span>
            <br />
            In Your Home
          </h1>
          <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Receive professional medical consultations and personalized care from our experienced doctors without the need to travel. We bring the clinic to you.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#" style={{ background: S.teal, color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Book a Doctor Visit
            </a>
            <a href="#" style={{ border: `2px solid ${S.teal}`, color: S.teal, padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Learn More
            </a>
          </div>
        </div>

        {/* Right */}
        <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,181,200,0.2)", aspectRatio: "4/3", background: "linear-gradient(135deg,#c8f0f5,#e0f7fa)", position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
            alt="Doctor home visit"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — Your Path to Recovery + Services 2×2
═══════════════════════════════════════════ */
const ServicesSection = () => {
  const services = [
    { icon: Icon.surgery, title: "Post-Surgery Care", desc: "Recovering strength and mobility after your operation with expert in-home monitoring." },
    { icon: Icon.pain, title: "Chronic Pain Relief", desc: "Managing back, neck, and joint pain for a better quality of life." },
    { icon: Icon.elderly, title: "Elderly Care", desc: "Conserving mobility, balance, and independence to prevent falls." },
    { icon: Icon.neuro, title: "Neurological Support", desc: "Aiding recovery from strokes and other neurological conditions." },
  ];

  const features = [
    { label: "Certified Professionals", desc: "All our doctors are fully certified and experienced." },
    { label: "Personalized Care Plans", desc: "Treatment is tailored specifically to your goals and home environment." },
    { label: "Flexible Scheduling", desc: "We work around your schedule to make therapy convenient." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
              Your Path to Recovery Starts Here
            </h2>
            <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28 }}>
              We bring specialized medical care to your doorstep. Our mission is to create highly personalized treatment plans that address your specific needs, helping you regain strength and live pain-free.
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
   SECTION 3 — Advantages of a Doctor's Home Visit
═══════════════════════════════════════════ */
const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Icon.time,
      title: "Time-Saving Convenience",
      desc: "Eliminate travel, long waiting times, and the stress of navigating a busy clinic. We work around your schedule for a seamless experience.",
    },
    {
      icon: Icon.oneonone,
      title: "Dedicated, One-on-One Attention",
      desc: "Your doctor provides a more in-depth consultation in a calm setting, giving you their full and undivided attention without distractions.",
    },
    {
      icon: Icon.comfort,
      title: "Enhanced Comfort & Safety",
      desc: "Receive medical care in the stress-free environment of your own home, reducing exposure to illnesses and making the experience more comfortable.",
    },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            The Advantages of a Doctor's Home Visit
          </h2>
          <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Enjoy personalized medical care and professional consultations from the comfort and convenience of your home.
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
   SECTION 4 — A Simple Path to Quality Medical Care (Process)
═══════════════════════════════════════════ */
const ProcessSection = () => {
  const steps = [
    { icon: Icon.schedule, title: "Schedule Your Visit", desc: "Call us or book online to schedule a convenient time for a doctor's visit." },
    { icon: Icon.match, title: "Doctor Matching", desc: "We match you with a skilled and experienced doctor who specialises in your specific health needs." },
    { icon: Icon.consult, title: "In-Home Consultation", desc: "The doctor arrives at your home to conduct a thorough examination and provide a diagnosis and treatment plan." },
    { icon: Icon.followup, title: "Follow-up & Support", desc: "We provide ongoing support and follow-up to ensure your treatment is working and you are on the path to recovery." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            A Simple Path to Quality Medical Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            We make it easy and convenient to book an expert doctor's visit for you or a loved one.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
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
   SECTION 5 — Testimonials
═══════════════════════════════════════════ */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    { initials: "A.D.", name: "A. Das", role: "Patient, Puri", text: "I needed a specialist consultation but couldn't travel. The doctor arrived — a P.G. doctor — to my home in Puri. The care was excellent and the convenience was simply priceless." },
    { initials: "R.M.", name: "R. Mahapatra", role: "Patient, Bhubaneswar", text: "Having a qualified doctor visit me at home in Bhubaneswar was a huge relief. I avoided the long hospital queues and received a thorough, personalized consultation without any stress." },
    { initials: "S.P.", name: "S. Pradhan", role: "Caregiver, Cuttack", text: "My elderly mother is unable to travel. The home doctor visit service was a lifesaver. The doctor was patient, professional, and provided a thorough check-up with detailed follow-up instructions." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Stories of Health and Convenience
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Hear from patients who have experienced the ease and quality of our home doctor visit services.
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
          {[-1, 1].map((dir, i) => (
            <button key={i} onClick={() => setActive((prev) => (prev + dir + testimonials.length) % testimonials.length)} style={{ position: "absolute", top: "50%", [dir === -1 ? "left" : "right"]: -52, transform: "translateY(-50%)", background: S.teal, border: "none", color: "#fff", width: 38, height: 38, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
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
  );
};

/* ═══════════════════════════════════════════
   SECTION 6 — FAQ
═══════════════════════════════════════════ */
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: "What services does a home doctor visit include?", a: "Our home doctor visits include a thorough physical examination, diagnosis, prescription of medicines if required, chronic disease management, post-operative check-ups, wound dressing, ECG, blood pressure monitoring, and personalized health counselling." },
    { q: "How do I book a home doctor visit?", a: "Booking is simple. You can call our helpline, send us a message via WhatsApp, or book through our website. Our team will confirm the appointment and a certified doctor will arrive at your home at the scheduled time." },
    { q: "Are your doctors P.G. (Post-Graduate) specialists?", a: "Yes, we have a panel of both MBBS general physicians and P.G. specialist doctors available for home visits. Depending on your health needs, our team will match you with the most appropriate doctor for your condition." },
    { q: "What areas do you serve in Bhubaneswar and Cuttack?", a: "We currently serve all major localities in Bhubaneswar and Cuttack. If you are unsure whether we cover your area, please contact our support team and we will confirm availability for your location." },
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
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} style={{ width: "100%", background: "none", border: "none", padding: "20px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
                <span style={{ fontWeight: 600, color: S.blue, fontSize: 16 }}>{f.q}</span>
                <span style={{ color: S.teal, fontSize: 22, transform: openIdx === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0, marginLeft: 16 }}>+</span>
              </button>
              {openIdx === i && <div style={{ paddingBottom: 20, color: S.gray, lineHeight: 1.8, fontSize: 14 }}>{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 7 — CTA
═══════════════════════════════════════════ */
const CTASection = () => (
  <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #f0fbfd 0%, #e8f7fa 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: S.teal, opacity: 0.07, pointerEvents: "none" }} />
    <div style={{ position: "absolute", bottom: -60, left: -40, width: 240, height: 240, borderRadius: "50%", background: S.teal, opacity: 0.06, pointerEvents: "none" }} />
    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
        Ready to Book Your{" "}
        <span style={{ color: S.teal }}>Home Doctor Visit?</span>
      </h2>
      <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.8 }}>
        Receive professional and personalized medical care without leaving your home. Contact us today for a free consultation and to schedule your visit.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href="#"
          style={{ display: "inline-block", background: S.teal, color: "#fff", padding: "15px 40px", borderRadius: 7, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: `0 8px 24px rgba(0,181,200,0.35)`, transition: "transform 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Request Your Free Consultation
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
);

/* ═══════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════ */
export const HomeDoctorVisit = () => {
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