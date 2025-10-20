import React from "react";
import SectionHeader from "./general/SectionHeader";
import Accordion from "./general/Accordion";
import { faqsData } from "../data/faqsData";
import faqsImage from "../assets/images/faq.webp"

const FAQs = () => {
  return (
    <section className="section-container relative" id="faqs">
      {/* Section Header */}
      <SectionHeader
        align="center"
        subheading="Frequently Asked Questions"
        heading="Everything you need to know about Global Getway"
      />
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:gap-8">
        <div className="h-full max-h-80 lg:sticky lg:top-32 lg:max-h-[500px] rounded-xl overflow-hidden">
          <img
            src={faqsImage}
            alt="FAQs Image"
            className="h-full w-full object-cover"
          />
        </div>
        <Accordion
          items={faqsData}
          singleOpen={true}
          defaultOpen={true}
          type="collapsible"
          itemGap={4}
          showBorder={true}
          showShadow={false}
          itemClassName="first:rounded-t-lg last:rounded-b-lg"
        />
      </div>
    </section>
  );
};

export default FAQs;
