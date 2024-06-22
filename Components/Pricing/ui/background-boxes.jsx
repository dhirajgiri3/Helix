"use client";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const BoxContainer = styled.div`
  transform: translate(-40%, -60%) skewX(-48deg) skewY(14deg) scale(0.675)
    rotate(0deg) translateZ(0);
  position: absolute;
  left: 25%;
  padding: 1rem;
  top: -25%;
  display: flex;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Row = styled(motion.div)`
  width: 4rem;
  height: 2rem;
  border-left: 1px solid #222;
  position: relative;
`;

const Col = styled(motion.div)`
  width: 4rem;
  height: 2rem;
  border-right: 1px solid #222;
  border-top: 1px solid #222;
  position: relative;
`;

const SvgIcon = styled.svg`
  position: absolute;
  height: 1.5rem;
  width: 2.5rem;
  top: -14px;
  left: -22px;
  color: #333;
  stroke-width: 1px;
  pointer-events: none;
`;

export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "#f7799b",
    "#ecffce",
    "#ff3bb7",
    "#00ffcc",
    "#99ff00",
    "#123abc",
    "#eccee1",
    "#85dd74",
    "#e1f782",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <BoxContainer className={className} {...rest}>
      {rows.map((_, i) => (
        <Row key={`row${i}`}>
          {cols.map((_, j) => (
            <Col
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col${j}`}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <SvgIcon
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </SvgIcon>
              ) : null}
            </Col>
          ))}
        </Row>
      ))}
    </BoxContainer>
  );
};

export const Boxes = React.memo(BoxesCore);
