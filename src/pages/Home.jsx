import React from "react";
import WhatsAppButton from "../components/general/WhatsAppButton";
import Navbar from "../components/general/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <FrequentlyAskedQuestions />
      <Testimonials />
      <WhatsAppButton />
    </>
  );
};

export default Home;
