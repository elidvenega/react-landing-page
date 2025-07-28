import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import { Content } from "../data/Data";
import { navLinks } from "../utilities/utilitiy-variables";

const footerLinks: Content = {
  cellBlocks: [
    {
      link: {
        href: "https://www.facebook.com/",
        content: Facebook,
        key: 1,
      },
    },
    {
      link: {
        href: "https://www.instagram.com/",
        content: Instagram,
        key: 2,
      },
    },
    {
      link: {
        href: "https://twitter.com/",
        content: Twitter,
        key: 3,
      },
    },
    {
      link: {
        href: "https://www.pinterest.com/",
        content: Pinterest,
        key: 4,
      },
    },
  ],
};

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
        {footerLinks.cellBlocks.map((footer) =>
          footer.link ? (
            <a
              href={footer.link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={footer.link.key}
            >
              <img
                src={
                  typeof footer.link.content === "string"
                    ? footer.link.content
                    : (footer.link.content as any).default ?? ""
                }
                alt={footer.link.href.split(".")[1]}
              />
            </a>
          ) : null
        )}
      </div>
    </footer>
  );
}
