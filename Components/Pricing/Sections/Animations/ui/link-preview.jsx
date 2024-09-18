"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { encode } from "qss";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

const HiddenImage = styled.img`
  display: none;
`;

const Trigger = styled(HoverCardPrimitive.Trigger)`
  color: ${(props) => (props.dark ? "white" : "black")};
  ${(props) => props.customStyles}
`;

const Content = styled(HoverCardPrimitive.Content)`
  transform-origin: var(--radix-hover-card-content-transform-origin);
`;

const MotionDiv = styled(motion.div)`
  box-shadow: xl;
  border-radius: xl;
`;

const LinkWrapper = styled(Link)`
  display: block;
  padding: 0.1rem;
  background-color: #111;
  border: 2px solid transparent;
  box-shadow: xl;
  border-radius: .5rem;
  &:hover {
    border-color: ${(props) => (props.dark ? "neutral-800" : "neutral-200")};
  }
`;

const PreviewImage = styled.img`
  border-radius: .3rem;
`;

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 150,
  quality = 90,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}) => {
  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <HiddenImage
          src={src}
          width={width}
          height={height}
          quality={quality}
          layout={layout}
          priority
          alt="hidden image"
        />
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => setOpen(open)}
      >
        <Trigger onMouseMove={handleMouseMove} className={className}>
          
          {children}
        </Trigger>

        <Content side="top" align="center" sideOffset={10}>
          <AnimatePresence>
            {isOpen && (
              <MotionDiv
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ x: translateX }}
              >
                <LinkWrapper href={url}>
                  <PreviewImage
                    src={isStatic ? imageSrc : src}
                    width={width}
                    height={height}
                    quality={quality}
                    layout={layout}
                    priority
                    alt="preview image"
                  />

                </LinkWrapper>
              </MotionDiv>
            )}
          </AnimatePresence>
        </Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
