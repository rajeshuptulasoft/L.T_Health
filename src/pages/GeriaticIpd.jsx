// import React, { useState } from 'react';
// import { SiteHeader } from '../components/SiteHeader';
// import { SiteFooter } from '../components/SiteFooter';
// import { FloatingSupport } from '../components/FloatingSupport';
// import { NewsletterSection } from '../components/NewsletterSection';

// /* ── Design tokens ── */
// const S = {
//   teal: "#00b5c8",
//   tealDark: "#0097aa",
//   tealLight: "#e6f9fb",
//   blue: "#1a3c6e",
//   gray: "#666",
//   lightGray: "#f4f8fb",
//   white: "#ffffff",
// };

// /* ── Icon Circle ── */
// const IconCircle = ({ children, size = 54, bg = S.tealLight }) => (
//   <div
//     style={{
//       width: size,
//       height: size,
//       borderRadius: "50%",
//       background: bg,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       margin: "0 auto 14px",
//       flexShrink: 0,
//     }}
//   >
//     {children}
//   </div>
// );

// /* ── SVG Icons ── */
// const Icon = {
//   assessment: (
//     <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
//       <rect x="4" y="3" width="16" height="18" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
//       <path d="M8 8h8M8 12h8M8 16h5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
//   ),
//   chronic: (
//     <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
//       <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//     </svg>
//   ),
//   rehab: (
//     <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
//       <circle cx="12" cy="5" r="2.5" fill={S.teal} opacity=".7" />
//       <path d="M12 8v5M9 11l-3 5h12l-3-5" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M9 21l1.5-3h3l1.5 3" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
//   ),
//   palliative: (
//     <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
//       <path d="M12 21s-8-4.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 10-8 10z" fill={S.teal} opacity=".75" />
//       <path d="M9 12c1 1.4 5 1.4 6 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
//     </svg>
//   ),
//   holistic: (
//     <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="1.8" fill="none" />
//       <path d="M12 8v8M8 12h8" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
//     </svg>
//   ),
//   safe: (
//     <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
//       <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" stroke={S.teal} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
//       <path d="M9 12l2 2 4-4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   ),
//   family: (
//     <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
//       <circle cx="9" cy="7" r="3" fill={S.teal} opacity=".7" />
//       <circle cx="17" cy="9" r="2.5" fill={S.teal} opacity=".45" />
//       <path d="M2 20c0-4 3-6 7-6s7 2 7 6" fill={S.teal} opacity=".7" />
//       <path d="M16 15c2.5 0 5 1.5 5 5" stroke={S.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" />
//     </svg>
//   ),
//   consultation: (
//     <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
//       <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill={S.teal} />
//     </svg>
//   ),
//   gerAssessment: (
//     <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
//       <circle cx="12" cy="8" r="4" stroke={S.teal} strokeWidth="1.8" fill="none" />
//       <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
//       <path d="M17 5l2 2-2 2" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
//     </svg>
//   ),
//   admission: (
//     <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
//       <rect x="3" y="4" width="18" height="17" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
//       <path d="M3 9h18" stroke={S.teal} strokeWidth="1.5" />
//       <path d="M8 3v4M16 3v4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
//       <path d="M9 14h6M12 12v4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
//   ),
//   monitoring: (
//     <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
//       <rect x="2" y="3" width="20" height="14" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
//       <path d="M6 10l2-3 2 5 2-2 2 2 2-4" stroke={S.teal} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//       <path d="M8 21h8M12 17v4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
//   ),
//   check: (
//     <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
//       <path d="M5 12l5 5L20 7" stroke={S.teal} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   ),
// };

// /* ══════════════════════════════════════════
//    SECTION 1 — Hero
// ══════════════════════════════════════════ */
// const HeroSection = () => (
//   <section
//     style={{
//       padding: "80px 0 60px",
//       background: "linear-gradient(135deg, #f0fbfd 0%, #ffffff 65%)",
//       position: "relative",
//       overflow: "hidden",
//     }}
//   >
//     <div style={{ position: "absolute", bottom: -50, left: 80, width: 160, height: 160, borderRadius: "50%", background: S.teal, opacity: 0.1, pointerEvents: "none" }} />
//     <div style={{ position: "absolute", top: -30, right: 200, width: 100, height: 100, borderRadius: "50%", background: S.teal, opacity: 0.12, pointerEvents: "none" }} />

//     <div className="container">
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
//         {/* Left */}
//         <div>
//           <h1 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: S.blue, lineHeight: 1.2, marginBottom: 18 }}>
//             Compassionate{" "}
//             <span style={{ color: S.teal }}>Geriatric Care</span>{" "}
//             for a Fulfilling Life
//           </h1>
//           <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
//             Our dedicated indoor patient department provides specialised medical care, a supportive environment, and a focus on dignity and well-being for our elderly patients.
//           </p>
//           <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
//             <a href="#" style={{ background: S.teal, color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
//               Request Admission Information
//             </a>
//             <a href="#" style={{ border: `2px solid ${S.teal}`, color: S.teal, padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
//               Learn More
//             </a>
//           </div>
//         </div>

//         {/* Right */}
//         <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,181,200,0.2)", aspectRatio: "4/3", background: "linear-gradient(135deg,#c8f0f5,#e0f7fa)" }}>
//           <img
//             src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80"
//             alt="Geriatric care"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             onError={(e) => { e.target.style.display = "none"; }}
//           />
//         </div>
//       </div>
//     </div>
//   </section>
// );

// /* ══════════════════════════════════════════
//    SECTION 2 — Specialised Medical Care + Services 2×2
// ══════════════════════════════════════════ */
// const ServicesSection = () => {
//   const services = [
//     { icon: Icon.assessment, title: "Geriatric Assessment", desc: "Comprehensive health evaluations for a precise diagnosis and effective care plan." },
//     { icon: Icon.chronic, title: "Chronic Disease Management", desc: "Ongoing care for age-related conditions common in elderly patients, such as diabetes and heart disease." },
//     { icon: Icon.rehab, title: "Rehabilitation & Mobility", desc: "Physiotherapy programs to maintain strength, mobility, and independence." },
//     { icon: Icon.palliative, title: "Palliative & Comfort Care", desc: "Compassionate support to improve the quality of life for patients and their families, delivered with dignity." },
//   ];

//   const features = [
//     { label: "Specialised Geriatric Team", desc: "Our compassionate doctors and nurses have extensive experience in elder care and a deep understanding of age-related conditions." },
//     { label: "Holistic Care Plans", desc: "We create personalised plans that address not only medical issues but also emotional well-being and mobility." },
//     { label: "A Safe & Supportive Environment", desc: "Our facility is designed to provide a secure and comfortable setting with a focus on fall prevention and patient safety." },
//   ];

//   return (
//     <section style={{ padding: "80px 0", background: S.white }}>
//       <div className="container">
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
//           {/* Left */}
//           <div>
//             <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
//               Specialised Medical Care for Seniors
//             </h2>
//             <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28, fontSize: 15 }}>
//               Our dedicated geriatric department provides a supportive, dignified, and expert-led environment for elderly patients. We focus on comprehensive care that addresses their unique physical and emotional needs.
//             </p>
//             {features.map((f, i) => (
//               <div key={i} style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "flex-start" }}>
//                 <div style={{ width: 22, height: 22, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
//                   {Icon.check}
//                 </div>
//                 <div>
//                   <strong style={{ color: S.blue }}>{f.label}: </strong>
//                   <span style={{ color: S.gray, fontSize: 14 }}>{f.desc}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right — 2×2 grid */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
//             {services.map((s, i) => (
//               <div
//                 key={i}
//                 style={{ background: S.lightGray, borderRadius: 12, padding: "26px 18px", textAlign: "center", transition: "box-shadow 0.2s" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,181,200,0.18)`)}
//                 onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
//               >
//                 <IconCircle>{s.icon}</IconCircle>
//                 <h4 style={{ color: S.blue, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{s.title}</h4>
//                 <p style={{ color: S.gray, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ══════════════════════════════════════════
//    SECTION 3 — Advantages of Our Geriatric Department
// ══════════════════════════════════════════ */
// const AdvantagesSection = () => {
//   const advantages = [
//     {
//       icon: Icon.holistic,
//       title: "Holistic & Compassionate Care",
//       desc: "Our approach addresses not just medical needs, but also emotional well-being and social engagement, promoting a higher quality of life.",
//     },
//     {
//       icon: Icon.safe,
//       title: "A Safe & Dignified Environment",
//       desc: "We keep the comfort and safety of elderly patients in mind, focusing on fall prevention, accessibility, and a respectful setting for dignified care.",
//     },
//     {
//       icon: Icon.family,
//       title: "Family Support & Peace of Mind",
//       desc: "We provide regular updates and support to families, giving them confidence and peace of mind that their loved ones are in expert and caring hands.",
//     },
//   ];

//   return (
//     <section style={{ padding: "80px 0", background: S.lightGray }}>
//       <div className="container">
//         <div style={{ textAlign: "center", marginBottom: 50 }}>
//           <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
//             The Advantages of Our Geriatric Department
//           </h2>
//           <p style={{ color: S.gray, maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>
//             We provide a specialised, supportive environment for elderly patients, ensuring their dignity, comfort, and best possible health outcomes.
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
//           {advantages.map((a, i) => (
//             <div
//               key={i}
//               style={{ background: S.white, borderRadius: 14, padding: "36px 28px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s" }}
//               onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 12px 36px rgba(0,181,200,0.18)`; }}
//               onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
//             >
//               <IconCircle size={60}>{a.icon}</IconCircle>
//               <h3 style={{ color: S.blue, fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{a.title}</h3>
//               <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.7 }}>{a.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ══════════════════════════════════════════
//    SECTION 4 — Your Path to Specialised Geriatric Care
// ══════════════════════════════════════════ */
// const ProcessSection = () => {
//   const steps = [
//     { icon: Icon.consultation, title: "Initial Consultation", desc: "A comprehensive discussion with our care coordinators to understand the patient's needs and medical history." },
//     { icon: Icon.gerAssessment, title: "Geriatric Assessment", desc: "Our medical team performs a detailed evaluation to create a personalised care plan tailored to the patient." },
//     { icon: Icon.admission, title: "Admission & Care Plan", desc: "The patient is admitted to our geriatric department, and care begins immediately as supervised by our compassionate staff." },
//     { icon: Icon.monitoring, title: "Ongoing Monitoring & Support", desc: "We provide continuous monitoring and regular updates to the family, ensuring well-being throughout their stay." },
//   ];

//   return (
//     <section style={{ padding: "80px 0", background: S.white }}>
//       <div className="container">
//         <div style={{ textAlign: "center", marginBottom: 50 }}>
//           <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
//             Your Path to Specialised Geriatric Care
//           </h2>
//           <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
//             We've designed a clear and supportive process to ensure a smooth transition for elderly patients and their families.
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
//           {/* connecting line */}
//           <div style={{ position: "absolute", top: 27, left: "12%", right: "12%", height: 2, background: `linear-gradient(to right, ${S.teal}, ${S.tealDark})`, opacity: 0.22, zIndex: 0 }} />
//           {steps.map((s, i) => (
//             <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "0 8px" }}>
//               <div style={{ width: 54, height: 54, borderRadius: "50%", background: S.tealLight, border: `2px solid ${S.teal}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
//                 {s.icon}
//               </div>
//               <div style={{ width: 22, height: 22, borderRadius: "50%", background: S.teal, color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "-10px auto 16px" }}>
//                 {i + 1}
//               </div>
//               <h4 style={{ color: S.blue, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.title}</h4>
//               <p style={{ color: S.gray, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ══════════════════════════════════════════
//    SECTION 5 — Testimonials
// ══════════════════════════════════════════ */
// const TestimonialsSection = () => {
//   const [active, setActive] = useState(0);

//   const testimonials = [
//     { initials: "A.D.", name: "A. Das", role: "Family Member, Bhubaneswar", text: "The compassionate care my grandmother received in your department was exceptional. The staff in Bhubaneswar treated her with such dignity and kindness, and her health greatly improved." },
//     { initials: "S.K.", name: "S. Kar", role: "Family Member, Cuttack", text: "The specialised care team in Cuttack helped my grandfather manage his chronic condition so effectively. The environment was calm and comforting, and the emotional support was invaluable for our family." },
//     { initials: "R.P.", name: "R. Panda", role: "Family Member, Puri", text: "Finding a geriatric IPD that truly understood my father's needs was difficult until we came here. The personalised care plan and the regular updates gave us complete peace of mind throughout his stay." },
//   ];

//   return (
//     <section style={{ padding: "80px 0", background: S.lightGray }}>
//       <div className="container">
//         <div style={{ textAlign: "center", marginBottom: 50 }}>
//           <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
//             Families' Stories of Compassionate Care
//           </h2>
//           <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
//             Hear from the families we have had the privilege of serving and the peace of mind our care has brought them.
//           </p>
//         </div>

//         <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
//             {[active, (active + 1) % testimonials.length].map((idx) => {
//               const t = testimonials[idx];
//               return (
//                 <div key={idx} style={{ background: S.white, borderRadius: 14, padding: "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
//                   <div style={{ fontSize: 40, color: S.teal, lineHeight: 1, marginBottom: 12, fontFamily: "Georgia, serif" }}>"</div>
//                   <p style={{ color: S.gray, fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{t.text}</p>
//                   <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                     <div style={{ width: 40, height: 40, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: S.teal, fontSize: 13 }}>
//                       {t.initials}
//                     </div>
//                     <div>
//                       <div style={{ fontWeight: 700, color: S.blue, fontSize: 14 }}>{t.name}</div>
//                       <div style={{ color: S.teal, fontSize: 12 }}>{t.role}</div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Arrow buttons */}
//           {[-1, 1].map((dir, i) => (
//             <button
//               key={i}
//               onClick={() => setActive((prev) => (prev + dir + testimonials.length) % testimonials.length)}
//               style={{ position: "absolute", top: "50%", [dir === -1 ? "left" : "right"]: -52, transform: "translateY(-50%)", background: S.teal, border: "none", color: "#fff", width: 38, height: 38, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
//             >
//               {dir === -1 ? "‹" : "›"}
//             </button>
//           ))}

//           {/* Dots */}
//           <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
//             {testimonials.map((_, i) => (
//               <button key={i} onClick={() => setActive(i)} style={{ width: 10, height: 10, borderRadius: "50%", border: "none", background: i === active ? S.teal : "#ccc", cursor: "pointer", padding: 0 }} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ══════════════════════════════════════════
//    SECTION 6 — FAQ
// ══════════════════════════════════════════ */
// const FAQSection = () => {
//   const [openIdx, setOpenIdx] = useState(null);

//   const faqs = [
//     {
//       q: "What conditions do you treat in your geriatric department?",
//       a: "Our geriatric IPD specialises in a wide range of age-related conditions including dementia, Parkinson's disease, osteoporosis, heart failure, diabetes, stroke recovery, chronic obstructive pulmonary disease (COPD), and general age-related decline. We take a holistic approach, addressing both physical and cognitive health needs.",
//     },
//     {
//       q: "What is the admission process for the department?",
//       a: "The admission process begins with an initial consultation either in person or over the phone. Our team will review the patient's medical history and current condition, perform a geriatric assessment, and create a personalised care plan. Admission is then arranged at a mutually convenient time, with our team handling all the necessary formalities.",
//     },
//     {
//       q: "Do you offer rehabilitation services?",
//       a: "Yes, rehabilitation is a core part of our geriatric department. We provide physiotherapy, occupational therapy, and speech therapy services tailored to each patient's specific needs and goals. Our aim is to restore and maintain as much functional independence as possible for every elderly patient in our care.",
//     },
//     {
//       q: "Do you support family members during the patient's stay?",
//       a: "Absolutely. We believe family involvement is vital to a patient's recovery and well-being. We provide regular updates to family members, offer flexible visiting hours, and have a dedicated care coordinator who acts as a point of contact. We also provide guidance and support to families on how to care for their loved one after discharge.",
//     },
//   ];

//   return (
//     <section style={{ padding: "80px 0", background: S.white }}>
//       <div className="container">
//         <div style={{ textAlign: "center", marginBottom: 50 }}>
//           <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
//             Your Questions, Answered
//           </h2>
//           <p style={{ color: S.gray, maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>
//             We are here to provide clarity and reassurance. Here are answers to some of the most common questions about our department.
//           </p>
//         </div>

//         <div style={{ maxWidth: 720, margin: "0 auto" }}>
//           {faqs.map((f, i) => (
//             <div key={i} style={{ borderBottom: "1px solid #e8eef3", overflow: "hidden" }}>
//               <button
//                 onClick={() => setOpenIdx(openIdx === i ? null : i)}
//                 style={{ width: "100%", background: "none", border: "none", padding: "20px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}
//               >
//                 <span style={{ fontWeight: 600, color: S.blue, fontSize: 16 }}>{f.q}</span>
//                 <span style={{ color: S.teal, fontSize: 22, transform: openIdx === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0, marginLeft: 16 }}>+</span>
//               </button>
//               {openIdx === i && (
//                 <div style={{ paddingBottom: 20, color: S.gray, lineHeight: 1.8, fontSize: 14 }}>
//                   {f.a}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ══════════════════════════════════════════
//    SECTION 7 — Bottom CTA
// ══════════════════════════════════════════ */
// const CTASection = () => (
//   <section
//     style={{
//       padding: "80px 0",
//       background: "linear-gradient(135deg, #f0fbfd 0%, #e8f7fa 100%)",
//       textAlign: "center",
//       position: "relative",
//       overflow: "hidden",
//     }}
//   >
//     <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: S.teal, opacity: 0.07, pointerEvents: "none" }} />
//     <div style={{ position: "absolute", bottom: -60, left: -40, width: 240, height: 240, borderRadius: "50%", background: S.teal, opacity: 0.06, pointerEvents: "none" }} />

//     <div className="container" style={{ position: "relative", zIndex: 1 }}>
//       <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
//         Ready to Discuss a{" "}
//         <span style={{ color: S.teal }}>Compassionate Care Plan?</span>
//       </h2>
//       <p style={{ color: S.gray, maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.8 }}>
//         Our expert geriatric team is here to provide the compassionate and specialised care your loved one deserves. Contact us today to discuss admission or book a consultation.
//       </p>
//       <a
//         href="#"
//         style={{
//           display: "inline-block",
//           background: S.teal,
//           color: "#fff",
//           padding: "15px 40px",
//           borderRadius: 7,
//           fontWeight: 700,
//           fontSize: 16,
//           textDecoration: "none",
//           boxShadow: `0 8px 24px rgba(0,181,200,0.35)`,
//           transition: "transform 0.2s, box-shadow 0.2s",
//         }}
//         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,181,200,0.45)`; }}
//         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,181,200,0.35)`; }}
//       >
//         Request Admission Information
//       </a>
//     </div>
//   </section>
// );

// /* ══════════════════════════════════════════
//    ROOT EXPORT
// ══════════════════════════════════════════ */
// export const GeriaticIpd = () => {
//   return (
//     <>
//       <FloatingSupport />
//       <div className="page-wrapper">
//         <SiteHeader />

//         <HeroSection />
//         <ServicesSection />
//         <AdvantagesSection />
//         <ProcessSection />
//         <TestimonialsSection />
//         <FAQSection />
//         <CTASection />

//         <NewsletterSection
//           title="Ready to Begin Your Journey to Wellness?"
//           text="Whether you are a patient, partner, or future team member, we are here to support your next step."
//         />
//         <SiteFooter />
//       </div>
//     </>
//   );
// };





// import React from 'react';
// import { SiteHeader } from '../components/SiteHeader';
// import { SiteFooter } from '../components/SiteFooter';
// import { NewsletterSection } from '../components/NewsletterSection';

// export const GeriaticIpd = () => {
//     return (
//         <>
//           <div className="page-wrapper">
//             <SiteHeader />
//             <section className="section" style={{ padding: "80px 0" }}>
//               <div className="container">
//                 <h1>Geriatic IPD</h1>
//                 <p>This page is under development.</p>
//               </div>
//             </section>
//             <NewsletterSection
//                 title="Ready to Begin Your Journey to Wellness?"
//                 text="Whether you are a patient, partner, or future team member, we are here to support your next step."
//             />
//             <SiteFooter />
//           </div>
//         </>
//       );
// };
import React, { useState } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { FloatingSupport } from '../components/FloatingSupport';
import { NewsletterSection } from '../components/NewsletterSection';

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

/* ── Icon Circle ── */
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
  assessment: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  chronic: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  rehab: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2.5" fill={S.teal} opacity=".7" />
      <path d="M12 8v5M9 11l-3 5h12l-3-5" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21l1.5-3h3l1.5 3" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  palliative: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <path d="M12 21s-8-4.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 10-8 10z" fill={S.teal} opacity=".75" />
      <path d="M9 12c1 1.4 5 1.4 6 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  holistic: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M12 8v8M8 12h8" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  safe: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" stroke={S.teal} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  family: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <circle cx="9" cy="7" r="3" fill={S.teal} opacity=".7" />
      <circle cx="17" cy="9" r="2.5" fill={S.teal} opacity=".45" />
      <path d="M2 20c0-4 3-6 7-6s7 2 7 6" fill={S.teal} opacity=".7" />
      <path d="M16 15c2.5 0 5 1.5 5 5" stroke={S.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  consultation: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill={S.teal} />
    </svg>
  ),
  gerAssessment: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={S.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M17 5l2 2-2 2" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
    </svg>
  ),
  admission: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M3 9h18" stroke={S.teal} strokeWidth="1.5" />
      <path d="M8 3v4M16 3v4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 14h6M12 12v4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  monitoring: (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke={S.teal} strokeWidth="1.8" fill="none" />
      <path d="M6 10l2-3 2 5 2-2 2 2 2-4" stroke={S.teal} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 21h8M12 17v4" stroke={S.teal} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
      <path d="M5 12l5 5L20 7" stroke={S.teal} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/* ══════════════════════════════════════════
   SECTION 1 — Hero
══════════════════════════════════════════ */
const HeroSection = () => (
  <section
    style={{
      padding: "80px 0 60px",
      background: "linear-gradient(135deg, #f0fbfd 0%, #ffffff 65%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div style={{ position: "absolute", bottom: -50, left: 80, width: 160, height: 160, borderRadius: "50%", background: S.teal, opacity: 0.1, pointerEvents: "none" }} />
    <div style={{ position: "absolute", top: -30, right: 200, width: 100, height: 100, borderRadius: "50%", background: S.teal, opacity: 0.12, pointerEvents: "none" }} />

    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left */}
        <div>
          <h1 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: S.blue, lineHeight: 1.2, marginBottom: 18 }}>
            Compassionate{" "}
            <span style={{ color: S.teal }}>Geriatric Care</span>{" "}
            for a Fulfilling Life
          </h1>
          <p style={{ color: S.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Our dedicated indoor patient department provides specialised medical care, a supportive environment, and a focus on dignity and well-being for our elderly patients.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#" style={{ background: S.teal, color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Request Admission Information
            </a>
            <a href="#" style={{ border: `2px solid ${S.teal}`, color: S.teal, padding: "12px 28px", borderRadius: 6, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
              Learn More
            </a>
          </div>
        </div>

        {/* Right */}
        <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,181,200,0.2)", aspectRatio: "4/3", background: "linear-gradient(135deg,#c8f0f5,#e0f7fa)" }}>
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80"
            alt="Geriatric care"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   SECTION 2 — Specialised Medical Care + Services 2×2
══════════════════════════════════════════ */
const ServicesSection = () => {
  const services = [
    { icon: Icon.assessment, title: "Geriatric Assessment", desc: "Comprehensive health evaluations for a precise diagnosis and effective care plan." },
    { icon: Icon.chronic, title: "Chronic Disease Management", desc: "Ongoing care for age-related conditions common in elderly patients, such as diabetes and heart disease." },
    { icon: Icon.rehab, title: "Rehabilitation & Mobility", desc: "Physiotherapy programs to maintain strength, mobility, and independence." },
    { icon: Icon.palliative, title: "Palliative & Comfort Care", desc: "Compassionate support to improve the quality of life for patients and their families, delivered with dignity." },
  ];

  const features = [
    { label: "Specialised Geriatric Team", desc: "Our compassionate doctors and nurses have extensive experience in elder care and a deep understanding of age-related conditions." },
    { label: "Holistic Care Plans", desc: "We create personalised plans that address not only medical issues but also emotional well-being and mobility." },
    { label: "A Safe & Supportive Environment", desc: "Our facility is designed to provide a secure and comfortable setting with a focus on fall prevention and patient safety." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.white }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 16 }}>
              Specialised Medical Care for Seniors
            </h2>
            <p style={{ color: S.gray, lineHeight: 1.8, marginBottom: 28, fontSize: 15 }}>
              Our dedicated geriatric department provides a supportive, dignified, and expert-led environment for elderly patients. We focus on comprehensive care that addresses their unique physical and emotional needs.
            </p>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "flex-start" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: S.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  {Icon.check}
                </div>
                <div>
                  <strong style={{ color: S.blue }}>{f.label}: </strong>
                  <span style={{ color: S.gray, fontSize: 14 }}>{f.desc}</span>
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

/* ══════════════════════════════════════════
   SECTION 3 — Advantages of Our Geriatric Department
══════════════════════════════════════════ */
const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Icon.holistic,
      title: "Holistic & Compassionate Care",
      desc: "Our approach addresses not just medical needs, but also emotional well-being and social engagement, promoting a higher quality of life.",
    },
    {
      icon: Icon.safe,
      title: "A Safe & Dignified Environment",
      desc: "We keep the comfort and safety of elderly patients in mind, focusing on fall prevention, accessibility, and a respectful setting for dignified care.",
    },
    {
      icon: Icon.family,
      title: "Family Support & Peace of Mind",
      desc: "We provide regular updates and support to families, giving them confidence and peace of mind that their loved ones are in expert and caring hands.",
    },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            The Advantages of Our Geriatric Department
          </h2>
          <p style={{ color: S.gray, maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>
            We provide a specialised, supportive environment for elderly patients, ensuring their dignity, comfort, and best possible health outcomes.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {advantages.map((a, i) => (
            <div
              key={i}
              style={{ background: S.white, borderRadius: 14, padding: "36px 28px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s" }}
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

/* ══════════════════════════════════════════
   SECTION 4 — Your Path to Specialised Geriatric Care
══════════════════════════════════════════ */
const ProcessSection = () => {
  const steps = [
    { icon: Icon.consultation, title: "Initial Consultation", desc: "A comprehensive discussion with our care coordinators to understand the patient's needs and medical history." },
    { icon: Icon.gerAssessment, title: "Geriatric Assessment", desc: "Our medical team performs a detailed evaluation to create a personalised care plan tailored to the patient." },
    { icon: Icon.admission, title: "Admission & Care Plan", desc: "The patient is admitted to our geriatric department, and care begins immediately as supervised by our compassionate staff." },
    { icon: Icon.monitoring, title: "Ongoing Monitoring & Support", desc: "We provide continuous monitoring and regular updates to the family, ensuring well-being throughout their stay." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.white }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Your Path to Specialised Geriatric Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            We've designed a clear and supportive process to ensure a smooth transition for elderly patients and their families.
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

/* ══════════════════════════════════════════
   SECTION 5 — Testimonials
══════════════════════════════════════════ */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    { initials: "A.D.", name: "A. Das", role: "Family Member, Bhubaneswar", text: "The compassionate care my grandmother received in your department was exceptional. The staff in Bhubaneswar treated her with such dignity and kindness, and her health greatly improved." },
    { initials: "S.K.", name: "S. Kar", role: "Family Member, Cuttack", text: "The specialised care team in Cuttack helped my grandfather manage his chronic condition so effectively. The environment was calm and comforting, and the emotional support was invaluable for our family." },
    { initials: "R.P.", name: "R. Panda", role: "Family Member, Puri", text: "Finding a geriatric IPD that truly understood my father's needs was difficult until we came here. The personalised care plan and the regular updates gave us complete peace of mind throughout his stay." },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.lightGray }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Families' Stories of Compassionate Care
          </h2>
          <p style={{ color: S.gray, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Hear from the families we have had the privilege of serving and the peace of mind our care has brought them.
          </p>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[active, (active + 1) % testimonials.length].map((idx) => {
              const t = testimonials[idx];
              return (
                <div key={idx} style={{ background: S.white, borderRadius: 14, padding: "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
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

/* ══════════════════════════════════════════
   SECTION 6 — FAQ
══════════════════════════════════════════ */
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "What conditions do you treat in your geriatric department?",
      a: "Our geriatric IPD specialises in a wide range of age-related conditions including dementia, Parkinson's disease, osteoporosis, heart failure, diabetes, stroke recovery, chronic obstructive pulmonary disease (COPD), and general age-related decline. We take a holistic approach, addressing both physical and cognitive health needs.",
    },
    {
      q: "What is the admission process for the department?",
      a: "The admission process begins with an initial consultation either in person or over the phone. Our team will review the patient's medical history and current condition, perform a geriatric assessment, and create a personalised care plan. Admission is then arranged at a mutually convenient time, with our team handling all the necessary formalities.",
    },
    {
      q: "Do you offer rehabilitation services?",
      a: "Yes, rehabilitation is a core part of our geriatric department. We provide physiotherapy, occupational therapy, and speech therapy services tailored to each patient's specific needs and goals. Our aim is to restore and maintain as much functional independence as possible for every elderly patient in our care.",
    },
    {
      q: "Do you support family members during the patient's stay?",
      a: "Absolutely. We believe family involvement is vital to a patient's recovery and well-being. We provide regular updates to family members, offer flexible visiting hours, and have a dedicated care coordinator who acts as a point of contact. We also provide guidance and support to families on how to care for their loved one after discharge.",
    },
  ];

  return (
    <section style={{ padding: "80px 0", background: S.white }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: S.blue, marginBottom: 14 }}>
            Your Questions, Answered
          </h2>
          <p style={{ color: S.gray, maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>
            We are here to provide clarity and reassurance. Here are answers to some of the most common questions about our department.
          </p>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e8eef3", overflow: "hidden" }}>
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

/* ══════════════════════════════════════════
   SECTION 7 — Bottom CTA
══════════════════════════════════════════ */
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
        Ready to Discuss a{" "}
        <span style={{ color: S.teal }}>Compassionate Care Plan?</span>
      </h2>
      <p style={{ color: S.gray, maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.8 }}>
        Our expert geriatric team is here to provide the compassionate and specialised care your loved one deserves. Contact us today to discuss admission or book a consultation.
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
        Request Admission Information
      </a>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   ROOT EXPORT
══════════════════════════════════════════ */
export const GeriaticIpd = () => {
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