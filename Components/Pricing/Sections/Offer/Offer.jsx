"use client";

import React from "react";
import Left from "./Left";
import Right from "./Right";
import styled from "styled-components";

const OfferStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 90vh;
  padding: 3rem;
  gap: 3rem;

  .left-container {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-container {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem 1rem;
    height: 100%;

    .left-container {
      width: 100%;
    }

    .right-container {
      display: none;
    }
  }
`;

function Offer() {
  return (
    <OfferStyle>
      <div className="left-container">
        <Left />
      </div>
      <div className="right-container">
        <Right />
      </div>
    </OfferStyle>
  );
}

export default Offer;
