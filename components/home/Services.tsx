import { servicesData } from "@/data/data";
import { euroStyle } from "@/utils/fonts";
import React from "react";
import { HoverCard } from "../ui/hovercards";

const Services = () => {
  return (
    <div
      className={`w-full  flex flex-col md:flex-row items-center bg-[#191919] overflow-hidden ${euroStyle.className} z-10`}
    >
      <div className="md:px-8 px-4 py-8 md:py-16 md:w-1/2   flex flex-col items-start justify-center relative">
        {/* ANIMATING DIVS  */}
        <div
          className="absolute top-0 -left-4 w-72 h-72 bg-[#7571e6] rounded-full filter blur-3xl opacity-40 animate-blob "
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute left-20 w-72 h-72 bg-[#cccaf0] rounded-full filter blur-3xl opacity-40 animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        {/* CONTENT  */}
        <h3
          className={`${euroStyle.className} text-[1.5rem] text-white z-10
        `}
        >
          Services
        </h3>
        <h1
          className={`${euroStyle.className} text-[2rem] md:text-[4rem] leading-none text-white/75  z-10
          `}
        >
          Empowering our global clientele to embrace modern technology, rethink
          processes, and elevate experiences
        </h1>
      </div>
      <div className=" md:w-1/2 flex flex-col">
        {servicesData.map((item, index) => (
          <HoverCard
            title={item.title}
            description={item.description}
            key={index + 0.01 * 2}
            className={`${index < servicesData.length - 1 ? "border-b" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
