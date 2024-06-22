"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import styled from "styled-components";
import { cn } from "@/utils/cn";

const StyledCardContainer = styled(CardContainer)`
  font-family: "Inter var", sans-serif;
`;

const StyledCardBody = styled(CardBody)`
  background-color: #f9fafb;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: auto;
  height: auto;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: box-shadow 0.3s ease;

  @media (min-width: 640px) {
    width: 30rem;
  }

  &:hover {
    box-shadow: 0 0 20px rgba(0, 255, 127, 0.1);
  }

  &.dark {
    background-color: black;
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const StyledCardItem = styled(CardItem)`
  font-size: 1.25rem;
  font-weight: bold;
  color: #4b5563;
  transition: transform 0.3s ease;

  &.dark {
    color: white;
  }

  &.description {
    font-size: 0.875rem;
    color: #6b7280;
    max-width: 24rem;
    margin-top: 0.5rem;

    &.dark {
      color: #d1d5db;
    }
  }

  &.image {
    width: 100%;
    margin-top: 1rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  &.button {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: normal;
    background-color: black;
    color: white;
    font-weight: bold;

    &.dark {
      background-color: white;
      color: black;
    }
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
`;

export function ThreeDCardDemo() {
  return (
    <StyledCardContainer>
      <StyledCardBody>
        <StyledCardItem>Make things float in air</StyledCardItem>
        <StyledCardItem as="p" className={cn("description")}>
          Hover over this card to unleash the power of CSS perspective
        </StyledCardItem>
        <StyledCardItem className={cn("image")}>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            alt="thumbnail"
          />
        </StyledCardItem>
        <FlexContainer>
          <StyledCardItem
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
          >
            Try now →
          </StyledCardItem>
          <StyledCardItem as="button" className={cn("button")}>
            Sign up
          </StyledCardItem>
        </FlexContainer>
      </StyledCardBody>
    </StyledCardContainer>
  );
}
