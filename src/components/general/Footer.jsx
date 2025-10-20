import React from "react";
import {
  quickLinksData,
  servicesData,
  followUsData,
  legalData,
} from "../../data/footerItemsData";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="section-container">
        <div className="grid grid-cols-6 gap-y-12 md:gap-12">
          <div className="col-span-6 lg:col-span-3 flex max-w-sm flex-col items-start gap-4">
            <a href="#">
              <img
                src="https://globalgetway.com/wp-content/uploads/2024/12/wlf.png"
                alt="Global Getway Logo"
                className="h-20 w-auto"
              />
            </a>
            <span className="text-sm font-medium text-white/95">
              Imagine A Better Future. The Most Eminent Visas & Immigration
              Consultant service provider.
            </span>
          </div>
          <ul className="flex flex-col items-start gap-4 col-span-6 md:col-span-2 lg:col-span-1">
            <span className="font-semibold text-white/95">Quick Links</span>
            {quickLinksData.map((item) => (
              <li key={item.href}>
                <a href={`https://www.globalgetway.com/${item.href}`} className="footer-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-start gap-4 col-span-6 md:col-span-2 lg:col-span-1">
            <span className="font-semibold text-white/95">Visa Services</span>
            {servicesData.map((item) => (
              <li key={item.href}>
                <a
                  href={`https://www.globalgetway.com/${item.href}`}
                  className="footer-link"
                >
                  {item.label} Visa
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-start gap-4 col-span-6 md:col-span-2 lg:col-span-1">
            <span className="font-semibold text-white/95">Follow Us</span>
            {followUsData.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="footer-link">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="border-white/10" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-sm lg:text-center">
            © {new Date().getFullYear()} Global Getway. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            {legalData.map((item) => (
              <a href={item.href} className="footer-link">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
