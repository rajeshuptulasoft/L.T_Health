import React from "react";

export const NewsletterSection = ({ id, title, text }) => {
  return (
    <section className="newsletter-one" id={id}>
      <div className="container">
        <div className="newsletter-one__inner">
          <div className="newsletter-one__img">
            <img src="/assets/images/resources/newsletter-one-img-1.png" alt="" />
          </div>
          <div className="newsletter-one__left">
            <div className="newsletter-one__title-box">
              <h2 className="newsletter-one__title">{title}</h2>
              <p className="newsletter-one__text">{text}</p>
            </div>
          </div>
          <div className="newsletter-one__form-box">
            <form className="newsletter-one__form">
              <div className="newsletter-one__input">
                <input type="email" placeholder="Email Address" />
              </div>
              <button type="submit" className="newsletter-one__btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
