import ChooseUs from "@/components/home/ChooseUs";
import Hero from "@/components/home/Hero";
import { ScrollView } from "@/components/home/ScrollView";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
import StatsAndPartners from "@/components/home/Stats";
import WhoWeAre from "@/components/home/WhoWeAre";
import { TracingBeam } from "@/components/ui/tracingbeam";
import { users } from "@/data/data";
import React from "react";
import Portfolio from "@/components/home/Portfolio";

const page = () => {
  return (
    <>
      <TracingBeam>
        <Hero />
        <Services />
        <ScrollView
          users={users}
          titleComponent={
            <>
              <h1 className="text-xl font-semibold text-white">
                10+ Completed Projects <br />
                <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none">
                  And Counting ....
                </span>
              </h1>
            </>
          }
        />
        <ChooseUs />
        <StatsAndPartners />
        <WhoWeAre />
        <Testimonial />
        <Portfolio />
      </TracingBeam>
    </>
  );
};

export default page;
