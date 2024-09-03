import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="app-header">
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          <Image
            src="/logo.svg"
            alt="Shortly's logo"
            width={100}
            height={100}
            className="logo"
          />
        </a>
        <input type="checkbox" id="nav-visible" tabIndex={-1} />
        <label htmlFor="nav-visible" className="toggle-nav">
          <svg
            className="icon-menu"
            width="25"
            height="25"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"></path>
            </g>
            <g>
              <path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"></path>
            </g>
            <g>
              <path
                d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
                C512,404.954,503.046,396,492,396z"
              ></path>
            </g>
          </svg>
        </label>
        <div className="navbar-nav">
          {/* <div className="nav-list"> */}
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
          {/* </div> */}

          <div className="separator-mobile"></div>

          <button
            type="button"
            className="btn btn-small btn-secondary btn-login"
          >
            Login
          </button>
          <button type="button" className="btn btn-small btn-primary">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
