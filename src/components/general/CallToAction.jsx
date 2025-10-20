import React from "react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="fixed bottom-6 z-20 flex w-full justify-center gap-2 lg:right-6 lg:w-auto">
      <a href="tel:+919112377799" className="button primary-button shrink-0">
        <Phone className="h-4 w-4" />
        Call Us Now
      </a>
      <a
        href="mailto:info@globalgetway.com"
        className="button primary-button shrink-0"
      >
        <Mail className="h-4 w-4" />
        Request Quote
      </a>
    </div>
  );
};

export default CallToAction;
