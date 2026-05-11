import React, { useState, useEffect, useRef } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSection } from "../components/NewsletterSection";
import { subpagesHomeAlignCss } from "../styles/subpagesHomeAlign";

/* ─────────────────────────── STYLES (typography aligned with HomeICUSupport) ─────────────────────────── */
const styles = `
  :root {
    --teal: #00b5c8;
    --teal-light: #e6f9fb;
    --teal-dark: #0097aa;
    --green: #00b5c8;
    --green-btn: #00b5c8;
    --text-dark: #1a3c6e;
    --text-mid: #666666;
    --text-light: #666666;
    --white: #ffffff;
    --bg-soft: #f4f8fb;
  }

  .jd-page * { box-sizing: border-box; }
  .jd-page { font-family: "Manrope", sans-serif; color: var(--text-mid); position: relative; z-index: 0; }

  /* ── HERO ── */
  .jd-hero {
    background: linear-gradient(135deg, #f0fbfd 0%, #ffffff 65%);
    padding: 90px 0 0;
    position: relative;
    overflow: hidden;
    min-height: 520px;
  }
  .jd-hero::before {
    content: '';
    position: absolute; top: -80px; right: -80px;
    width: 420px; height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,181,200,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .jd-hero-inner {
    max-width: 1200px; margin: 0 auto; padding: 0 24px;
    display: flex; align-items: flex-end; gap: 40px;
  }
  .jd-hero-text { flex: 1; padding-bottom: 60px; }
  .jd-hero-text h1 {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(28px, 4vw, 46px);
    font-weight: 700; line-height: 1.2;
    color: var(--text-dark);
  }
  .jd-hero-text h1 span { color: var(--teal); }
  .jd-hero-text p {
    margin: 18px 0 32px;
    font-size: 16px; color: var(--text-mid); line-height: 1.8; max-width: 480px;
  }
  .jd-hero-image { width: 420px; flex-shrink: 0; position: relative; }
  .jd-hero-image img {
    width: 100%; display: block;
    animation: heroFloat 4s ease-in-out infinite;
    filter: drop-shadow(0 20px 40px rgba(0,181,200,0.2));
  }
  @keyframes heroFloat {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-14px); }
  }

  /* ── BUTTONS ── */
  .btn-teal {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--teal); color: #fff;
    padding: 14px 28px; border-radius: 8px;
    font-weight: 700; font-size: 0.95rem;
    border: none; cursor: pointer; text-decoration: none;
    transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
    box-shadow: 0 4px 18px rgba(0,181,200,0.3);
  }
  .btn-teal:hover { background: var(--teal-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,181,200,0.4); }

  .btn-green {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--green-btn); color: #fff;
    padding: 14px 28px; border-radius: 8px;
    font-weight: 700; font-size: 0.95rem;
    border: none; cursor: pointer; text-decoration: none;
    transition: background 0.25s, transform 0.2s;
  }
  .btn-green:hover { background: #16a34a; transform: translateY(-2px); }

  /* ── SECTION COMMONS ── */
  .jd-section { padding: 80px 0; }
  .jd-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  .jd-section-title {
    text-align: center;
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(22px, 3vw, 34px);
    font-weight: 700; color: var(--text-dark);
    margin-bottom: 12px;
  }
  .jd-section-sub {
    text-align: center; color: var(--text-mid);
    font-size: 1rem; max-width: 600px;
    margin: 0 auto 50px;
    line-height: 1.8;
  }

  /* ── BENEFITS ── */
  .jd-benefits { background: #fff; }
  .jd-benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (max-width: 768px) {
    .jd-benefits-grid { grid-template-columns: 1fr; }
  }
  .jd-benefit-card {
    border: 1.5px solid #e2f4f2;
    border-radius: 16px;
    padding: 32px 28px;
    background: #fff;
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    opacity: 0;
    transform: translateY(30px);
  }
  .jd-benefit-card.visible {
    animation: fadeUp 0.6s forwards;
  }
  @keyframes fadeUp {
    to { opacity:1; transform:translateY(0); }
  }
  .jd-benefit-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(0,181,200,0.18);
    border-color: var(--teal);
  }
  .jd-benefit-icon {
    width: 52px; height: 52px; border-radius: 12px;
    background: var(--teal-light);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 18px;
    font-size: 1.5rem;
  }
  .jd-benefit-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.05rem; font-weight: 700;
    margin-bottom: 10px; color: var(--text-dark);
  }
  .jd-benefit-card p { font-size: 0.9rem; color: var(--text-mid); line-height: 1.8; }

  /* ── TIMELINE ── */
  .jd-timeline-section { background: var(--bg-soft); }
  .jd-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 0;
  }
  .jd-timeline::before {
    content: '';
    position: absolute; left: 50%; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, var(--teal), var(--green));
    transform: translateX(-50%);
  }
  .jd-step {
    display: flex;
    justify-content: flex-end;
    padding-right: calc(50% + 36px);
    margin-bottom: 48px;
    position: relative;
    opacity: 0; transform: translateX(-30px);
    transition: opacity 0.6s, transform 0.6s;
  }
  .jd-step.right {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: calc(50% + 36px);
    transform: translateX(30px);
  }
  .jd-step.visible { opacity:1; transform:translateX(0); }
  .jd-step-dot {
    position: absolute; left: 50%; top: 24px;
    width: 18px; height: 18px; border-radius: 50%;
    background: var(--teal);
    border: 3px solid #fff;
    box-shadow: 0 0 0 3px var(--teal);
    transform: translateX(-50%);
    z-index: 2;
  }
  .jd-step-card {
    background: #fff;
    border-radius: 14px;
    padding: 22px 24px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.07);
    max-width: 300px;
    border-left: 4px solid var(--teal);
    transition: box-shadow 0.3s;
  }
  .jd-step.right .jd-step-card { border-left: none; border-right: 4px solid var(--green); }
  .jd-step-card:hover { box-shadow: 0 8px 32px rgba(0,181,200,0.18); }
  .jd-step-num {
    font-size: 0.75rem; font-weight: 700;
    color: var(--teal); text-transform: uppercase;
    letter-spacing: 1px; margin-bottom: 6px;
  }
  .jd-step-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1rem; font-weight: 700; margin-bottom: 8px; color: var(--text-dark);
  }
  .jd-step-card p { font-size: 0.88rem; color: var(--text-mid); line-height: 1.8; }
  .jd-step-icon {
    font-size: 1.4rem; margin-bottom: 10px;
    display: block;
  }

  /* ── TESTIMONIALS ── */
  .jd-testimonials { background: #fff; overflow: hidden; padding: 80px 0 100px; }
  .jd-testimonials-wrapper {
    position: relative;
    max-width: 900px; margin: 0 auto;
  }
  .jd-testimonials-track {
    display: flex; transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
  }
  .jd-testimonial-slide {
    min-width: 100%;
    display: flex; gap: 24px; padding: 0 10px;
  }
  .jd-testimonial-card {
    flex: 1;
    background: #f7fdfc;
    border: 1.5px solid #d0f5f1;
    border-radius: 16px;
    padding: 30px 26px;
    position: relative;
  }
  .jd-testimonial-card::before {
    content: '"';
    position: absolute; top: 14px; left: 22px;
    font-size: 3.5rem; color: var(--teal); opacity: 0.2;
    font-family: Georgia, serif; line-height: 1;
  }
  .jd-testimonial-card p {
    font-size: 0.93rem; color: var(--text-mid);
    line-height: 1.8; margin-bottom: 20px;
    position: relative; z-index: 1;
  }
  .jd-testimonial-author {
    display: flex; align-items: center; gap: 12px;
  }
  .jd-testimonial-avatar {
    width: 44px; height: 44px; border-radius: 50%;
    background: var(--teal-light);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; font-weight: 700; color: var(--teal);
    flex-shrink: 0;
  }
  .jd-testimonial-author h4 { font-size: 0.93rem; font-weight: 700; }
  .jd-testimonial-author span { font-size: 0.8rem; color: var(--text-light); }
  .jd-carousel-btn {
    background: #fff; border: 1.5px solid #d0f5f1;
    width: 40px; height: 40px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 1.1rem; color: var(--teal);
    transition: all 0.2s;
    position: absolute; top: 50%; transform: translateY(-50%);
    z-index: 10;
  }
  .jd-carousel-btn:hover { background: var(--teal); color: #fff; }
  .jd-carousel-btn.prev { left: -52px; }
  .jd-carousel-btn.next { right: -52px; }
  .jd-carousel-dots {
    display: flex; justify-content: center; gap: 8px; margin-top: 24px;
  }
  .jd-carousel-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #cce9e6; cursor: pointer; border: none;
    transition: all 0.3s;
  }
  .jd-carousel-dot.active { background: var(--teal); width: 20px; border-radius: 4px; }

  /* ── FAQ ── */
  .jd-faq { background: var(--bg-soft); padding: 80px 0 100px; }
  .jd-faq-list { max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; }
  .jd-faq-item {
    background: #fff; border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }
  .jd-faq-question {
    width: 100%; background: var(--teal);
    color: #fff; border: none; cursor: pointer;
    padding: 16px 22px;
    text-align: left; font-size: 0.93rem;
    font-weight: 700; font-family: "Manrope", sans-serif;
    display: flex; justify-content: space-between; align-items: center;
    transition: background 0.2s;
  }
  .jd-faq-question:hover { background: var(--teal-dark); }
  .jd-faq-question.open { background: var(--teal-dark); }
  .jd-faq-arrow { transition: transform 0.3s; font-size: 0.8rem; }
  .jd-faq-question.open .jd-faq-arrow { transform: rotate(180deg); }
  .jd-faq-answer {
    max-height: 0; overflow: hidden;
    transition: max-height 0.4s ease, padding 0.3s;
    padding: 0 22px; font-size: 0.9rem; color: var(--text-mid); line-height: 1.7;
  }
  .jd-faq-answer.open { max-height: 300px; padding: 16px 22px; }

  /* ── BOTTOM CTA ── */
  .jd-bottom {
    background: #fff;
    padding: 100px 0 80px;
  }
  .jd-bottom-inner {
    display: flex; align-items: center; gap: 60px;
  }
  .jd-bottom-left { flex: 1; }
  .jd-bottom-left h2 {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(24px, 3.5vw, 38px);
    font-weight: 700; line-height: 1.3; margin-bottom: 16px; color: var(--text-dark);
  }
  .jd-bottom-left h2 span { color: var(--teal); }
  .jd-bottom-left p { color: var(--text-mid); line-height: 1.8; margin-bottom: 24px; font-size: 0.95rem; }
  .jd-bottom-right {
    flex: 1;
    background: var(--bg-soft);
    border-radius: 18px;
    padding: 36px 32px;
    border: 1.5px solid #d0f5f1;
  }
  .jd-bottom-right h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.2rem; font-weight: 700;
    margin-bottom: 6px; color: var(--text-dark);
  }
  .jd-bottom-right p { font-size: 0.88rem; color: var(--text-light); margin-bottom: 24px; }
  .jd-form-row { display: flex; gap: 14px; margin-bottom: 14px; }
  .jd-form-group { display: flex; flex-direction: column; flex: 1; }
  .jd-form-group label { font-size: 0.82rem; font-weight: 600; margin-bottom: 5px; color: var(--text-mid); }
  .jd-form-group input,
  .jd-form-group select {
    border: 1.5px solid #d1e9e7;
    border-radius: 7px;
    padding: 10px 14px;
    font-size: 0.9rem;
    font-family: "Manrope", sans-serif;
    outline: none;
    transition: border-color 0.2s;
    background: #fff;
  }
  .jd-form-group input:focus,
  .jd-form-group select:focus { border-color: var(--teal); }
  .jd-phone-row { display: flex; gap: 8px; }
  .jd-phone-flag {
    border: 1.5px solid #d1e9e7; border-radius: 7px;
    padding: 10px 12px; font-size: 0.9rem;
    background: #fff; width: 80px; flex-shrink: 0;
  }
  .jd-submit-btn {
    background: var(--teal); color: #fff;
    border: none; border-radius: 8px;
    padding: 13px 36px; font-size: 0.95rem;
    font-weight: 700; font-family: "Manrope", sans-serif;
    cursor: pointer; margin-top: 8px;
    transition: background 0.2s, transform 0.2s;
  }
  .jd-submit-btn:hover { background: var(--teal-dark); transform: translateY(-2px); }

  @media (max-width: 900px) {
    .jd-bottom-inner { flex-direction: column; }
    .jd-hero-image { width: 280px; }
    .jd-timeline::before { left: 20px; }
    .jd-step { padding-right: 0; padding-left: 56px; justify-content: flex-start; transform: translateX(-20px); }
    .jd-step.right { padding-left: 56px; transform: translateX(-20px); }
    .jd-step-dot { left: 20px; }
    .jd-step-card { max-width: 100%; border-left: 4px solid var(--teal) !important; border-right: none !important; }
    .jd-form-row { flex-direction: column; }
    .jd-carousel-btn.prev { left: -10px; }
    .jd-carousel-btn.next { right: -10px; }
    .jd-testimonial-slide { flex-direction: column; }
  }
`;

const joinDoctorStyles = `${styles}\n${subpagesHomeAlignCss}`;

/* ─────────────────────────── DATA ─────────────────────────── */
const BENEFITS = [
  { icon: "🌐", title: "Expand Your Reach", desc: "Connect with a vast and growing patient community across Odisha and fill your appointment slots effortlessly." },
  { icon: "💬", title: "Flexible Consultation Modes", desc: "Offer both in-clinic and secure online video consultations. Practice from anywhere, at your own schedule." },
  { icon: "📊", title: "Streamlined Practice Management", desc: "Manage appointments securely with our intuitive digital tools, reducing your administrative overhead." },
  { icon: "🤝", title: "Grow Your Professional Network", desc: "Collaborate with a distinguished community of specialists and general practitioners, enhancing your professional presence." },
  { icon: "🚫", title: "No Upfront Costs", desc: "Joining our network is free. We partner with you for mutual growth, operating on a transparent revenue-sharing model." },
];

const STEPS = [
  { side: "left",  num: "Step 1", icon: "📋", title: "Submit Application", desc: "Fill out our simple online form with your professional details and qualifications. It only takes a few minutes." },
  { side: "right", num: "Step 2", icon: "📄", title: "Document Verification", desc: "Our team will review your credentials and contact you within 48 hours to verify your documents efficiently." },
  { side: "left",  num: "Step 3", icon: "⚡", title: "Quick Onboarding", desc: "A dedicated onboarding coordinator will guide you through our platform setup in a single session." },
  { side: "right", num: "Step 4", icon: "🚀", title: "Go Live & Start Consulting", desc: "Once your profile is live, you can set your schedule and begin accepting appointments from patients across Odisha." },
];

const TESTIMONIALS = [
  [
    { text: "The onboarding was seamless, and the support from the relationship manager is excellent. It has been a true partnership focused on mutual growth and better patient outcomes.", name: "Dr. Priya Naik", spec: "Dermatologist, Pune" },
    { text: "Joining this network was the best decision for my practice. My patient consultations have doubled and the platform's digital tools have made managing appointments incredibly straightforward.", name: "Dr. Anita Sharma", spec: "General Physician, Bhubaneswar" },
  ],
  [
    { text: "The flexible consultation modes allowed me to balance my clinic hours with online sessions. My reach has expanded far beyond what I imagined possible in just three months.", name: "Dr. Rajan Mehta", spec: "Cardiologist, Cuttack" },
    { text: "Excellent platform with zero upfront cost. The revenue-sharing model is transparent and fair. Highly recommend this to any doctor looking to grow their practice in Odisha.", name: "Dr. Suman Patel", spec: "Orthopedic Surgeon, Berhampur" },
  ],
];

const FAQS = [
  { q: "WHAT IS THE REVENUE MODEL?", a: "We operate on a transparent revenue-sharing model. There are no upfront costs or monthly fees. You earn per consultation, and we earn only when you do. Full details are shared during onboarding." },
  { q: "HOW IS PATIENT DATA PRIVACY HANDLED?", a: "Patient data is encrypted end-to-end and stored on secure, compliant servers. We adhere strictly to all applicable healthcare data privacy regulations to protect both doctors and patients." },
  { q: "CAN I MANAGE MY OWN SCHEDULE AND AVAILABILITY?", a: "Absolutely. You have full control over your availability calendar. You can set clinic hours, block personal time, and toggle online consultations on or off at any time." },
  { q: "WHAT KIND OF SUPPORT WILL I RECEIVE?", a: "You get a dedicated relationship manager, 24/7 technical support, and regular training sessions to help you get the most out of the platform." },
];

/* ─────────────────────────── HOOK ─────────────────────────── */
function useInView(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

/* ─────────────────────────── COMPONENTS ─────────────────────────── */
function BenefitCard({ icon, title, desc, delay }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className={`jd-benefit-card${visible ? " visible" : ""}`}
      style={{ animationDelay: `${delay}ms` }}>
      <div className="jd-benefit-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function TimelineStep({ num, icon, title, desc, side, delay }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className={`jd-step${side === "right" ? " right" : ""}${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="jd-step-dot" />
      <div className="jd-step-card">
        <span className="jd-step-icon">{icon}</span>
        <div className="jd-step-num">{num}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;
  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);
  return (
    <section className="jd-section jd-testimonials">
      <div className="jd-container">
        <h2 className="jd-section-title">Hear From Doctors in Our Network</h2>
        <p className="jd-section-sub">Our partners appreciate the growth, flexibility, and support that Y-Way to Healthcare provides.</p>
        <div className="jd-testimonials-wrapper">
          <button className="jd-carousel-btn prev" onClick={prev}>&#8249;</button>
          <div style={{ overflow: "hidden" }}>
            <div className="jd-testimonials-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
              {TESTIMONIALS.map((slide, si) => (
                <div key={si} className="jd-testimonial-slide">
                  {slide.map((t, ti) => (
                    <div key={ti} className="jd-testimonial-card">
                      <p>{t.text}</p>
                      <div className="jd-testimonial-author">
                        <div className="jd-testimonial-avatar">{t.name.split(" ").map(w=>w[0]).join("").slice(0,2)}</div>
                        <div>
                          <h4>{t.name}</h4>
                          <span>{t.spec}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button className="jd-carousel-btn next" onClick={next}>&#8250;</button>
          <div className="jd-carousel-dots">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} className={`jd-carousel-dot${i === idx ? " active" : ""}`} onClick={() => setIdx(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="jd-section jd-faq">
      <div className="jd-container">
        <h2 className="jd-section-title">Your Questions, Answered</h2>
        <p className="jd-section-sub">Here are some common questions from doctors considering our partnership.</p>
        <div className="jd-faq-list">
          {FAQS.map((f, i) => (
            <div key={i} className="jd-faq-item">
              <button className={`jd-faq-question${open === i ? " open" : ""}`} onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <span className="jd-faq-arrow">▼</span>
              </button>
              <div className={`jd-faq-answer${open === i ? " open" : ""}`}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", specialty: "", city: "", state: "" });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  return (
    <section className="jd-bottom">
      <div className="jd-container">
        <div className="jd-bottom-inner">
          <div className="jd-bottom-left">
            <h2>Ready to <span>Transform Your</span> Practice?</h2>
            <p>Join us today and be a part of Odisha's healthcare revolution. A dedicated relationship manager is ready to assist you with the onboarding process.</p>
            <a href="#apply-form" className="btn-teal">▶ Start Your Application</a>
          </div>
          <div className="jd-bottom-right" id="apply-form">
            <h3>Fill The Form</h3>
            <p>Fill your details below with your DocVity Forms shortcode</p>
            <div className="jd-form-row">
              <div className="jd-form-group">
                <label>Name *</label>
                <input placeholder="Full Name" value={form.name} onChange={set("name")} />
              </div>
              <div className="jd-form-group">
                <label>Email *</label>
                <input placeholder="Email address" type="email" value={form.email} onChange={set("email")} />
              </div>
            </div>
            <div className="jd-form-row">
              <div className="jd-form-group">
                <label>Phone *</label>
                <div className="jd-phone-row">
                  <input className="jd-phone-flag" defaultValue="+91 🇮🇳" readOnly />
                  <input placeholder="91234 56789" value={form.phone} onChange={set("phone")} style={{flex:1}} />
                </div>
              </div>
              <div className="jd-form-group">
                <label>Specialty</label>
                <select value={form.specialty} onChange={set("specialty")}>
                  <option value="">Select</option>
                  <option>General Physician</option>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                  <option>Orthopedic</option>
                  <option>Neurologist</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="jd-form-row">
              <div className="jd-form-group">
                <label>City</label>
                <input placeholder="Your city" value={form.city} onChange={set("city")} />
              </div>
              <div className="jd-form-group">
                <label>State</label>
                <select value={form.state} onChange={set("state")}>
                  <option value="">State</option>
                  <option>Odisha</option>
                  <option>Andhra Pradesh</option>
                  <option>West Bengal</option>
                  <option>Jharkhand</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <button className="jd-submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */
export const JoinDoctor = () => {
  return (
    <>
      <style>{joinDoctorStyles}</style>
      <div className="page-wrapper">
        <SiteHeader />
        <div className="jd-page lt-home-type">

        {/* ── HERO ── */}
        <section className="jd-hero">
          <div className="jd-hero-inner">
            <div className="jd-hero-text">
              <h1>
                Partner with Us to<br />
                Shape the Future of<br />
                <span>Healthcare in Odisha</span>
              </h1>
              <p>
                Join a thriving network of Odisha's top medical professionals, expand your practice, and connect with thousands of patients seeking your expertise.
              </p>
              <a href="#apply-form" className="btn-teal">▶ Start Your Application</a>
            </div>
            <div className="jd-hero-image">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&auto=format&fit=crop&q=80"
                alt="Doctor"
                onError={e => { e.target.src = "https://via.placeholder.com/420x520/e6f9fb/00b5c8?text=Doctor"; }}
              />
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="jd-section jd-benefits">
          <div className="jd-container">
            <h2 className="jd-section-title">Empowering Doctors, Enhancing Care</h2>
            <p className="jd-section-sub">Discover the advantages of joining Odisha's most dynamic healthcare network. We provide the tools and support you need to thrive.</p>
            <div className="jd-benefits-grid">
              {BENEFITS.map((b, i) => (
                <BenefitCard key={i} {...b} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="jd-section jd-timeline-section">
          <div className="jd-container">
            <h2 className="jd-section-title">A Simple Path to Partnership</h2>
            <p className="jd-section-sub">Our onboarding process is straightforward and designed to get you started with minimal hassle.</p>
            <div className="jd-timeline">
              {STEPS.map((s, i) => (
                <TimelineStep key={i} {...s} delay={i * 150} />
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <Testimonials />

        {/* ── FAQ ── */}
        <FAQ />

        {/* ── BOTTOM CTA + FORM ── */}
        <ContactForm />

        </div>
        <NewsletterSection
          title="Ready to Begin Your Journey to Wellness?"
          text="Whether you are a patient, partner, or future team member, we are here to support your next step."
        />
        <SiteFooter />
      </div>
    </>
  );
};