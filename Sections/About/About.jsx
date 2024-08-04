import React from "react";
import styled from "styled-components";
import shipimage from "@/Assets/Images/About/ship-software.png";
import Image from "next/image";
import lapmock from "@/Assets/Images/About/lap-mock.png";
import commitment from "@/Assets/Images/About/commitment.png";

const StyledAbout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 2.5rem 7.5rem;

  .div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    min-height: 15rem;
    min-width: 15rem;
    border-radius: 1rem;
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    background: #2b2a36;

    @media screen and (max-width: 768px) {
      padding: 1rem;
      min-width: 10rem;
    }

    &:hover {
      transform: scale(1.02);
    }
  }

  .first {
    grid-column: 1/3;
    grid-row: 1/2;
    background: #101828;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    z-index: 1;
    overflow: hidden;
    border: none !important;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 768px) {
      padding: 1rem;
      grid-column: 1/2;
      grid-row: 1/2;
    }

    img {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 1rem;
      top: 12rem;
    }

    .content {
      position: absolute;
      z-index: 2;
      h1 {
        font-size: var(--lg);
        color: var(--light);
        font-weight: 700;
        margin-bottom: 1rem;

        span {
          font-weight: 900;
          color: var(--primary);
        }
      }

      p {
        font-size: var(--sm);
        color: var(--dark-white);
        font-weight: 400;
        line-height: 1.5;
        width: 80%;
      }
    }
  }

  .second {
    grid-column: 3/4;
    grid-row: 1/2;
    width: 100%;
    height: 100%;
    background: #101828;

    img {
      border-radius: 1rem;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .divs {
    padding: 1rem;
    background: var(--black);

    p {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      font-size: var(--sm);
      color: var(--dark-white);
      font-weight: 400;
      line-height: 1.5;

      span {
        font-size: var(--lg);
        font-weight: 700;
      }
    }
  }

  .seventh {
    grid-column: 2/4;
    grid-row: 3/4;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
    gap: 1rem;
    position: relative;
    z-index: 1;
    overflow: hidden;
    border: 1px solid var(--dark-white);

    @media screen and (max-width: 768px) {
      grid-column: auto;
      grid-row: auto;
    }

    img {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 1rem;
      top: 8rem;
    }

    .content {
      position: absolute;
      z-index: 2;
      h1 {
        font-size: var(--lg);
        color: var(--dark);
        font-weight: 700;
        margin-bottom: 1rem;
      }

      p {
        font-size: var(--sm);
        color: var(--lgrey);
        font-weight: 400;
        line-height: 1.5;
        width: 80%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
    gap: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    .div {
      padding: 1rem;
      gap: 1rem;
    }

    .first {
      grid-column: auto;
      grid-row: auto;

      img {
        top: 8rem;
        opacity: 0.5;
      }
    }

    .second {
      grid-column: auto;
      grid-row: auto;

      img {
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .third {
      grid-column: auto;
      grid-row: auto;
    }

    .fourth {
      grid-column: auto;
      grid-row: auto;
    }

    .fifth {
      grid-column: auto;
      grid-row: auto;
    }

    .sixth {
      grid-column: auto;
      grid-row: auto;
    }

    .seventh {
      grid-column: auto;
      grid-row: auto;
    }
  }
`;

function About()
{
  return (
    <StyledAbout id="aboutus">
      <div className="first div">
        <Image
          src={lapmock}
          alt="Helix about mockup"
          title="Helix about page"
        />
        <div className="content">
          <h1>
            About <span>Helix</span>
          </h1>
          <p>
            Are you a small or medium-sized business aiming to grow? Helix is here to help with our advanced, yet affordable shipping aggregator software. Starting at just ₹4,999/month, our feature-rich solution streamlines logistics, reduces costs, and boosts efficiency. Profit from your shipping operations right from the first month with our pre-integrated rate cards and 1-month free trial for eligible businesses. We understand your challenges and are committed to your success."
          </p>
        </div>
      </div>
      <div className="second div">
        <Image src={shipimage} alt="Shiping Image" />
      </div>
      <div className="third div divs">
        <p>
          <span>Empowering Growth </span> At Helix, we understand the unique challenges of scaling businesses. Our solutions are tailored to help you overcome these obstacles, enabling seamless growth and operational efficiency.
        </p>
      </div>
      <div className="fourth div divs">
        <p>
          <span> User-Centric Design</span>
          We prioritize ease of use in our interfaces, minimizing onboarding time and maximizing productivity. Our goal is to make your logistics management as intuitive and straightforward as possible.
        </p>
      </div>
      <div className="fifth div divs">
        <p>
          {" "}
          <span>Technological Edge</span>
          Built on Next.js and Google Cloud, Helix offers unparalleled speed, reliability, and a seamless user experience. This technological advantage ensures that your logistics operations are always running smoothly.
        </p>
      </div>
      <div className="sixth div divs">
        <p>
          {" "}
          <span>Customer-Centric Approach</span>
          Your satisfaction and success drive us. We offer 24/7 support, ensuring you have the assistance you need whenever you need it. Our team is dedicated to providing solutions that meet and exceed your expectations.
        </p>
      </div>
      <div className="seventh div">
        <Image src={commitment} alt="Helix Commitment" />
        <div className="content">
          <h1>Vision and Commitment</h1>
          <p>
            Helix was born out of a desire to empower businesses with the best logistics technology. Our commitment to your success is unwavering, and we continuously strive to improve and innovate. Your happiness and business growth are our top priorities.
          </p>
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
