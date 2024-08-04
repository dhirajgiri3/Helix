"use client";

import React from "react";
import styled from "styled-components";
import helixmockup from "@/Assets/Images/Mockup/mockup-saas.png";
import Image from "next/image";
import Link from "next/link";
import { Trusted } from "./Trusted";

const StyledHero = styled.section`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/cyper-studio-saas.appspot.com/o/bg1.png?alt=media&token=43bc4b09-5d23-4def-aa0b-1c4c89e81652");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .herocontainer {
    height: 100%;
    width: calc(100vw - 10rem);
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    margin-top: 6rem;

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 2rem 1rem;
    }

    .top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .label {
        text-align: center;
        border: 1px solid rgba(231, 241, 255);
        outline: none;
        border-radius: 100px;
        padding: 0.3rem;
        background: rgba(231, 241, 255, 0.7);
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in-out;

        @media screen and (max-width: 768px) {
          padding: 0.5rem 1rem;
        }

        &:hover {
          background: var(--black);
        }

        p {
          color: var(--white);
          font-size: var(--sm);
          font-weight: 500;
        }

        img {
          height: 1.5rem;
          width: 1.5rem;
          object-fit: contain;
        }
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;

      @media screen and (max-width: 768px) {
        gap: 2rem;
      }

      h1 {
        font-size: 3.8rem;
        font-weight: 800;
        color: var(--dark);
        text-align: center;
        width: 80%;

        @media screen and (max-width: 768px) {
          font-size: var(--xl);
          width: 100%;
          font-weight: 700;
        }
        span {
          background: var(--text-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      h4 {
        font-size: var(--norm);
        font-weight: 300;
        color: var(--lgrey);
        text-align: center;
        width: 50%;

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      .cta {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }

        button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 100px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        a {
          text-decoration: none;
        }

        .button1 {
          border-radius: 100px;
          color: var(--white);
          z-index: 1;
          background: var(--primary);
          position: relative;
          transition: all 0.3s ease-in-out;
          overflow: hidden;
          padding: 1rem 1.5rem;
        }

        .button1::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          border-radius: 15px;
          background-color: var(--secondary);
          z-index: -1;

          transition: all 0.3s ease-in-out;
        }

        .button1:hover {
          color: var(--white);
        }

        .button1:hover::before {
          width: 100%;
        }

        .button2 {
          border-radius: 100px;
          color: var(--primary);
          z-index: 1;
          background: var(--white);
          position: relative;
          transition: all 0.3s ease-in-out;
          overflow: hidden;
          border: 1px solid var(--primary);
        }

        .button2::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          border-radius: 15px;
          background-color: var(--secondary);
          z-index: -1;
          transition: all 0.3s ease-in-out;
          color: var(--dark);
        }

        .button2:hover {
          color: var(--white);
        }

        .button2:hover::before {
          width: 100%;
        }
      }

      .para {
        p {
          font-size: var(--sm);
          font-weight: 300;
          color: var(--lgrey);
          text-align: center;

          span {
            font-weight: 700;
          }
        }
      }
    }

    .mockup {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 90vh;
        object-fit: contain;
        animation: bouncing 3s infinite ease-in;

        @keyframes bouncing {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-20px);
          }

          100% {
            transform: translateY(0);
          }
        }

        @media screen and (max-width: 768px) {
          height: 100%;
          width: 90vw;
          padding: 2rem 0;
          padding-bottom: 0;
        }
      }
    }
  }
`;

function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: "1s",
      });
    }
  };

  const scrollToCases = () => {
    const casesSection = document.getElementById("cases");
    if (casesSection) {
      casesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: "1s",
      });
    }
  };

  return (
    <StyledHero>
      <div className="herocontainer">
        <div className="top">
          <div className="label">
            <Trusted />
          </div>
        </div>
        <div className="middle">
          <h1>
            Let's Design Your <span>Success</span> : Get a Custom or White-Label HELIX Platform
          </h1>
          <h4>
            HELIX represents the power of logistics software tailored to your exact needs. Our expertise and your vision – it's the perfect combination to unlock your business's full potential.
          </h4>
        </div>
        <div className="bottom">
          <div className="cta">
            <Link href="/demo" className="button1">
              View Demo
            </Link>
            <button onClick={scrollToCases} className="button2">
              Explore our case studies
            </button>
          </div>
          <div className="para">
            <p>
              Get your custom logistics software without any hurdles in{" "}
              <span>15 days</span>
            </p>
          </div>
          <div className="mockup">
            <Image
              src={helixmockup}
              title="Blueship Software Mockup"
              alt="Blueship Mockup"
            />
          </div>
        </div>
      </div>
    </StyledHero>
  );
}

export default Hero;
