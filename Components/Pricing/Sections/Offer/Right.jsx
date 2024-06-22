import React from "react";
import styled from "styled-components";

const OfferRightStyle = styled.div`
  width: 100%;
  height: calc(90vh - 6rem);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 65vh;
    object-fit: cover;
  }
`;

function Right() {
  return (
    <OfferRightStyle>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/Helix-pointing-image.png?alt=media&token=3956470f-7870-4a1b-ba5f-0818e8aa69e3"
        alt="Helix pointing"
      />
    </OfferRightStyle>
  );
}

export default Right;
