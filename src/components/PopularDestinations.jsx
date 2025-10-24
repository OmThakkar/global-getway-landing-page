import React from "react";
import SectionHeader from "./general/SectionHeader";
import { popularDestinationsData } from "../data/popularDestinationsData";
import { MoveRight } from "lucide-react";

const PopularDestinations = () => {
  const handleEnquiry = (destination) => {
    const message = `I want to know about ${destination}. Can you please provide me the details?`;
    const whatsappUrl = `https://wa.me/919112377799?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-primary-50/50" id="popularDestinations">
      <div className="section-container">
        <div className="flex flex-col gap-4">
          <SectionHeader
            subheading="Popular Destinations"
            heading="Most Explored Places In Dubai"
            align="left"
            responsive={true}
          />
          <p className="text-stone-600 max-w-5xl">
            Explore the world with Global Getway - your trusted partner for Dubai
            Visit and Tourist Visas. Whether you're planning a short getaway or
            a long vacation, we make the visit visa process simple, fast, and
            hassle-free. From documentation to approval, our experts ensure a
            smooth experience so you can focus on creating unforgettable
            memories in Dubai.
          </p>
        </div>
        <div className="grid-layout">
          {popularDestinationsData.map((destination) => (
            <div key={destination.id} className="card">
              <div className="h-64 w-full overflow-hidden rounded-xl">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                <button
                  onClick={() => handleEnquiry(destination.title)}
                  className="text-primary-600 mt-2 flex items-center gap-2 font-medium underline-offset-4 hover:underline"
                >
                  <span>Enquire Now</span>
                  <MoveRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
