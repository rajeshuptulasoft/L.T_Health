import React, { useState, useEffect, useRef } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSection } from "../components/NewsletterSection";
import { subpagesHomeAlignCss } from "../styles/subpagesHomeAlign";

/* ─── Scroll-reveal hook ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── SVG Icons ─── */
const IconLeaf = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <circle cx="20" cy="20" r="20" fill="#e8f6fb" />
    <path d="M20 30s-8-5-8-12a8 8 0 0116 0c0 7-8 12-8 12z" fill="#2ab4d6" />
    <line x1="20" y1="30" x2="20" y2="18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconWater = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <circle cx="20" cy="20" r="20" fill="#e8f6fb" />
    <path d="M20 10c0 0-8 7-8 13a8 8 0 0016 0c0-6-8-13-8-13z" fill="#2ab4d6" />
  </svg>
);
const IconHead = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <circle cx="20" cy="20" r="20" fill="#e8f6fb" />
    <ellipse cx="20" cy="18" rx="7" ry="7" stroke="#2ab4d6" strokeWidth="2" fill="none" />
    <path d="M16 25v4M24 25v4" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="11" x2="20" y2="9" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconHands = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <circle cx="20" cy="20" r="20" fill="#e8f6fb" />
    <path d="M13 22c0-3 3-8 7-10 4 2 7 7 7 10a7 7 0 01-14 0z" fill="#2ab4d6" />
  </svg>
);
const IconCell = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
    <circle cx="24" cy="24" r="24" fill="#e8f6fb" />
    <circle cx="24" cy="24" r="10" stroke="#2ab4d6" strokeWidth="2.5" fill="none" />
    <circle cx="24" cy="24" r="4" fill="#2ab4d6" />
  </svg>
);
const IconStress = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
    <circle cx="24" cy="24" r="24" fill="#e8f6fb" />
    <path d="M16 32c2-6 10-12 16-8" stroke="#2ab4d6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="24" cy="20" r="5" stroke="#2ab4d6" strokeWidth="2.5" fill="none" />
  </svg>
);
const IconBody = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
    <circle cx="24" cy="24" r="24" fill="#e8f6fb" />
    <ellipse cx="24" cy="20" rx="6" ry="6" stroke="#2ab4d6" strokeWidth="2.5" fill="none" />
    <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#2ab4d6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);
const IconConsult = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="24" cy="24" r="24" fill="#e8f6fb" />
    <circle cx="24" cy="19" rx="5" ry="5" stroke="#2ab4d6" strokeWidth="2" fill="none" />
    <path d="M14 36c0-5 4.5-9 10-9s10 4 10 9" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);
const IconPrep = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="24" cy="24" r="24" fill="#e8f6fb" />
    <rect x="15" y="14" width="18" height="20" rx="3" stroke="#2ab4d6" strokeWidth="2" fill="none" />
    <line x1="19" y1="21" x2="29" y2="21" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" />
    <line x1="19" y1="26" x2="25" y2="26" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconTherapy = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="24" cy="24" r="24" fill="#e8f6fb" />
    <path d="M16 28c2-4 5-7 8-7s6 3 8 7" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="24" cy="19" r="4" stroke="#2ab4d6" strokeWidth="2" fill="none" />
  </svg>
);
const IconReju = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="24" cy="24" r="24" fill="#e8f6fb" />
    <path d="M24 14c5.5 0 10 4.5 10 10S29.5 34 24 34 14 29.5 14 24" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" fill="none" />
    <polyline points="14,24 14,18 20,18" stroke="#2ab4d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
const IconQuote = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
    <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 3.2C10.4 4.8 8 8 7.2 12H12V24H0zm18 0V14.4C18 6.4 22.8 1.6 32.4 0L34 3.2C28.4 4.8 26 8 25.2 12H30V24H18z" fill="#2ab4d6" opacity="0.3" />
  </svg>
);

/* ─── Animated section wrapper ─── */
function RevealSection({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── FAQ Item ─── */
function FaqItem({ question }) {
  const [open, setOpen] = useState(false);
  const answers = {
    "What is Panchakarma and who is it for?":
      "Panchakarma is a classical Ayurvedic detox and rejuvenation program using five therapeutic procedures. It is ideal for anyone seeking deep cleansing, stress relief, or holistic wellness.",
    "How long does a Panchakarma treatment last?":
      "A typical Panchakarma program lasts 7 to 21 days depending on your health goals and Prakriti (body constitution), as assessed by our Ayurvedic doctor.",
    "What makes your Panchakarma services unique?":
      "We use 100% authentic Kerala-style Panchakarma with natural herbal oils and traditional methods performed by expert therapists trained in India.",
    "Do you provide a diet plan with the therapy?":
      "Yes. A personalised Pathya (diet) plan is provided as part of the therapy to support detoxification and healing throughout the programme.",
  };
  return (
    <div
      style={{
        borderBottom: "1px solid #e5eef2",
        padding: "18px 0",
        cursor: "pointer",
      }}
      onClick={() => setOpen((o) => !o)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <span style={{ fontWeight: 600, color: "#1a2e3b", fontSize: "1rem" }}>{question}</span>
        <span style={{ fontSize: "1.3rem", color: "#2ab4d6", flexShrink: 0, transition: "transform .3s", transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
      </div>
      {open && (
        <p style={{ marginTop: 10, color: "#5a7080", lineHeight: 1.7, fontSize: ".95rem" }}>
          {answers[question]}
        </p>
      )}
    </div>
  );
}

/* ─── Testimonial Slider ─── */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const testimonials = [
    {
      text: "The Shirodhara therapy was incredibly soothing. The whole experience was calming, and I left feeling completely relaxed and at peace. I highly recommend this service for anyone needing a mental reset.",
      name: "S.K. Rao",
      location: "Guest, Puri",
      initials: "SK",
    },
    {
      text: "The Panchakarma therapy was a truly healing experience. I felt completely detoxified and rejuvenated, and my stress levels have significantly decreased. The authentic Kerala-style treatments were incredible.",
      name: "A. Singh",
      location: "Guest, Bhubaneswar",
      initials: "AS",
    },
  ];
  return (
    <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", padding: "0 48px" }}>
      <button
        onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
        style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: "1.8rem", color: "#2ab4d6", cursor: "pointer" }}
      >‹</button>
      <div style={{ display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap" }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "32px 28px",
              flex: "1 1 280px",
              maxWidth: 380,
              boxShadow: "0 4px 24px rgba(42,180,214,.08)",
              opacity: i === idx || window.innerWidth > 768 ? 1 : 0.3,
              transition: "opacity .4s",
            }}
          >
            <IconQuote />
            <p style={{ color: "#3a5060", lineHeight: 1.7, margin: "16px 0 24px", fontSize: ".95rem", fontStyle: "italic" }}>
              "{t.text}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#2ab4d6", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#1a2e3b", fontSize: ".9rem" }}>{t.name}</div>
                <div style={{ color: "#7a9aaa", fontSize: ".82rem" }}>{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
        style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: "1.8rem", color: "#2ab4d6", cursor: "pointer" }}
      >›</button>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
        {testimonials.map((_, i) => (
          <div key={i} onClick={() => setIdx(i)} style={{ width: 10, height: 10, borderRadius: "50%", background: i === idx ? "#2ab4d6" : "#cde8f0", cursor: "pointer", transition: "background .3s" }} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export const Panchakarma = () => {
  const treatments = [
    { icon: <IconLeaf />, title: "Abhyanga", desc: "A full-body massage with warm herbal oils to nourish the skin and detoxify the body." },
    { icon: <IconWater />, title: "Swedana", desc: "A herbal steam therapy that opens pores and removes toxins from the body." },
    { icon: <IconHead />, title: "Shirodhara", desc: "A continuous gentle pour of warm oil on the forehead to calm the mind and relieve stress." },
    { icon: <IconHands />, title: "Pizhichil", desc: "A therapeutic 'dripping' therapy where warm herbal oil is continuously poured over the body for deep muscle relaxation." },
  ];
  const benefits = [
    { icon: <IconCell />, title: "Deep Cellular Detoxification", desc: "Panchakarma flushes out toxins and impurities from your body's tissues, revitalizing you from the inside out and boosting your natural immunity." },
    { icon: <IconStress />, title: "Profound Stress Reduction", desc: "Through calming therapies and mindful practices, Panchakarma relieves mental fatigue and anxiety, promoting a state of deep relaxation and inner peace." },
    { icon: <IconBody />, title: "Total Body & Mind Rejuvenation", desc: "This therapy is designed to restore your body's natural balance, improves circulation, and enhance energy levels, leading to a renewed sense of vitality." },
  ];
  const steps = [
    { icon: <IconConsult />, title: "Initial Consultation", desc: "Meet with our Ayurvedic doctor for a detailed assessment of your body type and a personalised plan." },
    { icon: <IconPrep />, title: "Preparatory Therapies", desc: "Our gentle pre-cleansing therapies like Abhyanga and Swedana prepare your body for deep detoxification." },
    { icon: <IconTherapy />, title: "Main Therapies", desc: "Experience the core of Panchakarma, which may include Vamana, Virechana, or other therapies as prescribed by your doctor." },
    { icon: <IconReju />, title: "Rejuvenation & Diet", desc: "We provide a post-therapy diet and lifestyle plan to maintain your health and well-being long after your treatment is complete." },
  ];

  const styles = {
    hero: {
      position: "relative",
      overflow: "hidden",
    },
    container: { maxWidth: 1100, margin: "0 auto", padding: "0 24px" },
    sectionTitle: { fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#1a2e3b", marginBottom: 12 },
    sectionSub: { color: "#5a7080", lineHeight: 1.7, marginBottom: 40, maxWidth: 560 },
    accentBlue: { color: "#2ab4d6" },
    card: {
      background: "#fff",
      borderRadius: 16,
      padding: "28px 24px",
      boxShadow: "0 4px 24px rgba(42,180,214,.07)",
      border: "1px solid #e8f4f8",
      transition: "transform .3s, box-shadow .3s",
    },
  };

  return (
    <>
      <style>{subpagesHomeAlignCss}</style>
      <div className="page-wrapper">
        <SiteHeader />
        <div className="pk-page lt-home-type">

      {/* ─── HERO ─── */}
      <section className="pk-hero" style={styles.hero}>
        <div className="pk-hero-inner" style={styles.container}>
          <div className="pk-hero-text">
            <RevealSection>
              <h1 style={{ marginBottom: 18 }}>
                Holistic <span>Panchakarma</span><br />for Deep Rejuvenation
              </h1>
              <p style={{ maxWidth: 440 }}>
                Experience the ancient healing traditions of Kerala with our authentic Panchakarma therapies. We provide a path to detoxification, stress reduction, and overall well-being.
              </p>
            </RevealSection>
          </div>
          <RevealSection delay={200} className="pk-hero-media" style={{ display: "flex", justifyContent: "center" }}>
            <div className="pk-hero-img">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&auto=format&fit=crop&q=80"
                alt="Panchakarma and Ayurvedic wellness therapy"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1515378791036-0648a3c77a02?w=800&auto=format&fit=crop&q=80";
                }}
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── AUTHENTIC SECTION ─── */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div style={{ ...styles.container, display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
          <RevealSection style={{ flex: "1 1 300px" }}>
            <h2 style={styles.sectionTitle}>Authentic Panchakarma for a Balanced Body & Mind</h2>
            <p style={{ color: "#5a7080", lineHeight: 1.8, marginBottom: 20 }}>
              Panchakarma is a powerful Ayurvedic cleansing therapy that uses natural herbs and oils to detoxify the body, restore balance, and rejuvenate the mind. Our treatments follow the traditional Kerala style for an authentic experience.
            </p>
            {[
              { label: "Natural Ingredients:", text: "We only use authentic, high-quality herbal oils and ingredients in all our therapies." },
              { label: "Expert Therapists:", text: "Our skilled therapists are trained in the traditional methods of Kerala Panchakarma." },
              { label: "Holistic Wellness:", text: "Our approach focuses on deep-rooted healing for long-lasting physical and mental well-being." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                <span style={{ color: "#2ab4d6", fontSize: "1.1rem", marginTop: 2 }}>●</span>
                <p style={{ color: "#5a7080", margin: 0, lineHeight: 1.7 }}>
                  <strong style={{ color: "#1a2e3b" }}>{item.label}</strong> {item.text}
                </p>
              </div>
            ))}
          </RevealSection>

          <div style={{ flex: "1 1 300px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {treatments.map((t, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div
                  style={styles.card}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(42,180,214,.18)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(42,180,214,.07)"; }}
                >
                  <div style={{ marginBottom: 12 }}>{t.icon}</div>
                  <h4 style={{ color: "#1a2e3b", fontWeight: 700, marginBottom: 6, fontSize: "1rem" }}>{t.title}</h4>
                  <p style={{ color: "#7a9aaa", fontSize: ".88rem", lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS SECTION ─── */}
      <section style={{ padding: "80px 0", background: "#f4fbfd" }}>
        <div style={styles.container}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={styles.sectionTitle}>The Benefits of Panchakarma Therapy</h2>
              <p style={{ color: "#5a7080", maxWidth: 520, margin: "0 auto" }}>
                Experience a holistic approach to wellness that deeply cleanses, restores balance, and rejuvenates your entire system.
              </p>
            </div>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 28 }}>
            {benefits.map((b, i) => (
              <RevealSection key={i} delay={i * 120}>
                <div
                  style={{ ...styles.card, textAlign: "left" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(42,180,214,.16)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(42,180,214,.07)"; }}
                >
                  <div style={{ marginBottom: 18 }}>{b.icon}</div>
                  <h3 style={{ color: "#1a2e3b", fontWeight: 800, fontSize: "1.1rem", marginBottom: 12 }}>{b.title}</h3>
                  <p style={{ color: "#5a7080", lineHeight: 1.75, margin: 0, fontSize: ".95rem" }}>{b.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNEY STEPS ─── */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div style={styles.container}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={styles.sectionTitle}>Your Panchakarma Journey: A Simple Process</h2>
              <p style={{ color: "#5a7080", maxWidth: 520, margin: "0 auto" }}>
                We've designed a clear and personalised path to ensure you get the most out of your detoxification and rejuvenation therapy.
              </p>
            </div>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 24 }}>
            {steps.map((s, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div style={{ textAlign: "center", padding: "8px 0" }}>
                  {/* connector line */}
                  <div style={{ position: "relative", display: "inline-block" }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%",
                      background: "#eaf6fb", display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 18px",
                      boxShadow: "0 4px 18px rgba(42,180,214,.14)",
                      transition: "transform .3s",
                    }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
                      onMouseLeave={e => e.currentTarget.style.transform = ""}
                    >
                      {s.icon}
                    </div>
                    <div style={{
                      position: "absolute", top: "50%", right: i < steps.length - 1 ? "-60%" : "unset",
                      width: "60%", height: 2, background: "#d0eef6", zIndex: 0,
                    }} />
                  </div>
                  <h4 style={{ color: "#1a2e3b", fontWeight: 800, fontSize: "1rem", marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ color: "#7a9aaa", fontSize: ".88rem", lineHeight: 1.65, maxWidth: 200, margin: "0 auto" }}>{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ padding: "80px 0", background: "#f4fbfd" }}>
        <div style={styles.container}>
          <RevealSection>
            <p style={{ textAlign: "center", color: "#7a9aaa", letterSpacing: 2, textTransform: "uppercase", fontSize: ".82rem", marginBottom: 8 }}>
              Hear from clients who have experienced the transformative power of our Panchakarma therapies.
            </p>
          </RevealSection>
          <RevealSection delay={100}>
            <Testimonials />
          </RevealSection>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div style={{ ...styles.container, maxWidth: 780 }}>
          <RevealSection>
            <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>Your Questions, Answered</h2>
            <p style={{ color: "#5a7080", textAlign: "center", marginBottom: 44 }}>
              We are here to provide clarity and reassurance. Here are some of the most common questions about our Panchakarma therapies.
            </p>
          </RevealSection>
          {[
            "What is Panchakarma and who is it for?",
            "How long does a Panchakarma treatment last?",
            "What makes your Panchakarma services unique?",
            "Do you provide a diet plan with the therapy?",
          ].map((q) => (
            <RevealSection key={q}>
              <FaqItem question={q} />
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "80px 24px", background: "#f4fbfd", textAlign: "center" }}>
        <RevealSection>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, color: "#1a2e3b", marginBottom: 16 }}>
            Ready to Begin Your <span style={styles.accentBlue}>Wellness Journey?</span>
          </h2>
          <p style={{ color: "#5a7080", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.8 }}>
            Take the first step towards deep healing and rejuvenation with our authentic Kerala-style Panchakarma therapy. Book a consultation with our Ayurvedic expert today.
          </p>
          <a
            href="#"
            className="pk-cta-btn"
            style={{
              display: "inline-block",
              padding: "15px 38px",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "transform .2s, box-shadow .2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; }}
          >
            📅 Book Your Consultation
          </a>
        </RevealSection>
      </section>

        </div>
        <NewsletterSection
          title="Ready to Begin Your Journey to Wellness?"
          text="Whether you are a patient, partner, or future team member, we are here to support your next step."
        />
        <SiteFooter />

        {/* ─── Global keyframes ─── */}
        <style>{`
          @keyframes floatCard {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
        `}</style>
      </div>
    </>
  );
};