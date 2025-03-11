"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Define the cn function here
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

const BeamContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0;
  mask-size: 40px;
  mask-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Svg = styled.svg`
  z-index: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  position: absolute;
`;

export const BackgroundBeams = memo(({ className }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
    "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
    "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
    "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
    "M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739",
    "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
    "M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699",
    "M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667",
    "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
    "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
    "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
    "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
    "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603",
    "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
    "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
    "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
    "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
    "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547",
    "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
    "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
  ];

  // Add a few more paths for diversity
  const additionalPaths = [
    "M-300 -290C-300 -290 -230 115 240 240C710 370 780 780 780 780",
    "M-290 -300C-290 -300 -220 105 250 230C720 360 790 770 790 770",
    "M-280 -310C-280 -310 -210 95 260 220C730 350 800 760 800 760",
    "M-270 -320C-270 -320 -200 85 270 210C740 340 810 750 810 750",
  ];

  const extendedPaths = [...paths, ...additionalPaths];

  return (
    <BeamContainer className={cn(className)}>
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {extendedPaths.map((path, index) => (
          <motion.path
            key={`path-` + index}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          ></motion.path>
        ))}
        <defs>
          {extendedPaths.map((path, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1, // start animation after 1 second
              }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="32.5%" stopColor="#6344F5"></stop>
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          ))}
        </defs>
      </Svg>
    </BeamContainer>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";
