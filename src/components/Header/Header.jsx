import logo from "../../assets/FA_HBS_Logo.png";
import menu from "../../assets/menu-icon.png";
import close from "../../assets/x-icon.png";
import "./Header.style.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <a href="/#">Services</a>
          <a href="/client">Client</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="header-container-small">
        <div className="small-logo">
          <a href="/">
            <img src={logo} alt="logo-hanindo" />
          </a>
          <button onClick={handleClick}>
            <img
              src={isOpen ? close : menu}
              alt={isOpen ? "x-icon" : "menu-icon"}
            />
          </button>
        </div>
        <div className={`header-link-small ${isOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/#">About</a>
          <a href="/#">Services</a>
          <a href="/client">Client</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;
