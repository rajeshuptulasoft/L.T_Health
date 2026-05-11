import React, { useEffect, useRef } from "react";

export const SiteHeader = () => {
  const headerRootRef = useRef(null);

  useEffect(() => {
    const root = headerRootRef.current;
    if (!root) return;

    const stickyContent = root.querySelector(".sticky-header__content");
    const mainMenu = root.querySelector(".main-menu");

    if (stickyContent && mainMenu && stickyContent.childElementCount === 0) {
      stickyContent.innerHTML = mainMenu.innerHTML;
    }

    const stricky = root.querySelector(".stricked-menu");

    const onScroll = () => {
      if (!stricky) return;
      const headerScrollPos = 300;
      if (window.scrollY > headerScrollPos) {
        stricky.classList.add("stricky-fixed");
      } else {
        stricky.classList.remove("stricky-fixed");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
<div ref={headerRootRef}>
<header className="main-header-three">
      <nav className="main-menu main-menu-three">
        <div className="main-menu-three__wrapper">
          <div className="main-menu-three__wrapper-inner">
            <div className="main-menu-three__logo">
              <a href="/"><img src="/assets/images/resources/ltwaytohealth.webp" alt="" /></a>
            </div>
            <div className="main-menu-three__main-menu-box-outer">
              <div className="main-menu-three__main-menu-box-outer-top">
                <ul className="list-unstyled main-menu-three__contact-list">
                  <li>
                    <div className="icon">
                      <i className="icon-phone-call" />
                    </div>
                    <div className="text">
                      <p><a href="tel:+919090050151">(+91) 9090050151</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-email" />
                    </div>
                    <div className="text">
                      <p><a href="mailto:Info@waytohealthcare.com">Info@waytohealthcare.com</a>
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="main-menu-three__social">
                  <a href><i className="icon-facebook-app-symbol" /></a>
                  <a href><i className="icon-twitter" /></a>
                  <a href><i className="icon-instagram" /></a>
                  <a href><i className="icon-linkedin" /></a>
                </div>
              </div>
              <div className="main-menu-three__main-menu-box-content">
                <div className="main-menu-three__main-menu-box">
                  <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                  <ul className="main-menu__list">
                    <li><a href="/">Home </a></li>
                    <li><a href="/doctor">Doctors </a></li>
                    <li><a href="/about">About </a></li>
                    <li className="dropdown services-dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <li className="services-dropdown__heading">Home HealthCare Services</li>
                        <li><a href="/physiotherapy">Physiotherapy</a></li>
                        <li><a href="/home-nursing">Home Nursing</a></li>
                        <li><a href="/old-age-care">Old-age Care</a></li>
                        <li><a href="/baby-care-attendant">Baby Care Attendant</a></li>
                        <li><a href="/home-icu-setup">Home ICU Setup</a></li>
                        <li><a href="/home-patient-care-attendant">Home Patient Care
                            Attendant</a></li>
                        <li><a href="/home-technician-support">Home Technician Support</a>
                        </li>
                        <li><a href="/home-doctor-visit">Home Doctor Visit</a></li>
                        <li><a href="/home-wound-care">Home Wound Care</a></li>
                        <li><a href="/home-bedsore-care">Home Bedsore Care</a></li>
                        <li><a href="/home-medicine-deliveries">Home Medicine Deliveries</a>
                        </li>
                        <li className="services-dropdown__heading">Rehabiliation Services</li>
                        <li><a href="/neuro-ipd">Neuro IPD</a></li>
                        <li><a href="/ortho-ipd">Ortho IPD</a></li>
                        <li><a href="/general-ipd">General IPD</a></li>
                        <li><a href="/geriatric-ipd">Geriatric IPD</a></li>
                        <li><a href="/pharmacy-ipd">Pharmacy IPD</a></li>
                        <li><a href="/opd">OPD (Neuro, Ortho, Geriatric, Madicine)</a></li>
                        <li><a href="/opd-pharmacy">Pharmacy OPD</a></li>
                        <li><a href="/panchakarma">Panchakarma (Kerala Traditional Medicine)</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Join Us</a>
                      <ul>
                        <li><a href="/hospital">Hospital</a></li>
                        <li><a href="/doctor_joinUs">Doctor</a></li>
                        <li><a href="/franchaise">Franchise</a></li>
                        <li><a href="/careers">Career</a></li>
                        <li><a href="/diagnostic">Diagnostic</a></li>
                        <li><a href="/osky-membership">OSKY Membership</a></li>
                      </ul>
                    </li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact-us">Contact</a></li>
                  </ul>
                </div>
                <div className="main-menu-three__cart-search-call-and-nav-sidebar-icon">
                  <div className="main-menu-three__call-and-nav-sidebar-icon">
                    <div className="main-menu-three__call">
                      <div className="main-menu-three__call-icon">
                        <i className="icon-phone" />
                      </div>
                      <div className="main-menu-three__call-content">
                        <p className="main-menu-three__call-sub-title">Need Help!</p>
                        {/* <h5 class="main-menu-three__call-number"><a href="tel:+919090050151">(+91) 9090050151</a></h5> */}
                      </div>
                    </div>
                    <div className="main-menu-three__nav-sidebar-icon">
                      <a className="navSidebar-button" href="#">
                        <span className="main-menu-three__icon-dots-menu-one" />
                        <span className="main-menu-three__icon-dots-menu-two" />
                        <span className="main-menu-three__icon-dots-menu-three" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div className="stricky-header stricked-menu main-menu main-menu-three">
      <div className="sticky-header__content" />
    </div>
    </div>
    </>
  );
};
