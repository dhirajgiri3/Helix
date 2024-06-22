"use client";
import React, { useRef } from "react";
import styled, { css } from "styled-components";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Container = styled.button`
  background: transparent;
  position: relative;
  text-align: center;
  font-size: 1.25rem;
  padding: 1px;
  overflow: hidden;
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius};
  `}
`;

const InnerDiv = styled.div`
  position: absolute;
  inset: 0;
  ${({ borderRadius }) => css`
    border-radius: calc(${borderRadius} * 0.96);
  `}
`;

const ChildDiv = styled.div`
  height: 5rem;
  width: 5rem;
  opacity: 0.8;
  background: radial-gradient(
    var(--sky-500) 30%,
    var(--primary) 50%,
    transparent 80%
  );
`;

const ContentDiv = styled.div`
  position: relative;
  background: ${({ backgroundcolor }) => backgroundcolor};
  backdrop-filter: blur(20px);
  border: 1px solid var(--primary);
  color: ${({ textcolor }) => textcolor};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  font-size: var(--sm);
  ${({ borderRadius }) => css`
    border-radius: calc(${borderRadius} * 0.96);
  `}
`;

export function Button({
  borderRadius = "1.75rem",
  children,
  backgroundcolor,
  textcolor,
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <Container
      borderRadius={borderRadius}
      className={containerClassName}
      {...otherProps}
    >
      <InnerDiv borderRadius={borderRadius}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <ChildDiv className={borderClassName} />
        </MovingBorder>
      </InnerDiv>
      <ContentDiv
        className={className}
        borderRadius={borderRadius}
        backgroundcolor={backgroundcolor}
        textcolor={textcolor}
      >
        {children}
      </ContentDiv>
    </Container>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
