import React from "react";
import styled from "styled-components";
import { HoverEffect } from "./ui/card-hover-effect.jsx";

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem 5rem;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 0 1rem;
  }
`;

export function CardHoverEffectDemo() {
  return (
    <Container>
      <HoverEffect items={projects} />
    </Container>
  );
}

export const projects = [
  {
    title: "The Most Value for Money Software",
    description:
      "Can't afford 3-5 lacs for a shipping aggregator software? Don't worry! Helix is here for you. Get the same high-quality, advanced software for just ₹4,999/month.Whether you're shipping to your neighbor or Neptune, we've got you covered with B2C, B2B, and international options.",
    link: "https://stripe.com",
  },
  
  {
    title: "Excellent Customer User Interface",
    description:
      "If you can use a smartphone, you can use Helix. It's that easy—no tech jargon—just streamlined.",
    link: "https://google.com",
  },
  {
    title: "Experience Helix Risk-Free - 1 Month Free-Trial",
    description:
      " Hesitant to invest upfront? Try our 1-month free trial and see the benefits for yourself. We think we know your decision already—you'll want to keep using Helix! 😉",
    link: "https://netflix.com",
  },
  {
    title: "Excellent Customer Service",
    description:
      "Have a problem? We have you covered—from the back to the front and all around. Our support is more reliable than that cup of coffee that greets you in the morning.",
    link: "https://meta.com",
  },
  {
    title: "Full-Featured Shipping Management",
    description:
      "Whether you're shipping to your neighbor or Neptune, we've got you covered with B2C, B2B, and international options.",
    link: "https://amazon.com",
  },
];
