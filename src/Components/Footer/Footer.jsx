import React from "react";
import "./Footer.css";
import footer_logo from "../Assests/footer_logo.png";
import instagram_logo from "../Assests/instagram.svg";
import pinterest_logo from "../Assests/pinterest.svg";
import whatsapp_logo from "../Assests/whatsapp.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <img src={instagram_logo} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pinterest_logo} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_logo} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
      <hr/>
      <p>Copyright @ 2023 - All Rights Reserved.</p></div>
    </div>
  );
};

export default Footer;
