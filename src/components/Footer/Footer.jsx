import "./Footer.css";
import logo from "../../assets/logo.png";
import fb from "../../assets/facebook.png";
import be from "../../assets/be.png";
import ln from "../../assets/linkedin.png";
import dr from "../../assets/dribbble.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-left">
          <img src={logo} alt="E2E Consultant" className="footer-logo" />
          <p>
            At E2E Consultants, we are passionate about transforming your
            digital presence and accelerating business growth through
            expert branding, UI/UX design, web development, and digital
            marketing solutions—tailored for businesses of every size.
          </p>

          <div className="socials">
            <img src={fb} alt="facebook" />
            <img src={be} alt="behance" />
            <img src={ln} alt="linkedin" />
            <img src={dr} alt="dribbble" />
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h2>
            Let's talk <br /> about your <br /> business goals.
          </h2>
          <button className="cta-btn">Connect with us →</button>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <div className="location">
            <h4>New York</h4>
            <p>
              Apple Inc.<br />
              One Apple Park Way Cupertino, CA<br />
              95014, United States
            </p>
          </div>

          <div className="location">
            <h4>London</h4>
            <p>
              Belgrave House<br />
              76 Buckingham Palace Road,<br />
              London SW1W 9TQ, United Kingdom
            </p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>©2026 E2E Consultant. All rights reserved.</span>

        <span className="email">✉ hello@example.com</span>

        <ul className="footer-menu">
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/services">Services</Link>
  </li>
  <li>
    <Link to="/process">Process</Link>
  </li>
  <li>
    <Link to="/work">Work</Link>
  </li>
</ul>

      </div>
    </footer>
  );
}
