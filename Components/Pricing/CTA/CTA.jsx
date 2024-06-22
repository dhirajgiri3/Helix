import React from "react";
import styled from "styled-components";
import Getstarted from "../Buttons/Getstarted";

const CTAStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
`;

function CTA() {
  return (
    <CTAStyled>
      <h1>
        Request a Demo of Helix to see how it can transform your shipping
        management.
      </h1>
      <Getstarted text={"Request a Demo"} />
    </CTAStyled>
  );
}

export default CTA;
