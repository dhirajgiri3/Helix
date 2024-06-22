"use client";

import React, { createContext, useState, useContext, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const MouseEnterContext = createContext([false, () => {}]);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => setIsMouseEntered(true);

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <Container className={cn(containerClassName)}>
        <MotionDiv
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(className)}
        >
          {children}
        </MotionDiv>
      </Container>
    </MouseEnterContext.Provider>
  );
};

const Container = styled.div`
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.2s ease-linear;
  transform-style: preserve-3d;
`;

export const CardBody = ({ children, className }) => {
  return (
    <Body className={cn(className)}>
      {children}
    </Body>
  );
};

const Body = styled.div`
  height: 24rem;
  width: 24rem;
  transform-style: preserve-3d;
  & > * {
    transform-style: preserve-3d;
  }
`;

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        transform: isMouseEntered
          ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
          : `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`,
        transition: "transform 0.2s ease-linear",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
