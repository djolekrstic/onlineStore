import {
  BsTelephone,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsGoogle,
  BsInstagram,
} from "react-icons/bs";
import { footerInfo, footerLinks } from "../data";
import { nanoid } from "nanoid";
import payment from "../assets/payment.png";

const social = [
  <BsFacebook />,
  <BsTwitter />,
  <BsYoutube />,
  <BsGoogle />,
  <BsInstagram />,
];

const Footer = () => {
  return (
    <footer className="footer margin-top">
      <div className="align-element">
        <div className="footer-top">
          <div className="footer-top-about">
            <h6>ABOUT US</h6>
            <p>
              Level up your gaming with our premium selection of consoles,
              accessories, and games—all just a click away.
            </p>
            <div className="footer-top-about-call">
              <div>
                <BsTelephone className="telephone-icon" />
              </div>
              <div>
                <p>NEED HELP?</p>
                <p>(+800) 345 678 / (+800) 345 678</p>
              </div>
            </div>
          </div>
          <div className="footer-top-info">
            <h6>INFORMATION</h6>
            <ul>
              {footerInfo.map((item) => {
                return <li key={nanoid()}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="footer-top-info">
            <h6>CUSTOM LINKS</h6>
            <ul>
              {footerLinks.map((item) => {
                return <li key={nanoid()}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="footer-top-newsletter">
            <h6>NEWSLETTER</h6>
            <p>
              You may unsubscribe at any moment. For that purpose, please find
              our contact info in the legal notice.
            </p>
            <form>
              <input type="text" placeholder="Your email address" />
              <button type="submit">Sign up</button>
            </form>
            <div className="footer-top-newsletter-social">
              {social.map((item) => {
                return <button>{item}</button>;
              })}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <p>Copyright © Ђорђе Крстић | All Rights Reserved</p>
          </div>
          <div>
            <img src={payment} alt="payment" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
