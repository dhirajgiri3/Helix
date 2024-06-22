// components/Thankyou.jsx
import Header from "@/Components/Header/Header";
import React from "react";
import styled from "styled-components";

const ThankYouContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  video {
    width: 100%;
    height: 100vh;
    object-fit: contain;
  }
`;

const ThankYou = () => {
  return (
    <ThankYouContainer>
      <video
        loop
        autoPlay
        muted
        src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/Thankyou.mp4?alt=media&token=d5dc31c8-00c2-41d8-92f3-81cbb674cc8d"
      ></video>
    </ThankYouContainer>
  );
};

export default ThankYou;
