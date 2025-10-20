import React from "react";

const CallToAction = () => {
  return (
    <div className="fixed  bottom-6 z-20 flex gap-2 lg:right-6 justify-center w-full lg:w-auto">
      <a href="tel:+919112377799" className="button primary-button shrink-0 text-sm md:text-base">
        Call Us Now
      </a>
      <a href="mailto:info@globalgetway.com" className="button primary-button shrink-0 text-sm md:text-base">
        Request Quote
      </a>
    </div>
  );
};

export default CallToAction;
