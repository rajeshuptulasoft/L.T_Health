import React, { useState, useEffect, useRef } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSection } from "../components/NewsletterSection";
import { subpagesHomeAlignCss } from "../styles/subpagesHomeAlign";

/* ═══════════════════════════════════════════
   STYLES
═══════════════════════════════════════════ */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap');

  :root {
    --op-teal:       #00B8A9;
    --op-teal-lt:    #E0F7F5;
    --op-teal-dk:    #009E90;
    --op-green:      #22C55E;
    --op-green-dk:   #16A34A;
    --op-text:       #1a2e44;
    --op-mid:        #4a5568;
    --op-light:      #718096;
    --op-soft:       #f7fdfc;
    --op-border:     #d0f5f1;
  }

  .op-page * { box-sizing: border-box; }
  .op-page {
    font-family: 'Nunito', sans-serif;
    color: var(--op-text);
  }

  /* ── SHARED ── */
  .op-wrap  { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
  .op-sec   { padding: 80px 0; }
  .op-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.15rem);
    font-weight: 800;
    color: var(--op-text);
    text-align: center;
    margin-bottom: 12px;
    line-height: 1.25;
  }
  .op-title span { color: var(--op-teal); }
  .op-sub {
    text-align: center;
    color: var(--op-light);
    font-size: 0.95rem;
    max-width: 580px;
    margin: 0 auto 52px;
    line-height: 1.75;
  }

  /* ── BUTTONS ── */
  .op-btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 13px 28px; border-radius: 8px;
    font-weight: 700; font-size: 0.93rem;
    border: none; cursor: pointer; text-decoration: none;
    transition: transform .22s, box-shadow .22s, background .22s;
    font-family: 'Nunito', sans-serif;
  }
  .op-btn-teal {
    background: var(--op-teal); color: #fff;
    box-shadow: 0 4px 18px rgba(0,184,169,.28);
  }
  .op-btn-teal:hover { background: var(--op-teal-dk); transform: translateY(-2px); }
  .op-btn-outline {
    background: transparent; color: var(--op-teal);
    border: 2px solid var(--op-teal);
  }
  .op-btn-outline:hover { background: var(--op-teal-lt); transform: translateY(-2px); }
  .op-btn-green {
    background: var(--op-green); color: #fff;
    box-shadow: 0 4px 18px rgba(34,197,94,.3);
  }
  .op-btn-green:hover { background: var(--op-green-dk); transform: translateY(-2px); }

  /* ── FADE-UP ── */
  .op-fu {
    opacity: 0; transform: translateY(28px);
    transition: opacity .6s, transform .6s;
  }
  .op-fu.op-vis { opacity: 1; transform: translateY(0); }

  /* ═════════════ HERO ═════════════ */
  .op-hero {
    background: linear-gradient(135deg,#e6faf8 0%,#d0f5f1 40%,#eafff8 100%);
    padding: 88px 0 0;
    overflow: hidden;
    position: relative;
    min-height: 480px;
  }
  .op-hero::after {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0; height: 52px;
    background: #fff;
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  /* decorative circles */
  .op-hero-c {
    position: absolute; border-radius: 50%;
    background: rgba(0,184,169,.1); pointer-events: none;
  }
  .op-hero-c.c1 { width: 260px; height: 260px; top: -50px; right: 60px; }
  .op-hero-c.c2 { width: 140px; height: 140px; top: 220px; right: 0px; }
  .op-hero-inner {
    display: flex; align-items: flex-end; gap: 40px;
    padding-bottom: 56px;
  }
  .op-hero-text { flex: 1; }
  .op-hero-text h1 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4.5vw, 3rem);
    font-weight: 800; line-height: 1.15; margin-bottom: 18px;
  }
  .op-hero-text h1 span { color: var(--op-teal); }
  .op-hero-text p {
    color: var(--op-mid); font-size: .97rem;
    line-height: 1.75; max-width: 430px; margin-bottom: 30px;
  }
  .op-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
  .op-hero-img {
    width: 420px; flex-shrink: 0;
  }
  .op-hero-img img {
    width: 100%; display: block;
    border-radius: 16px 16px 0 0;
    object-fit: cover; height: 340px;
    animation: op-float 4.5s ease-in-out infinite;
    box-shadow: 0 20px 50px rgba(0,184,169,.18);
  }
  @keyframes op-float {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }

  /* ═════════════ EXPERT CONSULTATIONS ═════════════ */
  .op-expert { background: #fff; }
  .op-expert-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: start;
  }
  .op-expert-left h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.4rem,2.8vw,1.9rem);
    font-weight: 800; margin-bottom: 16px; line-height: 1.25;
  }
  .op-expert-left > p {
    color: var(--op-mid); font-size: .93rem; line-height: 1.8; margin-bottom: 22px;
  }
  .op-spec-list { display: flex; flex-direction: column; gap: 14px; }
  .op-spec-item { display: flex; gap: 12px; align-items: flex-start; }
  .op-spec-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--op-teal); flex-shrink: 0; margin-top: 6px;
  }
  .op-spec-item strong { font-weight: 700; color: var(--op-text); }
  .op-spec-item p { font-size: .88rem; color: var(--op-mid); line-height: 1.6; }

  /* right — specialty cards 2×2 grid */
  .op-spec-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }
  .op-spec-card {
    border: 1.5px solid var(--op-border);
    border-radius: 14px;
    padding: 22px 20px;
    background: #fff;
    text-align: center;
    opacity: 0; transform: translateY(24px);
    transition: opacity .55s, transform .55s, box-shadow .3s, border-color .3s;
    cursor: pointer;
  }
  .op-spec-card.op-vis { opacity: 1; transform: translateY(0); }
  .op-spec-card:hover {
    box-shadow: 0 10px 34px rgba(0,184,169,.14);
    border-color: var(--op-teal);
    transform: translateY(-5px);
  }
  .op-spec-icon {
    font-size: 2rem; margin-bottom: 10px; display: block;
  }
  .op-spec-card h4 {
    font-family: 'Poppins', sans-serif;
    font-size: .97rem; font-weight: 700; margin-bottom: 7px;
  }
  .op-spec-card p { font-size: .82rem; color: var(--op-mid); line-height: 1.6; }

  /* ═════════════ ADVANTAGES ═════════════ */
  .op-adv { background: var(--op-soft); }
  .op-adv-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 24px;
  }
  .op-adv-card {
    background: #fff;
    border: 1.5px solid var(--op-border);
    border-radius: 16px;
    padding: 32px 26px;
    text-align: center;
    opacity: 0; transform: translateY(26px);
    transition: opacity .55s, transform .55s, box-shadow .3s;
  }
  .op-adv-card.op-vis { opacity: 1; transform: translateY(0); }
  .op-adv-card:hover {
    box-shadow: 0 12px 38px rgba(0,184,169,.14);
    transform: translateY(-5px);
  }
  .op-adv-icon {
    width: 60px; height: 60px; border-radius: 50%;
    background: var(--op-teal-lt);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.7rem; margin: 0 auto 18px;
  }
  .op-adv-card h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem; font-weight: 700; margin-bottom: 10px;
  }
  .op-adv-card p { font-size: .87rem; color: var(--op-mid); line-height: 1.7; }

  /* ═════════════ PATH / JOURNEY ═════════════ */
  .op-path { background: #fff; }
  .op-path-grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    position: relative;
  }
  .op-path-grid::before {
    content: '';
    position: absolute;
    top: 40px; left: 12.5%; right: 12.5%; height: 3px;
    background: linear-gradient(to right, var(--op-teal), var(--op-green));
    z-index: 0;
  }
  .op-path-step {
    text-align: center; position: relative; z-index: 1;
    opacity: 0; transform: translateY(24px);
    transition: opacity .55s, transform .55s;
  }
  .op-path-step.op-vis { opacity: 1; transform: translateY(0); }
  .op-path-num {
    width: 64px; height: 64px; border-radius: 50%;
    background: var(--op-teal); color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem; margin: 0 auto 18px;
    box-shadow: 0 4px 18px rgba(0,184,169,.3);
    border: 3px solid #fff; position: relative; z-index: 2;
    transition: transform .3s, box-shadow .3s;
  }
  .op-path-step:hover .op-path-num {
    transform: scale(1.12);
    box-shadow: 0 8px 28px rgba(0,184,169,.4);
  }
  .op-path-step h4 {
    font-family: 'Poppins', sans-serif;
    font-size: .97rem; font-weight: 700; margin-bottom: 8px;
  }
  .op-path-step p { font-size: .84rem; color: var(--op-mid); line-height: 1.65; }

  /* ═════════════ TESTIMONIALS ═════════════ */
  .op-testi { background: var(--op-soft); }
  .op-testi-wrap {
    position: relative; max-width: 940px; margin: 0 auto;
  }
  .op-testi-overflow { overflow: hidden; }
  .op-testi-track {
    display: flex;
    transition: transform .5s cubic-bezier(.4,0,.2,1);
  }
  .op-testi-slide {
    min-width: 100%; display: flex; gap: 24px; padding: 4px 6px;
  }
  .op-testi-card {
    flex: 1; background: #fff;
    border: 1.5px solid var(--op-border);
    border-radius: 16px; padding: 30px 28px;
    position: relative;
    transition: box-shadow .3s;
  }
  .op-testi-card:hover { box-shadow: 0 8px 30px rgba(0,184,169,.13); }
  .op-testi-q {
    font-size: 3.6rem; color: var(--op-teal); opacity: .18;
    font-family: Georgia, serif; line-height: 1;
    position: absolute; top: 14px; left: 22px;
  }
  .op-testi-card p {
    font-size: .91rem; color: var(--op-mid);
    line-height: 1.75; margin-bottom: 22px; position: relative; z-index: 1;
    font-style: italic;
  }
  .op-testi-author { display: flex; align-items: center; gap: 12px; }
  .op-testi-av {
    width: 44px; height: 44px; border-radius: 50%;
    background: var(--op-teal-lt);
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; font-size: .95rem; color: var(--op-teal); flex-shrink: 0;
  }
  .op-testi-author h4 { font-size: .93rem; font-weight: 700; }
  .op-testi-author span { font-size: .8rem; color: var(--op-light); }
  .op-arr {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 42px; height: 42px; border-radius: 50%;
    background: #fff; border: 1.5px solid var(--op-border);
    color: var(--op-teal); font-size: 1.2rem;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: background .2s, color .2s; z-index: 10;
  }
  .op-arr:hover { background: var(--op-teal); color: #fff; }
  .op-arr.prev { left: -54px; }
  .op-arr.next { right: -54px; }
  .op-dots {
    display: flex; justify-content: center; gap: 8px; margin-top: 26px;
  }
  .op-dot {
    width: 9px; height: 9px; border-radius: 50%;
    background: #c5e8e5; border: none; cursor: pointer;
    transition: all .3s;
  }
  .op-dot.active { background: var(--op-teal); width: 22px; border-radius: 5px; }

  /* ═════════════ FAQ ═════════════ */
  .op-faq { background: #fff; }
  .op-faq-list {
    max-width: 740px; margin: 0 auto;
    display: flex; flex-direction: column; gap: 14px;
  }
  .op-faq-item { border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
  .op-faq-btn {
    width: 100%; background: #fff;
    border: 1.5px solid var(--op-border);
    color: var(--op-text); cursor: pointer;
    padding: 16px 22px; text-align: left;
    font-size: .93rem; font-weight: 700;
    font-family: 'Nunito', sans-serif;
    display: flex; justify-content: space-between; align-items: center;
    transition: background .2s, color .2s, border-color .2s;
  }
  .op-faq-btn:hover { border-color: var(--op-teal); color: var(--op-teal); }
  .op-faq-btn.open {
    background: var(--op-teal); color: #fff;
    border-color: var(--op-teal);
  }
  .op-faq-chev { font-size: .78rem; transition: transform .3s; }
  .op-faq-btn.open .op-faq-chev { transform: rotate(45deg); }
  .op-faq-body {
    max-height: 0; overflow: hidden;
    background: var(--op-soft);
    font-size: .9rem; color: var(--op-mid); line-height: 1.75;
    padding: 0 22px;
    transition: max-height .4s ease, padding .3s;
    border-left: 1.5px solid var(--op-border);
    border-right: 1.5px solid var(--op-border);
    border-bottom: 0;
  }
  .op-faq-body.open { max-height: 300px; padding: 16px 22px; border-bottom: 1.5px solid var(--op-border); }

  /* ═════════════ CTA BOTTOM ═════════════ */
  .op-cta {
    background: linear-gradient(135deg,#e6faf8 0%,#d0f5f1 50%,#eafff8 100%);
    padding: 80px 0; text-align: center; overflow: hidden; position: relative;
  }
  .op-cta h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem,3vw,2.2rem);
    font-weight: 800; margin-bottom: 16px; line-height: 1.25;
  }
  .op-cta h2 span { color: var(--op-teal); }
  .op-cta p {
    color: var(--op-mid); font-size: .97rem; line-height: 1.75;
    max-width: 560px; margin: 0 auto 32px;
  }

  /* ═════════════ RESPONSIVE ═════════════ */
  @media (max-width: 960px) {
    .op-expert-inner { grid-template-columns: 1fr; }
    .op-adv-grid { grid-template-columns: 1fr 1fr; }
    .op-path-grid { grid-template-columns: 1fr 1fr; }
    .op-path-grid::before { display: none; }
    .op-testi-slide { flex-direction: column; }
    .op-arr.prev { left: -10px; }
    .op-arr.next { right: -10px; }
  }
  @media (max-width: 640px) {
    .op-hero-inner { flex-direction: column; align-items: flex-start; }
    .op-hero-img { width: 100%; }
    .op-spec-grid { grid-template-columns: 1fr 1fr; }
    .op-adv-grid { grid-template-columns: 1fr; }
    .op-path-grid { grid-template-columns: 1fr; }
  }
`;

const opdStyles = `${styles}\n${subpagesHomeAlignCss}`;

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const SPECIALTIES = [
  { icon: "🧠", title: "Neurology OPD",      desc: "Specialised consultations for all types of neurological conditions." },
  { icon: "🦴", title: "Orthopedic OPD",     desc: "Expert treatment for fractures, joint care, and sports injuries." },
  { icon: "👴", title: "Geriatric OPD",      desc: "Medical care focused on the unique health needs of elderly patients." },
  { icon: "🩺", title: "General Medicine OPD", desc: "Routine check-ups, diagnostics, and treatment for general health issues." },
];

const SPEC_DETAILS = [
  { label: "Neurology",       desc: "Diagnosis and treatment for conditions like epilepsy and movement disorders." },
  { label: "Orthopedics",     desc: "Expert care for bone, joint, and spinal issues." },
  { label: "Geriatrics",      desc: "Specialised medical attention for age-related health conditions." },
  { label: "General Medicine", desc: "Routine check-ups and treatment for common ailments." },
];

const ADVANTAGES = [
  { icon: "🤝", title: "Integrated & Coordinated Care",       desc: "Our multi-specialty team collaborates seamlessly to provide a holistic view of your health, leading to more accurate diagnosis and effective treatment plans." },
  { icon: "👥", title: "Access to Multi-Specialty Experts",   desc: "Easily book consultations with our team of specialists in Neurology, Orthopedics, Geriatrics, and General Medicine, all in one convenient location." },
  { icon: "⚡", title: "Streamlined & Timely Service",        desc: "Our efficient appointment scheduling and in-house diagnostic network reduces waiting times, providing you with a quick and hassle-free healthcare experience." },
];

const PATH_STEPS = [
  { icon: "📅", title: "Book an Appointment",        desc: "Call us or use our online portal to schedule a consultation with the appropriate specialist." },
  { icon: "👨‍⚕️", title: "In-Person Consultation",    desc: "Meet with our expert doctors for a thorough examination and to discuss your health concerns in detail." },
  { icon: "📋", title: "Diagnosis & Treatment Plan", desc: "After a detailed assessment, your doctor provides a clear and actionable diagnosis, treatment or recovery plan." },
  { icon: "📞", title: "Follow-up & Ongoing Support", desc: "We provide continuous support and follow-up consultations to ensure your treatment plan is working and your health goals are met." },
];

const TESTIMONIALS = [
  [
    { text: "The care and monitoring after my surgery in Bhubaneswar were exceptional. The nurses went above and beyond, and the dedicated environment helped me recover much faster than I expected.", name: "V.S. Sahoo", role: "Post-Surgery Patient, Bhubaneswar" },
    { text: "The physical therapy team in Cuttack was brilliant. They worked with me every day to help me regain mobility, and their expert guidance made a world of difference in my recovery.", name: "A. Das", role: "Rehabilitation Patient, Cuttack" },
  ],
  [
    { text: "The neurology department caught what other hospitals had missed. The team's expertise and compassion made a genuinely stressful experience feel manageable and hopeful.", name: "P. Mohanty", role: "Neurology Patient, Berhampur" },
    { text: "Booking was effortless, the waiting time was minimal, and the orthopedic specialist was extremely thorough. I finally have a clear plan for managing my knee condition.", name: "R. Nanda", role: "Orthopedic Patient, Rourkela" },
  ],
];

const FAQS = [
  { q: "Who is eligible for your inpatient care services?",         a: "Our inpatient care services are available to all patients who require intensive monitoring, post-surgical recovery, or management of complex medical conditions. A doctor's referral or assessment is typically required for admission." },
  { q: "What is the role of rehabilitation in the recovery process?", a: "Rehabilitation plays a critical role in restoring function, strength, and independence after surgery or illness. Our dedicated physiotherapy and rehabilitation team creates personalised recovery plans for each patient." },
  { q: "How do you ensure patient safety and comfort?",             a: "Patient safety is our top priority. We maintain strict clinical protocols, round-the-clock nursing supervision, and a clean, comfortable environment. Patient feedback is actively gathered and acted upon." },
  { q: "Do you offer support for families?",                        a: "Yes, we understand that recovery is a family journey. We provide counselling support, regular updates to family members, and guidance on how to assist their loved one's recovery at home post-discharge." },
];

/* ═══════════════════════════════════════════
   HOOK
═══════════════════════════════════════════ */
function useInView(ref, threshold = 0.13) {
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

/* Generic fade-up wrapper */
function FU({ children, delay = 0, className = "", style = {} }) {
  const ref = useRef(null);
  const vis = useInView(ref);
  return (
    <div
      ref={ref}
      className={`op-fu${vis ? " op-vis" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   TESTIMONIALS CAROUSEL
═══════════════════════════════════════════ */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;
  return (
    <section className="op-sec op-testi">
      <div className="op-wrap">
        <h2 className="op-title">Stories of Safe &amp; Speedy Recovery</h2>
        <p className="op-sub">Hear from patients who have experienced the difference our inpatient and post-surgery care has made.</p>
        <div className="op-testi-wrap">
          <button className="op-arr prev" onClick={() => setIdx((idx - 1 + total) % total)}>&#8249;</button>
          <div className="op-testi-overflow">
            <div className="op-testi-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
              {TESTIMONIALS.map((slide, si) => (
                <div key={si} className="op-testi-slide">
                  {slide.map((t, ti) => (
                    <div key={ti} className="op-testi-card">
                      <div className="op-testi-q">"</div>
                      <p>{t.text}</p>
                      <div className="op-testi-author">
                        <div className="op-testi-av">{t.name.split(" ").map(w => w[0]).join("").slice(0, 2)}</div>
                        <div><h4>{t.name}</h4><span>{t.role}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button className="op-arr next" onClick={() => setIdx((idx + 1) % total)}>&#8250;</button>
          <div className="op-dots">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} className={`op-dot${i === idx ? " active" : ""}`} onClick={() => setIdx(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FAQ ACCORDION
═══════════════════════════════════════════ */
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="op-sec op-faq">
      <div className="op-wrap">
        <h2 className="op-title">Your Questions, Answered</h2>
        <p className="op-sub">We are here to provide clarity and reassurance. Here are answers to some of the most common questions about our inpatient and post-surgery care.</p>
        <div className="op-faq-list">
          {FAQS.map((f, i) => (
            <FU key={i} delay={i * 80}>
              <div className="op-faq-item">
                <button
                  className={`op-faq-btn${open === i ? " open" : ""}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {f.q}
                  <span className="op-faq-chev">{open === i ? "✕" : "+"}</span>
                </button>
                <div className={`op-faq-body${open === i ? " open" : ""}`}>{f.a}</div>
              </div>
            </FU>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export const Opd = () => {
  return (
    <>
      <style>{opdStyles}</style>
      <div className="page-wrapper">
        <SiteHeader />
        <div className="op-page lt-home-type">

        {/* ── HERO ── */}
        <section className="op-hero">
          <div className="op-hero-c c1" />
          <div className="op-hero-c c2" />
          <div className="op-wrap">
            <div className="op-hero-inner">
              <div className="op-hero-text">
                <h1>
                  Expert <span>Multi-Specialty</span><br />
                  Care, Tailored to You
                </h1>
                <p>
                  Our comprehensive outpatient (OPD) and inpatient department (IPD) offers specialised consultations and care across Neurology, Orthopedics, Geriatrics, and General Medicine for a complete healthcare experience.
                </p>
                <div className="op-hero-btns">
                  <a href="#op-consult" className="op-btn op-btn-teal">▶ Register Now</a>
                  <a href="#op-path"    className="op-btn op-btn-outline">Explore</a>
                </div>
              </div>
              <div className="op-hero-img">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&auto=format&fit=crop&q=80"
                  alt="Multi-specialty OPD"
                  onError={e => { e.target.src = "https://via.placeholder.com/420x340/e0f7f5/00B8A9?text=OPD+Care"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERT CONSULTATIONS ── */}
        <section className="op-sec op-expert" id="op-consult">
          <div className="op-wrap">
            <div className="op-expert-inner">

              {/* LEFT */}
              <FU delay={0}>
                <h2>Expert Consultations Across Multiple Specialties</h2>
                <p>Our comprehensive outpatient department provides specialised care for a wide range of conditions under one roof. We offer expert consultations, diagnostics, and treatment plans in Neurology, Orthopedics, Geriatrics, and General Medicine.</p>
                <div className="op-spec-list">
                  {SPEC_DETAILS.map((s, i) => (
                    <div key={i} className="op-spec-item">
                      <div className="op-spec-dot" />
                      <div><p><strong>{s.label}:</strong> {s.desc}</p></div>
                    </div>
                  ))}
                </div>
              </FU>

              {/* RIGHT — 2×2 specialty cards */}
              <div className="op-spec-grid">
                {SPECIALTIES.map((s, i) => {
                  const ref = useRef(null);
                  const vis = useInView(ref);
                  return (
                    <div
                      key={i}
                      ref={ref}
                      className={`op-spec-card${vis ? " op-vis" : ""}`}
                      style={{ transitionDelay: `${i * 110}ms` }}
                    >
                      <span className="op-spec-icon">{s.icon}</span>
                      <h4>{s.title}</h4>
                      <p>{s.desc}</p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ── ADVANTAGES ── */}
        <section className="op-sec op-adv">
          <div className="op-wrap">
            <h2 className="op-title">The Advantages of Our Outpatient Services</h2>
            <p className="op-sub">We provide a comprehensive, multi-specialty environment for care, ensuring expert diagnostics and treatment for every patient.</p>
            <div className="op-adv-grid">
              {ADVANTAGES.map((a, i) => {
                const ref = useRef(null);
                const vis = useInView(ref);
                return (
                  <div
                    key={i}
                    ref={ref}
                    className={`op-adv-card${vis ? " op-vis" : ""}`}
                    style={{ transitionDelay: `${i * 130}ms` }}
                  >
                    <div className="op-adv-icon">{a.icon}</div>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── YOUR PATH ── */}
        <section className="op-sec op-path" id="op-path">
          <div className="op-wrap">
            <h2 className="op-title">Your Path to Expert Outpatient Care</h2>
            <p className="op-sub">We have designed a clear and supportive process to ensure a smooth and efficient experience for our patients.</p>
            <div className="op-path-grid">
              {PATH_STEPS.map((s, i) => {
                const ref = useRef(null);
                const vis = useInView(ref);
                return (
                  <div
                    key={i}
                    ref={ref}
                    className={`op-path-step${vis ? " op-vis" : ""}`}
                    style={{ transitionDelay: `${i * 130}ms` }}
                  >
                    <div className="op-path-num">{s.icon}</div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <Testimonials />

        {/* ── FAQ ── */}
        <FAQ />

        {/* ── BOTTOM CTA ── */}
        <section className="op-cta">
          <div className="op-wrap">
            <h2>Ready for <span>Specialized Care</span> &amp; a Full Recovery?</h2>
            <p>Our expert medical team is here to provide the compassionate and specialised inpatient and post-surgery care you need. Contact us today to discuss your treatment options.</p>
            <a href="#op-consult" className="op-btn op-btn-green">▶ Request a Consultation</a>
          </div>
        </section>

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