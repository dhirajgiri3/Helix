import React from "react";
import styled from "styled-components";

const StyledMainButton = styled.button`
  border-radius: 100px;
  color: var(--white);
  z-index: 1;
  background: var(--primary);
  position: relative;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 100px;
    background-color: var(--secondary);
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: var(--white);
  }

  &:hover::before {
    width: 100%;
  }

  /* Consider adding these for more button styles */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid var(--focus-outline); /* Example */
  }
`;

function MainButton({ text }) {
  return <StyledMainButton className="button">{text}</StyledMainButton>;
}

export default MainButton;
