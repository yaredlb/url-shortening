import Image from "next/image";
import Link from "next/link";
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
              <Link href="#">Link Shortening</Link>
              <Link href="#">Branded Links</Link>
              <Link href="#">Analytics</Link>
            </div>
          </div>
          <div className="group">
            <h5 className="title">Resources</h5>
            <div className="links">
              <Link href="#">Blog</Link>
              <Link href="#">Developers</Link>
              <Link href="#">Support</Link>
            </div>
          </div>
          <div className="group">
            <h5 className="title">Company</h5>
            <div className="links">
              <Link href="#">About</Link>
              <Link href="#">Our Team</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
        </div>
        <div className="social-links">
          <Link href="/">
            <Image
              src="/icon-facebook.svg"
              alt="Facebook Logo"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icon-twitter.svg"
              alt="Twitter/X Logo"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icon-pinterest.svg"
              alt="Pinterest Logo"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icon-instagram.svg"
              alt="Instagram Logo"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
