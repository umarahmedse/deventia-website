import { partnersData, statsData } from "@/data/data";
import React from "react";
import { InfiniteMovingCards } from "../ui/movingcards";

const StatsAndPartners = () => {
  return (
    <>
      <div className="bg-[#191919] text-white bg-stats  bg-cover  bg-no-repeat  bg-center ">
        <div className="w-full h-full bg-gradient-to-b from-blue-600/50 to-blue-400/40 backdrop-brightness-75 flex items-center flex-wrap justify-center lg:gap-6 gap-1">
          {statsData.map((item, index) => (
            <div
              className="flex flex-col items-center gap-1 p-4 leading-none"
              key={index + 0.05 * 2}
            >
              <h1 className="text-[8rem] font-semibold">+{item.value}</h1>
              <h3 className="uppercase ml-8 text-[1.5rem]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#191919]">
        <InfiniteMovingCards
          items={partnersData}
          direction="right"
          speed="normal"
        />
      </div>
    </>
  );
};

export default StatsAndPartners;
