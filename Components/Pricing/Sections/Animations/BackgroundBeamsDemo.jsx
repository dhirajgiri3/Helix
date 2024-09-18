"use client";
import React from "react";
import styled from "styled-components";
import { BackgroundBeams } from "./ui/background-beams.jsx";
import Getstarted from "../Buttons/Getstarted.jsx";
import Link from "next/link.js";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  background-color: var(--grey);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  z-index: 0;
  margin-bottom: 3rem;
 

  @media (max-width: 767px) {
    height: 60vh;
  }
`;

const Content = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Title = styled.h1`
  position: relative;
  z-index: 10;
  font-size: 1.875rem;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to bottom, #e5e5e5, #737373);
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 4.375rem;
  }
`;

const Description = styled.p`
  color: #737373;
  max-width: 28rem;
  margin: 0.5rem auto;
  font-size: 0.875rem;
  text-align: center;
  position: relative;
  z-index: 10;
`;

export function BackgroundBeamsDemo()
{
  return (
    <Container>
      <Content>
        <Title>Need a Custom Logistic Software?</Title>
        <Description>
          Contact our team to discuss your project and discover how we can develop advanced and tailored logistics software to meet your specific requirements.
        </Description>
        <Link href="/contact">
          <Getstarted text={"Contact Now"} />
        </Link>
      </Content>
      <BackgroundBeams />
    </Container>
  );
}
