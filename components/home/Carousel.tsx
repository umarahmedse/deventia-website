"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function HeroCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="!bg-[#191919] w-full h-full py-20">
      <h2 className="max-w-[85rem]  mx-auto text-xl md:text-5xl font-bold text-white font-sans">
        Get to know Cybitronix Technologies
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ title, description, image }) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">{title}</span>{" "}
              {description}
            </p>
            <img
              src={image}
              alt={title}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Software Solutions",
    title: "Custom Software Development",
    src: "https://i.ibb.co/cK1tT8Kb/software-developer-6521720-1280.jpg",
    content: (
      <DummyContent
        title="Custom Software Development"
        description="At Cybitronix Technologies, we build tailored software solutions to meet your business needs and accelerate digital transformation."
        image="https://i.ibb.co/cK1tT8Kb/software-developer-6521720-1280.jpg"
      />
    ),
  },
  {
    category: "Web Development",
    title: "Scalable Web Applications",
    src: "https://i.ibb.co/hRRYWsKN/code-820275-1280.jpg",
    content: (
      <DummyContent
        title="Scalable Web Applications"
        description="From sleek business websites to enterprise-level platforms, we deliver speed, reliability, and scalability for modern businesses."
        image="https://i.ibb.co/hRRYWsKN/code-820275-1280.jpg"
      />
    ),
  },
  {
    category: "Mobile Apps",
    title: "iOS & Android Development",
    src: "https://i.ibb.co/VWJRr44n/corona-5243202.jpg",
    content: (
      <DummyContent
        title="iOS & Android Development"
        description="Engaging mobile apps designed to give users seamless experiences across iOS and Android ecosystems."
        image="https://i.ibb.co/VWJRr44n/corona-5243202.jpg"
      />
    ),
  },
  {
    category: "Cloud & SaaS",
    title: "SaaS & Cloud Platforms",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2515&auto=format&fit=crop",
    content: (
      <DummyContent
        title="SaaS & Cloud Platforms"
        description="We build secure and scalable cloud-based platforms that empower businesses to innovate and grow."
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2515&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "AI & Automation",
    title: "AI-Powered Solutions",
    src: "https://i.ibb.co/zHmhNjXp/ai-7977960-1920.jpg",
    content: (
      <DummyContent
        title="AI-Powered Solutions"
        description="From chatbots to predictive analytics, we integrate AI to help businesses automate and accelerate growth."
        image="https://i.ibb.co/zHmhNjXp/ai-7977960-1920.jpg"
      />
    ),
  },
  {
    category: "Careers",
    title: "Join Our Team",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2048&auto=format&fit=crop",
    content: (
      <DummyContent
        title="Join Our Team"
        description="We’re looking for passionate developers, designers, and innovators to join Cybitronix Technologies."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2048&auto=format&fit=crop"
      />
    ),
  },
];
