import logo from "../../assets/FA_HBS_Logo.png";
import menu from "../../assets/menu-icon.png";
import close from "../../assets/x-icon.png";
import "./Header.style.css";
import { useEffect, useRef, useState } from "react";

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
        <a href="/">
          <img src={logo} alt="logo-hanindo" />
        </a>
        <div className="header-link">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/client">Client</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="header-container-small">
        <div className="small-logo">
          <a href="/">
            <img src={logo} alt="logo-hanindo" />
          </a>
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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/client">Client</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;
