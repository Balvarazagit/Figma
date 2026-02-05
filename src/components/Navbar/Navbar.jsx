import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
      </div>

      {/* MENU */}
      <ul className={`menu ${open ? "open" : ""}`}>
        <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
        <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/process" onClick={() => setOpen(false)}>Process</NavLink></li>
        <li><NavLink to="/work" onClick={() => setOpen(false)}>Work</NavLink></li>

        {/* Mobile Contact Button */}
        <li className="mobile-btn">
          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="contact-btn-1">Contact Us</button>
          </Link>
        </li>
      </ul>

      {/* DESKTOP BUTTON */}
      <Link to="/contact" className="desktop-btn">
        <button className="contact-btn">Contact Us</button>
      </Link>

      {/* HAMBURGER */}
      <div className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
