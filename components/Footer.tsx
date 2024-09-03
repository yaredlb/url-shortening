import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="content">
        <Image
          src="/logo.svg"
          alt="Shortly's Logo"
          width={121}
          height={33}
          className="white-logo"
        />

        <div className="company-links">
          <div className="group">
            <h5 className="title">Features</h5>
            <div className="links">
              <a href="#">Link Shortening</a>
              <a href="#">Branded Links</a>
              <a href="#">Analytics</a>
            </div>
          </div>
          <div className="group">
            <h5 className="title">Resources</h5>
            <div className="links">
              <a href="#">Blog</a>
              <a href="#">Developers</a>
              <a href="#">Support</a>
            </div>
          </div>
          <div className="group">
            <h5 className="title">Company</h5>
            <div className="links">
              <a href="#">About</a>
              <a href="#">Our Team</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="social-links">
          <a href="/">
            <Image
              src="/icon-facebook.svg"
              alt="Facebook Logo"
              width={20}
              height={20}
            />
          </a>
          <a href="/">
            <Image
              src="/icon-twitter.svg"
              alt="Twitter/X Logo"
              width={20}
              height={20}
            />
          </a>
          <a href="/">
            <Image
              src="/icon-pinterest.svg"
              alt="Pinterest Logo"
              width={20}
              height={20}
            />
          </a>
          <a href="/">
            <Image
              src="/icon-instagram.svg"
              alt="Instagram Logo"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
