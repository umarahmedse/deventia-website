import { accordionData } from "@/data/data";
import { euroStyle } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import chooseUsImg from "@/public/chooseUsImg.png";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
const ChooseUs = () => {
  return (
    <div
      className={`w-full relative  flex flex-col md:flex-row items-center bg-[#191919] overflow-hidden ${euroStyle.className} `}
    >
      {/* ANIMATING DIVS  */}
      <div
        className="absolute top-0 -left-4 w-72 h-72 bg-[#7571e6] rounded-full filter blur-3xl opacity-40 animate-blob "
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute left-20 w-72 h-72 bg-[#cccaf0] rounded-full filter blur-3xl opacity-40 animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-0 -right-4 w-48 h-48 bg-[#c7e671] rounded-full filter blur-3xl opacity-40 animate-blob "
        style={{ animationDelay: "6s" }}
      ></div>
      <div
        className="absolute right-0 -bottom-4 w-48 h-48 bg-[#78e6f5] rounded-full filter blur-3xl opacity-40 animate-blob"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#90aaf0] rounded-full filter blur-3xl opacity-40 animate-blob"
        style={{ animationDelay: "5s" }}
      ></div>
      {/* CONTENT  */}
      <div className="md:px-8 px-4 py-8 md:py-16 md:w-1/2   flex flex-col items-start justify-center relative">
        <h3
          className={`${euroStyle.className} text-[1.5rem] text-white z-10
        `}
        >
          Choose Us
        </h3>
        <h1
          className={`${euroStyle.className} text-[2rem] md:text-[4rem] leading-none text-white/75  z-10
          `}
        >
          Why Choose Services From Cybitronix?
        </h1>
        {/* ACCORDION  */}
        {accordionData.map((item, index) => (
          <div
            className="collapse collapse-arrow bg-[#7471E680] rounded-none mb-1 text-white z-[15]"
            key={index + 0.05 * 2}
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex items-center gap-4">
              <div className="w-8 h-8 p-4 bg-[#FFFFFF7D] text-black font-semibold flex items-center justify-center">
                {index + 1}
              </div>
              <p> {item.title}</p>{" "}
            </div>
            <div className="collapse-content">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" md:w-1/2 flex flex-col p-8">
        <Image src={chooseUsImg} alt="choose us image" />
        <p className="p-6 text-white text-[1.2rem]">
          Cybitronix provides businesses with an edge over the competition with
          various benefits. Opting for outsourced IT services improves business
          efficiency and builds trust with customers and clients. Our services
          can be tailored to meet specific needs to match your specific goals.
          Our services can be tailored to meet specific needs to match your
          specific goals. Our services can be tailored to meet specific needs to
          match your specific goals.
        </p>
        <Link
          href={"/"}
          className="py-2 px-6 bg-transparent  text-[#7471E6] border border-[#7471E6] flex items-center gap-1 text-[1.2rem] self-start"
        >
          Start Project
        </Link>
      </div>
    </div>
  );
};

export default ChooseUs;
