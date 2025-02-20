import React, { useState, useRef } from "react";
import "./Mail.css";

const Mail = () => {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (letterRef.current && envelopeRef.current) {
      letterRef.current.classList.add("drop");

      setTimeout(() => {
        envelopeRef.current.classList.add("sent");
      }, 1500);

      setTimeout(() => {
        letterRef.current.classList.remove("drop");
        envelopeRef.current.classList.remove("sent");
        setSent(true);
      }, 5000);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    setSent(false);
  };

  return (
    <div id="wrapper">
      <nav>
        <a className="icon-menu" id="menu" href="#">
          Menu
        </a>
        <a className="tab left icon-sketchnotes" id="sketchnotes" href="#">
          Sketchnotes
        </a>
        <a className="tab left icon-infographics" id="infographics" href="#">
          Infographics
        </a>
        <a className="tab left icon-design" id="design" href="#">
          Design
        </a>
        <a id="blog" href="#">
          {" "}
          <span className="link icon-blog">Blog</span>
        </a>
        <a className="current icon-contact" id="contact" href="#">
          Contact
        </a>
      </nav>

      <div className="cf" id="book">
        <div className="page" id="left">
          <div className="header">
            <a id="home" href="#">
              Home
            </a>
            <h1>Contact</h1>
          </div>

          <div className="main">
            {sent ? (
              <div className="thanks">
                <h2>Thank you!</h2>
                <a className="another icon-pen" href="#" onClick={handleReset}>
                  Write another message
                </a>
              </div>
            ) : (
              <>
                <div className="envelope" id="shadow"></div>
                <div id="envelope" ref={envelopeRef}>
                  <div className="envelope flap"></div>
                  <form
                    className="letter"
                    id="contact-form"
                    ref={formRef}
                    onSubmit={handleSend}
                  >
                    <p>Ben,</p>
                    <p>
                      This is{" "}
                      <input
                        type="text"
                        name="name"
                        className="input box"
                        required
                        placeholder="your name"
                      />
                      , and I’d like to chat.
                    </p>
                    <p>
                      You can reach me at{" "}
                      <input
                        type="email"
                        name="email"
                        className="input email box"
                        required
                        placeholder="your email"
                      />
                      .
                    </p>
                    <p>
                      Here’s what I’m thinking:{" "}
                      <textarea
                        name="message"
                        rows="8"
                        className="input message"
                        required
                        placeholder="your message"
                      />
                    </p>
                    <button type="submit" className="send icon-send">
                      Send
                    </button>
                  </form>
                  <div className="envelope back"></div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="page" id="right">
          <div id="contact-card"></div>
          <div className="bio gallery">
            <a
              className="photo"
              href="http://benjaminsnorris.com/img/bsn-design-ben-norris.jpg"
            >
              <img
                src="http://benjaminsnorris.com/img/bsn-design-ben-norris-thumb.jpg"
                alt="BSN Design Owner Ben Norris"
              />
            </a>
            <p className="blurb">
              BSN Design is a sketchnote and design one-man band owned and
              operated by Ben Norris: a traveling reading piano-playing Mormon
              husband and father
            </p>
          </div>
          <div className="social">
            <h2>Stalk Me Here</h2>
            <a
              className="twitter"
              href="https://twitter.com/bsndesign"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/benjaminsnorris"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="flickr"
              href="http://www.flickr.com/benjaminsnorris"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>

      <div className="footer">
        <a className="icon-sketchbook" id="toggle" href="#top">
          Change design
        </a>
      </div>
    </div>
  );
};

export default Mail;
