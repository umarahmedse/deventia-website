import { servicesData, testiomonialsData } from "@/data/data";
import { euroStyle, genos } from "@/utils/fonts";
import React from "react";
import { HoverCard } from "../ui/hovercards";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import { TestimonialCards } from "../ui/TestimonialCards";

const WhoWeAre = () => {
  return (
    <div
      className={`w-full  flex items-center  bg-[#191919] overflow-hidden ${euroStyle.className} z-10 relative`}
    >
      <div
        className="absolute top-0 -right-4 w-72 h-72 bg-[#7571e6] rounded-full filter blur-3xl opacity-10 animate-blob "
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute right-20 w-72 h-72 bg-[#cccaf0] rounded-full filter blur-3xl opacity-10 animate-blob"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute top-0 -left-4 w-72 h-72 bg-[#7571e6] rounded-full filter blur-3xl opacity-10 animate-blob "
        style={{ animationDelay: "6s" }}
      ></div>
      <div
        className="absolute left-20 w-72 h-72 bg-[#cccaf0] rounded-full filter blur-3xl opacity-10 animate-blob"
        style={{ animationDelay: "8s" }}
      ></div>
      <div className=" px-4 py-8    flex flex-col items-start justify-center relative">
        <h3
          className={`${genos.className} text-[2rem] text-white z-10 font-[200]
        `}
        >
          Testimonial{" "}
        </h3>
        <h1
          className={`${euroStyle.className} text-[2rem] md:text-[3rem] leading-none text-white/75  z-10
          `}
        >
          What Our Users Says{" "}
        </h1>
        <TestimonialCards
          direction="left"
          speed="slow"
          items={testiomonialsData}
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
