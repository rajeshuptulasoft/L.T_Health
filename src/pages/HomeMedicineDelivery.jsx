// import React from "react";
// import { SiteHeader } from "../components/SiteHeader";
// import { SiteFooter } from "../components/SiteFooter";
// import { FloatingSupport } from "../components/FloatingSupport";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const HomeMedicineDelivery = () => {
//   return (
//     <>
//       <FloatingSupport />
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Home Medicine Delivery</h1>
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
  prescription: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M8 7h8M8 11h8M8 15h5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 15l4 4M15 15l-2 2" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  sameDay: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" fill="none" />
      <path d="M12 7v5l3 3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  refill: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M4 12a8 8 0 0 1 14.93-4M4 12H2m2 0v-2" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M20 12a8 8 0 0 1-14.93 4M20 12h2m-2 0v2" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <rect x="9" y="8" width="6" height="8" rx="1.5" fill={S.teal} opacity=".7" />
    </svg>
  ),
  cold: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.5" fill={S.teal} />
    </svg>
  ),
  speed: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H13z" fill={S.teal} />
    </svg>
  ),
  privacy: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 2l8 3.5v5C20 16 16.5 20 12 21 7.5 20 4 16 4 10.5v-5z" fill={S.teal} opacity=".8" />
      <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  ),
  saving: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" fill="none" />
      <path d="M12 7v1m0 8v1m-3.5-5.5C8.5 10.1 10 9 12 9c1.7 0 3 .9 3 2.2 0 2.8-6 2-6 5 0 1.3 1.3 2.3 3 2.3 2 0 3.5-1 3.5-2.5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
  upload: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M12 7v6m-3-3l3-3 3 3" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M8 17h8" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  verify: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" fill="none" />
      <path d="M8 12l3 3 5-5" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  pack: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="8" width="18" height="13" rx="2" fill={S.teal} opacity=".7" />
      <path d="M3 8l2-5h14l2 5" stroke={S.teal} strokeWidth="1.5" fill="none" />
      <path d="M9 12h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  deliver: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="1" y="10" width="14" height="8" rx="1.5" fill={S.teal} opacity=".7" />
      <path d="M15 13h4l3 3v3h-7v-6z" fill={S.teal} />
      <circle cx="5.5" cy="19.5" r="1.5" fill={S.blue} />
      <circle cx="18.5" cy="19.5" r="1.5" fill={S.blue} />
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
    <div style={{ position: "absolute", top: 60, left: "38%", width: 70, height: 70, borderRadius: "50%", background: S.teal, opacity: 0.07, pointerEvents: "none" }} />

    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left */}
        <div>
          <h1 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: S.blue, lineHeight: 1.2, marginBottom: 18 }}>
            Reliable{" "}
            <span style={{ color: S.teal }}>Medicine Delivery,</span>
            <br />
            To Your Doorstep
          </h1>
          <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            We make it easy to get your medications delivered safely and on time, so you can focus on your health without the hassle of pharmacy visits.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#" style={{ background: S.teal, color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Order Medicines Now
            </a>
            <a href="#" style={{ border: `2px solid ${S.teal}`, color: S.teal, padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Learn More
            </a>
          </div>
        </div>

        {/* Right */}
        <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,181,200,0.2)", aspectRatio: "4/3", background: "linear-gradient(135deg,#c8f0f5,#e0f7fa)", position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&q=80"
            alt="Medicine delivery"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — What We Deliver + Services 2×2
═══════════════════════════════════════════ */
const ServicesSection = () => {
  const services = [
    { icon: Icon.prescription, title: "Prescription Medicines", desc: "Upload your prescription and we'll source and deliver your medicines accurately and safely." },
    { icon: Icon.sameDay, title: "Same-Day Delivery", desc: "Urgent medication needs? We offer same-day delivery so you never miss a critical dose." },
    { icon: Icon.refill, title: "Auto-Refill Subscriptions", desc: "Set up automatic refills for regular medications so you never run out of your daily essentials." },
    { icon: Icon.cold, title: "Cold-Chain Medicines", desc: "Temperature-sensitive medications like insulin are delivered with proper cold-chain handling." },
  ];

  const features = [
    { label: "Licensed Pharmacy Partners", desc: "All medicines are sourced from certified, licensed pharmacies ensuring quality and authenticity." },
    { label: "Discreet & Safe Packaging", desc: "Your medicines are packed securely and delivered with complete privacy and care." },
    { label: "Doorstep Delivery", desc: "No more standing in queues — we bring your medicines directly to your home, on time every time." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
              Everything You Need, Delivered with Care
            </h2>
            <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28 }}>
              From daily prescriptions to emergency medicines, we handle the entire delivery process so patients and caregivers can focus on what matters most — health and recovery.
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
   SECTION 3 — Why Choose Home Medicine Delivery
═══════════════════════════════════════════ */
const BenefitsSection = () => {
  const benefits = [
    {
      icon: Icon.speed,
      title: "Fast & Reliable Delivery",
      desc: "We understand that medications are time-sensitive. Our delivery network ensures your medicines arrive quickly, reliably, and at the right time.",
    },
    {
      icon: Icon.privacy,
      title: "Safe & Discreet Service",
      desc: "Your health is personal. All deliveries are made in discreet packaging with strict adherence to medicine safety and storage standards.",
    },
    {
      icon: Icon.saving,
      title: "Save Time & Money",
      desc: "Skip the pharmacy queue and travel costs. We source medicines competitively and deliver them right to you, saving you time and effort every time.",
    },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Why Choose Home Medicine Delivery?
          </h2>
          <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Our delivery service is designed for patients, caregivers, and families who need convenience, reliability, and complete peace of mind.
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
   SECTION 4 — How It Works (Process)
═══════════════════════════════════════════ */
const ProcessSection = () => {
  const steps = [
    { icon: Icon.upload, title: "Upload Prescription", desc: "Share your doctor's prescription via our platform, app, or WhatsApp — quickly and easily." },
    { icon: Icon.verify, title: "Verification & Sourcing", desc: "Our pharmacists verify your prescription and source authentic medicines from licensed partners." },
    { icon: Icon.pack, title: "Safe Packaging", desc: "Medicines are carefully packed with appropriate temperature and safety controls for secure transit." },
    { icon: Icon.deliver, title: "Doorstep Delivery", desc: "Your medicines are delivered to your home swiftly by our trained delivery team, right on time." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            How It Works
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Getting your medicines delivered is simple, safe, and takes just a few steps.
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
   SECTION 5 — Stats Banner
═══════════════════════════════════════════ */
const StatsBanner = () => {
  const stats = [
    { value: "10,000+", label: "Orders Delivered" },
    { value: "Same Day", label: "Delivery Available" },
    { value: "100%", label: "Authentic Medicines" },
    { value: "24/7", label: "Order Support" },
  ];

  return (
    <section style={{ padding: "52px 0", background: S.blue }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 34, fontWeight: 800, color: S.teal }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 6 — Testimonials
═══════════════════════════════════════════ */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    { initials: "S.N.", name: "S. Nanda", role: "Patient, Bhubaneswar", text: "I'm a diabetic patient and need insulin regularly. The auto-refill service from this team ensures I never run out of medication. The cold-chain delivery is impressive and so reliable." },
    { initials: "P.M.", name: "P. Mohanty", role: "Caregiver, Cuttack", text: "My mother is bedridden and visiting the pharmacy was a big challenge. This service has been a blessing — medicines arrive on time every day, and the packaging is always perfect." },
    { initials: "A.R.", name: "A. Rath", role: "Patient, Puri", text: "After my surgery, I needed several medicines urgently. They organised same-day delivery and even called to confirm everything was correct. Truly professional and caring service." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            What Our Customers Say
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Hear from patients and families who rely on us every day for their medicine delivery needs.
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
   SECTION 7 — FAQ
═══════════════════════════════════════════ */
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: "Do I need a prescription to order medicines?", a: "For prescription medicines, yes — a valid doctor's prescription is required as per medical regulations. You can upload a photo or scan of the prescription through our platform. For over-the-counter medicines, no prescription is needed." },
    { q: "How quickly can you deliver medicines?", a: "We offer same-day delivery for urgent orders placed before a certain cutoff time, and next-day delivery for all standard orders. Delivery timelines depend on your location and the availability of the medication." },
    { q: "Are the medicines authentic and safe?", a: "Absolutely. All medicines are sourced exclusively from licensed and government-approved pharmacies and distributors. We never source from unverified suppliers, ensuring you always receive genuine, safe medications." },
    { q: "What if my medicine is not available?", a: "If a medicine is temporarily out of stock, our pharmacist will contact you promptly to suggest an equivalent alternative (with doctor approval if required) or provide an estimated restocking timeframe." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Have questions? We have answers. Here are the most common queries about our medicine delivery service.
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
                <div style={{ paddingBottom: 20, color: S.gray, lineHeight: 1.8, fontSize: 14 }}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 8 — CTA
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
        Never Miss a Dose —{" "}
        <span style={{ color: S.teal }}>We Deliver For You.</span>
      </h2>
      <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.8 }}>
        Upload your prescription today and let us handle the rest. Safe, authentic medicines delivered to your doorstep — fast, every time.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href="#"
          style={{ display: "inline-block", background: S.teal, color: "#fff", padding: "15px 40px", borderRadius: 7, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: `0 8px 24px rgba(0,181,200,0.35)`, transition: "transform 0.2s, box-shadow 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,181,200,0.45)`; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,181,200,0.35)`; }}
        >
          Order Medicines Now
        </a>
        <a
          href="tel:+918080000000"
          style={{ display: "inline-block", border: `2px solid ${S.teal}`, color: S.teal, padding: "15px 40px", borderRadius: 7, fontWeight: 700, fontSize: 16, textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = S.teal; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = S.teal; }}
        >
          Call Us — 24/7
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════ */
export const HomeMedicineDelivery = () => {
  return (
    <>
      <FloatingSupport />
      <div className="page-wrapper">
        <SiteHeader />

        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <StatsBanner />
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