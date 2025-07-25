import { useState } from "react";

const navLinks: string[] = ["About", "Services", "Projects"];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={handleToggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`hamburger-nav ${isOpen ? "open" : ""}`}>
        <ul className={`menu-items ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li>
              <a href="#"> {link}</a>
            </li>
          ))}
          <li>
            <button className="menu-items-button" type="button">
              contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
