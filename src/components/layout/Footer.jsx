import { Link } from "react-router-dom";
import LogoWhite from "../../assets/CASADIANDREYWHITE-logo.svg";
import { kennelInfo } from "../../data/kennel";
import { socialLinks } from "../../data/socialLinks";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="eyebrow">Casa di Andrey</p>
          <img
            className="site-footer__logo"
            src={LogoWhite}
            alt="Casa di Andrey logo"
            loading="lazy"
          />
        </div>
        <div className="site-footer__links">
          <Link to="/puppies">Puppies</Link>
          <Link to="/litters">Litters</Link>
          <Link to="/contact">Contact</Link>
          {socialLinks.map((link) => (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <p className="site-footer__copyright">
        {kennelInfo.footerLabel} &copy; {kennelInfo.footerRights}
      </p>
    </footer>
  );
}
