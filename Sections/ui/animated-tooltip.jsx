"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import styled from "styled-components";

const TooltipContainer = styled.div`
  margin-right: -1rem; /* -mr-4 */
  position: relative;
`;

const TooltipContent = styled(motion.div)`
  position: absolute;
  top: -4rem; /* -top-16 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 0.375rem; /* rounded-md */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-xl */
  padding: 0.5rem 1rem; /* px-4 py-2 */
  z-index: 50;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    inset-x: 10%; /* inset-x-10 */
    bottom: -1px; /* -bottom-px */
    height: 1px; /* h-px */
    background: linear-gradient(to right, transparent, #10b981, transparent); /* bg-gradient-to-r from-transparent via-emerald-500 to-transparent */
    z-index: 30;
  }

  &::after {
    content: '';
    position: absolute;
    left: 10%; /* left-10 */
    width: 40%; /* w-[40%] */
    bottom: -1px; /* -bottom-px */
    height: 1px; /* h-px */
    background: linear-gradient(to right, transparent, #0ea5e9, transparent); /* bg-gradient-to-r from-transparent via-sky-500 to-transparent */
    z-index: 30;
  }
`;

const TooltipText = styled.div`
  font-size: 1rem; /* text-base */
  font-weight: bold;
  color: white;
  position: relative;
  z-index: 30;
`;

const TooltipSubtext = styled.div`
  font-size: 0.75rem; /* text-xs */
  color: white;
`;

const ProfileImage = styled.img`
  object-fit: cover;
  object-position: top;
  border-radius: 9999px; /* rounded-full */
  height: 3.5rem; /* h-14 */
  width: 3.5rem; /* w-14 */
  border: 2px solid white; /* border-2 border-white */
  transition: transform 0.5s; /* transition duration-500 */
  &:hover {
    transform: scale(1.05); /* group-hover:scale-105 */
    z-index: 30; /* group-hover:z-30 */
  }
`;

export const AnimatedTooltip = ({
  items,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item) => (
        <TooltipContainer
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <TooltipContent
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                }}
              >
                <TooltipText>{item.name}</TooltipText>
                <TooltipSubtext>{item.designation}</TooltipSubtext>
              </TooltipContent>
            )}
          </AnimatePresence>
          <ProfileImage
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
          />
        </TooltipContainer>
      ))}
    </>
  );
};
