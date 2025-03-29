import "./footer.css";
import {
  Phone,
  Send,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <h4>Company</h4>
          <ul className="footer__links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Partnership </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Categories</h4>
          <ul className="footer__links">
            <li>
              <a href="#">Basic Yoga</a>
            </li>
            <li>
              <a href="#">Strength Training</a>
            </li>
            <li>
              <a href="#">Body Building</a>
            </li>
            <li>
              <a href="#">Weight Loss </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Subscribe Our Newsletter</h4>
          <form action="/">
            <input type="text" placeholder="Enter Your EMail" />
            <button className="btn">
              <Send />
            </button>
          </form>
          <p>Never miss an update & news to your email</p>
        </div>
      </div>

      <div className="section__container footer__bar">
        <a href="#" className="footer__logo">
          <img src="./assets/logo.png" alt="logo" />
        </a>

        <p>Copyright © 2025 Ahmed Masar.</p>
      </div>
    </footer>
  );
};

export default Footer;
