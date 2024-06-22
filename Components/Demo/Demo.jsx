"use client";

import React from "react";
import styled from "styled-components";

const DemoStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    color: var(--primary);
  }
`;

function Demo() {
  return (
    <DemoStyled>
      <h1>Demo coming soon</h1>
      
    </DemoStyled>
  );
}

export default Demo;
