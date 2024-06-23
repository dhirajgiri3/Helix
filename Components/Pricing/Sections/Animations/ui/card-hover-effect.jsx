import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  padding: 2.5rem 0;
  justify-content: space-between;
  align-items: center;
  place-items: center;
  height: 75vh;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    height: 100%;
  }
`;

const CardLink = styled(Link)`
  position: relative;
  display: block;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  max-height: 15rem;
  max-width: 20rem;

  &:hover .hover-background {
    opacity: 1;
  }

  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    @media (max-width: 1024px) {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }

    @media (max-width: 768px) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
  }

  &:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    @media (max-width: 1024px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    @media (max-width: 768px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }

  &:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;

    @media (max-width: 1024px) {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }

    @media (max-width: 768px) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
  }

  &:nth-child(4) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;

    @media (max-width: 1024px) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    @media (max-width: 768px) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }
  }

  &:nth-child(5) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;

    @media (max-width: 1024px) {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
    }

    @media (max-width: 768px) {
      grid-column: 1 / 2;
      grid-row: 5 / 6;
    }
  }
`;

const HoverBackground = styled(motion.span)`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: #333;
  opacity: 0;
  transition: opacity 0.15s;
  border-radius: 1.5rem;
`;

const CardContainer = styled.div`
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  background-color: #000;
  border: 1px solid transparent;
  transition: border 0.3s;
  &:hover {
    border-color: #334155;
  }
  position: relative;
  z-index: 20;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 50;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const CardTitle = styled.h4`
  color: #f4f4f5;
  font-weight: bold;
  letter-spacing: wide;
  text-align: center;
  font-size: var(--norm);
`;

const CardDescription = styled.h6`
  color: #a1a1aa;
  letter-spacing: wide;
  line-height: 1.5rem;
  font-size: var(--sm);
  text-align: center;
`;

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Grid className={className}>
      {items.map((item, idx) => (
        <CardLink
          href={item.link}
          key={item.link}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <HoverBackground
                className="hover-background"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
          <CardContainer>
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </CardContainer>
        </CardLink>
      ))}
    </Grid>
  );
};
