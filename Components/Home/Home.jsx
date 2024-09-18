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
import { ThreeDCardDemo } from "@/Sections/Footer/ThreeCardDemo";
import { AnimatedTooltipPreview } from "../Pricing/Sections/Animations/AnimatedTooltipPreview";
import { MovingBorderDemo } from "@/Sections/Footer/MovingBorderDemo";
import { FlipWordsDemo } from "../Pricing/Sections/Animations/FlipWordsDemo";

function Home()
{
  return (
    <div>

      <Header />
      <Hero />
      {/* <ThreeDCardDemo/> */}
      {/* <AnimatedTooltipPreview /> */}
      {/* <MovingBorderDemo /> */}
      {/* <FlipWordsDemo/> */}
      <About />
      <Second />
      <Features />
      <Quote />
      <Cases />
      <Service />
      <ContactForm />
      <Ngo />
      <Faq />

    </div>
  );
}

export default Home;
