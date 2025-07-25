import ArrowImg from "../assets/images/icon-arrow-down.svg";
import LogoImg from "../assets/images/logo.svg";

const navLinks: string[] = ["About", "Services", "Projects"];

export default function OrangeHeader({ title }: { title: string }) {
  return (
    <header className="header">
      <nav className="header-nav">
        <img className="header-logo" src={LogoImg} alt="logo" />
        <ul className="header-nav-ul">
          {navLinks.map((link) => (
            <li>
              <a href="#"> {link}</a>
            </li>
          ))}
          <li>
            <button type="button" className="header-btn">
              CONTACT
            </button>
          </li>
          <li></li>
        </ul>
      </nav>
      <h1>{title}</h1>
      <a href="#bottom">
        <img className="header-arrow" src={ArrowImg} alt="Arrow" />
      </a>
    </header>
  );
}
