import logo from "../../assets/FA_HBS_Logo.png";
import menu from "../../assets/menu-icon.png";
import close from "../../assets/x-icon.png";
import "./Header.style.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 961px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    desktop.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="logo-hanindo" />
        </Link>
        <div className="header-link">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/client">Client</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="header-container-small">
        <div className="small-logo">
          <Link to="/">
            <img src={logo} alt="logo-hanindo" />
          </Link>
          <button
            ref={toggleRef}
            onClick={handleClick}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <img
              src={isOpen ? close : menu}
              alt={isOpen ? "x-icon" : "menu-icon"}
            />
          </button>
        </div>
        <div
          id="mobile-navigation"
          className={`header-link-small ${isOpen ? "open" : ""}`}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/client" onClick={() => setIsOpen(false)}>
            Client
          </Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
