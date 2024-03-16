import Hero from "@/components/home/Hero";
import { TracingBeam } from "@/components/ui/tracingbeam";
import React from "react";

const page = () => {
  return (
    <>
      <TracingBeam>
        <Hero />
      </TracingBeam>
    </>
  );
};

export default page;
