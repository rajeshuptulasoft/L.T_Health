import React, { useState, useEffect, useRef } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSection } from "../components/NewsletterSection";
import { subpagesHomeAlignCss } from "../styles/subpagesHomeAlign";

/* ─── Inline styles (no extra CSS file needed) ─── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Playfair+Display:wght@700;800&display=swap');

  .hp-root * { box-sizing: border-box; }

  /* ── Hero ── */
  .hp-hero {
    padding: 80px 0 60px;
    background: #fff;
    overflow: hidden;
  }
  .hp-hero .hp-container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 48px;
  }
  .hp-hero-text { flex: 1 1 50%; }
  .hp-hero-text h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 4vw, 46px);
    line-height: 1.2;
    color: #222;
    margin: 0 0 20px;
  }
  .hp-hero-text h1 span { color: #00b4d8; }
  .hp-hero-text p {
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    color: #666;
    line-height: 1.7;
    max-width: 440px;
  }
  .hp-hero-img-wrap {
    flex: 1 1 45%;
    position: relative;
  }
  .hp-hero-img-wrap img {
    width: 100%;
    border-radius: 16px;
    display: block;
    object-fit: cover;
    animation: hp-float 4s ease-in-out infinite;
    box-shadow: 0 20px 60px rgba(0,180,216,0.18);
  }
  .hp-blob {
    position: absolute;
    border-radius: 50%;
    background: rgba(0,180,216,0.12);
    animation: hp-pulse 3s ease-in-out infinite;
    pointer-events: none;
  }
  .hp-blob-1 { width: 90px; height: 90px; top: -20px; left: -30px; animation-delay: 0s; }
  .hp-blob-2 { width: 55px; height: 55px; bottom: 20px; right: -15px; animation-delay: 1s; }
  .hp-blob-3 { width: 35px; height: 35px; bottom: -10px; left: 40px; animation-delay: 2s; }

  @keyframes hp-float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-12px); }
  }
  @keyframes hp-pulse {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50%       { transform: scale(1.15); opacity: 1; }
  }

  /* ── Stats row ── */
  .hp-stats {
    background: #f7fbfe;
    padding: 56px 0;
  }
  .hp-stats .hp-container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    text-align: center;
  }
  .hp-stat-card {
    background: #fff;
    border-radius: 14px;
    padding: 30px 20px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .hp-stat-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(0,180,216,0.15);
  }
  .hp-stat-icon {
    width: 54px; height: 54px;
    border-radius: 50%;
    background: linear-gradient(135deg,#00b4d8,#0077b6);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 14px;
    font-size: 22px;
  }
  .hp-stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 800;
    color: #0077b6;
    line-height: 1;
  }
  .hp-stat-label {
    font-family: 'Nunito', sans-serif;
    font-size: 13px;
    color: #888;
    margin-top: 6px;
  }

  /* ── Services grid ── */
  .hp-services {
    padding: 72px 0;
    background: #fff;
  }
  .hp-services .hp-container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .hp-section-header {
    text-align: center;
    margin-bottom: 48px;
  }
  .hp-tag {
    display: inline-block;
    background: #e8f7fb;
    color: #00b4d8;
    font-family: 'Nunito', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 4px 14px;
    border-radius: 20px;
    margin-bottom: 12px;
  }
  .hp-section-header h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 3vw, 36px);
    color: #1a2e44;
    margin: 0;
  }
  .hp-section-header h2 span { color: #00b4d8; }
  .hp-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .hp-service-card {
    border: 1px solid #e8f0f5;
    border-radius: 16px;
    padding: 28px 24px;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  .hp-service-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg,#00b4d8,#0077b6);
    transform: scaleX(0);
    transition: transform 0.3s;
    transform-origin: left;
  }
  .hp-service-card:hover::before { transform: scaleX(1); }
  .hp-service-card:hover {
    box-shadow: 0 8px 32px rgba(0,180,216,0.12);
    transform: translateY(-4px);
  }
  .hp-service-card .s-icon { font-size: 28px; margin-bottom: 14px; }
  .hp-service-card h3 {
    font-family: 'Nunito', sans-serif;
    font-size: 16px; font-weight: 800;
    color: #1a2e44; margin: 0 0 8px;
  }
  .hp-service-card p {
    font-family: 'Nunito', sans-serif;
    font-size: 13px; color: #888; line-height: 1.6; margin: 0;
  }

  /* ── Testimonials ── */
  .hp-testimonials {
    background: #f7fbfe;
    padding: 72px 0;
    overflow: hidden;
  }
  .hp-testimonials .hp-container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
  }
  .hp-testi-track-wrap { overflow: hidden; border-radius: 16px; }
  .hp-testi-track {
    display: flex;
    transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
  }
  .hp-testi-card {
    flex: 0 0 100%;
    background: #fff;
    border-radius: 16px;
    padding: 40px 40px 36px;
    box-shadow: 0 4px 32px rgba(0,0,0,0.07);
    display: flex;
    gap: 32px;
    align-items: flex-start;
  }
  .hp-testi-avatar-placeholder {
    width: 72px; height: 72px; border-radius: 50%;
    background: linear-gradient(135deg,#00b4d8,#0077b6);
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: 26px; font-family: 'Playfair Display', serif;
    border: 3px solid #00b4d8; flex-shrink: 0;
  }
  .hp-testi-body { flex: 1; }
  .hp-testi-quote {
    font-size: 40px; color: #00b4d8; line-height: 1;
    font-family: 'Playfair Display', serif; margin-bottom: 8px;
  }
  .hp-testi-text {
    font-family: 'Nunito', sans-serif;
    font-size: 15px; color: #555; line-height: 1.75;
    margin: 0 0 18px; font-style: italic;
  }
  .hp-testi-name {
    font-family: 'Nunito', sans-serif;
    font-size: 15px; font-weight: 800; color: #1a2e44;
  }
  .hp-testi-role {
    font-family: 'Nunito', sans-serif;
    font-size: 12px; color: #00b4d8; margin-top: 2px;
  }
  .hp-testi-stars { color: #f4a400; font-size: 15px; margin-bottom: 4px; }
  .hp-arrow {
    position: absolute;
    top: 50%; transform: translateY(-50%);
    background: #fff; border: none; border-radius: 50%;
    width: 44px; height: 44px;
    box-shadow: 0 4px 18px rgba(0,0,0,0.12);
    cursor: pointer; font-size: 18px;
    display: flex; align-items: center; justify-content: center;
    color: #0077b6;
    transition: background 0.2s, color 0.2s;
    z-index: 10;
  }
  .hp-arrow:hover { background: #00b4d8; color: #fff; }
  .hp-arrow-left  { left: -22px; }
  .hp-arrow-right { right: -22px; }
  .hp-dots { display: flex; justify-content: center; gap: 8px; margin-top: 24px; }
  .hp-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #cde; border: none; cursor: pointer;
    transition: background 0.3s, width 0.3s;
    padding: 0;
  }
  .hp-dot.hp-dot-active { background: #00b4d8; width: 22px; border-radius: 4px; }

  /* ── Why Partner ── */
  .hp-why { background: #fff; padding: 72px 0; }
  .hp-why .hp-container {
    max-width: 1140px; margin: 0 auto; padding: 0 20px;
    display: flex; gap: 56px; align-items: center;
  }
  .hp-why-img { flex: 1 1 45%; position: relative; }
  .hp-why-img img {
    width: 100%; border-radius: 16px;
    box-shadow: 0 16px 48px rgba(0,0,0,0.1);
    animation: hp-float 5s ease-in-out infinite;
  }
  .hp-why-badge {
    position: absolute; bottom: -16px; right: -16px;
    background: linear-gradient(135deg,#00b4d8,#0077b6);
    color: #fff; padding: 16px 22px; border-radius: 14px;
    font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 700;
    box-shadow: 0 8px 24px rgba(0,119,182,0.3);
  }
  .hp-why-badge span {
    font-size: 26px; font-family: 'Playfair Display', serif; display: block;
  }
  .hp-why-text { flex: 1 1 50%; }
  .hp-why-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px,3vw,36px);
    color: #1a2e44; margin: 0 0 20px;
  }
  .hp-why-text h2 span { color: #00b4d8; }
  .hp-why-list { list-style: none; padding: 0; margin: 0 0 28px; }
  .hp-why-list li {
    display: flex; align-items: flex-start; gap: 12px;
    font-family: 'Nunito', sans-serif; font-size: 14px; color: #555;
    padding: 10px 0; border-bottom: 1px solid #f0f4f8;
  }
  .hp-why-list li:last-child { border-bottom: none; }
  .hp-check {
    width: 22px; height: 22px; border-radius: 50%;
    background: linear-gradient(135deg,#00b4d8,#0077b6);
    color: #fff; font-size: 12px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-top: 1px;
  }
  .hp-cta-btn {
    display: inline-block;
    background: linear-gradient(135deg,#00b4d8,#0077b6);
    color: #fff; padding: 13px 32px; border-radius: 30px;
    font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 700;
    text-decoration: none; border: none; cursor: pointer;
    box-shadow: 0 6px 20px rgba(0,119,182,0.25);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .hp-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0,119,182,0.35);
  }

  /* ── Fade in on scroll ── */
  .hp-fade { opacity: 0; transform: translateY(30px); transition: opacity 0.7s, transform 0.7s; }
  .hp-fade.hp-visible { opacity: 1; transform: translateY(0); }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .hp-hero .hp-container,
    .hp-why .hp-container { flex-direction: column; }
    .hp-stats .hp-container { grid-template-columns: repeat(2,1fr); }
    .hp-services-grid { grid-template-columns: repeat(2,1fr); }
    .hp-testi-card { flex-direction: column; }
    .hp-arrow-left  { left: 4px; }
    .hp-arrow-right { right: 4px; }
  }
  @media (max-width: 600px) {
    .hp-stats .hp-container,
    .hp-services-grid { grid-template-columns: 1fr; }
    .hp-why-badge { position: static; margin-top: 16px; display: inline-block; }
  }
`;

const hospitalStyles = `${styles}\n${subpagesHomeAlignCss}`;

/* ── Testimonial data ── */
const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Neurologist, Apollo Hospitals",
    text: "Partnering with this healthcare network has transformed our patient care capabilities. The seamless referral system and collaborative approach to neurological treatments have significantly improved outcomes for our patients.",
    stars: 5,
    initial: "P",
  },
  {
    name: "Mr. Rajesh Mohanty",
    role: "CEO, Sunrise Diagnostics",
    text: "The integration was smooth and the support team is outstanding. Our diagnostic partnership has allowed us to serve three times more patients in Bhubaneswar while maintaining the highest quality standards.",
    stars: 5,
    initial: "R",
  },
  {
    name: "Dr. Anita Patel",
    role: "Director, NeuroWell Clinic",
    text: "What sets this network apart is their genuine commitment to patient-first care. The shared resources and training programs have elevated our entire clinical team's expertise enormously.",
    stars: 5,
    initial: "A",
  },
];

/* ── FadeSection ── */
function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("hp-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="hp-fade" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── AnimatedCounter ── */
function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 60));
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) { setCount(target); clearInterval(timer); }
            else setCount(cur);
          }, 25);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export const Hospital = () => {
  const [slide, setSlide] = useState(0);
  const total = testimonials.length;

  const prev = () => setSlide((s) => (s - 1 + total) % total);
  const next = () => setSlide((s) => (s + 1) % total);

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % total);
    }, 5500);
    return () => clearInterval(t);
  }, [total]);

  return (
    <>
      <style>{hospitalStyles}</style>

      <div className="page-wrapper">
        <SiteHeader />
        <div className="hp-root lt-home-type">

        {/* ══ HERO ══ */}
        <section className="hp-hero">
          <div className="hp-container">
            <div className="hp-hero-text">
              <FadeSection delay={0}>
                <h1>
                  Specialized <span>Neurological Care</span>,<br />
                  In a Healing Environment
                </h1>
                <p>
                  Our dedicated indoor patient department provides advanced diagnostics
                  and expert treatment for a wide range of neurological conditions,
                  ensuring compassionate and professional care for every patient.
                </p>
              </FadeSection>
            </div>

            <FadeSection delay={150}>
              <div className="hp-hero-img-wrap">
                <div className="hp-blob hp-blob-1" />
                <div className="hp-blob hp-blob-2" />
                <div className="hp-blob hp-blob-3" />
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80"
                  alt="Doctor consulting patient"
                />
              </div>
            </FadeSection>
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section className="hp-stats">
          <div className="hp-container">
            {[
              { icon: "🏥", value: 120, suffix: "+", label: "Partner Hospitals" },
              { icon: "👨‍⚕️", value: 450, suffix: "+", label: "Expert Doctors" },
              { icon: "😊", value: 15000, suffix: "+", label: "Patients Served" },
              { icon: "🏆", value: 18, suffix: " Yrs", label: "Years of Excellence" },
            ].map((s, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div className="hp-stat-card">
                  <div className="hp-stat-icon">{s.icon}</div>
                  <div className="hp-stat-number">
                    <AnimatedCounter target={s.value} />{s.suffix}
                  </div>
                  <div className="hp-stat-label">{s.label}</div>
                </div>
              </FadeSection>
            ))}
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section className="hp-services">
          <div className="hp-container">
            <FadeSection>
              <div className="hp-section-header">
                <span className="hp-tag">Our Specialties</span>
                <h2>Comprehensive <span>Neurological</span> Services</h2>
              </div>
            </FadeSection>
            <div className="hp-services-grid">
              {[
                { icon: "🧠", title: "Home Nursing", desc: "Professional nursing care delivered to your doorstep with clinical precision and warmth." },
                { icon: "📋", title: "Patient Nexus", desc: "A unified patient coordination platform for seamless hospital-partner communication." },
                { icon: "💆", title: "Physiotherapy", desc: "Evidence-based rehabilitation programs tailored for neurological recovery journeys." },
                { icon: "🚨", title: "Emergency Critical Care", desc: "24/7 rapid-response teams with advanced life support infrastructure on standby." },
                { icon: "🧪", title: "Lab Test / Blood Tests", desc: "In-house and partner lab integrations for fast, accurate diagnostic reporting." },
                { icon: "💻", title: "Nexus OPD Consultation", desc: "Virtual and in-person OPD sessions connected across our partner network." },
              ].map((svc, i) => (
                <FadeSection key={i} delay={i * 60}>
                  <div className="hp-service-card">
                    <div className="s-icon">{svc.icon}</div>
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section className="hp-testimonials">
          <div className="hp-container">
            <FadeSection>
              <div className="hp-section-header">
                <span className="hp-tag">Testimonials</span>
                <h2>What Our <span>Partners</span> Say</h2>
              </div>
            </FadeSection>

            <div style={{ position: "relative" }}>
              <button className="hp-arrow hp-arrow-left" onClick={prev} aria-label="Previous">&#8249;</button>

              <div className="hp-testi-track-wrap">
                <div
                  className="hp-testi-track"
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                  {testimonials.map((t, i) => (
                    <div className="hp-testi-card" key={i}>
                      <div className="hp-testi-avatar-placeholder">{t.initial}</div>
                      <div className="hp-testi-body">
                        <div className="hp-testi-stars">{"★".repeat(t.stars)}</div>
                        <div className="hp-testi-quote">"</div>
                        <p className="hp-testi-text">{t.text}</p>
                        <div className="hp-testi-name">{t.name}</div>
                        <div className="hp-testi-role">{t.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="hp-arrow hp-arrow-right" onClick={next} aria-label="Next">&#8250;</button>
            </div>

            <div className="hp-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`hp-dot${i === slide ? " hp-dot-active" : ""}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY PARTNER ══ */}
        <section className="hp-why">
          <div className="hp-container">
            <FadeSection delay={0}>
              <div className="hp-why-img">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80"
                  alt="Healthcare team collaborating"
                />
                <div className="hp-why-badge">
                  <span>100%</span> Patient Satisfaction
                </div>
              </div>
            </FadeSection>

            <FadeSection delay={150}>
              <div className="hp-why-text">
                <span className="hp-tag">Why Partner With Us</span>
                <h2>Building a Stronger <span>Healthcare</span> Ecosystem</h2>
                <ul className="hp-why-list">
                  {[
                    "Advanced diagnostic and treatment infrastructure available 24/7",
                    "Dedicated partner liaison team for seamless coordination",
                    "Shared EMR & patient management systems for real-time updates",
                    "Ongoing training programs and CME sessions for partner staff",
                    "Transparent revenue-sharing and referral models",
                    "Accredited by leading national & international health bodies",
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="hp-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="hp-cta-btn">Become a Partner</button>
              </div>
            </FadeSection>
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

export default Hospital;
