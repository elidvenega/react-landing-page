import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import { Content } from "./Data";

const footerLinks: Content = {
  cellBlocks: [
    {
      link: {
        href: "https://www.facebook.com/",
        content: Facebook,
      },
    },
    {
      link: {
        href: "https://www.instagram.com/",
        content: Instagram,
      },
    },
    {
      link: {
        href: "https://twitter.com/",
        content: Twitter,
      },
    },
    {
      link: {
        href: "https://www.pinterest.com/",
        content: Pinterest,
      },
    },
  ],
};

const firstHref = footerLinks.cellBlocks[0]?.link?.href;
const secondHref = footerLinks.cellBlocks[1]?.link?.href;
const thirdHref = footerLinks.cellBlocks[2]?.link?.href;
const fourthHref = footerLinks.cellBlocks[3]?.link?.href;

const navLinks: string[] = ["About", "Services", "Projects"];

export default function Footer({ footerTitle }: { footerTitle: string }) {
  return (
    <footer className="footer" id="bottom">
      <h4>{footerTitle}</h4>
      <div className="footer-nav">
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li>
                <a href="#"> {link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer-image-links">
        <a href={firstHref} target="_blank">
          <img src={Facebook} alt="facebook" />
        </a>
        <a href={secondHref} target="_blank">
          <img src={Instagram} alt="instagram" />
        </a>
        <a href={thirdHref} target="_blank">
          <img src={Twitter} alt="twitter" />
        </a>
        <a href={fourthHref} target="_blank">
          <img src={Pinterest} alt="pinterest" />
        </a>
      </div>
    </footer>
  );
}
