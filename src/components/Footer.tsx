import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";

interface footerNavLinks {
  linkOne: string;
  linkTwo: string;
  linkThree: string;
  linkFour: string;
  linkFive: string;
  linkSix: string;
  linkSeven: string;
}

const footerData: footerNavLinks = {
  linkOne: `About`,
  linkTwo: `Services`,
  linkThree: `Projects`,
  linkFour: `https://www.facebook.com/`,
  linkFive: `https://www.instagram.com/`,
  linkSix: `https://twitter.com/`,
  linkSeven: `https://www.pinterest.com/`,
};

export default function Footer({ footerTitle }: { footerTitle: string }) {
  return (
    <>
      <footer className="footer" id="bottom">
        <h4>{footerTitle}</h4>
        <div className="footer-nav">
          <nav>
            <ul>
              <li>
                <a href="#">{footerData.linkOne}</a>
              </li>
              <li>
                <a href="#">{footerData.linkTwo}</a>
              </li>
              <li>
                <a href="#">{footerData.linkThree}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-image-links">
          <a href={footerData.linkFour} target="_blank">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href={footerData.linkFive} target="_blank">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href={footerData.linkSix} target="_blank">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href={footerData.linkSeven} target="_blank">
            <img src={Pinterest} alt="pinterest" />
          </a>
        </div>
      </footer>
    </>
  );
}
