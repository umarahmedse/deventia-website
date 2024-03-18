import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import { TracingBeam } from "@/components/ui/tracingbeam";
import React from "react";

const page = () => {
  return (
    <>
      <TracingBeam>
        <Hero />
        <Services />
      </TracingBeam>
    </>
  );
};

export default page;
