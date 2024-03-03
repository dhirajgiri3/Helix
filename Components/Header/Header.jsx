"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";
import MainButton from "../Buttons/MainButton";
import logo from "@/Assets/Images/Logo/Helix-logo.png";
import Image from "next/image";

const StyledHeader = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vh;
  background: var(--white);
  position: fixed;
  z-index: 1000;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    height: 8vh;
  }

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
  }

  .left {
    a {
      img {
        width: 6rem;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .middle {
    text-align: center;

    @media screen and (max-width: 768px) {
      display: none;
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      li {
        list-style: none;
        .link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--grey);
          transition: all 0.3s ease-in-out;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            color: var(--primary);
          }
        }

        a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--grey);
          transition: all 0.3s ease-in-out;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
  .right {
    button {
      padding: 0.8rem 1.6rem;
      border: none;
      border-radius: 100px;
      font-size: 0.95rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  }
`;

function Header() {
  const scrollToContact = () => {
    const servicesSection = document.getElementById("contact");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: "1s",
      });
    }
  };
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

  const scrollToFeatures = () => {
    const servicesSection = document.getElementById("features");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: "1s",
      });
    }
  };

  const scrollToCases = () => {
    const servicesSection = document.getElementById("cases");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: "1s",
      });
    }
  };

  const scrollToAboutUs = () => {
    const servicesSection = document.getElementById("aboutus");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: "1s",
      });
    }
  };
  return (
    <StyledHeader>
      <div className="left">
        <Link href="/">
          <Image src={logo} alt="Helix Logo" title="Helix Logo" />
        </Link>
      </div>
      <div className="middle">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* <li>
            <div className="link" onClick={scrollToServices}>
              Services
            </div>
          </li> */}
          <li>
            <div className="link" onClick={scrollToFeatures}>
              Features
            </div>
          </li>
          <li>
            <div className="link" onClick={scrollToCases}>
              Case Study
            </div>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <div className="link" onClick={scrollToAboutUs}>
              About Us
            </div>
          </li>
        </ul>
      </div>
      <div className="right">
        <Link href="/#contact">
          <MainButton text={"Contact Us"} />
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
