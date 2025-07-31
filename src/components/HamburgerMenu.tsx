import { useState } from "react";
import { navLinks } from "../utilities/utilitiy-arrays";
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
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a href="#"> {nav.link}</a>
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
