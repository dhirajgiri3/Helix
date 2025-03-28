"use client";
import React, { memo } from "react";
import styled from "styled-components";
import { Boxes } from "../Animations/ui/background-boxes.jsx";
import Getstarted from "../Buttons/Getstarted.jsx";
import { AnimatedTooltipPreview } from "../Animations/AnimatedTooltipPreview.jsx";
import { CardHoverEffectDemo } from "../Animations/CardHoverEffectDemo.jsx";
import { InfiniteMovingCardsDemo } from "../Animations/InfiniteMovingCardsDemo.jsx";
import { FlipWordsDemo } from "../Animations/FlipWordsDemo.jsx";

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #121314;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10rem;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #121314;
  z-index: 20;
  mask-image: radial-gradient(transparent, white);
  pointer-events: none;
`;

const Heading = styled.h1`
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  p {
    font-size: var(--norm);
    color: #999;
    width: 80%;
    text-align: center;


    @media screen and (max-width: 767px) {
      font-size: var(--sm);
    }
  }

  .span {
    font-size: var(--norm);
    font-weight: 500;
    color: #fff;
    background: #385df9;
    padding: 0.3rem 1rem;
    border-radius: 5rem;

    @media screen and (max-width: 767px) {
      font-size: var(--sm);
      padding: 0.1rem 0.5rem;
    }
  }
`;

const MemoizedBoxes = memo(Boxes);
const MemoizedAnimatedTooltipPreview = memo(AnimatedTooltipPreview);
const MemoizedCardHoverEffectDemo = memo(CardHoverEffectDemo);
const MemoizedInfiniteMovingCardsDemo = memo(InfiniteMovingCardsDemo);

export const Hero = memo(function Hero() {
  return (
    <Container>
      <Overlay />
      <MemoizedBoxes />
      <Heading>
        <FlipWordsDemo />
        <p>
          <span className="span">Helix</span> is Comprehensive Shipping
          Aggregator Software for Businesses of All Sizes
        </p>
        <MemoizedAnimatedTooltipPreview />
        <a href="/contact">
          <Getstarted text="Get Started" />
        </a>
        <MemoizedCardHoverEffectDemo />
        <MemoizedInfiniteMovingCardsDemo />
      </Heading>
    </Container>
  );
});


