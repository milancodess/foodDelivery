import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <section className="footer-content-left">
          <img src={assets.logo} alt="Tomato Logo" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            velit iure atque dolore iusto ducimus aperiam dicta magni totam
            aliquid doloremque esse illo sit, vero quidem nihil mollitia omnis
            suscipit?
          </p>
          <div className="footer-social-icons">
            <a
              href="https://facebook.com/milancodess"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com/milancodess"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/milancodess/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </section>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <section className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+9779812345678">+977 9812345678</a>
            </li>
            <li>
              <a href="mailto:githubmilan@gmail.com">githubmilan@gmail.com</a>
            </li>
          </ul>
        </section>
      </div>

      <hr />
      <p className="footer-copyright">
        &copy; 2025 Tomato.com — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
