import React from "react";
import styled from "styled-components";
import call from "@/Assets/Images/Service/Steps/discoverycall.png";
import analyze from "@/Assets/Images/Service/Steps/analyze.png";
import requirements from "@/Assets/Images/Service/Steps/requirements.png";
import development from "@/Assets/Images/Service/Steps/development.png";
import testing from "@/Assets/Images/Service/Steps/testing.png";
import training from "@/Assets/Images/Service/Steps/training.png";
import support from "@/Assets/Images/Service/Steps/support.png";
import Image from "next/image";

const StyledSteps = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2.5rem 7.5rem;

  @media screen and (max-width: 768px) {
    padding: 2.5rem 0rem;
    gap: 2rem;
  }

  .step-title {
    font-size: var(--xl);
    font-weight: 700;
    color: var(--dark);
    text-align: center;
    width: 40%;

    span {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: var(--lg);
    }
  }

  .step-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
    place-items: center;

    @media screen and (max-width: 768px) {
      grid-template-columns: auto;
      grid-template-rows: repeat(14, 1fr);
    }

    div {
      height: 20rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #101828;
      position: relative;
      background: #101828;

      &:nth-child(1) {
        border-left: none;
        border-top: none;
      }

      &:nth-child(2) {
        border-top: none;
      }

      &:nth-child(3) {
        border-right: none;
        border-top: none;
      }

      &:nth-child(6) {
        border-right: none;
      }

      &:nth-child(7) {
        border-left: none;
      }

      &:nth-child(12) {
        border-right: none;
      }

      &:nth-child(13) {
        border-left: none;
      }

      &:nth-child(18) {
        border-right: none;
      }

      &:nth-child(20) {
        border-bottom: none;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        border: none;
        outline: none;

        &:nth-child(3) {
          display: none;
        }

        &:nth-child(4) {
          display: none;
        }

        &:nth-child(8) {
          display: none;
        }

        &:nth-child(10) {
          display: none;
        }

        &:nth-child(16) {
          display: none;
        }

        &:nth-child(17) {
          display: none;
        }

        &:nth-child(19) {
          display: none;
        }
      }
    }

    h1 {
      font-size: var(--md);
      font-weight: 700;
      color: var(--white);
    }

    p {
      font-size: var(--sm);
      font-weight: 400;
      color: var(--light);
      line-height: 1.5;
    }

    .number {
      font-size: var(--xxl);
      font-weight: 700;
      color: var(--lgrey);
    }

    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      padding: 2rem;
    }
  }
`;

function Steps() {
  return (
    <StyledSteps>
      <h1 className="step-title">
        Start Your Logistics <span>Transformation</span> Today
      </h1>
      <div className="step-container">
        <div title="Discovery Call">
          <Image src={call} alt="Discovery Call" />
        </div>
        <div className="content">
          <h3 className="number">01</h3>
          <h1>Discovery call</h1>
          <p>
            We delve into your goals, challenges, and unique workflows. You
            share your vision for success.
          </p>
        </div>
        <div></div>
        <div></div>
        <div className="content">
          <h3 className="number">02</h3>
          <h1>Needs Analysis & Proposal</h1>
          <p>
            Our experts analyze your requirements and create a tailored plan
            with transparent pricing, timelines, and a clear roadmap.
          </p>
        </div>
        <div title="Needs Analysis & Proposal">
          <Image src={analyze} alt="Analysis" />
        </div>
        <div title="Collaborative Design">
          <Image src={requirements} alt="Collaborative Design" />
        </div>
        <div></div>
        <div className="content">
          <h3 className="number">03</h3>
          <h1>Collaborative Design</h1>
          <p>
            We work closely with you to define detailed software specifications,
            ensuring your input shapes every feature.
          </p>
        </div>
        <div></div>
        <div title="Development &amp; Testing">
          <Image src={development} alt="Development & Customization" />
        </div>
        <div className="content">
          <h3 className="number">04</h3>
          <h1>Development & Customization</h1>
          <p>
            Our team builds your custom solution, incorporating your feedback
            and industry best practices.
          </p>
        </div>

        <div title="Testing & Refinement">
          <Image src={testing} alt="Testing & Refinement" />
        </div>
        <div className="content">
          <h3 className="number">05</h3>
          <h1>Testing & Refinement</h1>
          <p>
            Rigorous testing ensures your software is reliable and ready for
            launch. You provide feedback for any needed adjustments.
          </p>
        </div>
        <div></div>
        <div className="content">
          <h3 className="number">06</h3>
          <h1>Deployment & Training</h1>
          <p>
            We seamlessly roll out your system and provide comprehensive
            training to empower your team.
          </p>
        </div>
        <div></div>
        <div title="Deployment & Training">
          <Image src={training} alt="Deployment & Training" />
        </div>
        <div></div>
        <div title="Support & Maintenance">
          <Image src={support} alt="Support & Maintenance" />
        </div>
        <div className="content">
          <h3 className="number">07</h3>
          <h1>Support & Maintenance</h1>
          <p>
            Benefit from proactive maintenance, regular updates, and
            personalized support to maximize your software's performance over
            time.
          </p>
        </div>
      </div>
    </StyledSteps>
  );
}

export default Steps;
