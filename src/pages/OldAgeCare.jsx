import React from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { FloatingSupport } from "../components/FloatingSupport";
import { NewsletterSection } from "../components/NewsletterSection";

/* ─── inline styles (no extra CSS file needed) ─── */
const S = {
  teal: "#00b5c8",
  tealDark: "#0097aa",
  tealLight: "#e6f9fb",
  blue: "#1a3c6e",
  gray: "#666",
  lightGray: "#f4f8fb",
};

/* ── reusable icon circle ── */
const IconCircle = ({ children, size = 56, bg = S.tealLight }) => (
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

/* ── SVG icons (teal) ── */
const Icon = {
  heart: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <path d="M12 21s-8-5.1-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.9-8 11-8 11z" fill={S.teal} />
    </svg>
  ),
  hand: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <path d="M18 11V9a2 2 0 0 0-4 0v2H8V7a2 2 0 0 0-4 0v9a6 6 0 0 0 12 0v-4a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1z" fill={S.teal} />
    </svg>
  ),
  people: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <circle cx="9" cy="7" r="3" fill={S.teal} />
      <circle cx="17" cy="9" r="2.5" fill={S.teal} opacity=".7" />
      <path d="M2 20c0-4 3-6 7-6s7 2 7 6" fill={S.teal} />
      <path d="M16 14c2.5 0 5 1.5 5 5" stroke={S.teal} strokeWidth="1.5" fill="none" />
    </svg>
  ),
  pill: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="10" width="18" height="4" rx="2" fill={S.teal} />
      <circle cx="8" cy="12" r="4" fill={S.teal} />
      <circle cx="16" cy="12" r="4" fill={S.tealDark} />
    </svg>
  ),
  walk: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="4" r="2" fill={S.teal} />
      <path d="M8 22l2-6 2 3 3-8 2 5" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M10 10l2-4 3 2" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  ),
  clock: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="2" />
      <path d="M12 7v5l3 3" stroke={S.teal} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  star: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" fill={S.teal} />
    </svg>
  ),
  shield: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <path d="M12 3l8 3.5v5C20 16 16.5 20 12 21 7.5 20 4 16 4 11.5v-5z" fill={S.teal} />
    </svg>
  ),
  phone: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill={S.teal} />
    </svg>
  ),
  home: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <path d="M3 12l9-9 9 9M5 10v9a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-9" stroke={S.teal} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  check: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill={S.teal} />
      <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

/* ─────────────────────────────────────────────
   SECTION 1 — Hero
───────────────────────────────────────────── */
const HeroSection = () => (
  <section
    style={{
      padding: "80px 0 60px",
      background: "linear-gradient(135deg, #f0fbfd 0%, #ffffff 60%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* decorative blobs */}
    {[
      { top: -40, right: 120, size: 180, opacity: 0.18 },
      { bottom: -30, left: 60, size: 120, opacity: 0.12 },
    ].map((b, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          top: b.top,
          bottom: b.bottom,
          left: b.left,
          right: b.right,
          width: b.size,
          height: b.size,
          borderRadius: "50%",
          background: S.teal,
          opacity: b.opacity,
          pointerEvents: "none",
        }}
      />
    ))}

    <div className="container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* left */}
        <div>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 700,
              color: S.blue,
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Compassionate Care for
            <br />
            <span style={{ color: S.teal }}>a New Chapter</span>
          </h1>
          <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Our dedicated and certified care attendants provide personalized support, companionship,
            and a safe, comfortable environment for your loved ones, right at home.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                background: S.teal,
                color: "#fff",
                padding: "12px 28px",
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: 15,
              }}
            >
              Book a Consultation
            </a>
            <a
              href="#"
              style={{
                border: `2px solid ${S.teal}`,
                color: S.teal,
                padding: "12px 28px",
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: 15,
              }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* right — image placeholder */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,181,200,0.2)",
              aspectRatio: "4/3",
              background: "linear-gradient(135deg, #c8f0f5 0%, #e0f7fa 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/images/blog/blog-details-img-box-img-2.jpg"
              alt="Elderly care"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            {/* fallback icon */}
            <div style={{ position: "absolute", opacity: 0.3, fontSize: 80 }}>🏥</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION 2 — Compassionate Support + Services Grid
───────────────────────────────────────────── */
const ServicesSection = () => {
  const services = [
    { icon: Icon.hand, title: "Daily Living Assistance", desc: "Help with personal hygiene, dressing, and other essential daily routines." },
    { icon: Icon.people, title: "Companionship & Support", desc: "Engaging conversation, activities, and a friendly presence to prevent loneliness." },
    { icon: Icon.pill, title: "Medication Reminders", desc: "Gentle reminders to ensure medications are taken on time and as prescribed." },
    { icon: Icon.walk, title: "Mobility & Fall Prevention", desc: "Assistance with safe movement and exercises to improve balance and prevent falls." },
  ];

  const features = [
    { label: "Holistic Well-being", desc: "We provide care that supports physical, emotional, and social health." },
    { label: "Trained Attendants", desc: "Our team is trained to handle a wide range of daily care needs with professionalism and empathy." },
    { label: "At-Home Comfort", desc: "Your loved one receives care in the familiar and comfortable environment of their home." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* left */}
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
              Compassionate Support for Everyday Living
            </h2>
            <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28 }}>
              Our certified care attendants provide dignified, compassionate support to help your loved ones live comfortably, safely, and with a sense of independence in their own homes.
            </p>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <div style={{ color: S.teal, marginTop: 2, flexShrink: 0 }}>✔</div>
                <div>
                  <strong style={{ color: S.blue }}>{f.label}:</strong>{" "}
                  <span style={{ color: S.gray }}>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* right — 2×2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            {services.map((s, i) => (
              <div
                key={i}
                style={{
                  background: S.lightGray,
                  borderRadius: 12,
                  padding: "28px 20px",
                  textAlign: "center",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 30px rgba(0,181,200,0.18)`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <IconCircle>{s.icon}</IconCircle>
                <h4 style={{ color: S.blue, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{s.title}</h4>
                <p style={{ color: S.gray, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 3 — The Comfort of Home
───────────────────────────────────────────── */
const ComfortSection = () => {
  const cards = [
    { icon: Icon.clock, title: "Round-the-Clock Support", desc: "Flexible and reliable assistance tailored to your schedule, providing support day or night as needed." },
    { icon: Icon.star, title: "Truly Personalized Care", desc: "Dedicated one-on-one attention ensures all needs, from daily routines to emotional support, are met with dignity and compassion." },
    { icon: Icon.shield, title: "Peace of Mind for Families", desc: "Gain comfort knowing your loved one is in safe, professional hands, receiving top-tier, compassionate care in their familiar surroundings." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            The Comfort of Home, The Assurance of Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Our at-home care attendants provide a familiar, safe, and supportive environment, promoting well-being and happiness for your elderly family members.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "36px 28px",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 12px 36px rgba(0,181,200,0.18)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
              }}
            >
              <IconCircle>{c.icon}</IconCircle>
              <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{c.title}</h3>
              <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 4 — A Simple Path to Quality Care
───────────────────────────────────────────── */
const ProcessSection = () => {
  const steps = [
    { icon: Icon.phone, title: "Initial Consultation", desc: "A warm, friendly call to understand your needs and discuss a personalised care plan." },
    { icon: Icon.home, title: "In-Home Assessment", desc: "Our team conducts a thorough assessment to evaluate your loved one's needs and living environment." },
    { icon: Icon.people, title: "Custom Care Matching", desc: "We carefully match you with the ideal care attendant based on skills, personality, and your family's needs." },
    { icon: Icon.heart, title: "Consistent, Compassionate Care", desc: "Your chosen attendant begins providing scheduled, loving care and support with regular follow-ups." },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            A Simple Path to Quality Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            We make it easy to arrange the perfect care attendant for your family with our straightforward process.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
          {/* connecting line */}
          <div
            style={{
              position: "absolute",
              top: 28,
              left: "12%",
              right: "12%",
              height: 2,
              background: `linear-gradient(to right, ${S.teal}, ${S.tealDark})`,
              opacity: 0.25,
              zIndex: 0,
            }}
          />
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                position: "relative",
                zIndex: 1,
                padding: "0 10px",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: S.tealLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  border: `2px solid ${S.teal}`,
                }}
              >
                {s.icon}
              </div>
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: S.teal,
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "-10px auto 16px",
                }}
              >
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

/* ─────────────────────────────────────────────
   SECTION 5 — Testimonials / Why Choose Us (slider area)
───────────────────────────────────────────── */
const TestimonialsSection = () => {
  const [active, setActive] = React.useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Daughter of a care recipient",
      text: "The care attendant assigned to my mother has been absolutely wonderful. She treats her with the utmost respect and patience. We finally have peace of mind knowing she's in safe hands.",
    },
    {
      name: "Rajesh Nair",
      role: "Son of a care recipient",
      text: "Finding quality elderly care felt overwhelming until we found this service. The in-home assessment was thorough and our attendant is perfectly matched to my father's personality and needs.",
    },
    {
      name: "Anita Patel",
      role: "Care recipient",
      text: "I was worried about losing my independence, but my care attendant helps me stay active and engaged. She's become like family to me.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0097aa 0%, #00b5c8 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative bg circle */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          pointerEvents: "none",
        }}
      />
      <div className="container" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: "#fff", marginBottom: 14 }}>
          What Families Say About Us
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 48, maxWidth: 480, margin: "0 auto 48px" }}>
          Real stories from families whose lives we've touched.
        </p>

        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "40px 48px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <div style={{ fontSize: 48, color: S.teal, lineHeight: 1, marginBottom: 16 }}>"</div>
            <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
              {testimonials[active].text}
            </p>
            <div>
              <strong style={{ color: S.blue }}>{testimonials[active].name}</strong>
              <div style={{ color: S.teal, fontSize: 13 }}>{testimonials[active].role}</div>
            </div>
          </div>

          {/* nav arrows */}
          {[-1, 1].map((dir, i) => (
            <button
              key={i}
              onClick={() =>
                setActive((prev) => (prev + dir + testimonials.length) % testimonials.length)
              }
              style={{
                position: "absolute",
                top: "50%",
                [dir === -1 ? "left" : "right"]: -56,
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "#fff",
                width: 42,
                height: 42,
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {dir === -1 ? "‹" : "›"}
            </button>
          ))}
        </div>

        {/* dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: "none",
                background: i === active ? "#fff" : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 6 — Why Choose Us / Stats Banner
───────────────────────────────────────────── */
const StatsBanner = () => {
  const stats = [
    { value: "500+", label: "Families Served" },
    { value: "24/7", label: "Round-the-Clock Support" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "100%", label: "Certified Attendants" },
  ];

  return (
    <section style={{ padding: "52px 0", background: S.blue }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 36, fontWeight: 800, color: S.teal }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 7 — CTA
───────────────────────────────────────────── */
const CTASection = () => (
  <section style={{ padding: "72px 0", background: S.lightGray, textAlign: "center" }}>
    <div className="container">
      <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
        Ready to Provide the Best Care for Your Loved One?
      </h2>
      <p style={{ color: S.gray, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.8 }}>
        Get in touch today and our care specialists will help you find the right support for your family's unique needs.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href="#"
          style={{
            background: S.teal,
            color: "#fff",
            padding: "14px 36px",
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "none",
          }}
        >
          Book a Free Consultation
        </a>
        <a
          href="tel:+918080000000"
          style={{
            border: `2px solid ${S.teal}`,
            color: S.teal,
            padding: "14px 36px",
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "none",
          }}
        >
          Call Us Now
        </a>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   ROOT EXPORT
───────────────────────────────────────────── */
export const OldAgeCare = () => {
  return (
    <>
      <FloatingSupport />
      <div className="page-wrapper">
        <SiteHeader />

        <HeroSection />
        <ServicesSection />
        <ComfortSection />
        <ProcessSection />
        <TestimonialsSection />
        <StatsBanner />
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
