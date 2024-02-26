"use client";

import Cases from "@/Sections/Cases/Cases";
import Features from "@/Sections/Features/Features";
import Hero from "@/Sections/Hero/Hero";
import Quote from "@/Sections/Quote/Quote";
import Second from "@/Sections/Second/Second";
import SmoothScrolling from "@/app/SmoothScrolling";

function Home() {
  return (
    <SmoothScrolling>
      <div>
        <Hero />
        <Second />
        <Features />
        <Quote />
        <Cases />
      </div>
    </SmoothScrolling>
  );
}

export default Home;
