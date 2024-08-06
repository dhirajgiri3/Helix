"use client";

import About from "@/Sections/About/About";
import Cases from "@/Sections/Cases/Cases";
import ContactForm from "@/Sections/Contact/ContactForm";
import Faq from "@/Sections/Faq/Faq";
import Features from "@/Sections/Features/Features";
import Hero from "@/Sections/Hero/Hero";
import Ngo from "@/Sections/Ngo/Ngo";
import Quote from "@/Sections/Quote/Quote";
import Second from "@/Sections/Second/Second";
import Service from "@/Sections/Service/Service";
import Header from "../Header/Header";

function Home()
{
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Second />
      <Features />
      <Quote />
      <Cases />
      <Service />
      <ContactForm />
      <Ngo />
      <Faq />
      {/* <ThreeDCardDemo /> */}
      {/* <AnimatedTooltipPreview /> */}
      {/* <MovingBorderDemo /> */}
    </div>
  );
}

export default Home;
