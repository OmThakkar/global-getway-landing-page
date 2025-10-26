import React from "react";
import { MoveRight } from "lucide-react";
import heroImage from "../assets/images/hero.webp";

const Hero = () => {
  const handleApplyForVisa = () => {
    const message =
      "I want to apply for a visa. Can you please provide me the details?";
    const whatsappUrl = `https://wa.me/919112377799?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  
  return (
    <section className="bg-primary-600 relative flex h-dvh min-h-[400px] items-center text-white md:items-end">
      <img
        src={heroImage}
        alt="Hero Image"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 from-black/70 via-black/50 to-transparent md:bg-transparent md:bg-gradient-to-tr" />
      <div className="section-container relative z-0 w-full">
        <div className="flex max-w-3xl flex-col items-start gap-6">
          <h1>Trusted Visa Consultation in Dubai</h1>
          <p>
          We offer professional consultation and document support for individuals and businesses in Dubai.
          </p>
          <button
            className="button primary-button-invert"
            onClick={handleApplyForVisa}
          >
             Book a Free Consultation
            <MoveRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
