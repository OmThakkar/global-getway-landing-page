import React from "react";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-primary-900 relative flex h-dvh min-h-[400px] items-center text-white md:items-end">
      <img
        src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?_gl=1*12sox84*_ga*MTUxNjg5MTE5MC4xNzU5MjQ5ODAy*_ga_8JE65Q40S6*czE3NjA2MjgwOTckbzIkZzEkdDE3NjA2MjgyMzMkajYwJGwwJGgw"
        alt="Hero Image"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 md:bg-transparent from-black/70 via-black/50 to-transparent md:bg-gradient-to-tr" />
      <div className="section-container relative z-0 w-full">
        <div className="flex max-w-3xl flex-col items-start gap-6">
          <h1>Get Your Tourist Visa Approved Fast & Hassle-Free!</h1>
          <p>
            Trusted Visa Consultants in Dubai — We Help You Visit 20+ Countries
            with Ease.
          </p>
          <a
            href="#contact"
            className="button primary-button-invert text-sm md:text-base"
          >
            Apply For Your Visa Now
            <MoveRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
