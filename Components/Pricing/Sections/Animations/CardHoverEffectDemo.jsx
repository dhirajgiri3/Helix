import React from "react";
import styled from "styled-components";
import { HoverEffect } from "./ui/card-hover-effect.jsx";

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem 5rem;
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
    title: "Full-Featured Shipping Management",
    description:
      "Whether you're shipping to your neighbor or Neptune, we've got you covered with B2C, B2B, and international options.",
    link: "https://stripe.com",
  },
  {
    title: "Advanced Analytics and Reporting:",
    description:
      " Delve into the data without requiring a PhD; our analytics are intuitive and make shipping a breeze.",
    link: "https://netflix.com",
  },
  {
    title: "Excellent Customer User Interface",
    description:
      "If you can use a smartphone, you can use Helix. It's that easy—no tech jargon—just streamlined.",
    link: "https://google.com",
  },
  {
    title: "Excellent Customer Service",
    description:
      "Have a problem? We have you covered—from the back to the front and all around. Our support is more reliable than that cup of coffee that greets you in the morning.",
    link: "https://meta.com",
  },
  {
    title: "Affordable Pricing Plans",
    description:
      "We won't let you break the bank. We promise. Even your accountant will be impressed.",
    link: "https://amazon.com",
  },
];
