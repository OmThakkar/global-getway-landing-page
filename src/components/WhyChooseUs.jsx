import React from "react";
import SectionHeader from "./general/SectionHeader";
import { WhyChooseUsData } from "../data/WhyChooseUsData";

const WhyChooseUs = () => {
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
                colors="primary:##030712 ,secondary:#005594"
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
    </section>
  );
};

export default WhyChooseUs;
