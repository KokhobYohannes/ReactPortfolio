import React from "react";
import "./Footer.css";
import { Button } from "./Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-text">
          Have Questions or Want to Get in Contact?{" "}
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Enter Your Email Here"
            />
            <Button buttonStyle="btn--outline">Contact Me</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper"></div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo" className="social-logo">
            Kokhob's Portfolio © 2021
          </div>
          <div class="social-icons">
            <a
              href="https://github.com/KokhobYohannes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://kokhobyohannes.github.io/UpdatedPortfolio/contact.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="far fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kokhob-yohannes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
