import React from "react";
import WhatsAppButton from "../components/general/WhatsAppButton";
import Navbar from "../components/general/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import PopularDestinations from "../components/PopularDestinations";
import CallToAction from "../components/general/CallToAction";
import Disclaimer from "../components/Disclaimer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <PopularDestinations/>
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <WhatsAppButton />
      <CallToAction />
      <Disclaimer />
    </>
  );
};

export default Home;
