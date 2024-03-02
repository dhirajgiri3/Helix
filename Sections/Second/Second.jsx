import React from "react";
import styled from "styled-components";
import growth from "@/Assets/Images/Partnership-icon/growth.png";
import checkbox from "@/Assets/Images/Partnership-icon/checkbox.png";
import handshake from "@/Assets/Images/Partnership-icon/handshake.png";
import glass from "@/Assets/Images/Partnership-icon/glass.png";
import evolve from "@/Assets/Images/Partnership-icon/evolve.png";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const StyledSecond = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 2rem;
  padding: 2.5rem 7.5rem;
  place-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 1rem;
  }

  .heading {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    width: 80%;

    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    .label {
      background: var(--black);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      padding: 0.3rem 0.5rem;
      width: fit-content;
      text-align: center;

      @media screen and (max-width: 768px) {
        margin-left: 0;
      }

      h4 {
        font-size: var(--sm);
        font-weight: 400;
        color: var(--white);
      }
    }

    h1 {
      font-size: var(--xl);
      font-weight: 700;
      color: var(--dark);

      @media screen and (max-width: 768px) {
        font-size: var(--lg);
        text-align: center;
      }

      span {
        background: var(--text-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem 1rem;
    background: var(--white);
    box-shadow: 0 0 70px rgba(0, 0, 0, 0.099);
    border-radius: 10px;
    max-width: 30rem;
    max-height: 30rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 90px rgba(0, 0, 0, 0.15);
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.5rem;
    }

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0.5;
      .icon {
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 50%;
        position: relative;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      flex: 2;
      h1 {
        font-size: var(--md);
        font-weight: 700;
        color: var(--dark);
      }
      p {
        font-size: var(--sm);
        font-weight: 500;
        color: var(--grey);
        line-height: 1.5;
      }
    }
  }
`;

function Second() {
  return (
    <StyledSecond>
      <div className="heading">
        <div className="label">
          <h4>Helix Advantages</h4>
        </div>
        <h1>
          Cyper Studio: Your Logistics <span>Transformation</span> Partner
        </h1>
      </div>
      <div className="card">
        <div className="left">
          <div className="icon">
            <Image src={growth} alt="icon" title="Helix Growth Icon" />
          </div>
        </div>
        <div className="right">
          <h1>Accelerate Your Transformation</h1>
          <p>
            Leverage our expertise and proven development processes to build
            your custom logistics solution with unmatched speed and efficiency.
          </p>
        </div>
      </div>{" "}
      <div className="card">
        <div className="left">
          <div className="icon">
            <Image src={checkbox} alt="icon" title="Helix Checkbox Icon" />
          </div>
        </div>
        <div className="right">
          <h1>Customized for Your Success</h1>
          <p>
            Get software designed specifically for your workflows and business
            goals. Eliminate the compromises of generic platforms.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <div className="icon">
            <Image src={handshake} alt="icon" title="Helix Handshake Icon" />
          </div>
        </div>
        <div className="right">
          <h1>Solve Your Specific Challenges</h1>
          <p>
            Our deep understanding of the logistics industry, combined with
            adaptable technology, allows us to tackle your toughest pain points.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <div className="icon">
            <Image src={glass} alt="icon" title="Helix Glass Icon" />
          </div>
        </div>
        <div className="right">
          <h1> Data-Driven Insights for Growth</h1>
          <p>
            Gain actionable insights to optimize operations, reduce costs, and
            make strategic decisions that drive your business forward.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <div className="icon">
            <Image src={evolve} alt="icon" title="Helix Evolve Icon" />
          </div>
        </div>
        <div className="right">
          <h1>Innovation Through Collaboration</h1>
          <p>
            Partner with us for a transparent, personalized approach. We'll
            provide expert guidance and ongoing support to ensure your solution
            evolves alongside your business.
          </p>
        </div>
      </div>
    </StyledSecond>
  );
}

export default Second;
