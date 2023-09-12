import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h4>sunnyside</h4>
       <div className="footer-nav">
       <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
          </nav>
       </div>
       <div>
       <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
        <img src={Twitter} alt="twitter" />
        <img src={Pinterest} alt="pinterest" />
       </div>
      </footer>
    </>
  );
}
