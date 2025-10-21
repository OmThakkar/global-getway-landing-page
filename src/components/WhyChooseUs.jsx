import React from "react";
import SectionHeader from "./general/SectionHeader";
import { WhyChooseUsData } from "../data/WhyChooseUsData";
import { MoveRight } from "lucide-react";

const WhyChooseUs = () => {
  const handleEnquiry = () => {
    const message = "Hello, I want to enquire about your services.";
    const whatsappUrl = `https://wa.me/919112377799?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="section-container" id="whyChooseUs">
      <SectionHeader
        subheading="Why Choose Us"
        heading="We are known for our expertise and customer service"
      />
      <div className="grid-layout">
        {WhyChooseUsData.map((item) => (
          <div className="card items-center text-center" key={item.title}>
            <div className="card-icon">
              <lord-icon
                src={`https://cdn.lordicon.com/${item.icon}.json`}
                trigger="hover"
                colors="primary:#030712 ,secondary:#C29933"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="button outline-button justify-center w-fit mx-auto" onClick={() => handleEnquiry()}>
        Enquire About Our Services
        <MoveRight className="h-4 w-4" />
      </button>
    </section>
  );
};

export default WhyChooseUs;
