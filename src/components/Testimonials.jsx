import React from "react";
import SectionHeader from "./general/SectionHeader";
import { Star } from "lucide-react";
import { testimonialsData } from "../data/testimonialsData";

const Testimonials = () => {
  // Distribute testimonials into 3 columns (round-robin)
  const column1 = testimonialsData.filter((_, index) => index % 3 === 0);
  const column2 = testimonialsData.filter((_, index) => index % 3 === 1);
  const column3 = testimonialsData.filter((_, index) => index % 3 === 2);

  const TestimonialCard = ({ testimonial }) => (
    <div
      key={testimonial.id}
      className="card rounded-xl border border-stone-100 bg-white p-4 shadow-sm lg:p-6"
    >
      <div className="mb-4 flex w-full items-center justify-between gap-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star
              key={index}
              className="h-5 w-5 text-amber-500"
              fill="currentColor"
            />
          ))}
        </div>
        <div className="h-6 w-6">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt=""
          />
        </div>
      </div>
      <p>{testimonial.testimonial}</p>
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="text-sm font-medium">{testimonial.name}</span>
      </div>
    </div>
  );

  return (
    <section className="bg-primary-50/50" id="testimonials">
      <div className="section-container">
        <SectionHeader
          subheading="Testimonials"
          heading="Hear from Our Happy Customers"
          align="left"
          responsive={true}
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {column1.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {column2.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            {column3.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
