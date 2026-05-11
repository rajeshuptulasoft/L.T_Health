import React, { useState, useEffect, useRef } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSection } from "../components/NewsletterSection";
import { subpagesHomeAlignCss } from "../styles/subpagesHomeAlign";

/* ═══════════════════════════ STYLES ═══════════════════════════ */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap');

  :root {
    --fr-teal:       #00B8A9;
    --fr-teal-light: #E0F7F5;
    --fr-teal-dark:  #009E90;
    --fr-green:      #22C55E;
    --fr-green-dark: #16A34A;
    --fr-text:       #1a2e44;
    --fr-mid:        #4a5568;
    --fr-light:      #718096;
    --fr-white:      #ffffff;
    --fr-soft:       #f7fdfc;
    --fr-border:     #d0f5f1;
  }

  .fr-page * { box-sizing: border-box; }
  .fr-page {
    font-family: 'Nunito', sans-serif;
    color: var(--fr-text);
  }

  /* ── SHARED ── */
  .fr-container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
  .fr-section   { padding: 84px 0; }

  .fr-heading {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.65rem, 3vw, 2.2rem);
    font-weight: 800;
    color: var(--fr-text);
    text-align: center;
    margin-bottom: 12px;
  }
  .fr-subtext {
    text-align: center;
    color: var(--fr-light);
    font-size: 0.97rem;
    max-width: 560px;
    margin: 0 auto 52px;
    line-height: 1.75;
  }

  /* ── HERO ── */
  .fr-hero {
    background: linear-gradient(135deg, #e6faf8 0%, #d0f5f1 45%, #eafff8 100%);
    padding: 90px 0 0;
    min-height: 500px;
    overflow: hidden;
    position: relative;
  }
  .fr-hero::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 60px;
    background: #fff;
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .fr-hero-inner {
    display: flex;
    align-items: flex-end;
    gap: 48px;
    padding-bottom: 60px;
  }
  .fr-hero-text { flex: 1; }
  .fr-hero-text h1 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    line-height: 1.18;
    margin-bottom: 18px;
  }
  .fr-hero-text h1 span { color: var(--fr-teal); }
  .fr-hero-text p {
    color: var(--fr-mid);
    font-size: 1rem;
    line-height: 1.75;
    max-width: 440px;
    margin-bottom: 32px;
  }
  .fr-hero-img-wrap {
    width: 420px;
    flex-shrink: 0;
    position: relative;
  }
  .fr-hero-img-wrap img {
    width: 100%;
    display: block;
    border-radius: 18px 18px 0 0;
    object-fit: cover;
    height: 360px;
    animation: fr-imgFloat 4.5s ease-in-out infinite;
    box-shadow: 0 20px 50px rgba(0,184,169,0.18);
  }
  @keyframes fr-imgFloat {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }

  /* ── BUTTON ── */
  .fr-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.22s, box-shadow 0.22s, background 0.22s;
  }
  .fr-btn-green {
    background: var(--fr-green);
    color: #fff;
    box-shadow: 0 4px 18px rgba(34,197,94,0.3);
  }
  .fr-btn-green:hover {
    background: var(--fr-green-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(34,197,94,0.38);
  }
  .fr-btn-teal {
    background: var(--fr-teal);
    color: #fff;
    box-shadow: 0 4px 18px rgba(0,184,169,0.28);
  }
  .fr-btn-teal:hover {
    background: var(--fr-teal-dark);
    transform: translateY(-2px);
  }

  /* ── PROVEN MODEL CARDS ── */
  .fr-model { background: #fff; }
  .fr-model-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  /* last row: 1 card centred in col-1 */
  .fr-model-grid .fr-model-card:nth-child(4) {
    grid-column: 1 / 2;
  }
  .fr-model-card {
    border: 1.5px solid var(--fr-border);
    border-radius: 16px;
    padding: 32px 26px;
    background: #fff;
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.55s, transform 0.55s, box-shadow 0.3s, border-color 0.3s;
  }
  .fr-model-card.fr-visible {
    opacity: 1;
    transform: translateY(0);
  }
  .fr-model-card:hover {
    box-shadow: 0 12px 38px rgba(0,184,169,0.14);
    border-color: var(--fr-teal);
    transform: translateY(-5px);
  }
  .fr-card-icon {
    width: 50px; height: 50px;
    border-radius: 12px;
    background: var(--fr-teal-light);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.45rem;
    margin-bottom: 18px;
  }
  .fr-model-card h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.02rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .fr-model-card p {
    font-size: 0.88rem;
    color: var(--fr-mid);
    line-height: 1.7;
  }

  /* ── TIMELINE / JOURNEY ── */
  .fr-journey { background: var(--fr-soft); }
  .fr-timeline {
    position: relative;
    max-width: 820px;
    margin: 0 auto;
  }
  .fr-timeline::before {
    content: '';
    position: absolute;
    left: 50%; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, var(--fr-teal), var(--fr-green));
    transform: translateX(-50%);
  }
  .fr-tstep {
    display: flex;
    margin-bottom: 52px;
    position: relative;
    opacity: 0;
  }
  /* LEFT steps */
  .fr-tstep.fr-left {
    justify-content: flex-end;
    padding-right: calc(50% + 40px);
    transform: translateX(-36px);
    transition: opacity 0.6s, transform 0.6s;
  }
  /* RIGHT steps */
  .fr-tstep.fr-right {
    justify-content: flex-start;
    padding-left: calc(50% + 40px);
    transform: translateX(36px);
    transition: opacity 0.6s, transform 0.6s;
  }
  .fr-tstep.fr-visible {
    opacity: 1;
    transform: translateX(0);
  }
  .fr-tstep-dot {
    position: absolute;
    left: 50%;
    top: 26px;
    width: 20px; height: 20px;
    border-radius: 50%;
    background: var(--fr-teal);
    border: 3px solid #fff;
    box-shadow: 0 0 0 3px var(--fr-teal);
    transform: translateX(-50%);
    z-index: 2;
    transition: background 0.3s;
  }
  .fr-tstep:hover .fr-tstep-dot { background: var(--fr-green); box-shadow: 0 0 0 3px var(--fr-green); }
  .fr-tstep-card {
    background: #fff;
    border-radius: 14px;
    padding: 24px 26px;
    max-width: 308px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.07);
    transition: box-shadow 0.3s, transform 0.3s;
    position: relative;
  }
  .fr-tstep.fr-left  .fr-tstep-card { border-right: 4px solid var(--fr-teal); }
  .fr-tstep.fr-right .fr-tstep-card { border-left: 4px solid var(--fr-green); }
  .fr-tstep-card:hover {
    box-shadow: 0 10px 36px rgba(0,184,169,0.18);
    transform: translateY(-3px);
  }
  .fr-step-num {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--fr-teal);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }
  .fr-tstep.fr-right .fr-step-num { color: var(--fr-green); }
  .fr-tstep-icon { font-size: 1.5rem; margin-bottom: 10px; display: block; }
  .fr-tstep-card h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .fr-tstep-card p { font-size: 0.87rem; color: var(--fr-mid); line-height: 1.65; }

  /* ── TESTIMONIALS ── */
  .fr-testi { background: #fff; }
  .fr-testi-wrap {
    position: relative;
    max-width: 940px;
    margin: 0 auto;
  }
  .fr-testi-overflow { overflow: hidden; }
  .fr-testi-track {
    display: flex;
    transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
  }
  .fr-testi-slide {
    min-width: 100%;
    display: flex;
    gap: 24px;
    padding: 4px 6px;
  }
  .fr-testi-card {
    flex: 1;
    background: var(--fr-soft);
    border: 1.5px solid var(--fr-border);
    border-radius: 16px;
    padding: 30px 28px;
    position: relative;
    transition: box-shadow 0.3s;
  }
  .fr-testi-card:hover { box-shadow: 0 8px 30px rgba(0,184,169,0.13); }
  .fr-quote-mark {
    font-size: 3.8rem;
    color: var(--fr-teal);
    opacity: 0.18;
    font-family: Georgia, serif;
    line-height: 1;
    position: absolute;
    top: 14px; left: 22px;
  }
  .fr-testi-card p {
    font-size: 0.92rem;
    color: var(--fr-mid);
    line-height: 1.75;
    margin-bottom: 22px;
    position: relative;
    z-index: 1;
  }
  .fr-testi-author { display: flex; align-items: center; gap: 12px; }
  .fr-testi-avatar {
    width: 46px; height: 46px;
    border-radius: 50%;
    background: var(--fr-teal-light);
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; font-size: 1rem;
    color: var(--fr-teal);
    flex-shrink: 0;
  }
  .fr-testi-author h4 { font-size: 0.93rem; font-weight: 700; }
  .fr-testi-author span { font-size: 0.8rem; color: var(--fr-light); }

  .fr-arrow-btn {
    position: absolute;
    top: 50%; transform: translateY(-50%);
    width: 42px; height: 42px;
    border-radius: 50%;
    background: #fff;
    border: 1.5px solid var(--fr-border);
    color: var(--fr-teal);
    font-size: 1.2rem;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    z-index: 10;
  }
  .fr-arrow-btn:hover { background: var(--fr-teal); color: #fff; }
  .fr-arrow-btn.prev { left: -56px; }
  .fr-arrow-btn.next { right: -56px; }
  .fr-dots {
    display: flex; justify-content: center; gap: 8px; margin-top: 26px;
  }
  .fr-dot {
    width: 9px; height: 9px;
    border-radius: 50%;
    background: #c5e8e5;
    border: none; cursor: pointer;
    transition: all 0.3s;
  }
  .fr-dot.active { background: var(--fr-teal); width: 22px; border-radius: 5px; }

  /* ── FAQ ── */
  .fr-faq { background: var(--fr-soft); }
  .fr-faq-list {
    max-width: 740px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .fr-faq-item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }
  .fr-faq-btn {
    width: 100%;
    background: var(--fr-teal);
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 16px 22px;
    text-align: left;
    font-size: 0.92rem;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s;
  }
  .fr-faq-btn:hover,
  .fr-faq-btn.open { background: var(--fr-teal-dark); }
  .fr-faq-chevron {
    font-size: 0.78rem;
    transition: transform 0.3s;
  }
  .fr-faq-btn.open .fr-faq-chevron { transform: rotate(180deg); }
  .fr-faq-body {
    max-height: 0;
    overflow: hidden;
    background: #fff;
    font-size: 0.9rem;
    color: var(--fr-mid);
    line-height: 1.75;
    padding: 0 22px;
    transition: max-height 0.4s ease, padding 0.3s;
  }
  .fr-faq-body.open { max-height: 300px; padding: 16px 22px; }

  /* ── BOTTOM CTA + FORM ── */
  .fr-bottom { background: #fff; padding: 80px 0; }
  .fr-bottom-inner {
    display: flex;
    align-items: flex-start;
    gap: 60px;
  }
  .fr-bottom-left { flex: 1; padding-top: 10px; }
  .fr-bottom-left h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 800;
    line-height: 1.28;
    margin-bottom: 16px;
  }
  .fr-bottom-left h2 span { color: var(--fr-teal); }
  .fr-bottom-left p {
    color: var(--fr-mid);
    line-height: 1.75;
    font-size: 0.95rem;
    margin-bottom: 28px;
  }
  .fr-form-box {
    flex: 1;
    background: var(--fr-soft);
    border: 1.5px solid var(--fr-border);
    border-radius: 18px;
    padding: 36px 32px;
  }
  .fr-form-box h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 6px;
  }
  .fr-form-box > p {
    font-size: 0.86rem;
    color: var(--fr-light);
    margin-bottom: 24px;
  }
  .fr-form-row {
    display: flex;
    gap: 14px;
    margin-bottom: 14px;
  }
  .fr-form-group {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .fr-form-group label {
    font-size: 0.81rem;
    font-weight: 600;
    color: var(--fr-mid);
    margin-bottom: 5px;
  }
  .fr-form-group input,
  .fr-form-group select {
    border: 1.5px solid #d1e9e7;
    border-radius: 7px;
    padding: 10px 14px;
    font-size: 0.9rem;
    font-family: 'Nunito', sans-serif;
    outline: none;
    background: #fff;
    transition: border-color 0.2s, box-shadow 0.2s;
    color: var(--fr-text);
  }
  .fr-form-group input:focus,
  .fr-form-group select:focus {
    border-color: var(--fr-teal);
    box-shadow: 0 0 0 3px rgba(0,184,169,0.1);
  }
  .fr-phone-row { display: flex; gap: 8px; }
  .fr-phone-flag {
    border: 1.5px solid #d1e9e7;
    border-radius: 7px;
    padding: 10px 12px;
    font-size: 0.88rem;
    background: #fff;
    width: 82px;
    flex-shrink: 0;
    color: var(--fr-text);
  }
  .fr-submit {
    background: var(--fr-teal);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 13px 36px;
    font-size: 0.95rem;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s, transform 0.2s;
  }
  .fr-submit:hover { background: var(--fr-teal-dark); transform: translateY(-2px); }

  /* ── RESPONSIVE ── */
  @media (max-width: 960px) {
    .fr-hero-img-wrap { width: 280px; }
    .fr-model-grid { grid-template-columns: 1fr 1fr; }
    .fr-model-grid .fr-model-card:nth-child(4) { grid-column: auto; }
    .fr-arrow-btn.prev { left: -12px; }
    .fr-arrow-btn.next { right: -12px; }
    .fr-testi-slide { flex-direction: column; }
    .fr-bottom-inner { flex-direction: column; }
  }
  @media (max-width: 680px) {
    .fr-hero-inner { flex-direction: column; align-items: flex-start; }
    .fr-hero-img-wrap { width: 100%; }
    .fr-model-grid { grid-template-columns: 1fr; }
    .fr-timeline::before { left: 18px; }
    .fr-tstep.fr-left,
    .fr-tstep.fr-right {
      justify-content: flex-start;
      padding-left: 52px;
      padding-right: 0;
    }
    .fr-tstep-dot { left: 18px; }
    .fr-tstep.fr-left .fr-tstep-card { border-right: none; border-left: 4px solid var(--fr-teal); }
    .fr-form-row { flex-direction: column; }
  }
`;

const franchaiseStyles = `${styles}\n${subpagesHomeAlignCss}`;

/* ═══════════════════════════ DATA ═══════════════════════════ */
const MODEL_CARDS = [
  {
    icon: "📈",
    title: "Proven Business Model",
    desc: "Benefit from our extensive owner research and a fine-tuned operational framework that is built for growth and profitability.",
  },
  {
    icon: "🛡️",
    title: "Comprehensive Support",
    desc: "Receive end-to-end guidance, from site selection and training to marketing and daily operations, ensuring your success.",
  },
  {
    icon: "⭐",
    title: "Established Brand Reputation",
    desc: "Leverage the trust and credibility of a recognised healthcare brand, attracting patients from day one.",
  },
  {
    icon: "💰",
    title: "Strong Financial Viability",
    desc: "Benefit from our transparent financial model and a service that is always in demand, providing a stable path to profitability.",
  },
];

const JOURNEY_STEPS = [
  {
    side: "left",
    num: "Step 1",
    icon: "🤝",
    title: "Inquiry & Consultation",
    desc: "Our franchise team will be on hand to answer all your questions and walk you through the opportunity and process.",
  },
  {
    side: "right",
    num: "Step 2",
    icon: "🔍",
    title: "Due Diligence & Site Selection",
    desc: "We will guide you through the financial and legal processes and assist with identifying and finalising the ideal location for your clinic.",
  },
  {
    side: "left",
    num: "Step 3",
    icon: "🎓",
    title: "Comprehensive Training",
    desc: "You and your key staff will receive hands-on training, covering all operational aspects, from clinical procedures to platform management and customer service.",
  },
  {
    side: "right",
    num: "Step 4",
    icon: "🚀",
    title: "Grand Opening & Ongoing Support",
    desc: "Our marketing team will support your launch, and your dedicated support manager will be available to assist in scaling your business for long-term success.",
  },
];

const TESTIMONIALS = [
  [
    {
      text: "The training and ongoing support have been incredible. I had no prior experience in healthcare, but with their guidance, I'm running a successful, profitable business. The brand recognition is invaluable.",
      name: "Mr. Rohan Das",
      role: "Franchise Owner, Bhubaneswar",
    },
    {
      text: "The business model is solid. The brand reputation alone attracts patients from day one, and the integrated technology makes daily operations simple and incredibly efficient.",
      name: "Mrs. Smita Sahu",
      role: "Franchise Owner, Cuttack",
    },
  ],
  [
    {
      text: "From site selection to grand opening, every step was handled professionally. My ROI exceeded projections by the sixth month. I highly recommend this to any aspiring entrepreneur.",
      name: "Mr. Anil Patra",
      role: "Franchise Owner, Berhampur",
    },
    {
      text: "The comprehensive training gave me the confidence to run a healthcare clinic without a medical background. The support team is always just a call away — truly a partnership you can count on.",
      name: "Ms. Kavita Mohanty",
      role: "Franchise Owner, Rourkela",
    },
  ],
];

const FAQS = [
  {
    q: "WHAT IS THE INITIAL INVESTMENT REQUIRED?",
    a: "The initial investment varies depending on the clinic size and location. Our team provides a full financial disclosure document during the consultation phase so you have complete clarity before committing.",
  },
  {
    q: "WHAT KIND OF ONGOING SUPPORT WILL I RECEIVE?",
    a: "You will receive continuous support including a dedicated relationship manager, regular business reviews, marketing resources, technology updates, and access to our nationwide network of franchise partners.",
  },
  {
    q: "ARE THERE SPECIFIC SITE REQUIREMENTS FOR THE CLINIC?",
    a: "Yes, we have guidelines on location, footprint, and accessibility to ensure the best possible patient experience. Our site selection team will guide you through the entire process and help finalise the ideal space.",
  },
  {
    q: "WHAT IS THE TIMELINE FROM APPLICATION TO OPENING?",
    a: "The typical timeline from application approval to grand opening is approximately 3 to 5 months, depending on site availability, local permits, and training schedules. We aim to make the process as smooth as possible.",
  },
];

/* ═══════════════════════════ HOOK ═══════════════════════════ */
function useInView(ref, threshold = 0.15) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return vis;
}

/* ═══════════════════════════ SUB-COMPONENTS ═══════════════════════════ */

/* — Proven Model Card — */
function ModelCard({ icon, title, desc, delay }) {
  const ref = useRef(null);
  const vis = useInView(ref);
  return (
    <div
      ref={ref}
      className={`fr-model-card${vis ? " fr-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="fr-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

/* — Timeline Step — */
function JourneyStep({ side, num, icon, title, desc, delay }) {
  const ref = useRef(null);
  const vis = useInView(ref);
  return (
    <div
      ref={ref}
      className={`fr-tstep fr-${side}${vis ? " fr-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="fr-tstep-dot" />
      <div className="fr-tstep-card">
        <span className="fr-tstep-icon">{icon}</span>
        <div className="fr-step-num">{num}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

/* — Testimonials Carousel — */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;
  return (
    <section className="fr-section fr-testi">
      <div className="fr-container">
        <h2 className="fr-heading">Hear from Our Successful Franchisees</h2>
        <p className="fr-subtext">Stories of growth, support, and community impact from our trusted partners.</p>
        <div className="fr-testi-wrap">
          <button className="fr-arrow-btn prev" onClick={() => setIdx((idx - 1 + total) % total)}>&#8249;</button>
          <div className="fr-testi-overflow">
            <div
              className="fr-testi-track"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {TESTIMONIALS.map((slide, si) => (
                <div key={si} className="fr-testi-slide">
                  {slide.map((t, ti) => (
                    <div key={ti} className="fr-testi-card">
                      <div className="fr-quote-mark">"</div>
                      <p>{t.text}</p>
                      <div className="fr-testi-author">
                        <div className="fr-testi-avatar">
                          {t.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                        </div>
                        <div>
                          <h4>{t.name}</h4>
                          <span>{t.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button className="fr-arrow-btn next" onClick={() => setIdx((idx + 1) % total)}>&#8250;</button>
          <div className="fr-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`fr-dot${i === idx ? " active" : ""}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* — FAQ Accordion — */
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="fr-section fr-faq">
      <div className="fr-container">
        <h2 className="fr-heading">Your Franchise Questions, Answered</h2>
        <p className="fr-subtext">Get the information you need to make an informed decision about your future.</p>
        <div className="fr-faq-list">
          {FAQS.map((f, i) => (
            <div key={i} className="fr-faq-item">
              <button
                className={`fr-faq-btn${open === i ? " open" : ""}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <span className="fr-faq-chevron">▼</span>
              </button>
              <div className={`fr-faq-body${open === i ? " open" : ""}`}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* — Contact Form — */
function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", investment: "", city: "", state: "",
  });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <section className="fr-bottom">
      <div className="fr-container">
        <div className="fr-bottom-inner">
          <div className="fr-bottom-left">
            <h2>
              Ready to <span>Start Your<br />Healthcare Business?</span>
            </h2>
            <p>
              Contact our franchise team to learn more about this rewarding opportunity and take the first step towards ownership.
            </p>
            <a href="#fr-form" className="fr-btn fr-btn-teal">▶ Explore Franchise Opportunities</a>
          </div>

          <div className="fr-form-box" id="fr-form">
            <h3>Fill The Form</h3>
            <p>Fill out the form below to connect with our franchise team.</p>

            <div className="fr-form-row">
              <div className="fr-form-group">
                <label>Name *</label>
                <input placeholder="Full Name" value={form.name} onChange={set("name")} />
              </div>
              <div className="fr-form-group">
                <label>Email *</label>
                <input placeholder="Email address" type="email" value={form.email} onChange={set("email")} />
              </div>
            </div>

            <div className="fr-form-row">
              <div className="fr-form-group">
                <label>Phone *</label>
                <div className="fr-phone-row">
                  <input className="fr-phone-flag" defaultValue="+91 🇮🇳" readOnly />
                  <input
                    placeholder="91234 56789"
                    value={form.phone}
                    onChange={set("phone")}
                    style={{ flex: 1 }}
                  />
                </div>
              </div>
              <div className="fr-form-group">
                <label>Investment Range</label>
                <select value={form.investment} onChange={set("investment")}>
                  <option value="">Select</option>
                  <option>₹10L – ₹25L</option>
                  <option>₹25L – ₹50L</option>
                  <option>₹50L – ₹1Cr</option>
                  <option>Above ₹1Cr</option>
                </select>
              </div>
            </div>

            <div className="fr-form-row">
              <div className="fr-form-group">
                <label>City</label>
                <input placeholder="Your city" value={form.city} onChange={set("city")} />
              </div>
              <div className="fr-form-group">
                <label>State</label>
                <select value={form.state} onChange={set("state")}>
                  <option value="">State</option>
                  <option>Odisha</option>
                  <option>West Bengal</option>
                  <option>Andhra Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Chhattisgarh</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <button className="fr-submit">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export const Franchaise = () => {
  return (
    <>
      <style>{franchaiseStyles}</style>
      <div className="page-wrapper">
        <SiteHeader />
        <div className="fr-page lt-home-type">

        {/* ── HERO ── */}
        <section className="fr-hero">
          <div className="fr-container">
            <div className="fr-hero-inner">
              <div className="fr-hero-text">
                <h1>
                  Invest in Healthcare,<br />
                  Impact Your<br />
                  <span>Community</span>
                </h1>
                <p>
                  Become a franchise partner with Y Way to Healthcare and own a profitable, purpose-driven business.
                </p>
                <a href="#fr-form" className="fr-btn fr-btn-green">
                  ▶ Explore Franchise Opportunities
                </a>
              </div>
              <div className="fr-hero-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&auto=format&fit=crop&q=80"
                  alt="Franchise business partners"
                  onError={e => {
                    e.target.src =
                      "https://via.placeholder.com/420x360/e0f7f5/00B8A9?text=Franchise+Partner";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── PROVEN MODEL ── */}
        <section className="fr-section fr-model">
          <div className="fr-container">
            <h2 className="fr-heading">A Proven Model for Success</h2>
            <p className="fr-subtext">
              Discover the unmatched advantages of a partnership that puts you in control.
            </p>
            <div className="fr-model-grid">
              {MODEL_CARDS.map((c, i) => (
                <ModelCard key={i} {...c} delay={i * 110} />
              ))}
            </div>
          </div>
        </section>

        {/* ── JOURNEY / TIMELINE ── */}
        <section className="fr-section fr-journey">
          <div className="fr-container">
            <h2 className="fr-heading">Your Guided Journey to Ownership</h2>
            <p className="fr-subtext">
              From your first inquiry to your grand opening, we are with you every step of the way.
            </p>
            <div className="fr-timeline">
              {JOURNEY_STEPS.map((s, i) => (
                <JourneyStep key={i} {...s} delay={i * 160} />
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