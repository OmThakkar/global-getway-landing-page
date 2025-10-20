import React from "react";
import { servicesData } from "../data/servicesData";
import SectionHeader from "./general/SectionHeader";
import { MoveRight } from "lucide-react";

const Services = () => {
  return (
    <section className="section-container" id="services">
      {servicesData.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12"
        >
          <div
            className={`flex flex-col gap-4 ${item.id % 2 === 0 ? "md:order-last" : ""}`}
          >
            <SectionHeader
              subheading={item.type}
              heading={item.heading}
              align="left"
            />
            {item.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <a
              href="tel:+919876543210"
              className="button primary-button md:mt-4 mt-2 w-fit"
            >
              {item.type === "Travel Package"
                ? "Enquire Now For Your Package"
                : "Enquire Now For Your Visa"}
              <MoveRight className="h-4 w-4" />
            </a>
          </div>
          <div
            className={`grid grid-cols-2 grid-rows-2 gap-2 ${item.id % 2 === 0 ? "md:order-first" : ""}`}
          >
            <div className="col-span-2 row-span-2 md:col-span-1 h-64 w-full rounded-lg overflow-hidden md:h-[400px]">
              <img
                src={item.images[0]}
                alt={item.heading}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="h-48 w-full rounded-lg overflow-hidden md:h-[196px]">
              <img
                src={item.images[1]}
                alt={item.heading}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="h-48 w-full rounded-lg overflow-hidden md:h-[196px]">
              <img
                src={item.images[2]}
                alt={item.heading}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
