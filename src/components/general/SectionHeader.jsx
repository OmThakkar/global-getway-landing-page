import React from "react";

const SectionHeader = ({
  heading,
  subheading,
  align = "center",
  className = "",
  responsive = false,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 ${
        responsive 
          ? `items-center md:${align === "left" ? "items-start" : "items-center"}` 
          : align === "left" ? "items-start" : "items-center"
      } ${className}`}
    >
      <span className="text-primary-500 text-xs md:text-sm font-semibold tracking-wider uppercase">
        {subheading}
      </span>
      <h2
        className={`max-w-xl ${
          responsive
            ? `text-center md:${align === "center" ? "text-center" : "text-left"}`
            : align === "center" ? "text-center" : "text-left"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeader;
