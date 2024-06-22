"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const scrollAnimation = keyframes`
  to {
    transform: translateX(calc(-50% - 0.5rem));
  }
`;

const ScrollerContainer = styled.div`
  position: relative;
  z-index: 20;
  max-width: 7xl;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  ${({ direction, speed }) => css`
    --animation-direction: ${direction === "left" ? "forwards" : "reverse"};
    --animation-duration: ${speed === "fast"
      ? "20s"
      : speed === "normal"
      ? "40s"
      : "80s"};
  `}
`;

const ScrollerList = styled.ul`
  display: flex;
  min-width: 100%;
  flex-shrink: 0;
  gap: 1rem;
  padding: 1rem;
  width: max-content;
  flex-wrap: nowrap;
  animation: ${scrollAnimation} var(--animation-duration)
    var(--animation-direction) linear infinite;
  ${({ pauseOnHover }) =>
    pauseOnHover &&
    css`
      &:hover {
        animation-play-state: paused;
      }
    `}
`;

const Card = styled.li`
  width: 350px;
  max-width: 100%;
  position: relative;
  border-radius: 1rem;
  border: 1px solid slategray;
  padding: 1rem;
  background: linear-gradient(80deg, #12182b, #32394f);
  backdrop-filter: blur(20px);
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 450px;
  }
`;

const Blockquote = styled.blockquote`
  position: relative;
  z-index: 20;
`;

const Quote = styled.span`
  position: relative;
  z-index: 20;
  font-size: 0.875rem;
  line-height: 1.6;
  color: white;
  font-weight: normal;
`;

const AuthorInfo = styled.div`
  position: relative;
  z-index: 20;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const AuthorName = styled.span`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #ddd;
  font-weight: normal;
`;

const AuthorTitle = styled.span`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #ddd;
  font-weight: normal;
`;

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }

  return (
    <ScrollerContainer
      ref={containerRef}
      direction={direction}
      speed={speed}
      className={className}
    >
      <ScrollerList ref={scrollerRef} pauseOnHover={pauseOnHover}>
        {items.map((item, idx) => (
          <Card key={idx}>
            <Blockquote>
              <Quote>{item.quote}</Quote>
              <AuthorInfo>
                <AuthorName>{item.name}</AuthorName>
                <AuthorTitle>{item.title}</AuthorTitle>
              </AuthorInfo>
            </Blockquote>
          </Card>
        ))}
      </ScrollerList>
    </ScrollerContainer>
  );
};
