import { servicesData } from "@/data/data";
import { euroStyle, genos } from "@/utils/fonts";
import React from "react";
import { HoverCard } from "../ui/hovercards";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div
      className={`w-full  flex flex-col md:flex-row items-center  bg-[#191919] overflow-hidden ${euroStyle.className} z-10`}
    >
      <div className="md:px-8 px-4 py-8 md:py-16 md:w-1/2   flex flex-col items-start justify-center relative">
        {/* ANIMATING DIVS  */}

        {/* CONTENT  */}
        <h3
          className={`${genos.className} text-[2rem] text-white z-10 font-[200]
        `}
        >
          Who We Are
        </h3>
        <h1
          className={`${euroStyle.className} text-[2rem] md:text-[4rem] leading-none text-white/75  z-10
          `}
        >
          WE ARE A LEADING SOFTWARE HOUSE.
        </h1>
        <p className="text-white text-lg">
          We’re a team of strategic mdigital marketing working globally with
          largest brands, We believe that progress only happens when you refused
          to play things safe. We combine ideas and behaviors, and insights with
          design, technological data to produce brand experiences that customers
          love our services.
        </p>
        <Link
          href={"/"}
          className="px-6 py-3 bg-transparent md:mt-6 text-[#7471E6] border border-[#7471E6] flex items-center gap-1 text-[14px] self-start"
        >
          <p className="text-lg"> Explore Us</p>{" "}
          <MdArrowOutward size={25} color="#7471E6" />
        </Link>
      </div>
      <div className=" md:w-1/2 flex flex-col items-center justify-center object-contain p-4 relative">
        <div
          className="absolute top-0 -right-4 w-72 h-72 bg-[#7571e6] rounded-full filter blur-3xl opacity-40 animate-blob "
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute right-20 w-72 h-72 bg-[#cccaf0] rounded-full filter blur-3xl opacity-40 animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <Image
          className="z-20"
          src={"/whoWeAreImg.png"}
          alt={"who we are img"}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
