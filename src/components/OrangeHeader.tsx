import Arrow from "../assets/images/icon-arrow-down.svg";
import Logo from "../assets/images/logo.svg";

export default function OrangeHeader({ title }: { title: string }) {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <img className="header-logo" src={Logo} alt="logo" />
          <ul className="header-nav-ul">
            <li>
              <a href="#"> About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
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
          <img className="header-arrow" src={Arrow} alt="Arrow" />
        </a>
      </header>
    </>
  );
}
