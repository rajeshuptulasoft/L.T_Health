import React, { useMemo, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
 
const doctors = [
  { dept: "dental", title: "Dental", name: "Dr. Sabrina Exe", img: "/assets/images/team/team-page-v1-1.jpg" },
  { dept: "traumatology", title: "Traumatology", name: "Dr. Zubair Hasan", img: "/assets/images/team/team-page-v1-7.jpg" },
  { dept: "neurology", title: "Neurology", name: "Dr. Nusrat Jenny", img: "/assets/images/team/team-page-v1-2.jpg" },
  { dept: "pediatric", title: "Pediatric", name: "Dr. Zubair Hasan", img: "/assets/images/team/team-page-v1-6.jpg" },
  { dept: "traumatology", title: "Traumatology", name: "Dr. Zubair Hasan", img: "/assets/images/team/team-page-v1-8.jpg" },
  { dept: "dental", title: "Dental", name: "Dr. Sabrina Exe", img: "/assets/images/team/team-page-v1-3.jpg" },
  { dept: "pediatric", title: "Pediatric", name: "Dr. Zubair Hasan", img: "/assets/images/team/team-page-v1-9.jpg" },
  { dept: "neurology", title: "Neurology", name: "Dr. Nusrat Jenny", img: "/assets/images/team/team-page-v1-4.jpg" },
  { dept: "dental", title: "Dental", name: "Dr. Nusrat Jenny", img: "/assets/images/team/team-page-v1-5.jpg" },
  { dept: "neurology", title: "Neurology", name: "Dr. Zubair Hasan", img: "/assets/images/team/team-page-v1-10.jpg" },
  { dept: "traumatology", title: "Traumatology", name: "Dr. Sabrina Exe", img: "/assets/images/team/team-page-v1-12.jpg" },
  { dept: "pediatric", title: "Pediatric", name: "Dr. Zubair Hasan", img: "/assets/images/team/team-page-v1-11.jpg" },
  { dept: "traumatology", title: "Traumatology", name: "Dr. Zubair Hasan", img: "/assets/images/team/team-page-v1-7.jpg" },
  { dept: "dental", title: "Dental", name: "Dr. Sabrina Exe", img: "/assets/images/team/team-page-v1-3.jpg" },
  { dept: "pediatric", title: "Pediatric", name: "Dr. Zubair Hasan", img: "/assets/images/team/team-page-v1-9.jpg" },
  { dept: "neurology", title: "Neurology", name: "Dr. Nusrat Jenny", img: "/assets/images/team/team-page-v1-2.jpg" },
];
 
const replies = [
  {
    test: (value) => value.includes("service"),
    text: "We provide Home Nursing, Physiotherapy, Rehab, Emergency Critical Care, and specialist consultations.",
  },
  {
    test: (value) => value.includes("appointment") || value.includes("book"),
    text: "To book an appointment, please call +91 9090050151 or submit the contact form on this site.",
  },
  {
    test: (value) => value.includes("hour") || value.includes("timing"),
    text: "Operating hours: OPD Mon-Sat 10 AM to 5 PM. IPD and Emergency are available 24x7.",
  },
  {
    test: (value) => value.includes("location") || value.includes("address"),
    text: "We are at Plot No-353/2324, Near UCO Bank Kolathia Square, AMRI Hospital Road, Khandagiri, Bhubaneswar - 30.",
  },
  {
    test: (value) => value.includes("phone") || value.includes("call") || value.includes("contact"),
    text: "You can reach us at +91 9090050151 or email Info@waytohealthcare.com.",
  },
];
 
export const Doctor = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! Welcome to L.T Way to Healthcare. Ask me about services, appointments, contact, or operating hours.",
    },
  ]);
 
  const filteredDoctors = useMemo(() => {
    if (activeFilter === "all") return doctors;
    return doctors.filter((doctor) => doctor.dept === activeFilter);
  }, [activeFilter]);
 
  const getReply = (value) => {
    const normalized = value.toLowerCase();
    const matched = replies.find((reply) => reply.test(normalized));
    if (matched) return matched.text;
    return "Thanks for your message. Our team will guide you. You can also call +91 9090050151 for quick support.";
  };
 
  const onSubmitChat = (event) => {
    event.preventDefault();
    const trimmed = chatInput.trim();
    if (!trimmed) return;
 
    setMessages((prev) => [...prev, { type: "user", text: trimmed }]);
    setChatInput("");
 
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: getReply(trimmed) }]);
    }, 300);
  };
 
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --mediplace-base: #05bdec;
              --mediplace-black: #16a392;
            }
            .main-menu .main-menu__list>li>a,
            .stricky-header .main-menu__list>li>a,
            .main-menu .main-menu__list>li:hover>a,
            .main-menu .main-menu__list>li.current>a,
            .stricky-header .main-menu__list>li:hover>a,
            .stricky-header .main-menu__list>li.current>a {
              color: #000000 !important;
            }
            .main-menu .main-menu__list>li.services-dropdown>a {
              font-weight: 700;
              color: var(--mediplace-black);
            }
            .main-menu .main-menu__list>li.services-dropdown>ul {
              width: 560px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 6px;
              padding: 14px;
              border-radius: 14px;
              border: 1px solid rgba(5, 189, 236, 0.22);
              box-shadow: 0 16px 36px rgba(5, 189, 236, 0.15);
            }
            .main-menu .main-menu__list>li.services-dropdown>ul>li {
              margin: 0;
            }
            .main-menu .main-menu__list>li.services-dropdown>ul>li>a {
              border-radius: 10px;
              min-height: 42px;
              display: flex;
              align-items: center;
              padding: 10px 12px;
              font-weight: 600;
              line-height: 1.35;
              color: #1f2b36;
              transition: all 0.25s ease;
            }
            .main-menu .main-menu__list>li.services-dropdown>ul>li>a:hover {
              background: linear-gradient(135deg, rgba(5, 189, 236, 0.14), rgba(103, 148, 53, 0.14));
              color: var(--mediplace-black);
              transform: translateX(2px);
            }
            @media (max-width: 1199px) {
              .main-menu .main-menu__list>li.services-dropdown>ul {
                width: 100%;
                display: block;
                padding: 0;
                border: 0;
                box-shadow: none;
              }
            }
            .team-page__filter li {
              cursor: pointer;
            }
            .team-page__filter li.active .filter-text {
              color: var(--mediplace-base);
            }
            .chat-icon {
              position: fixed;
              right: 31px;
              bottom: 3%;
              z-index: 99999999;
            }
            .chat-icon .chat-toggler {
              cursor: pointer;
              width: 55px;
              height: 55px;
              border: 0;
              border-radius: 50%;
              background: #05bdec;
              color: #ffffff;
              font-size: 24px;
            }
            #whatsappbtn {
              cursor: pointer;
              position: fixed;
              bottom: 3%;
              left: 31px;
              z-index: 99999999;
              padding-top: 8px;
              background: #4fcc5d;
              border-radius: 50%;
              width: 55px;
              height: 55px;
              text-align: center;
            }
            #whatsappbtn img {
              width: 38px;
              height: 38px;
              object-fit: contain;
            }
            #lt-chatbot {
              position: fixed;
              left: 31px;
              bottom: 95px;
              z-index: 99999998;
              font-family: "Manrope", sans-serif;
            }
            .lt-chatbot-toggle {
              width: 55px;
              height: 55px;
              border-radius: 50%;
              border: 0;
              background: #ff6b35;
              color: #fff;
              font-size: 22px;
              cursor: pointer;
            }
            .lt-chatbot-panel {
              width: 320px;
              height: 430px;
              margin-bottom: 12px;
              background: #fff;
              border: 1px solid #dce8ef;
              border-radius: 16px;
              box-shadow: 0 18px 40px rgba(10, 39, 71, 0.18);
              display: none;
              flex-direction: column;
              overflow: hidden;
            }
            .lt-chatbot-panel.is-open {
              display: flex;
            }
            .lt-chatbot-header {
              background: linear-gradient(135deg, #ff7f50 0%, #ff6b35 100%);
              color: #fff;
              padding: 12px 14px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .lt-chatbot-header h4 {
              margin: 0;
              font-size: 16px;
              font-weight: 700;
            }
            .lt-chatbot-close {
              border: 0;
              background: transparent;
              color: #fff;
              font-size: 18px;
              cursor: pointer;
            }
            .lt-chatbot-messages {
              flex: 1;
              overflow-y: auto;
              padding: 12px;
              background: #f5f8fb;
            }
            .lt-chatbot-msg {
              max-width: 84%;
              padding: 10px 12px;
              border-radius: 12px;
              margin-bottom: 10px;
              font-size: 14px;
              line-height: 1.5;
            }
            .lt-chatbot-msg.bot {
              background: #fff;
              border: 1px solid #dce8ef;
              color: #1f2b36;
            }
            .lt-chatbot-msg.user {
              margin-left: auto;
              background: #ff6b35;
              color: #fff;
            }
            .lt-chatbot-form {
              display: flex;
              gap: 8px;
              padding: 10px;
              border-top: 1px solid #e4edf3;
              background: #fff;
            }
            .lt-chatbot-input {
              flex: 1;
              border: 1px solid #d6e3ec;
              border-radius: 10px;
              padding: 9px 10px;
              font-size: 14px;
            }
            .lt-chatbot-send {
              border: 0;
              border-radius: 10px;
              background: #ff6b35;
              color: #fff;
              padding: 0 14px;
              font-size: 14px;
              font-weight: 700;
              cursor: pointer;
            }
          `,
        }}
      />
 
      <div className="custom-cursor__cursor" />
      <div className="custom-cursor__cursor-two" />
      <div className="chat-icon">
        <button type="button" className="chat-toggler">
          <i className="fa fa-comment" />
        </button>
      </div>
      <a id="whatsappbtn" href="https://api.whatsapp.com/send?phone=919090050151" target="_blank" rel="noreferrer">
        <img src="/assets/images/icon/whatsapp.png" alt="WhatsApp" />
      </a>
 
      <div id="lt-chatbot">
        <div className={`lt-chatbot-panel ${chatOpen ? "is-open" : ""}`}>
          <div className="lt-chatbot-header">
            <h4>L.T Care Assistant</h4>
            <button type="button" className="lt-chatbot-close" onClick={() => setChatOpen(false)}>
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="lt-chatbot-messages">
            {messages.map((message, index) => (
              <div key={`${message.type}-${index}`} className={`lt-chatbot-msg ${message.type}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form className="lt-chatbot-form" onSubmit={onSubmitChat}>
            <input
              className="lt-chatbot-input"
              type="text"
              placeholder="Type your message..."
              autoComplete="off"
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
            />
            <button className="lt-chatbot-send" type="submit">
              Send
            </button>
          </form>
        </div>
        <button type="button" className="lt-chatbot-toggle" onClick={() => setChatOpen((prev) => !prev)}>
          <i className="fas fa-comments" />
        </button>
      </div>
 
      <div className="page-wrapper">
        <SiteHeader />
 
        <section className="page-header">
          <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }} />
          <div className="container">
            <div className="page-header__inner">
              <h3>L.T Way to Healthcare</h3>
              <div className="thm-breadcrumb__inner">
                <ul className="thm-breadcrumb list-unstyled">
                  <li><a href="/">Home</a></li>
                  <li><span className="fas fa-angle-right" /></li>
                  <li>Our Doctors Details</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
 
        <section className="team-page">
          <div className="container">
            <div className="team-page__filter-box">
              <ul className="team-page__filter team-page-one post-filter list-unstyled clearfix">
                <li className={activeFilter === "all" ? "active" : ""} onClick={() => setActiveFilter("all")}>
                  <span className="filter-text">All Departments</span>
                </li>
                <li className={activeFilter === "dental" ? "active" : ""} onClick={() => setActiveFilter("dental")}>
                  <span className="filter-text">Dental</span>
                </li>
                <li className={activeFilter === "traumatology" ? "active" : ""} onClick={() => setActiveFilter("traumatology")}>
                  <span className="filter-text">Traumatology</span>
                </li>
                <li className={activeFilter === "pediatric" ? "active" : ""} onClick={() => setActiveFilter("pediatric")}>
                  <span className="filter-text">Pediatric</span>
                </li>
                <li className={activeFilter === "neurology" ? "active" : ""} onClick={() => setActiveFilter("neurology")}>
                  <span className="filter-text">Neurology</span>
                </li>
              </ul>
            </div>
            <div className="row filter-layout">
              {filteredDoctors.map((doctor, index) => (
                <div key={`${doctor.name}-${doctor.img}-${index}`} className={`col-xl-3 col-lg-6 col-md-6 filter-item ${doctor.dept}`}>
                  <div className="team-two__single">
                    <div className="team-two__img-box">
                      <div className="team-two__img">
                        <img src={doctor.img} alt="Image" />
                      </div>
                      <div className="team-two__arrow-and-social">
                        <div className="team-two__arrow">
                          <span className="fas fa-share-alt" />
                        </div>
                        <ul className="team-two__social list-unstyled">
                          <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                          <li><a href="#"><span className="fab fa-twitter" /></a></li>
                          <li><a href="#"><span className="fab fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-two__content">
                      <p className="team-two__designation">{doctor.title}</p>
                      <h3 className="team-two__name"><a href="#">{doctor.name}</a></h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        <section className="newsletter-one">
          <div className="container">
            <div className="newsletter-one__inner">
              <div className="newsletter-one__img">
                <img src="/assets/images/resources/newsletter-one-img-1.png" alt="" />
              </div>
              <div className="newsletter-one__left">
                <div className="newsletter-one__title-box">
                  <h2 className="newsletter-one__title">Ready to Begin Your Journey to Wellness?</h2>
                  <p className="newsletter-one__text">
                    Whether you are a patient, partner, or future team member, we are here to support your next step.
                  </p>
                </div>
              </div>
              <div className="newsletter-one__form-box">
                <form className="newsletter-one__form">
                  <div className="newsletter-one__input">
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <button type="submit" className="newsletter-one__btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>
 
        <SiteFooter />
      </div>
    </>
  );
};
 
// Share on WhatsApp
// WhatsApp Messenger: More than 2 billion people
//           in over 180 countries use WhatsApp to stay in touch with friends and
//           family, anytime and anywhere. WhatsApp is free and offers sim...
 