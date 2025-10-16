import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="section-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <img
              src="https://globalgetway.com/wp-content/uploads/2024/12/wlf.png"
              alt="Global Getway Logo"
              className="h-16 w-auto"
            />
          </div>
          <ul className="flex flex-col md:items-center gap-4 md:flex-row">
            <li>
              <a
                href="https://www.facebook.com/globalgetway"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaFacebook className="h-4 w-4" />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/globalgetway"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaInstagram className="h-4 w-4" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <hr className="border-white/10" />
        <span className="lg:text-center text-sm">
          © {new Date().getFullYear()} Global Getway. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
