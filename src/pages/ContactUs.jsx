// import React from 'react'
// import { SiteFooter } from '../components/SiteFooter';
// import { NewsletterSection } from '../components/NewsletterSection';
// import { SiteHeader } from '../components/SiteHeader';

// export const ContactUs = () => {
//   return (
//     <>
//       <div className="page-wrapper">
//         <SiteHeader />
//         <section className="section" style={{ padding: "80px 0" }}>
//           <div className="container">
//             <h1>Contact Us</h1>
//             <p>This page is under development.</p>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };
import React, { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSection } from "../components/NewsletterSection";

const S = {
  teal: "#00b5c8",
  tealDark: "#0097aa",
  tealLight: "#e6f9fb",
  blue: "#1a3c6e",
  gray: "#666",
  lightGray: "#f4f8fb",
  white: "#ffffff",
};

export const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", mobile: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="page-wrapper">
        <SiteHeader />

        {/* ── Hero Banner ── */}
        <section
          style={{
            background: `linear-gradient(135deg, ${S.blue} 0%, #0d2a52 100%)`,
            padding: "80px 0 60px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1400&q=60') center/cover no-repeat", opacity: 0.18 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, color: "#fff", marginBottom: 14, letterSpacing: "-0.5px" }}>
              Contact
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15 }}>
              Home &rsaquo; Contact
            </p>
          </div>
        </section>

        {/* ── Contact Cards + Info ── */}
        <section style={{ padding: "60px 0", background: "#fff" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 28, alignItems: "start" }}>

              {/* Left column */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Still have questions */}
                <div style={{ background: S.lightGray, borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: S.blue, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill="#fff" />
                    </svg>
                  </div>
                  <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Still have questions?</h3>
                  <p style={{ color: S.gray, fontSize: 13, marginBottom: 16 }}>Initial Examination Your dentist</p>
                  <div style={{ display: "flex", gap: 0, border: `1px solid #dde6ed`, borderRadius: 8, overflow: "hidden" }}>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      style={{ flex: 1, border: "none", padding: "10px 14px", fontSize: 14, outline: "none", background: "#fff" }}
                    />
                    <button style={{ background: S.teal, border: "none", padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
                    </button>
                  </div>
                </div>

                {/* Live Contact */}
                <div style={{ background: S.lightGray, borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: S.blue, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#fff" opacity=".9" />
                    </svg>
                  </div>
                  <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Live Contact</h3>
                  <p style={{ color: S.gray, fontSize: 13, marginBottom: 16 }}>Initial Examination Your dentist</p>
                  <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: S.blue, color: "#fff", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
                    Start Contact
                  </a>
                </div>

                {/* Get Social */}
                <div style={{ background: S.lightGray, borderRadius: 16, padding: "24px", textAlign: "center" }}>
                  <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Get Social</h3>
                  <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                    {[
                      { label: "Twitter/X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                      { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                      { label: "Pinterest", path: "M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.564 0-2.387-1.715-4.057-4.163-4.057-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.774.741 2.276a.3.3 0 0 1 .069.286c-.076.312-.244.995-.277 1.134-.044.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" },
                      { label: "Instagram", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                    ].map((n, i) => (
                      <a key={i} href="#" style={{ width: 38, height: 38, borderRadius: 8, background: S.blue, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <path d={n.path} fill="#fff" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column — Contact Info */}
              <div style={{ background: S.lightGray, borderRadius: 16, padding: "32px" }}>
                <h2 style={{ color: S.blue, fontWeight: 700, fontSize: 20, marginBottom: 24 }}>Contact Info :</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                  {[
                    {
                      icon: <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill={S.blue} />,
                      label: "Contact Us",
                      value: "+91 80800 00000",
                    },
                    {
                      icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={S.blue} strokeWidth="2" fill="none" />,
                      label: "Email Us",
                      value: "info@lwayhealthcare.com",
                    },
                    {
                      icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke={S.blue} strokeWidth="2" fill="none" /><circle cx="12" cy="10" r="3" stroke={S.blue} strokeWidth="2" fill="none" /></>,
                      label: "Our Office Location",
                      value: "L1 Way To Healthcare, Bhubaneswar",
                    },
                    {
                      icon: <><circle cx="12" cy="12" r="9" stroke={S.blue} strokeWidth="2" fill="none" /><path d="M12 7v5l3 3" stroke={S.blue} strokeWidth="2" strokeLinecap="round" /></>,
                      label: "Office Hours",
                      value: "Mon – Sat: 10:00 am to 5:00 pm",
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "20px", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                      <div style={{ width: 46, height: 46, borderRadius: 10, background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">{item.icon}</svg>
                      </div>
                      <div style={{ color: S.gray, fontSize: 12, marginBottom: 4 }}>{item.label}</div>
                      <div style={{ color: S.blue, fontWeight: 600, fontSize: 13 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: "center" }}>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, background: S.blue, color: "#fff", padding: "12px 28px", borderRadius: 30, fontWeight: 600, fontSize: 14, textDecoration: "none" }}
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
                    View On Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Get A Free Quote Form ── */}
        <section style={{ padding: "60px 0", background: S.lightGray }}>
          <div className="container">
            <div style={{ background: "#fff", borderRadius: 20, padding: "52px 48px", boxShadow: "0 4px 30px rgba(0,0,0,0.06)", maxWidth: 780, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: S.teal, fontSize: 13, fontWeight: 600, marginBottom: 10 }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill={S.teal} /></svg>
                  CARE CALL
                </div>
                <div style={{ width: 40, height: 2, background: S.teal, margin: "0 auto 14px" }} />
                <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue }}>
                  Get A Free <span style={{ color: S.teal }}>Quote</span>
                </h2>
              </div>

              {submitted && (
                <div style={{ background: "#e6faf5", border: "1px solid #00c896", borderRadius: 8, padding: "14px 20px", marginBottom: 24, color: "#007a5e", fontWeight: 600, textAlign: "center" }}>
                  ✓ Your message has been sent! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[
                    { name: "name", placeholder: "Your name", type: "text" },
                    { name: "email", placeholder: "Your Email", type: "email" },
                    { name: "mobile", placeholder: "Mobile", type: "tel" },
                    { name: "subject", placeholder: "Subject", type: "text" },
                  ].map((f) => (
                    <input
                      key={f.name}
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      value={form[f.name]}
                      onChange={handleChange}
                      style={{ border: "1px solid #dde6ed", borderRadius: 8, padding: "13px 16px", fontSize: 14, outline: "none", background: S.lightGray, color: S.blue, transition: "border 0.2s" }}
                      onFocus={(e) => (e.target.style.border = `1px solid ${S.teal}`)}
                      onBlur={(e) => (e.target.style.border = "1px solid #dde6ed")}
                    />
                  ))}
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  style={{ width: "100%", border: "1px solid #dde6ed", borderRadius: 8, padding: "13px 16px", fontSize: 14, outline: "none", background: S.lightGray, color: S.blue, resize: "vertical", marginBottom: 28, boxSizing: "border-box", transition: "border 0.2s" }}
                  onFocus={(e) => (e.target.style.border = `1px solid ${S.teal}`)}
                  onBlur={(e) => (e.target.style.border = "1px solid #dde6ed")}
                />
                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    style={{ display: "inline-flex", alignItems: "center", gap: 10, background: S.blue, color: "#fff", padding: "14px 36px", borderRadius: 30, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", transition: "background 0.2s, transform 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = S.teal; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = S.blue; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
                    Send A Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ── Map ── */}
        <section style={{ padding: "0 0 60px", background: S.lightGray }}>
          <div className="container">
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.08)", height: 400 }}>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.7497592766!2d85.7179703!3d20.2960587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7a201b21d3b%3A0x4d1f8f1e9b9e0b7a!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <NewsletterSection
          title="Ready to Begin Your Journey to Wellness?"
          text="Whether you are a patient, partner, or future team member, we are here to support your next step."
        />
        <SiteFooter />
      </div>
    </>
  );
};