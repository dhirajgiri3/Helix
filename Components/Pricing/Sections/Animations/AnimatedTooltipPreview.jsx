import React from "react";
import styled from "styled-components";
import { AnimatedTooltip } from "./ui/animated-tooltip.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const people = [
  {
    id: 1,
    name: "Dhiraj Giri",
    designation: "Founder & CEO",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/dhiraj-st3.png?alt=media&token=36c25dc6-f9d9-42a7-a95e-cf33a2d9d038",
  },
  {
    id: 2,
    name: "Rajendra A Verma",
    designation: "CTO",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/Rajendra-photo.jpg?alt=media&token=c3c1521f-f9f4-4586-a62a-8607d7558068",
  },
  {
    id: 3,
    name: "Archit Sinha",
    designation: "Co-founder",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/DSC_0278.jpg?alt=media&token=2480c4f4-4d66-421a-a3ec-cd4112845470",
  },
  {
    id: 4,
    name: "Jatin Kumar",
    designation: "UI/UX Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <Container>
      <AnimatedTooltip items={people} />
    </Container>
  );
}
