"use client";

import React from "react";
import styled from "styled-components";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards.jsx";

const Container = styled.div`
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  antialiased: true;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 5rem;
`;

export function InfiniteMovingCardsDemo() {
  return (
    <Container>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </Container>
  );
}

const testimonials = [
  {
    quote:
      "Working with Cyper Studio has been nothing short of transformative. Their custom software solution streamlined our operations, significantly boosting efficiency and productivity. Thanks to Cyper Studio, we now have the competitive edge we needed to rapidly scale Blueship. Their expertise and dedication have been pivotal to our growth and success.",
    name: "Dimple Chahal",
    title: "CEO of Blueship",
  },
  {
    quote:
      "Cyper Studio understood the limitations of our outdated software and delivered a solution that not only met but exceeded our expectations. Their modernized platform has been instrumental in streamlining our operations, enhancing efficiency, and driving our business forward. The team's professionalism and innovative approach have made a significant impact on our company's growth trajectory.",
    name: "Sandeep Singal",
    title: "Founder & CEO, Shipex India",
  },
  {
    quote:
      "Working with Cyper Studio has been nothing short of transformative. Their custom software solution streamlined our operations, significantly boosting efficiency and productivity. Thanks to Cyper Studio, we now have the competitive edge we needed to rapidly scale Blueship. Their expertise and dedication have been pivotal to our growth and success.",
    name: "Dimple Chahal",
    title: "CEO of Blueship",
  },
  {
    quote:
      "Cyper Studio understood the limitations of our outdated software and delivered a solution that not only met but exceeded our expectations. Their modernized platform has been instrumental in streamlining our operations, enhancing efficiency, and driving our business forward. The team's professionalism and innovative approach have made a significant impact on our company's growth trajectory.",
    name: "Sandeep Singal",
    title: "Founder & CEO, Shipex India",
  },
  {
    quote:
      "Working with Cyper Studio has been nothing short of transformative. Their custom software solution streamlined our operations, significantly boosting efficiency and productivity. Thanks to Cyper Studio, we now have the competitive edge we needed to rapidly scale Blueship. Their expertise and dedication have been pivotal to our growth and success.",
    name: "Dimple Chahal",
    title: "CEO of Blueship",
  },
  {
    quote:
      "Cyper Studio understood the limitations of our outdated software and delivered a solution that not only met but exceeded our expectations. Their modernized platform has been instrumental in streamlining our operations, enhancing efficiency, and driving our business forward. The team's professionalism and innovative approach have made a significant impact on our company's growth trajectory.",
    name: "Sandeep Singal",
    title: "Founder & CEO, Shipex India",
  },
];
