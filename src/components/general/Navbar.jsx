import { Phone, Menu, X } from "lucide-react";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  // const closeMobileMenu = () => {
  //   setIsMobileMenuOpen(false);
  // };

  // const navLinks = [
  //   { href: "#services", label: "Services" },
  //   { href: "#whyChooseUs", label: "Why Choose Us" },
  //   { href: "#howItWorks", label: "How It Works" },
  //   { href: "#faqs", label: "FAQs" },
  //   { href: "#testimonials", label: "Testimonials" },
  // ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white backdrop-blur-sm">
      <div className="navbar-container">
        <div className="h-14 md:h-16 w-auto overflow-hidden lg:h-16">
          <img src={logo} alt="Global Getway Logo" className="h-full" />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        {/* <ul className="navbar-links hidden lg:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="navbar-link">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul> */}

        {/* Desktop Call Button - Hidden on mobile */}
        <a href="tel:+91-9112377799" className="button primary-button text-sm md:text-base">
          <Phone className="h-4 w-4" /> Call Us Now
        </a>

        {/* Mobile Menu Button - Visible only on mobile */}
        {/* <button
          onClick={toggleMobileMenu}
          className="hover:bg-primary-900 rounded-lg p-2 text-white transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button> */}
      </div>

      {/* Mobile Sliding Menu */}
      {/* <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary-900 border-primary-800 border-t">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="hover:bg-primary-800 block px-6 py-3 text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-primary-800 border-t px-6 py-4">
            <a
              href="tel:+919876543210"
              onClick={closeMobileMenu}
              className="button primary-button-invert w-full justify-center text-sm"
            >
              <Phone className="h-4 w-4" fill="white" /> Call Us Now
            </a>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
