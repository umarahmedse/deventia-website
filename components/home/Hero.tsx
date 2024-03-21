import Link from "next/link";
import React from "react";
import { IoArrowDownOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative bg-[#161616] h-screen">
      {/* <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={"/demobgVideo.webm"}  />
        Your browser does not support the video tag.
      </video> */}
      <div className="absolute inset-0 flex items-center justify-start p-8">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-1 1200px:w-1/2">
            <h3 className="text-white/50 text-sm w-[200px]">
              Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet
            </h3>
            <div className="p-2 border border-white flex items-center justify-center">
              <IoArrowDownOutline size={30} color="#fff" />
            </div>
          </div>
          <h1 className="text-white text-start text-[3rem] 500px:text-[5rem] font-bold 1200px:leading-none">
            Unlicking <br /> Digital Excellence
          </h1>
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href={"/"}
              className="p-4 bg-[#7471E6] text-white flex items-center gap-2"
            >
              Let&apos;s Connect
            </Link>
            <div className="p-4 bg-[#7471E6] flex items-center justify-center">
              <MdOutlineArrowOutward size={25} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
