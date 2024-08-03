"use client";

import React from "react";
import { Hero } from "./Sections/Hero/Hero";
import Header from "../Header/DarkHeader";
import Offer from "./Sections/Offer/Offer";
import PricingTable from "./Sections/PricingTier/PricingTier";
import PricingMobile from "./Sections/PricingTier/PricingMobile";
import styled from "styled-components";
import { BackgroundBeamsDemo } from "./Sections/Animations/BackgroundBeamsDemo";

const PricingStyled = styled.div`
  .laptop {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

function Pricing() {
  return (
    <PricingStyled>
      <Header />
      <Hero />
      <Offer />
      <div className="laptop">
        <PricingTable />
      </div>
      <div className="mobile">
        <PricingMobile />
      </div>
      <BackgroundBeamsDemo />
    </PricingStyled>
  );
}

export default Pricing;
