import React, { useEffect, useRef, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSection } from "../components/NewsletterSection";
import { subpagesHomeAlignCss } from "../styles/subpagesHomeAlign";

/* ─────────────────────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────────────────────── */
const CareersStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap');

    :root {
      --teal:        #2bbfbf;
      --teal2:       #1a9e9e;
      --teal-light:  #e8f9f9;
      --green:       #6dc04b;
      --green2:      #55a337;
      --dark:        #1a2e35;
      --text:        #4a5568;
      --light:       #f7fbfb;
      --white:       #ffffff;
      --border:      #e2ecec;
      --shadow:      0 4px 24px rgba(43,191,191,.13);
      --radius:      14px;
    }

    @keyframes cr-fadeUp {
      from { opacity:0; transform:translateY(28px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes cr-float {
      0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)}
    }
    @keyframes cr-pulse {
      0%  {box-shadow:0 0 0 0 rgba(43,191,191,.45)}
      70% {box-shadow:0 0 0 14px rgba(43,191,191,0)}
      100%{box-shadow:0 0 0 0 rgba(43,191,191,0)}
    }
    @keyframes cr-slideIn {
      from{opacity:0;transform:translateX(-18px)} to{opacity:1;transform:translateX(0)}
    }
    @keyframes cr-blob {
      0%,100%{border-radius:60% 40% 50% 60%/60% 50% 60% 40%}
      33%    {border-radius:50% 60% 40% 50%/40% 60% 50% 60%}
      66%    {border-radius:40% 50% 60% 40%/50% 40% 60% 50%}
    }

    .cr-reveal { opacity:0; transform:translateY(26px); transition:opacity .6s ease,transform .6s ease; }
    .cr-visible { opacity:1 !important; transform:translateY(0) !important; }

    /* ── hero ── */
    .cr-hero {
      background:linear-gradient(140deg,#e8f9f9 0%,#cef3f3 55%,#b8ebeb 100%);
      min-height:460px; overflow:hidden; position:relative;
    }
    .cr-hero::before {
      content:''; position:absolute; right:-60px; bottom:-60px;
      width:340px; height:340px; border-radius:50%;
      background:rgba(43,191,191,.08); pointer-events:none;
    }
    .cr-hero-inner {
      max-width:1180px; margin:0 auto; padding:70px 28px;
      display:flex; align-items:center; gap:48px;
    }
    .cr-hero-copy { flex:1; animation:cr-fadeUp .7s ease both; }
    .cr-hero-copy h1 {
      font-family:'Poppins',sans-serif;
      font-size:clamp(28px,4vw,48px); font-weight:800;
      line-height:1.12; color:var(--dark); margin-bottom:16px;
    }
    .cr-hero-copy h1 em { color:var(--teal); font-style:normal; }
    .cr-hero-copy p { font-size:15.5px; color:var(--text); line-height:1.75; max-width:440px; margin-bottom:28px; }
    .cr-hero-img {
      flex:0 0 400px;
      animation:cr-float 4.5s ease-in-out infinite, cr-fadeUp .9s ease both .15s;
    }
    .cr-hero-img img {
      width:100%; border-radius:20px 20px 20px 60px;
      object-fit:cover; height:320px;
      box-shadow:0 20px 48px rgba(43,191,191,.18);
    }

    /* ── buttons ── */
    .cr-btn {
      display:inline-flex; align-items:center; gap:8px;
      background:var(--green); color:#fff; border:none;
      padding:13px 28px; border-radius:50px;
      font-family:'Poppins',sans-serif; font-weight:600; font-size:14px;
      cursor:pointer; text-decoration:none;
      transition:background .25s,transform .2s,box-shadow .25s;
    }
    .cr-btn:hover { background:var(--green2); transform:translateY(-2px); box-shadow:0 8px 24px rgba(109,192,75,.32); }
    .cr-btn-teal { background:var(--teal); }
    .cr-btn-teal:hover { background:var(--teal2); box-shadow:0 8px 24px rgba(43,191,191,.32); }

    /* ── section commons ── */
    .cr-sec { padding:80px 28px; }
    .cr-sec-inner { max-width:1180px; margin:0 auto; }
    .cr-sec-head { text-align:center; margin-bottom:52px; }
    .cr-sec-head h2 {
      font-family:'Poppins',sans-serif;
      font-size:clamp(22px,2.8vw,34px); font-weight:700; color:var(--dark); margin-bottom:10px;
    }
    .cr-sec-head p { color:var(--text); font-size:15px; max-width:500px; margin:0 auto; line-height:1.7; }

    /* ── mission cards ── */
    .cr-mission-grid {
      display:grid; grid-template-columns:repeat(auto-fit,minmax(210px,1fr)); gap:26px;
    }
    .cr-mcard {
      background:var(--white); border:1.5px solid var(--border);
      border-radius:var(--radius); padding:30px 24px 26px;
      transition:box-shadow .3s,transform .3s,border-color .3s;
    }
    .cr-mcard:hover { box-shadow:var(--shadow); transform:translateY(-5px); border-color:var(--teal); }
    .cr-mcard-icon {
      width:50px; height:50px; border-radius:12px; background:var(--teal-light);
      display:flex; align-items:center; justify-content:center; margin-bottom:16px;
      transition:background .3s;
    }
    .cr-mcard:hover .cr-mcard-icon { background:var(--teal); }
    .cr-mcard:hover .cr-mcard-icon svg { stroke:#fff !important; }
    .cr-mcard h3 { font-family:'Poppins',sans-serif; font-size:15px; font-weight:700; margin-bottom:8px; color:var(--dark); }
    .cr-mcard p  { font-size:13.5px; color:var(--text); line-height:1.65; }

    /* ── timeline ── */
    .cr-timeline-wrap {
      max-width:800px; margin:0 auto; position:relative;
      padding:0 0 8px;
    }
    /* the continuous vertical teal line */
    .cr-timeline-line {
      position:absolute;
      left:50%; top:0; bottom:0;
      width:2px;
      background:var(--teal);
      transform:translateX(-50%);
      z-index:0;
    }

    /* one row = left-card + center-dot + right-card (one side is always empty) */
    .cr-step {
      display:grid;
      grid-template-columns:1fr 56px 1fr;
      align-items:flex-start;
      position:relative;
      margin-bottom:40px;
      z-index:1;
    }
    .cr-step:last-child { margin-bottom:0; }

    /* the circular dot on the line */
    .cr-step-dot {
      width:36px; height:36px; border-radius:50%;
      background:var(--teal); color:#fff;
      font-family:'Poppins',sans-serif; font-weight:700; font-size:11px;
      display:flex; align-items:center; justify-content:center;
      margin:0 auto;
      position:relative; z-index:2;
      box-shadow:0 0 0 5px var(--teal-light), 0 0 0 7px rgba(43,191,191,.18);
      animation:cr-pulse 2.8s ease-in-out infinite;
      flex-shrink:0;
    }

    /* white card — no coloured border, exactly like the image */
    .cr-step-card {
      background:var(--white);
      border-radius:12px;
      padding:20px 20px 20px 18px;
      box-shadow:0 2px 18px rgba(0,0,0,.07);
      border:1px solid #eaf2f2;
      transition:box-shadow .3s, transform .3s;
      position:relative;
    }
    .cr-step-card:hover {
      box-shadow:0 6px 28px rgba(43,191,191,.15);
      transform:translateY(-3px);
    }

    /* small coloured icon badge top-left inside card */
    .cr-step-icon {
      width:32px; height:32px; border-radius:8px;
      background:var(--teal-light);
      display:flex; align-items:center; justify-content:center;
      margin-bottom:10px;
    }
    .cr-step-icon svg { width:16px; height:16px; }

    .cr-step-label {
      font-size:10.5px; font-weight:700; text-transform:uppercase;
      letter-spacing:.07em; color:var(--teal); margin-bottom:4px;
    }
    .cr-step-card h3 {
      font-family:'Poppins',sans-serif;
      font-size:15px; font-weight:700; margin-bottom:6px; color:var(--dark);
    }
    .cr-step-card p { font-size:13px; color:var(--text); line-height:1.65; }

    /* empty cell on the opposite side */
    .cr-step-empty { /* just occupies grid column */ }

    /* card sits on LEFT  → col 1, dot col 2, empty col 3 */
    .cr-step-card-left  { grid-column:1; margin-right:16px; }
    .cr-step-dot-col    { grid-column:2; display:flex; align-items:flex-start; padding-top:14px; }
    .cr-step-empty-right{ grid-column:3; }

    /* card sits on RIGHT → empty col 1, dot col 2, card col 3 */
    .cr-step-empty-left { grid-column:1; }
    .cr-step-card-right { grid-column:3; margin-left:16px; }

    /* responsive */
    @media(max-width:640px){
      .cr-timeline-line { left:18px; }
      .cr-step { grid-template-columns:36px 1fr; grid-template-rows:auto; }
      .cr-step-dot-col    { grid-column:1; grid-row:1; padding-top:12px; }
      .cr-step-card-left,
      .cr-step-card-right { grid-column:2; grid-row:1; margin:0 0 0 12px; }
      .cr-step-empty-left,
      .cr-step-empty-right{ display:none; }
    }

    /* ── testimonials slider ── */
    .cr-testi-wrap { position:relative; }
    .cr-testi-slider { overflow:hidden; }
    .cr-testi-track {
      display:flex; transition:transform .45s cubic-bezier(.4,0,.2,1);
    }
    .cr-testi-slide { flex:0 0 50%; padding:0 14px; box-sizing:border-box; }
    .cr-testi-card {
      border:1.5px solid var(--border); border-radius:var(--radius);
      padding:32px 26px; background:var(--white); position:relative;
      transition:box-shadow .3s,transform .3s;
    }
    .cr-testi-card:hover { box-shadow:var(--shadow); transform:translateY(-3px); }
    .cr-quote { position:absolute; top:14px; left:20px; font-size:60px; line-height:1; font-family:'Georgia',serif; color:var(--teal); opacity:.14; }
    .cr-testi-card > p { font-size:14px; color:var(--text); line-height:1.78; margin-bottom:20px; }
    .cr-testi-author { display:flex; align-items:center; gap:12px; }
    .cr-avatar { width:46px; height:46px; border-radius:50%; object-fit:cover; border:2.5px solid var(--teal); }
    .cr-author-name { font-weight:700; font-size:14px; color:var(--dark); }
    .cr-author-role { font-size:12px; color:var(--teal); }
    .cr-slider-btn {
      position:absolute; top:50%; transform:translateY(-50%);
      width:40px; height:40px; border-radius:50%; border:2px solid var(--border);
      background:var(--white); cursor:pointer; display:flex; align-items:center; justify-content:center;
      font-size:18px; color:var(--dark); transition:border-color .2s,background .2s,color .2s;
      z-index:2;
    }
    .cr-slider-btn:hover { border-color:var(--teal); background:var(--teal); color:#fff; }
    .cr-slider-prev { left:-22px; }
    .cr-slider-next { right:-22px; }
    .cr-slider-dots { display:flex; justify-content:center; gap:8px; margin-top:20px; }
    .cr-dot {
      width:8px; height:8px; border-radius:50%; background:var(--border);
      cursor:pointer; transition:background .2s,transform .2s;
    }
    .cr-dot.active { background:var(--teal); transform:scale(1.3); }

    /* ── FAQ ── */
    .cr-faq-list { max-width:760px; margin:0 auto; display:flex; flex-direction:column; gap:10px; }
    .cr-faq-item {
      background:var(--green); border-radius:8px; overflow:hidden;
      transition:background .25s;
    }
    .cr-faq-item.open { background:var(--green2); }
    .cr-faq-q {
      display:flex; justify-content:space-between; align-items:center;
      padding:17px 22px; cursor:pointer;
      font-weight:700; font-size:13px; color:#fff;
      text-transform:uppercase; letter-spacing:.04em; user-select:none;
    }
    .cr-faq-icon {
      width:26px; height:26px; border-radius:50%;
      background:rgba(255,255,255,.25);
      display:flex; align-items:center; justify-content:center;
      font-size:16px; color:#fff; flex-shrink:0;
      transition:transform .3s;
    }
    .cr-faq-item.open .cr-faq-icon { transform:rotate(45deg); }
    .cr-faq-body {
      max-height:0; overflow:hidden;
      transition:max-height .4s ease,padding .3s;
      font-size:14px; color:rgba(255,255,255,.9); line-height:1.7; padding:0 22px;
    }
    .cr-faq-item.open .cr-faq-body { max-height:160px; padding-bottom:18px; }

    /* ── apply form ── */
    .cr-apply-wrap {
      display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center;
    }
    .cr-apply-left h2 {
      font-family:'Poppins',sans-serif;
      font-size:clamp(24px,3vw,38px); font-weight:800; color:var(--dark); margin-bottom:12px;
    }
    .cr-apply-left h2 em { color:var(--teal); font-style:normal; }
    .cr-apply-left p { font-size:15px; color:var(--text); line-height:1.7; }
    .cr-blob-decor {
      width:140px; height:140px; margin-top:32px;
      background:linear-gradient(135deg,var(--teal-light) 0%,var(--teal) 100%);
      animation:cr-blob 6s ease-in-out infinite;
      opacity:.55;
    }
    .cr-apply-right {
      background:var(--white); border-radius:var(--radius);
      padding:32px 28px; box-shadow:0 4px 28px rgba(43,191,191,.10);
      border:1.5px solid var(--border);
    }
    .cr-apply-right h3 {
      font-family:'Poppins',sans-serif; font-size:20px; font-weight:700;
      color:var(--dark); margin-bottom:6px;
    }
    .cr-apply-right > p { font-size:13.5px; color:var(--text); margin-bottom:22px; }
    .cr-form-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px; }
    .cr-field label {
      display:block; font-size:12px; font-weight:700; color:var(--dark);
      text-transform:uppercase; letter-spacing:.04em; margin-bottom:5px;
    }
    .cr-field label span { color:var(--green); }
    .cr-field input, .cr-field select, .cr-field textarea {
      width:100%; padding:11px 14px; border:1.5px solid var(--border);
      border-radius:8px; font-family:'Nunito',sans-serif; font-size:14px;
      color:var(--dark); outline:none; background:var(--light);
      transition:border-color .25s,box-shadow .25s;
    }
    .cr-field input:focus, .cr-field select:focus, .cr-field textarea:focus {
      border-color:var(--teal); box-shadow:0 0 0 3px rgba(43,191,191,.12); background:#fff;
    }
    .cr-field textarea { resize:vertical; min-height:80px; }
    .cr-upload-area {
      border:2px dashed var(--border); border-radius:8px;
      padding:18px; text-align:center; cursor:pointer;
      transition:border-color .25s,background .25s; background:var(--light);
    }
    .cr-upload-area:hover { border-color:var(--teal); background:var(--teal-light); }
    .cr-upload-icon { font-size:26px; margin-bottom:5px; }
    .cr-upload-area p { font-size:12.5px; color:var(--text); }
    .cr-upload-area span { color:var(--teal); font-weight:700; }
    .cr-calendar {
      border:1.5px solid var(--border); border-radius:8px;
      overflow:hidden; margin-bottom:14px;
    }
    .cr-cal-header {
      background:var(--green); color:#fff; padding:10px 14px;
      display:flex; justify-content:space-between; align-items:center;
      font-weight:700; font-size:13px;
    }
    .cr-cal-grid {
      display:grid; grid-template-columns:repeat(7,1fr);
      gap:1px; background:var(--border); font-size:12px;
    }
    .cr-cal-cell {
      background:var(--white); text-align:center; padding:6px 0;
      cursor:pointer; transition:background .2s,color .2s;
    }
    .cr-cal-cell:hover { background:var(--teal-light); }
    .cr-cal-cell.active { background:var(--green); color:#fff; font-weight:700; }
    .cr-cal-cell.head { background:var(--light); font-weight:700; color:var(--text); font-size:11px; }
    .cr-submit { width:100%; margin-top:16px; justify-content:center; font-size:15px; padding:14px; }

    /* ── responsive ── */
    @media(max-width:820px){
      .cr-hero-inner { flex-direction:column; text-align:center; }
      .cr-hero-img { display:none; }
      .cr-timeline-line { left:20px; }
      .cr-step,.cr-step.cr-right { flex-direction:column; padding-left:52px; }
      .cr-step-dot { left:20px; }
      .cr-step-spacer { display:none; }
      .cr-step-card,.cr-right .cr-step-card { flex:1; border-right:none; border-left:4px solid var(--teal); }
      .cr-testi-slide { flex:0 0 100%; }
      .cr-apply-wrap { grid-template-columns:1fr; }
      .cr-blob-decor { display:none; }
      .cr-form-row { grid-template-columns:1fr; }
    }
  `}</style>
);

/* ─────────────────────────────────────────────────────────────
   REVEAL HOOK
───────────────────────────────────────────────────────────── */
function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}s`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("cr-visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ─────────────────────────────────────────────────────────────
   FAQ ITEM
───────────────────────────────────────────────────────────── */
function FaqItem({ q, a, delay }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal(delay);
  return (
    <div ref={ref} className={`cr-faq-item cr-reveal${open ? " open" : ""}`}>
      <div className="cr-faq-q" onClick={() => setOpen(p => !p)}>
        {q}
        <span className="cr-faq-icon">+</span>
      </div>
      <div className="cr-faq-body">{a}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   TESTIMONIAL SLIDER
───────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: "Knowing that my work directly contributes to improving healthcare access for thousands of people in Odisha is incredibly motivating. This is the most purpose-driven role I have ever had.",
    name: "Ritesh Behera",
    role: "Marketing Specialist, Kolkata",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "Working at L1 Way to Healthcare has been a fantastic experience. The company is committed to continuous learning, and I've been able to grow my skills faster than anywhere else in my career.",
    name: "Ankita Das",
    role: "Software Engineer, Bhubaneswar",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "The team culture here is unlike anywhere I've worked. Everyone supports each other and there's a genuine drive to do meaningful work in healthcare technology.",
    name: "Suresh Mohanty",
    role: "Product Manager, Odisha",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    quote: "The flexible work environment and continuous learning programs have allowed me to develop new skills while making a real impact in patient outcomes across the region.",
    name: "Priya Nayak",
    role: "UX Designer, Bhubaneswar",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
  },
];

function TestiSlider() {
  const [idx, setIdx] = useState(0);
  const perPage = typeof window !== "undefined" && window.innerWidth < 820 ? 1 : 2;
  const pages = Math.ceil(TESTIMONIALS.length / perPage);
  const prev = () => setIdx(p => (p - 1 + pages) % pages);
  const next = () => setIdx(p => (p + 1) % pages);
  return (
    <div className="cr-testi-wrap">
      <button className="cr-slider-btn cr-slider-prev" onClick={prev}>‹</button>
      <div className="cr-testi-slider">
        <div className="cr-testi-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {Array.from({ length: pages }).map((_, pi) => (
            <React.Fragment key={pi}>
              {TESTIMONIALS.slice(pi * perPage, pi * perPage + perPage).map((t, ti) => (
                <div key={ti} className="cr-testi-slide">
                  <div className="cr-testi-card">
                    <div className="cr-quote">"</div>
                    <p>{t.quote}</p>
                    <div className="cr-testi-author">
                      <img className="cr-avatar" src={t.img} alt={t.name} />
                      <div>
                        <div className="cr-author-name">{t.name}</div>
                        <div className="cr-author-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <button className="cr-slider-btn cr-slider-next" onClick={next}>›</button>
      <div className="cr-slider-dots">
        {Array.from({ length: pages }).map((_, i) => (
          <div key={i} className={`cr-dot${i === idx ? " active" : ""}`} onClick={() => setIdx(i)} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MINI CALENDAR
───────────────────────────────────────────────────────────── */
function MiniCalendar() {
  const [selected, setSelected] = useState(14);
  const days = ["Su","Mo","Tu","We","Th","Fr","Sa"];
  const dates = [
    null,null,null,1,2,3,4,
    5,6,7,8,9,10,11,
    12,13,14,15,16,17,18,
    19,20,21,22,23,24,25,
    26,27,28,29,30,null,null,
  ];
  return (
    <div className="cr-calendar">
      <div className="cr-cal-header">
        <span>◀</span><span>May 2026</span><span>▶</span>
      </div>
      <div className="cr-cal-grid">
        {days.map(d => <div key={d} className="cr-cal-cell head">{d}</div>)}
        {dates.map((d, i) => (
          <div
            key={i}
            className={`cr-cal-cell${d === selected ? " active" : ""}${!d ? " head" : ""}`}
            onClick={() => d && setSelected(d)}
          >
            {d || ""}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   APPLY FORM
───────────────────────────────────────────────────────────── */
function ApplyForm() {
  const [fileName, setFileName] = useState(null);
  return (
    <div className="cr-apply-right">
      <h3>Apply Now</h3>
      <p>Fill out the form below to get in touch with our team.</p>

      <div className="cr-form-row">
        <div className="cr-field">
          <label>Full Name <span>*</span></label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="cr-field">
          <label>Phone <span>*</span></label>
          <input type="tel" placeholder="+91 00000 00000" />
        </div>
      </div>

      <div className="cr-form-row">
        <div className="cr-field">
          <label>Role <span>*</span></label>
          <input type="text" placeholder="Position applied for" />
        </div>
        <div className="cr-field">
          <label>Category <span>*</span></label>
          <select defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Clinical</option>
            <option>Operations</option>
            <option>Design</option>
          </select>
        </div>
      </div>

      <div className="cr-field" style={{ marginBottom:14 }}>
        <label>Brief About Yourself <span>*</span></label>
        <textarea placeholder="Tell us about your experience and why you want to join..." />
      </div>

      <div className="cr-field" style={{ marginBottom:14 }}>
        <label>Upload Resume <span>*</span></label>
        <div className="cr-upload-area" onClick={() => document.getElementById("cr-file-input").click()}>
          <input id="cr-file-input" type="file" style={{ display:"none" }} accept=".pdf,.doc,.docx"
            onChange={e => setFileName(e.target.files[0]?.name)} />
          <div className="cr-upload-icon">📄</div>
          {fileName
            ? <p><span>{fileName}</span></p>
            : <p>Drop your file here or <span>browse</span><br/><small>PDF, DOC, DOCX – Max 5MB</small></p>
          }
        </div>
      </div>

      <div className="cr-field" style={{ marginBottom:14 }}>
        <label>Preferred Interview Date</label>
        <MiniCalendar />
      </div>

      <div className="cr-field" style={{ marginBottom:0 }}>
        <label>Email <span>*</span></label>
        <input type="email" placeholder="you@example.com" />
      </div>

      <button className="cr-btn cr-btn-teal cr-submit">Submit Application</button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SVG ICONS
───────────────────────────────────────────────────────────── */
const IconTarget = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2bbfbf" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconBook   = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2bbfbf" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const IconUsers  = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2bbfbf" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const MISSION_CARDS = [
  { icon:<IconTarget/>, title:"Real Impact",       desc:"Your work directly contributes to improving healthcare outcomes and making a tangible difference in people's lives." },
  { icon:<IconBook/>,   title:"Growth & Learning", desc:"We invest in our team with continuous learning opportunities, mentorship programs, and a clear path to career advancement." },
  { icon:<IconUsers/>,  title:"Vibrant Culture",   desc:"Join a diverse team of passionate professionals who support each other, share ideas and celebrate success together." },
];

const STEPS = [
  {
    n:"01", label:"Step 1", title:"Apply Online",
    desc:"Submit your resume and details through our simple application portal. It only takes a few minutes.",
    right:false,
    icon:<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2bbfbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  },
  {
    n:"02", label:"Step 2", title:"Initial Screening",
    desc:"Our talent acquisition team will review your application and conduct a short screening call to learn more about you.",
    right:true,
    icon:<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2bbfbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  },
  {
    n:"03", label:"Step 3", title:"Interview & Assessment",
    desc:"You will have interviews with the hiring manager and relevant team members, along with a technical or skills-based assessment.",
    right:false,
    icon:<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2bbfbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    n:"04", label:"Step 4", title:"Offer & Onboarding",
    desc:"If you're a good fit, we'll extend an offer and guide you through a smooth, welcoming onboarding process.",
    right:true,
    icon:<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2bbfbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  },
];

const FAQS = [
  { q:"What does the hiring process look like?",       a:"Our process has four stages: application, initial screening call, interview & assessment, and finally an offer with onboarding support. Most processes complete within 3–4 weeks." },
  { q:"What is the company culture like?",             a:"We foster a collaborative, inclusive environment where innovation is encouraged. We celebrate wins, support each other through challenges, and believe in work-life balance." },
  { q:"Do you offer remote work or flexible hours?",   a:"Yes — many roles offer hybrid or fully remote arrangements. Flexible hours are available for most positions depending on team needs and role requirements." },
  { q:"What are the opportunities for career growth?", a:"We offer structured growth paths, regular performance reviews, internal promotions, mentorship programs, and a dedicated learning & development budget for every employee." },
];

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export const Careers = () => {
  const rHero   = useReveal(0);
  const rMiss   = useReveal(0);
  const rPath   = useReveal(0);
  const rTesti  = useReveal(0);
  const rFaq    = useReveal(0);
  const rApply  = useReveal(0);

  return (
    <>
      <CareersStyles />
      <style>{subpagesHomeAlignCss}</style>
      <div className="page-wrapper">
        <SiteHeader />
        <div className="lt-home-type">

        {/* ══ HERO ══════════════════════════════════════════════════ */}
        <section className="cr-hero">
          <div className="cr-hero-inner">
            <div className="cr-hero-copy">
              <h1>
                Build Your Career,<br />
                Transform <em>Healthcare</em>
              </h1>
              <p>
                Join the L1 Way to Healthcare team and work on solutions that are
                making a real difference in Odisha.
              </p>
              <a href="#open-positions" className="cr-btn">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M8 6l6 6-6 6"/></svg>
                View Open Positions
              </a>
            </div>
            <div className="cr-hero-img">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                alt="Healthcare team smiling"
              />
            </div>
          </div>
        </section>

        {/* ══ MISSION — MORE THAN A JOB ═══════════════════════════ */}
        <section className="cr-sec" style={{ background:"var(--white)" }}>
          <div className="cr-sec-inner">
            <div ref={rMiss} className="cr-sec-head cr-reveal">
              <h2>More Than a Job, It's a Mission.</h2>
              <p>We're committed to fostering a culture of growth, innovation, and impact.</p>
            </div>
            <div className="cr-mission-grid">
              {MISSION_CARDS.map((c, i) => {
                const r = useReveal(i * 0.1);
                return (
                  <div key={i} ref={r} className="cr-mcard cr-reveal">
                    <div className="cr-mcard-icon">{c.icon}</div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ OPEN POSITIONS PLACEHOLDER ════════════════════════════ */}
        <section id="open-positions" className="cr-sec" style={{ background:"var(--teal-light)", padding:"56px 28px" }}>
          <div className="cr-sec-inner">
            <div className="cr-sec-head" style={{ marginBottom:32 }}>
              <h2>Open Positions</h2>
              <p>Explore current openings and find a role where you can thrive.</p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:20 }}>
              {[
                { role:"Software Engineer",       dept:"Engineering",  type:"Full-time · Remote" },
                { role:"Product Manager",         dept:"Product",      type:"Full-time · Hybrid" },
                { role:"UX/UI Designer",          dept:"Design",       type:"Full-time · Bhubaneswar" },
                { role:"Marketing Specialist",    dept:"Marketing",    type:"Full-time · Hybrid" },
                { role:"Clinical Coordinator",    dept:"Clinical",     type:"Full-time · Odisha" },
                { role:"Data Analyst",            dept:"Analytics",    type:"Full-time · Remote" },
              ].map((job, i) => {
                const r = useReveal(i * 0.07);
                return (
                  <div key={i} ref={r} className="cr-mcard cr-reveal" style={{ display:"flex", flexDirection:"column", gap:8 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                      <h3 style={{ marginBottom:0 }}>{job.role}</h3>
                      <span style={{ background:"var(--teal-light)", color:"var(--teal)", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:50, whiteSpace:"nowrap", border:"1px solid var(--teal)" }}>{job.dept}</span>
                    </div>
                    <p style={{ fontSize:12.5, color:"var(--text)" }}>{job.type}</p>
                    <a href="#apply" className="cr-btn cr-btn-teal" style={{ marginTop:8, fontSize:13, padding:"9px 20px", alignSelf:"flex-start" }}>Apply →</a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ HIRING PATH ══════════════════════════════════════════ */}
        <section className="cr-sec" style={{ background:"var(--light)" }}>
          <div className="cr-sec-inner">
            <div ref={rPath} className="cr-sec-head cr-reveal">
              <h2>Your Path to Joining Our Team</h2>
              <p>Our recruitment process is designed to be clear and transparent.</p>
            </div>
            <div className="cr-timeline-wrap">
              {/* continuous vertical line */}
              <div className="cr-timeline-line" />

              {STEPS.map((s, i) => {
                const r = useReveal(i * 0.13);
                return (
                  <div key={i} ref={r} className="cr-step cr-reveal">

                    {/* ── LEFT side ── */}
                    {!s.right ? (
                      <div className="cr-step-card cr-step-card-left">
                        <div className="cr-step-icon">{s.icon}</div>
                        <div className="cr-step-label">{s.label}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                      </div>
                    ) : (
                      <div className="cr-step-empty-left" />
                    )}

                    {/* ── centre dot ── */}
                    <div className="cr-step-dot-col">
                      <div className="cr-step-dot">{s.n}</div>
                    </div>

                    {/* ── RIGHT side ── */}
                    {s.right ? (
                      <div className="cr-step-card cr-step-card-right">
                        <div className="cr-step-icon">{s.icon}</div>
                        <div className="cr-step-label">{s.label}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                      </div>
                    ) : (
                      <div className="cr-step-empty-right" />
                    )}

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ TEAM TESTIMONIALS ════════════════════════════════════ */}
        <section className="cr-sec" style={{ background:"var(--white)" }}>
          <div className="cr-sec-inner">
            <div ref={rTesti} className="cr-sec-head cr-reveal">
              <h2>Hear from Our Team</h2>
              <p>Our employees love the culture of growth, innovation, and impact.</p>
            </div>
            <TestiSlider />
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════ */}
        <section className="cr-sec" style={{ background:"var(--light)" }}>
          <div className="cr-sec-inner">
            <div ref={rFaq} className="cr-sec-head cr-reveal">
              <h2>Questions About Your Career with Us?</h2>
              <p>We've got answers to help you with your application.</p>
            </div>
            <div className="cr-faq-list">
              {FAQS.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} delay={i * 0.07} />
              ))}
            </div>
          </div>
        </section>

        {/* ══ APPLY NOW ════════════════════════════════════════════ */}
        <section id="apply" className="cr-sec" style={{ background:"var(--white)" }}>
          <div className="cr-sec-inner">
            <div ref={rApply} className="cr-apply-wrap cr-reveal">
              <div className="cr-apply-left">
                <h2>Ready to Make a <em>Difference?</em></h2>
                <p>Join a team that's building the future of healthcare in Odisha. We'd love to hear from you.</p>
                <div className="cr-blob-decor" />
              </div>
              <ApplyForm />
            </div>
          </div>
        </section>

        </div>
        {/* ══ NEWSLETTER + FOOTER ══════════════════════════════════ */}
        <NewsletterSection
          title="Ready to Begin Your Journey to Wellness?"
          text="Whether you are a patient, partner, or future team member, we are here to support your next step."
        />
        <SiteFooter />
      </div>
    </>
  );
};

export default Careers;