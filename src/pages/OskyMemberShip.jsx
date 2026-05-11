import React, { useState, useEffect, useRef } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSection } from "../components/NewsletterSection";
import { subpagesHomeAlignCss } from "../styles/subpagesHomeAlign";

/* ═══════════════════════════════════════════════════
   STYLES
═══════════════════════════════════════════════════ */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap');

  :root {
    --ok-teal:        #00B8A9;
    --ok-teal-light:  #E0F7F5;
    --ok-teal-dark:   #009E90;
    --ok-green:       #22C55E;
    --ok-green-dark:  #16A34A;
    --ok-text:        #1a2e44;
    --ok-mid:         #4a5568;
    --ok-light:       #718096;
    --ok-white:       #ffffff;
    --ok-soft:        #f7fdfc;
    --ok-border:      #d0f5f1;
    --ok-gold:        #F59E0B;
    --ok-diamond:     #6366F1;
  }

  .ok-page * { box-sizing: border-box; }
  .ok-page {
    font-family: 'Nunito', sans-serif;
    color: var(--ok-text);
  }

  /* ── SHARED ── */
  .ok-container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
  .ok-section   { padding: 80px 0; }
  .ok-heading {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.15rem);
    font-weight: 800;
    color: var(--ok-text);
    text-align: center;
    margin-bottom: 12px;
  }
  .ok-heading span { color: var(--ok-teal); }
  .ok-subtext {
    text-align: center;
    color: var(--ok-light);
    font-size: 0.95rem;
    max-width: 580px;
    margin: 0 auto 52px;
    line-height: 1.75;
  }

  /* ─────────── HERO ─────────── */
  .ok-hero {
    background: linear-gradient(135deg, #e6faf8 0%, #d0f5f1 45%, #eafff8 100%);
    padding: 90px 0 0;
    min-height: 520px;
    overflow: hidden;
    position: relative;
  }
  .ok-hero::after {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0; height: 56px;
    background: #fff;
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .ok-hero-bubble {
    position: absolute;
    border-radius: 50%;
    background: rgba(0,184,169,0.1);
    pointer-events: none;
  }
  .ok-hero-bubble.b1 { width: 280px; height: 280px; top: -60px; right: 80px; }
  .ok-hero-bubble.b2 { width: 160px; height: 160px; top: 200px; right: 20px; }
  .ok-hero-inner {
    display: flex;
    align-items: flex-end;
    gap: 40px;
    padding-bottom: 60px;
  }
  .ok-hero-text { flex: 1; }
  .ok-hero-text h1 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 18px;
  }
  .ok-hero-text h1 span { color: var(--ok-teal); }
  .ok-hero-text p {
    color: var(--ok-mid);
    font-size: 0.97rem;
    line-height: 1.75;
    max-width: 430px;
    margin-bottom: 30px;
  }
  .ok-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
  .ok-hero-img-wrap {
    width: 400px; flex-shrink: 0;
    position: relative;
  }
  .ok-hero-img-wrap img {
    width: 100%; display: block;
    border-radius: 16px 16px 0 0;
    object-fit: cover; height: 380px;
    animation: ok-float 4.5s ease-in-out infinite;
    box-shadow: 0 20px 50px rgba(0,184,169,0.18);
  }
  @keyframes ok-float {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }

  /* ── BUTTONS ── */
  .ok-btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 13px 26px; border-radius: 8px;
    font-weight: 700; font-size: 0.93rem;
    border: none; cursor: pointer; text-decoration: none;
    transition: transform 0.22s, box-shadow 0.22s, background 0.22s;
    font-family: 'Nunito', sans-serif;
  }
  .ok-btn-teal {
    background: var(--ok-teal); color: #fff;
    box-shadow: 0 4px 18px rgba(0,184,169,0.28);
  }
  .ok-btn-teal:hover { background: var(--ok-teal-dark); transform: translateY(-2px); }
  .ok-btn-outline {
    background: transparent; color: var(--ok-teal);
    border: 2px solid var(--ok-teal);
  }
  .ok-btn-outline:hover { background: var(--ok-teal-light); transform: translateY(-2px); }
  .ok-btn-green {
    background: var(--ok-green); color: #fff;
    box-shadow: 0 4px 18px rgba(34,197,94,0.3);
  }
  .ok-btn-green:hover { background: var(--ok-green-dark); transform: translateY(-2px); }
  .ok-btn-red {
    background: #EF4444; color: #fff;
    box-shadow: 0 4px 18px rgba(239,68,68,0.28);
  }
  .ok-btn-red:hover { background: #DC2626; transform: translateY(-2px); }

  /* ─────────── PIONEERING ─────────── */
  .ok-pioneer { background: #fff; }
  .ok-pioneer-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  }
  .ok-pioneer-left h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.4rem, 2.8vw, 1.95rem);
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.25;
  }
  .ok-pioneer-left p {
    color: var(--ok-mid);
    font-size: 0.93rem;
    line-height: 1.8;
    margin-bottom: 14px;
  }
  .ok-pioneer-right h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 28px;
  }
  .ok-values-list { display: flex; flex-direction: column; gap: 22px; }
  .ok-value-item { display: flex; gap: 16px; align-items: flex-start; }
  .ok-value-icon {
    width: 44px; height: 44px; border-radius: 10px;
    background: var(--ok-teal-light);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; flex-shrink: 0;
  }
  .ok-value-item h4 {
    font-weight: 700; font-size: 0.96rem; margin-bottom: 4px;
  }
  .ok-value-item p { font-size: 0.86rem; color: var(--ok-mid); line-height: 1.6; }

  /* ─────────── COMMITMENT ─────────── */
  .ok-commitment { background: var(--ok-soft); }
  .ok-commit-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }
  .ok-commit-img img {
    width: 100%; border-radius: 16px;
    object-fit: cover; height: 380px;
    box-shadow: 0 12px 40px rgba(0,184,169,0.15);
  }
  .ok-commit-text h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.4rem, 2.5vw, 1.9rem);
    font-weight: 800;
    margin-bottom: 16px;
    line-height: 1.25;
  }
  .ok-commit-text h2 span { color: var(--ok-teal); }
  .ok-commit-text > p {
    color: var(--ok-mid); font-size: 0.93rem;
    line-height: 1.8; margin-bottom: 28px;
  }
  .ok-commit-box {
    background: #fff;
    border-radius: 12px;
    padding: 22px 24px;
    margin-bottom: 16px;
    border-left: 4px solid var(--ok-teal);
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  }
  .ok-commit-box h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700; font-size: 1rem; margin-bottom: 8px;
  }
  .ok-commit-box p { font-size: 0.88rem; color: var(--ok-mid); line-height: 1.7; }

  /* ─────────── SERVICE NETWORK ─────────── */
  .ok-network { background: #fff; }
  .ok-network-tabs {
    display: flex;
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 36px;
  }
  .ok-tab-btn {
    display: flex; align-items: center; gap: 7px;
    padding: 10px 20px; border-radius: 8px;
    font-size: 0.88rem; font-weight: 700;
    border: 2px solid var(--ok-border);
    background: #fff; color: var(--ok-mid);
    cursor: pointer;
    transition: all 0.22s;
    font-family: 'Nunito', sans-serif;
  }
  .ok-tab-btn:hover { border-color: var(--ok-teal); color: var(--ok-teal); background: var(--ok-teal-light); }
  .ok-tab-btn.active {
    background: var(--ok-teal); color: #fff;
    border-color: var(--ok-teal);
    box-shadow: 0 4px 14px rgba(0,184,169,0.3);
  }
  .ok-tab-content {
    border: 1.5px solid var(--ok-border);
    border-radius: 14px;
    padding: 30px 28px;
    background: var(--ok-soft);
    animation: ok-fadeIn 0.35s ease;
  }
  @keyframes ok-fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
  .ok-tab-content h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.05rem; font-weight: 700;
    color: var(--ok-teal); margin-bottom: 12px;
  }
  .ok-tab-content p { font-size: 0.9rem; color: var(--ok-mid); line-height: 1.75; }
  .ok-tab-benefits {
    display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px;
  }
  .ok-benefit-chip {
    background: var(--ok-teal-light); color: var(--ok-teal-dark);
    border-radius: 20px; padding: 5px 14px;
    font-size: 0.82rem; font-weight: 700;
  }

  /* ─────────── GETTING STARTED ─────────── */
  .ok-start { background: var(--ok-soft); }
  .ok-steps-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    position: relative;
  }
  .ok-steps-grid::before {
    content: '';
    position: absolute;
    top: 36px; left: 12.5%; right: 12.5%;
    height: 3px;
    background: linear-gradient(to right, var(--ok-teal), var(--ok-green));
    z-index: 0;
  }
  .ok-step-card {
    text-align: center;
    position: relative;
    z-index: 1;
    opacity: 0; transform: translateY(24px);
    transition: opacity 0.55s, transform 0.55s;
  }
  .ok-step-card.ok-vis { opacity: 1; transform: translateY(0); }
  .ok-step-num {
    width: 56px; height: 56px;
    border-radius: 50%;
    background: var(--ok-teal);
    color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.3rem; font-weight: 800;
    margin: 0 auto 18px;
    box-shadow: 0 4px 18px rgba(0,184,169,0.3);
    position: relative; z-index: 2;
    border: 3px solid #fff;
  }
  .ok-step-card h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 0.96rem; font-weight: 700;
    margin-bottom: 8px;
  }
  .ok-step-card p { font-size: 0.85rem; color: var(--ok-mid); line-height: 1.65; }

  /* ─────────── MEMBERSHIP PLANS ─────────── */
  .ok-plans { background: #fff; }
  .ok-plans-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    align-items: start;
  }
  .ok-plan-card {
    border-radius: 18px;
    padding: 28px 24px;
    border: 2px solid var(--ok-border);
    background: #fff;
    opacity: 0; transform: translateY(28px);
    transition: opacity 0.55s, transform 0.55s, box-shadow 0.3s;
    position: relative;
    overflow: hidden;
  }
  .ok-plan-card.ok-vis { opacity: 1; transform: translateY(0); }
  .ok-plan-card:hover { box-shadow: 0 14px 44px rgba(0,184,169,0.15); }
  .ok-plan-card.ok-gold-plan   { border-color: var(--ok-gold);    }
  .ok-plan-card.ok-diamond-plan { border-color: var(--ok-diamond); }
  .ok-plan-badge {
    position: absolute; top: 14px; right: 14px;
    background: var(--ok-teal); color: #fff;
    border-radius: 20px; padding: 3px 10px;
    font-size: 0.72rem; font-weight: 700;
  }
  .ok-gold-plan    .ok-plan-badge { background: var(--ok-gold); }
  .ok-diamond-plan .ok-plan-badge { background: var(--ok-diamond); }
  .ok-plan-name {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem; font-weight: 800;
    margin-bottom: 4px;
  }
  .ok-plan-price {
    font-family: 'Poppins', sans-serif;
    font-size: 2.2rem; font-weight: 800;
    color: var(--ok-teal); margin: 10px 0 4px;
  }
  .ok-gold-plan    .ok-plan-price { color: var(--ok-gold); }
  .ok-diamond-plan .ok-plan-price { color: var(--ok-diamond); }
  .ok-plan-price sup { font-size: 1rem; vertical-align: super; }
  .ok-plan-price span { font-size: 0.85rem; color: var(--ok-light); font-weight: 400; }
  .ok-plan-divider { border: none; border-top: 1.5px solid var(--ok-border); margin: 16px 0; }
  .ok-plan-features { list-style: none; display: flex; flex-direction: column; gap: 7px; margin-bottom: 22px; }
  .ok-plan-features li {
    display: flex; align-items: flex-start; gap: 8px;
    font-size: 0.83rem; color: var(--ok-mid); line-height: 1.5;
  }
  .ok-feat-icon { flex-shrink: 0; font-size: 0.9rem; margin-top: 1px; }
  .ok-feat-yes  { color: var(--ok-teal); }
  .ok-feat-no   { color: #ccc; }
  .ok-plan-btn {
    width: 100%; padding: 12px;
    border-radius: 8px; border: none;
    font-weight: 700; font-size: 0.9rem;
    cursor: pointer; font-family: 'Nunito', sans-serif;
    transition: all 0.22s;
  }
  .ok-plan-btn-silver  { background: var(--ok-teal-light); color: var(--ok-teal-dark); }
  .ok-plan-btn-silver:hover  { background: var(--ok-teal); color: #fff; }
  .ok-plan-btn-gold    { background: #FEF3C7; color: #92400E; }
  .ok-plan-btn-gold:hover    { background: var(--ok-gold); color: #fff; }
  .ok-plan-btn-diamond { background: #EDE9FE; color: #4338CA; }
  .ok-plan-btn-diamond:hover { background: var(--ok-diamond); color: #fff; }

  /* ─────────── EMERGENCY CARE ─────────── */
  .ok-emergency { background: var(--ok-soft); }
  .ok-emg-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }
  .ok-emg-img img {
    width: 100%; border-radius: 14px;
    object-fit: cover; height: 320px;
    box-shadow: 0 12px 36px rgba(0,0,0,0.12);
  }
  .ok-emg-text h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.4rem, 2.5vw, 1.9rem);
    font-weight: 800; margin-bottom: 16px; line-height: 1.25;
  }
  .ok-emg-text h2 span { color: #EF4444; }
  .ok-emg-text > p { color: var(--ok-mid); font-size: 0.93rem; line-height: 1.8; margin-bottom: 24px; }
  .ok-emg-features { display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }
  .ok-emg-feat { display: flex; gap: 14px; align-items: flex-start; }
  .ok-emg-feat-icon {
    width: 40px; height: 40px; border-radius: 8px;
    background: #FEE2E2; color: #EF4444;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; flex-shrink: 0;
  }
  .ok-emg-feat h4 { font-weight: 700; font-size: 0.93rem; margin-bottom: 3px; }
  .ok-emg-feat p  { font-size: 0.84rem; color: var(--ok-mid); line-height: 1.6; }

  /* ─────────── PASSPORT ─────────── */
  .ok-passport { background: #fff; }
  .ok-passport-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
  .ok-passport-left h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.4rem, 2.5vw, 1.9rem);
    font-weight: 800; margin-bottom: 16px;
  }
  .ok-passport-left h2 span { color: var(--ok-teal); }
  .ok-passport-left > p { color: var(--ok-mid); font-size: 0.93rem; line-height: 1.8; margin-bottom: 28px; }
  .ok-passport-right { display: flex; flex-direction: column; gap: 20px; }
  .ok-passport-feat {
    display: flex; gap: 16px; align-items: flex-start;
    padding: 20px 22px; border-radius: 12px;
    border: 1.5px solid var(--ok-border);
    background: var(--ok-soft);
    transition: box-shadow 0.25s, transform 0.25s;
  }
  .ok-passport-feat:hover { box-shadow: 0 6px 22px rgba(0,184,169,0.12); transform: translateY(-2px); }
  .ok-passport-feat-icon {
    width: 44px; height: 44px; border-radius: 10px;
    background: var(--ok-teal-light);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; flex-shrink: 0;
  }
  .ok-passport-feat h4 { font-weight: 700; font-size: 0.96rem; margin-bottom: 5px; }
  .ok-passport-feat p  { font-size: 0.86rem; color: var(--ok-mid); line-height: 1.65; }

  /* ─────────── TAKE FIRST STEP ─────────── */
  .ok-cta {
    background: linear-gradient(135deg, #e6faf8 0%, #d0f5f1 50%, #eafff8 100%);
    padding: 80px 0;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .ok-cta h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 800; margin-bottom: 16px;
  }
  .ok-cta h2 span { color: var(--ok-teal); }
  .ok-cta p {
    color: var(--ok-mid); font-size: 0.97rem;
    line-height: 1.75; max-width: 560px;
    margin: 0 auto 32px;
  }

  /* ─────────── FADE-UP ANIMATION ─────────── */
  .ok-fade-up {
    opacity: 0; transform: translateY(28px);
    transition: opacity 0.6s, transform 0.6s;
  }
  .ok-fade-up.ok-vis { opacity: 1; transform: translateY(0); }

  /* ─────────── RESPONSIVE ─────────── */
  @media (max-width: 960px) {
    .ok-pioneer-inner,
    .ok-commit-inner,
    .ok-emg-inner,
    .ok-passport-inner { grid-template-columns: 1fr; }
    .ok-plans-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
    .ok-steps-grid { grid-template-columns: 1fr 1fr; }
    .ok-steps-grid::before { display: none; }
  }
  @media (max-width: 640px) {
    .ok-hero-inner { flex-direction: column; align-items: flex-start; }
    .ok-hero-img-wrap { width: 100%; }
    .ok-steps-grid { grid-template-columns: 1fr; }
    .ok-network-tabs { gap: 8px; }
  }
`;

const oskyStyles = `${styles}\n${subpagesHomeAlignCss}`;

/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */
const CORE_VALUES = [
  { icon: "⭐", title: "Integrity", desc: "Upholding transparency and ethical standards in every service we provide." },
  { icon: "❤️", title: "Empathy", desc: "Genuinely caring for the well-being and health of every single patient." },
  { icon: "♿", title: "Accessibility", desc: "Making top-quality healthcare and treatments easily available to everyone, irrespective of geography." },
  { icon: "💡", title: "Innovation", desc: "Continuously improving our services to provide the best possible care and experience." },
  { icon: "🏘️", title: "Community Focus", desc: "Ensuring that health benefits reach and positively impact every corner of the community." },
];

const SERVICE_TABS = [
  {
    id: "doctor",
    icon: "👨‍⚕️",
    label: "Doctor Consultation",
    title: "Doctor Consultation Benefits",
    desc: "As an OSKY cardholder, you receive unlimited discounts on consultation fees with both general physicians and specialists in our network, along with priority appointment scheduling.",
    chips: ["Unlimited Discounts", "Priority Scheduling", "General & Specialist", "Video Consultation"],
  },
  {
    id: "diagnostics",
    icon: "🔬",
    label: "Diagnostics",
    title: "Diagnostic Services",
    desc: "Access discounted lab tests, X-rays, MRI, CT scans and pathology services at partner diagnostic centres across Odisha.",
    chips: ["Lab Tests", "X-Ray & Imaging", "MRI / CT Scan", "Home Sample Collection"],
  },
  {
    id: "pharmacy",
    icon: "💊",
    label: "Pharmacy",
    title: "Pharmacy Discounts",
    desc: "Get up to 30% off on branded and generic medicines at partner pharmacies. Your OSKY card works both at the counter and for online orders.",
    chips: ["Up to 30% Off", "Generic Medicines", "Branded Medicines", "Online Orders"],
  },
  {
    id: "dental",
    icon: "🦷",
    label: "Dental & Vision",
    title: "Dental & Vision Care",
    desc: "Discounts on dental procedures, eye check-ups, spectacles, and contact lenses at a wide network of dental clinics and optical centres.",
    chips: ["Dental Check-ups", "Eye Exams", "Spectacles", "Root Canal & More"],
  },
  {
    id: "wellness",
    icon: "🧘",
    label: "Wellness",
    title: "Wellness & Preventive Care",
    desc: "Take advantage of annual health check-up packages, nutrition counselling, mental health support, and fitness-related benefits.",
    chips: ["Annual Health Check", "Nutrition Counselling", "Mental Health", "Fitness Benefits"],
  },
  {
    id: "emergency",
    icon: "🚑",
    label: "Emergency",
    title: "Emergency Assistance",
    desc: "24/7 ambulance assistance, emergency helpline access, and priority admission support at empanelled hospitals across the state.",
    chips: ["24/7 Helpline", "Ambulance Support", "Priority Admission", "Hospital Network"],
  },
];

const STEPS = [
  { num: "1", icon: "📋", title: "Choose Your Plan", desc: "Pick the Silver, Gold, or Diamond plan that best fits your family's healthcare needs." },
  { num: "2", icon: "✍️", title: "Easy Registration", desc: "Fill a simple online form. Verification is quick and the process takes only minutes." },
  { num: "3", icon: "💳", title: "Receive Your OSKY Card", desc: "Your physical and digital OSKY card will be delivered or made available instantly." },
  { num: "4", icon: "🏥", title: "Access Your Benefits", desc: "Start using your card at partner hospitals, clinics, pharmacies, and labs from day one." },
];

const SILVER_FEATURES = [
  { text: "Doctor Consultations (GP)", yes: true },
  { text: "Diagnostic Discounts – 10%", yes: true },
  { text: "Pharmacy Discounts – 10%", yes: true },
  { text: "Digital Health Card", yes: true },
  { text: "Emergency Helpline Access", yes: true },
  { text: "Specialist Consultations", yes: false },
  { text: "Annual Health Check-up", yes: false },
  { text: "Vision & Dental Benefits", yes: false },
  { text: "Dedicated Relationship Manager", yes: false },
];
const GOLD_FEATURES = [
  { text: "Doctor Consultations (GP + Specialist)", yes: true },
  { text: "Diagnostic Discounts – 20%", yes: true },
  { text: "Pharmacy Discounts – 20%", yes: true },
  { text: "Digital + Physical Card", yes: true },
  { text: "Emergency Helpline Access", yes: true },
  { text: "Annual Health Check-up Package", yes: true },
  { text: "Vision & Dental Benefits", yes: true },
  { text: "Dedicated Relationship Manager", yes: false },
  { text: "Priority Hospital Admission", yes: false },
];
const DIAMOND_FEATURES = [
  { text: "Unlimited GP + Specialist Consultations", yes: true },
  { text: "Diagnostic Discounts – 30%", yes: true },
  { text: "Pharmacy Discounts – 30%", yes: true },
  { text: "Digital + Physical Premium Card", yes: true },
  { text: "24/7 Emergency Helpline", yes: true },
  { text: "Comprehensive Annual Health Check", yes: true },
  { text: "Vision, Dental & Mental Health", yes: true },
  { text: "Dedicated Relationship Manager", yes: true },
  { text: "Priority Hospital Admission", yes: true },
];

const PASSPORT_FEATS = [
  { icon: "🏷️", title: "Instant Discounts", desc: "Your OSKY card gives instant discounts not just on consultations but across diagnostics, pharmacy, and information." },
  { icon: "🌐", title: "Wide Network Access", desc: "The card is accepted as a trust mark at every empanelled hospital, clinic, lab, and pharmacy in our network." },
  { icon: "💳", title: "Digital & Physical Card", desc: "Each member comes with a dedicated digital card that can be stored in your wallet for easy, instant access to all benefits." },
];

/* ═══════════════════════════════════════════════════
   HOOK
═══════════════════════════════════════════════════ */
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

function FadeUp({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const vis = useInView(ref);
  return (
    <div
      ref={ref}
      className={`ok-fade-up${vis ? " ok-vis" : ""}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PLAN CARD
═══════════════════════════════════════════════════ */
function PlanCard({ name, price, features, btnClass, cardClass, badge, delay }) {
  const ref = useRef(null);
  const vis = useInView(ref);
  return (
    <div
      ref={ref}
      className={`ok-plan-card ${cardClass}${vis ? " ok-vis" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {badge && <span className="ok-plan-badge">{badge}</span>}
      <div className="ok-plan-name">{name}</div>
      <div className="ok-plan-price">
        <sup>₹</sup>{price}<span>/yr</span>
      </div>
      <hr className="ok-plan-divider" />
      <ul className="ok-plan-features">
        {features.map((f, i) => (
          <li key={i}>
            <span className={`ok-feat-icon ${f.yes ? "ok-feat-yes" : "ok-feat-no"}`}>
              {f.yes ? "✔" : "✖"}
            </span>
            {f.text}
          </li>
        ))}
      </ul>
      <button className={`ok-plan-btn ${btnClass}`}>Get Started</button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SERVICE NETWORK TABS
═══════════════════════════════════════════════════ */
function ServiceNetwork() {
  const [active, setActive] = useState("doctor");
  const tab = SERVICE_TABS.find(t => t.id === active);
  return (
    <section className="ok-section ok-network">
      <div className="ok-container">
        <h2 className="ok-heading">Our Integrated Service Network</h2>
        <p className="ok-subtext">Click on any service below to learn how our network supports your health and well-being at every level.</p>
        <div className="ok-network-tabs">
          {SERVICE_TABS.map(t => (
            <button
              key={t.id}
              className={`ok-tab-btn${active === t.id ? " active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>
        <div className="ok-tab-content" key={active}>
          <h3>{tab.title}</h3>
          <p>{tab.desc}</p>
          <div className="ok-tab-benefits">
            {tab.chips.map((c, i) => <span key={i} className="ok-benefit-chip">{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════ */
export const OskyMemberShip = () => {
  return (
    <>
      <style>{oskyStyles}</style>
      <div className="page-wrapper">
        <SiteHeader />
        <div className="ok-page lt-home-type">

        {/* ── HERO ── */}
        <section className="ok-hero">
          <div className="ok-hero-bubble b1" />
          <div className="ok-hero-bubble b2" />
          <div className="ok-container">
            <div className="ok-hero-inner">
              <div className="ok-hero-text">
                <h1>
                  Accessible<br />Healthcare for<br />
                  <span>Every Family in<br />Odisha</span>
                </h1>
                <p>
                  Join OSKY for accessible membership plans that provide timely medical consultations, diagnostics, and wellness programs at a minimal cost.
                </p>
                <div className="ok-hero-btns">
                  <a href="#ok-plans" className="ok-btn ok-btn-teal">Explore Membership Plans</a>
                  <a href="#ok-steps" className="ok-btn ok-btn-outline">How It Works</a>
                </div>
              </div>
              <div className="ok-hero-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&auto=format&fit=crop&q=80"
                  alt="Healthcare access"
                  onError={e => { e.target.src = "https://via.placeholder.com/400x380/e0f7f5/00B8A9?text=OSKY+Health"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── PIONEERING ── */}
        <section className="ok-section ok-pioneer">
          <div className="ok-container">
            <div className="ok-pioneer-inner">
              <FadeUp delay={0}>
                <div className="ok-pioneer-left">
                  <h2>Pioneering a Healthier Future for Odisha</h2>
                  <p>
                    The Odisha Swasthya Kalyan Yojana (OSKY) is a pioneering healthcare initiative by Y Way to Healthcare, designed to make accessible, affordable, and comprehensive health coverage in the people of Odisha. In 2021, we believe that quality healthcare is a fundamental right, not a luxury. OSKY brings preventive, curative, and wellness services directly to every community.
                  </p>
                  <p>
                    Powered by our expansive hospital and clinic network, OSKY is committed to bridging the gap between healthcare providers and the community, making health management simpler, reliable, and affordable for life.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={150}>
                <div className="ok-pioneer-right">
                  <h3>Our Core Values</h3>
                  <div className="ok-values-list">
                    {CORE_VALUES.map((v, i) => (
                      <div key={i} className="ok-value-item">
                        <div className="ok-value-icon">{v.icon}</div>
                        <div>
                          <h4>{v.title}</h4>
                          <p>{v.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── COMMITMENT ── */}
        <section className="ok-section ok-commitment">
          <div className="ok-container">
            <div className="ok-commit-inner">
              <FadeUp delay={0}>
                <div className="ok-commit-img">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&auto=format&fit=crop&q=80"
                    alt="Healthcare technology"
                    onError={e => { e.target.src = "https://via.placeholder.com/520x380/e0f7f5/00B8A9?text=Healthcare"; }}
                  />
                </div>
              </FadeUp>
              <FadeUp delay={160}>
                <div className="ok-commit-text">
                  <h2>Our Commitment to a <span>Healthier Odisha</span></h2>
                  <p>
                    At the heart of OSKY is a powerful mission and a clear vision for the future of healthcare in our community.
                  </p>
                  <div className="ok-commit-box">
                    <h4>Our Mission</h4>
                    <p>To provide accessible, affordable, and reliable healthcare to every citizen of Odisha through innovative membership plans, a growing network of partner providers, and technology-driven care for all.</p>
                  </div>
                  <div className="ok-commit-box" style={{ borderLeftColor: "var(--ok-green)" }}>
                    <h4>Our Vision</h4>
                    <p>A society where every individual in Odisha has a rightful, privileged, and equal standing that is grounded in wellness, preventive care, and a holistic health management model, transparent and inclusive.</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── SERVICE NETWORK TABS ── */}
        <ServiceNetwork />

        {/* ── GETTING STARTED ── */}
        <section className="ok-section ok-start" id="ok-steps">
          <div className="ok-container">
            <h2 className="ok-heading">Getting Started is Simple</h2>
            <p className="ok-subtext">Follow these simple steps to ensure a world of healthcare protection for you and your family.</p>
            <div className="ok-steps-grid">
              {STEPS.map((s, i) => {
                const ref = useRef(null);
                const vis = useInView(ref);
                return (
                  <div
                    key={i}
                    ref={ref}
                    className={`ok-step-card${vis ? " ok-vis" : ""}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <div className="ok-step-num">{s.icon}</div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── MEMBERSHIP PLANS ── */}
        <section className="ok-section ok-plans" id="ok-plans">
          <div className="ok-container">
            <h2 className="ok-heading">OSKY Membership Plans</h2>
            <p className="ok-subtext">Choose the right membership while enjoying the most comprehensive, one-stop healthcare access.</p>
            <div className="ok-plans-grid">
              <PlanCard
                name="Silver Plan"
                price="299"
                features={SILVER_FEATURES}
                btnClass="ok-plan-btn-silver"
                cardClass=""
                badge="Starter"
                delay={0}
              />
              <PlanCard
                name="Gold Plan"
                price="999"
                features={GOLD_FEATURES}
                btnClass="ok-plan-btn-gold"
                cardClass="ok-gold-plan"
                badge="Most Popular"
                delay={120}
              />
              <PlanCard
                name="Diamond Plan"
                price="1999"
                features={DIAMOND_FEATURES}
                btnClass="ok-plan-btn-diamond"
                cardClass="ok-diamond-plan"
                badge="Premium"
                delay={240}
              />
            </div>
          </div>
        </section>

        {/* ── EMERGENCY CARE ── */}
        <section className="ok-section ok-emergency">
          <div className="ok-container">
            <div className="ok-emg-inner">
              <FadeUp delay={0}>
                <div className="ok-emg-img">
                  <img
                    src="https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=700&auto=format&fit=crop&q=80"
                    alt="Emergency ambulance"
                    onError={e => { e.target.src = "https://via.placeholder.com/520x320/ffe0e0/EF4444?text=Emergency+Care"; }}
                  />
                </div>
              </FadeUp>
              <FadeUp delay={160}>
                <div className="ok-emg-text">
                  <h2>Reliable <span>Emergency Care</span>, Around the Clock</h2>
                  <p>
                    As an OSKY cardholder, the network provides swift access to emergency services, ensuring you get the critical care you need, right when you need it most.
                  </p>
                  <div className="ok-emg-features">
                    {[
                      { icon: "🕐", title: "24/7 Availability", desc: "Emergency ambulance services are available 24 hours a day, 7 days a week, across all empanelled zones." },
                      { icon: "🏥", title: "Access to All OPD Departments", desc: "Your OSKY card provides direct access to all OPD departments in 250+ partner hospitals across Odisha." },
                      { icon: "📚", title: "Ambulance Guidance", desc: "Receive comprehensive education on access to care, ensuring you always know what to do in a medical emergency." },
                    ].map((f, i) => (
                      <div key={i} className="ok-emg-feat">
                        <div className="ok-emg-feat-icon">{f.icon}</div>
                        <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                      </div>
                    ))}
                  </div>
                  <a href="#ok-plans" className="ok-btn ok-btn-red">📞 Call Emergency Helpline</a>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── PASSPORT TO HEALTH ── */}
        <section className="ok-section ok-passport">
          <div className="ok-container">
            <div className="ok-passport-inner">
              <FadeUp delay={0}>
                <div className="ok-passport-left">
                  <h2>Your <span>Passport to Health</span> &amp; Wellness</h2>
                  <p>
                    Your membership card is more than a card — it is your passport to a network of affordable, accessible, and high-quality care across our entire network in Odisha.
                  </p>
                  <a href="#ok-plans" className="ok-btn ok-btn-teal">▶ Become an OSKY Member</a>
                </div>
              </FadeUp>
              <FadeUp delay={160}>
                <div className="ok-passport-right">
                  {PASSPORT_FEATS.map((f, i) => (
                    <div key={i} className="ok-passport-feat">
                      <div className="ok-passport-feat-icon">{f.icon}</div>
                      <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── TAKE FIRST STEP CTA ── */}
        <section className="ok-cta">
          <div className="ok-container">
            <h2>Take the <span>First Step</span> Towards a Healthier Life</h2>
            <p>
              Ready to join the OSKY community today? Book an obligation-free consultation and see how OSKY membership can work for you and your family.
            </p>
            <a href="#ok-plans" className="ok-btn ok-btn-teal">▶ Become an OSKY Member</a>
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