import React from "react";

export const FloatingSupport = () => {
  return (
    <>
      <div className="chat-icon"><button type="button" className="chat-toggler"><i className="fa fa-comment" /></button></div>
      <a id="whatsappbtn" href="https://api.whatsapp.com/send?phone=919090050151" target="_blank" rel="noreferrer">
        <img src="/assets/images/icon/whatsapp.png" alt="WhatsApp" />
      </a>
      <div id="lt-chatbot">
        <div className="lt-chatbot-panel" id="ltChatPanel">
          <div className="lt-chatbot-header">
            <h4>L.T Care Assistant</h4>
            <button type="button" className="lt-chatbot-close" id="ltChatClose"><i className="fas fa-times" /></button>
          </div>
          <div className="lt-chatbot-messages" id="ltChatMessages">
            <div className="lt-chatbot-msg bot">Hi! Welcome to L.T Way to Healthcare. Ask me about services, appointments, contact, or operating hours.</div>
          </div>
          <form className="lt-chatbot-form" id="ltChatForm">
            <input className="lt-chatbot-input" id="ltChatInput" type="text" placeholder="Type your message..." autoComplete="off" />
            <button className="lt-chatbot-send" type="submit">Send</button>
          </form>
        </div>
        <button type="button" className="lt-chatbot-toggle" id="ltChatToggle"><i className="fas fa-comments" /></button>
      </div>
      <div id="chat-popup" className="chat-popup">
        <div className="popup-inner">
          <div className="close-chat"><i className="fa fa-times" /></div>
          <div className="chat-form">
            <p>Please fill out the form below and we will get back to you as soon as possible.</p>
            <form action="https://scriptfusions.mnsithub.com/html/mediplace/main-html/assets/inc/sendemail.php" method="POST" className="contact-form-validated">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Text" required defaultValue={""} />
              </div>
              <div className="form-group message-btn">
                <button type="submit" className="thm-btn">
                  <span className="fas fa-arrow-right" />
                  Submit Now
                </button>
              </div>
              <div className="result" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
