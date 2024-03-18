import ChooseUs from "@/components/home/ChooseUs";
import Hero from "@/components/home/Hero";
import { ScrollView } from "@/components/home/ScrollView";
import Services from "@/components/home/Services";
import { TracingBeam } from "@/components/ui/tracingbeam";
import { users } from "@/data/data";
import React from "react";

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
      </TracingBeam>
    </>
  );
};

export default page;
