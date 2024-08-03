"use client";
import React from "react";
import styled from "styled-components";

const TrustButton = styled.div`
  background-color: var(--primary);
  color: #fff;
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-size: var(--sm);
`

export function Trusted() {
  return (
    <div>
      <TrustButton>
        Trusted by industry players
      </TrustButton>
    </div>
  );
}
