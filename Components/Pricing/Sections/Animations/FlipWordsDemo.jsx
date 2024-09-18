"use client";

import React from "react";
import styled from "styled-components";
import { FlipWords } from "./ui/flip-words.jsx";

const Container = styled.div`
  display: flex;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  font-size: var(--xl);
  font-weight: 400;
  color: var(--white);
  text-align: center;
  width: 60%;

  @media screen and (max-width: 767px) {
    font-size: 1.7rem;
  }

  span {
    font-weight: 800;
    background: -webkit-linear-gradient(70deg, #385cf9, #385cf9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export function FlipWordsDemo()
{
  const words = ["Shipping", "Logistics", "Delivery", "Fulfillment", "Courier"];

  return (
    <Container>
      <TextWrapper>
        Choose the Perfect White Label Software Pricing Plan
        for Your <FlipWords words={words} />
      </TextWrapper>
    </Container>
  );
}
