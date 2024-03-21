import { portfolioData } from "@/data/data";
import { euroStyle, genos, poppins } from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { PinContainer } from "../ui/PinCards3d";
import Image from "next/image";
const Portfolio = () => {
  return (
    <div
      className={`w-full h-full  bg-[#191919] overflow-hidden ${euroStyle.className} z-10 relative`}
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
      <div className=" px-4 pt-8 w-full flex flex-wrap justify-between items-center gap-4">
        <div className="">
          <h3
            className={`${genos.className} text-[2rem] text-white z-10 font-[200]
        `}
          >
            Portfolio{" "}
          </h3>
          <h1
            className={`${euroStyle.className} text-[2rem] md:text-[3rem] leading-none text-white/75  z-10
          `}
          >
            Our Previous Works{" "}
          </h1>
        </div>
        <Link
          href={"/"}
          className="px-6 py-2 bg-transparent  text-[#7471E6] font-semibold border border-[#7471E6] flex items-center gap-1 self-end"
        >
          <p> View More</p> <MdArrowOutward size={25} color="#7471E6" />
        </Link>
      </div>
      <div className="flex items-center flex-wrap justify-center">
        {portfolioData.map((item, index) => (
          <PinContainer
            key={index + 0.589 * 2}
            title={item.title}
            href={item.link}
          >
            <div className="flex basis-full flex-col rounded-xl tracking-tight sm:basis-1/2 w-[20rem] ">
              <Image
                src={item.imageUrl}
                width={350}
                height={400}
                alt="website image"
              />
              <div className="mt-2 p-2 flex items-center justify-between">
                <div className="">
                  <h3
                    className={`${poppins.className} text-[1rem] text-white z-10 font-[300]`}
                  >
                    Click Here To Visit{" "}
                  </h3>
                  <h3
                    className={`${poppins.className} text-[0.8rem] text-white z-10 font-[600] leading-none`}
                  >
                    {item.displayTitle}{" "}
                  </h3>
                </div>
                <MdArrowOutward size={30} fill="#fff" />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
