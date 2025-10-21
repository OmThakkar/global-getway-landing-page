import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const CallToAction = () => {
  const handleWhatsApp = () => {
    const message = "Hello, I want to enquire about your services.";
    const whatsappUrl = `https://wa.me/919112377799?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 flex w-full justify-center gap-2 lg:right-6 lg:w-auto">
      <a href="tel:+919112377799" className="button primary-button shrink-0">
        <Phone className="h-4 w-4" />
        Call Us
      </a>
      <button
        onClick={() => handleWhatsApp()}
        className="button primary-button shrink-0"
      >
        <FaWhatsapp className="h-5 w-5" />
        Message Us
      </button>
    </div>
  );
};

export default CallToAction;
