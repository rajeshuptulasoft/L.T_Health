// import React from "react";
// import { SiteHeader } from "../components/SiteHeader";
// import { SiteFooter } from "../components/SiteFooter";
// import { FloatingSupport } from "../components/FloatingSupport";
// import { NewsletterSection } from "../components/NewsletterSection";

// export const BabyCareAttendant = () => {
//   return (
//     <>
//       <FloatingSupport />
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Baby Care Attendant</h1>
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
  feeding: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 3C9 3 7 5 7 8v2h10V8c0-3-2-5-5-5z" fill={S.teal} />
      <rect x="7" y="10" width="10" height="8" rx="2" fill={S.teal} opacity=".7" />
      <path d="M10 18v2m4-2v2" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  bathing: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M4 12h16v3a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-3z" fill={S.teal} />
      <path d="M7 12V7a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="17" cy="7" r="1.5" fill={S.teal} opacity=".6" />
      <circle cx="14" cy="5" r="1" fill={S.teal} opacity=".4" />
    </svg>
  ),
  nighttime: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill={S.teal} />
      <circle cx="16" cy="8" r="1.2" fill={S.teal} opacity=".5" />
      <circle cx="19" cy="5" r="0.8" fill={S.teal} opacity=".4" />
    </svg>
  ),
  soothing: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 21s-8-4.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 10-8 10z" fill={S.teal} />
      <path d="M9 11c1 1.5 5 1.5 6 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  peace: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" />
      <path d="M12 3v18M3.9 7.5l16.2 9M3.9 16.5l16.2-9" stroke={S.teal} strokeWidth="1.8" />
    </svg>
  ),
  rest: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M3 12h18M3 6h18M3 18h18" stroke={S.teal} strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" fill={S.teal} />
    </svg>
  ),
  guidance: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" fill={S.teal} />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={S.teal} opacity=".6" />
      <path d="M18 10l2 2-2 2" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" />
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
  meet: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="9" cy="7" r="3" fill={S.teal} />
      <circle cx="17" cy="9" r="2.5" fill={S.teal} opacity=".6" />
      <path d="M2 20c0-4 3-6 7-6s7 2 7 6" fill={S.teal} />
      <path d="M16 15c2.5 0 5 1.5 5 5" stroke={S.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  begin: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M12 21s-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-8 11-8 11z" fill={S.teal} />
      <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
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
            Expert Baby Care for Your{" "}
            <span style={{ color: S.teal }}>Peace of Mind</span>
          </h1>
          <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Our certified baby care attendants provide professional, gentle, and reliable support for newborns and infants, right in the comfort of your home.
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
            src="/assets/images/blog/blog-details-img-box-img-1.jpg"
            alt="Baby care attendant"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — Partner in Early Parenthood + Services 2×2
═══════════════════════════════════════════ */
const PartnerSection = () => {
  const services = [
    { icon: Icon.feeding, title: "Feeding & Nutrition Support", desc: "Assistance with breastfeeding, bottle feeding, and maintaining a healthy diet for your baby." },
    { icon: Icon.bathing, title: "Bathing & Hygiene", desc: "Gentle care including bathing, diapering, and hygiene routines for your little one." },
    { icon: Icon.nighttime, title: "Nighttime Care", desc: "Expert care through the night, allowing parents to get much-needed rest and recovery." },
    { icon: Icon.soothing, title: "Soothing & Comfort", desc: "Experienced attendants who know how to soothe, comfort, and reassure your baby so they are happy and calm." },
  ];

  const features = [
    { label: "Certified Professionals", desc: "Our team is composed of trained and certified baby care experts." },
    { label: "Flexible Scheduling", desc: "We offer flexible scheduling to fit your family's unique needs, day or night." },
    { label: "In-Home Comfort", desc: "All care is provided in your own home, creating a stress-free environment for you and your baby." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
              Your Partner in Early Parenthood
            </h2>
            <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28 }}>
              We provide compassionate and professional baby care services to support new parents. Our attendants are trained to assist with all your newborn's needs, giving you time to rest and recover.
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
   SECTION 3 — More Than Just Care: Benefits
═══════════════════════════════════════════ */
const BenefitsSection = () => {
  const benefits = [
    { icon: Icon.peace, title: "Complete Peace of Mind", desc: "Rest easy knowing your baby is in the hands of a certified and trusted professional, giving you the security and peace of mind you deserve." },
    { icon: Icon.rest, title: "Rest and Recovery", desc: "Parenthood is a rewarding but demanding journey. Our attendants provide invaluable nighttime care, allowing you to get the rest you need." },
    { icon: Icon.guidance, title: "Expert Guidance and Support", desc: "Our experienced attendants can offer helpful tips and guidance on feeding, sleep routines, and baby care, helping you build confidence as a new parent." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            More Than Just Care: The Benefits for Parents
          </h2>
          <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Our baby care attendants offer invaluable support that goes beyond daily tasks, promoting a smoother and more confident transition into parenthood.
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
   SECTION 4 — Your Path to Expert Baby Care (Process)
═══════════════════════════════════════════ */
const ProcessSection = () => {
  const steps = [
    { icon: Icon.phone, title: "Initial Consultation", desc: "A friendly call to understand your needs and answer any questions you may have about our service." },
    { icon: Icon.assessment, title: "Assessment & Matching", desc: "We carefully assess your needs and match you with a certified attendant who is the best fit for your family." },
    { icon: Icon.meet, title: "Meet Your Attendant", desc: "Before care begins, you'll have the opportunity to meet the attendant to ensure you feel completely comfortable." },
    { icon: Icon.begin, title: "Begin Care", desc: "Your chosen attendant begins providing professional and gentle support for your baby, right at home." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Your Path to Expert Baby Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 460, margin: "0 auto", lineHeight: 1.8 }}>
            We've designed a simple, secure process to connect you with a qualified baby care attendant.
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
   SECTION 5 — Testimonials (Voices from Happy Families)
═══════════════════════════════════════════ */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    { initials: "A.K.", name: "A. Kumar", role: "Parent, Bhubaneswar", text: "The attendant was so gentle and professional with our newborn. Having someone we trust for the first 24 hours made all the difference and helped me feel like myself again." },
    { initials: "P.S.", name: "P. Sharma", role: "Parent, Chennai", text: "The support we received during the first few weeks was invaluable. Our attendant was knowledgeable and helped us establish a feeding routine, which gave us so much confidence." },
    { initials: "R.M.", name: "R. Mehta", role: "Parent, Mumbai", text: "I was exhausted and overwhelmed after delivery. Having a certified baby care attendant at home was the best decision we made. She was patient, warm, and an absolute expert." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Voices from Our Happy Families
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Hear from other parents who have found support and peace of mind with our baby care attendants.
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
   SECTION 6 — FAQ (Common Questions from Parents)
═══════════════════════════════════════════ */
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: "Are your baby care attendants certified?", a: "Yes, all our baby care attendants are professionally trained and certified. They undergo thorough background checks and training in infant care, first aid, and CPR before they begin working with families." },
    { q: "What services do you provide?", a: "Our services include feeding and nutrition support, bathing and hygiene, nighttime care, soothing and comforting, developmental activity guidance, and general newborn support for new parents." },
    { q: "Do you offer nighttime care?", a: "Absolutely. We offer flexible scheduling including overnight and nighttime care to ensure your baby is safe and well-cared for around the clock, and that parents can get the rest they need." },
    { q: "How much does your service cost?", a: "Our pricing is tailored to your specific care needs, duration, and schedule. Please contact us for a personalised quote and free consultation with one of our care specialists." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Common Questions from Parents
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            We understand you have questions. Here are the answers to some of the most common inquiries about our services.
          </p>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {faqs.map((f, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid #e8eef3", overflow: "hidden" }}
            >
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
        Take the First Step to{" "}
        <span style={{ color: S.teal }}>Peaceful Parenthood</span>
      </h2>
      <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.8 }}>
        Let our certified baby care attendants provide the professional support and gentle care your family needs. Contact us today for a free consultation and a custom care plan.
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
        Request Your Free Consultation
      </a>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════ */
export const BabyCareAttendant = () => {
  return (
    <>
      <FloatingSupport />
      <div className="page-wrapper">
        <SiteHeader />

        <HeroSection />
        <PartnerSection />
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