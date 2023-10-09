import React from "react";
import "./Footer.css";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <span id="contact">Contact us</span>
      <div className="footer">
        <AiFillGithub className="footer-icon" />
        <AiFillLinkedin className="footer-icon" />
        <AiFillInstagram className="footer-icon" />
      </div>
    </div>
  );
};

export default Footer;
