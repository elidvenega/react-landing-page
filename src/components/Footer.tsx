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
        <div className="footer-image-links">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="https://www.pinterest.com/" target="_blank">
            <img src={Pinterest} alt="pinterest" />
          </a>
        </div>
      </footer>
    </>
  );
}
