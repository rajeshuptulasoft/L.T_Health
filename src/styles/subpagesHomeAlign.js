/**
 * Typography + hero shell aligned with Home.jsx / banner-two (style.css).
 * Add class `lt-home-type` on the main content wrapper (excluding SiteHeader / SiteFooter).
 * Diagnostic: add `lt-hero-home` on the hero <section> and remove conflicting inline hero background.
 */
export const subpagesHomeAlignCss = `
:root {
  --mediplace-base: #05bdec;
  --mediplace-base-rgb: 5, 189, 236;
  --mediplace-black: #16a392;
  --mediplace-black-rgb: 103, 148, 53;
}
.lt-home-type {
  font-family: "Manrope", sans-serif;
  color: #6d7e8e;
}
.lt-home-type h1,
.lt-home-type h2,
.lt-home-type h3,
.lt-home-type h4 {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  color: #123555;
}
.lt-home-type p {
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #6d7e8e;
}
/* banner-two shell */
.lt-home-type .jd-hero,
.lt-home-type .hp-hero,
.lt-home-type .cr-hero,
.lt-home-type .ok-hero,
.lt-home-type .fr-hero,
.lt-home-type .op-hero,
.lt-home-type .pk-hero,
.lt-home-type section.lt-hero-home {
  position: relative !important;
  display: block !important;
  padding: 120px 0 !important;
  background: #ebffca !important;
  border-top: 1px solid #D9D9D9 !important;
  z-index: 1;
  overflow: visible !important;
  min-height: unset !important;
}
.lt-home-type section.lt-hero-home {
  overflow: hidden;
}
@media (max-width: 991px) {
  .lt-home-type .jd-hero,
  .lt-home-type .hp-hero,
  .lt-home-type .cr-hero,
  .lt-home-type .ok-hero,
  .lt-home-type .fr-hero,
  .lt-home-type .op-hero,
  .lt-home-type .pk-hero,
  .lt-home-type section.lt-hero-home {
    padding: 72px 0 80px !important;
  }
}
.lt-home-type .hp-hero::before,
.lt-home-type .ok-hero::before,
.lt-home-type .fr-hero::before,
.lt-home-type .op-hero::before,
.lt-home-type .pk-hero::before,
.lt-home-type section.lt-hero-home::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(/assets/images/shapes/banner-one-shape-bg.jpg);
  background-attachment: scroll;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.04;
  z-index: 0;
  pointer-events: none;
}
/* JoinDoctor keeps decorative blob on ::before — texture on ::after */
.lt-home-type .jd-hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(/assets/images/shapes/banner-one-shape-bg.jpg);
  background-attachment: scroll;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.04;
  z-index: 0;
  pointer-events: none;
}
.lt-home-type .jd-hero::before {
  z-index: 1;
}
.lt-home-type .cr-hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(/assets/images/shapes/banner-one-shape-bg.jpg);
  background-attachment: scroll;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.04;
  z-index: 0;
  pointer-events: none;
}
.lt-home-type .cr-hero::before {
  z-index: 1;
}
.lt-home-type .jd-hero-inner,
.lt-home-type .hp-hero .hp-container,
.lt-home-type .cr-hero-inner,
.lt-home-type .ok-hero .ok-container,
.lt-home-type .fr-hero .fr-container,
.lt-home-type .op-hero .op-wrap,
.lt-home-type .pk-hero .pk-hero-inner,
.lt-home-type section.lt-hero-home > div {
  position: relative;
  z-index: 2;
}
.lt-home-type .ok-hero::after,
.lt-home-type .fr-hero::after,
.lt-home-type .op-hero::after,
.lt-home-type .pk-hero::after {
  display: none !important;
}
.lt-home-type .ok-hero-bubble,
.lt-home-type .hp-blob {
  z-index: 1;
}
.lt-home-type .hp-hero-img-wrap,
.lt-home-type .hp-hero-text,
.lt-home-type .fr-hero-text,
.lt-home-type .op-hero-text,
.lt-home-type .pk-hero-text {
  position: relative;
  z-index: 1;
}
/* banner-two title scale */
.lt-home-type .jd-hero-text h1,
.lt-home-type .hp-hero-text h1,
.lt-home-type .cr-hero-copy h1,
.lt-home-type .ok-hero-text h1,
.lt-home-type .fr-hero-text h1,
.lt-home-type .op-hero-text h1,
.lt-home-type .pk-hero-text h1,
.lt-home-type section.lt-hero-home h1 {
  font-size: clamp(36px, 5vw, 72px) !important;
  font-weight: 700 !important;
  line-height: 1.15 !important;
  letter-spacing: -0.04em !important;
  text-transform: uppercase !important;
  color: #0f2f4f !important;
  font-family: "Space Grotesk", sans-serif !important;
}
.lt-home-type .pk-hero-text h1 {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  max-width: 100% !important;
}
.lt-home-type .jd-hero-text h1 span,
.lt-home-type .hp-hero-text h1 span,
.lt-home-type .cr-hero-copy h1 em,
.lt-home-type .ok-hero-text h1 span,
.lt-home-type .fr-hero-text h1 span,
.lt-home-type .op-hero-text h1 span,
.lt-home-type .pk-hero-text h1 span,
.lt-home-type section.lt-hero-home h1 span {
  color: var(--mediplace-base) !important;
  font-style: normal;
}
.lt-home-type .jd-hero-text p,
.lt-home-type .hp-hero-text p,
.lt-home-type .cr-hero-copy p,
.lt-home-type .ok-hero-text p,
.lt-home-type .fr-hero-text p,
.lt-home-type .op-hero-text p,
.lt-home-type .pk-hero-text p {
  font-weight: 500 !important;
  font-size: clamp(15px, 1.2vw, 18px) !important;
  line-height: 1.65 !important;
  color: #6d7e8e !important;
  font-family: "Manrope", sans-serif !important;
}
.lt-home-type .jd-section-title,
.lt-home-type .hp-section-header h2,
.lt-home-type .cr-sec-head h2,
.lt-home-type .ok-heading,
.lt-home-type .fr-heading,
.lt-home-type .op-title,
.lt-home-type.pk-page h2 {
  font-family: "Space Grotesk", sans-serif !important;
  color: #123555 !important;
}
.lt-home-type .jd-section-sub,
.lt-home-type .ok-subtext,
.lt-home-type .fr-subtext,
.lt-home-type .op-sub,
.lt-home-type .cr-sec-head p {
  color: #6d7e8e !important;
  font-family: "Manrope", sans-serif !important;
  line-height: 1.8 !important;
}
/* banner-two circular image area */
.lt-home-type .jd-hero-image {
  width: min(610px, 85vw) !important;
  height: min(610px, 85vw) !important;
  max-width: 610px !important;
  max-height: 610px !important;
  border-radius: 50% !important;
  overflow: hidden !important;
  border: 3px solid var(--mediplace-base) !important;
  position: relative;
}
.lt-home-type .jd-hero-image img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border-radius: 50% !important;
}
.lt-home-type .hp-hero-img-wrap {
  width: min(610px, 90vw) !important;
  height: min(610px, 90vw) !important;
  max-width: 610px !important;
  max-height: 610px !important;
  border-radius: 50% !important;
  overflow: hidden !important;
  border: 3px solid var(--mediplace-base) !important;
  flex: none !important;
}
.lt-home-type .hp-hero-img-wrap img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border-radius: 50% !important;
  animation: none !important;
}
.lt-home-type .cr-hero-img img {
  width: min(520px, 88vw) !important;
  height: min(520px, 88vw) !important;
  max-width: 600px !important;
  max-height: 600px !important;
  border-radius: 50% !important;
  object-fit: cover !important;
  border: 3px solid var(--mediplace-base) !important;
  box-shadow: none !important;
}
.lt-home-type .ok-hero-img-wrap {
  width: min(600px, 85vw) !important;
  height: min(600px, 85vw) !important;
  max-width: 600px !important;
  max-height: 600px !important;
  border-radius: 50% !important;
  overflow: hidden !important;
  border: 3px solid var(--mediplace-base) !important;
}
.lt-home-type .ok-hero-img-wrap img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border-radius: 50% !important;
}
.lt-home-type .fr-hero-img-wrap {
  width: min(610px, 85vw) !important;
  height: min(610px, 85vw) !important;
  max-width: 610px !important;
  max-height: 610px !important;
  border-radius: 50% !important;
  overflow: hidden !important;
  border: 3px solid var(--mediplace-base) !important;
  position: relative;
}
.lt-home-type .fr-hero-img-wrap img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border-radius: 50% !important;
}
.lt-home-type .op-hero-img {
  width: min(610px, 85vw) !important;
  height: min(610px, 85vw) !important;
  max-width: 610px !important;
  max-height: 610px !important;
  border-radius: 50% !important;
  overflow: hidden !important;
  border: 3px solid var(--mediplace-base) !important;
  flex-shrink: 0 !important;
}
.lt-home-type .op-hero-img img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border-radius: 50% !important;
  animation: none !important;
  box-shadow: none !important;
}
.lt-home-type .pk-hero-inner {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) minmax(220px, min(42vw, 520px)) !important;
  align-items: center !important;
  column-gap: clamp(24px, 3vw, 48px) !important;
  row-gap: clamp(32px, 4vw, 48px) !important;
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}
.lt-home-type .pk-hero-text {
  min-width: 0 !important;
  max-width: 100% !important;
  width: 100% !important;
}
.lt-home-type .pk-hero-text > div {
  min-width: 0 !important;
  max-width: 100% !important;
}
.lt-home-type .pk-hero-media {
  min-width: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  justify-self: stretch !important;
}
.lt-home-type .pk-hero-img {
  width: 100% !important;
  max-width: min(520px, 100%) !important;
  aspect-ratio: 1 !important;
  height: auto !important;
  border-radius: 50% !important;
  overflow: hidden !important;
  border: 3px solid var(--mediplace-base) !important;
  margin: 0 auto !important;
  flex-shrink: 0 !important;
  box-sizing: border-box !important;
}
.lt-home-type .pk-hero-img img {
  width: 100% !important;
  height: 100% !important;
  aspect-ratio: 1 !important;
  object-fit: cover !important;
  border-radius: 50% !important;
  display: block !important;
  animation: none !important;
  box-shadow: none !important;
}
@media (min-width: 1200px) {
  .lt-home-type .pk-hero-inner {
    grid-template-columns: minmax(0, 1fr) minmax(280px, min(520px, 38vw)) !important;
  }
  .lt-home-type .pk-hero-img {
    max-width: min(610px, 100%) !important;
  }
}
@media (max-width: 991px) {
  .lt-home-type .pk-hero-inner {
    grid-template-columns: 1fr !important;
    justify-items: center !important;
    text-align: center !important;
  }
  .lt-home-type .pk-hero-text {
    order: 0 !important;
  }
  .lt-home-type .pk-hero-media {
    order: 1 !important;
  }
  .lt-home-type .pk-hero-img {
    max-width: min(420px, 88vw) !important;
  }
  .lt-home-type .pk-hero-text p {
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
.lt-home-type .op-hero-c {
  z-index: 1;
}
.lt-home-type .btn-teal,
.lt-home-type .hp-cta-btn,
.lt-home-type .cr-btn,
.lt-home-type .cr-btn-teal,
.lt-home-type .ok-btn-teal,
.lt-home-type .fr-btn-green,
.lt-home-type .op-btn-teal,
.lt-home-type .op-btn-green,
.lt-home-type .pk-cta-btn {
  background: linear-gradient(135deg, #05bdec 0%, #16a392 100%) !important;
  border: 0 !important;
  border-radius: 10px !important;
  box-shadow: 0 10px 24px rgba(5, 189, 236, 0.25) !important;
  font-family: "Manrope", sans-serif !important;
  color: #fff !important;
}
.lt-home-type .btn-teal:hover,
.lt-home-type .hp-cta-btn:hover,
.lt-home-type .cr-btn:hover,
.lt-home-type .cr-btn-teal:hover,
.lt-home-type .ok-btn-teal:hover,
.lt-home-type .fr-btn-green:hover,
.lt-home-type .op-btn-teal:hover,
.lt-home-type .op-btn-green:hover,
.lt-home-type .pk-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 26px rgba(103, 148, 53, 0.28) !important;
}
.lt-home-type .hp-stat-number {
  font-family: "Space Grotesk", sans-serif !important;
  color: #123555 !important;
}
.lt-home-type .hp-service-card h3,
.lt-home-type .hp-why-text h2 {
  font-family: "Space Grotesk", sans-serif !important;
  color: #123555 !important;
}
.lt-home-type .hp-service-card p,
.lt-home-type .hp-why-text p,
.lt-home-type .hp-why-list li {
  font-family: "Manrope", sans-serif !important;
  color: #6d7e8e !important;
}
`;
