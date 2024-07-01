"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";
import logo from "@/Assets/Images/Logo/Helix-logo.png";
import Image from "next/image";
import { LinkPreview } from "../Pricing/Sections/Animations/ui/link-preview";

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
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;

    .button-link {
      background-color: var(--primary);
      color: var(--white);
      &:hover {
        background-color: var(--secondary);
      }
      padding: 0.5rem 1.3rem;
      font-size: 0.95rem;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      border-radius: 3rem;
      cursor: pointer;

      @media screen and (max-width: 767px) {
        padding: 0.4rem 0.8rem;
      }
    }

    .pricing {
      display: none;

      @media screen and (max-width: 767px) {
        display: block;
      }
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
            <LinkPreview url="https://helix.cyper.studio" className="link-text">
              Home
            </LinkPreview>{" "}
          </li>
          <li>
            <LinkPreview
              url="https://helix.cyper.studio/#services"
              className="link-text"
            >
              <div className="link" onClick={scrollToServices}>
                Services
              </div>
            </LinkPreview>
          </li>
          <li>
            <LinkPreview
              url="https://helix.cyper.studio/#features"
              className="link-text"
            >
              <div className="link" onClick={scrollToFeatures}>
                Features
              </div>
            </LinkPreview>
          </li>
          <li>
            <LinkPreview
              url="https://helix.cyper.studio/#cases"
              className="link-text"
            >
              <div className="link" onClick={scrollToCases}>
                Case Study
              </div>
            </LinkPreview>
          </li>
          <li>
            <LinkPreview
              url="https://helix.cyper.studio/pricing"
              className="link-text"
            >
              Pricing
            </LinkPreview>
          </li>
          <li>
            <LinkPreview
              url="https://helix.cyper.studio/#aboutus"
              className="link-text"
            >
              <div className="link" onClick={scrollToAboutUs}>
                About Us
              </div>
            </LinkPreview>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="link button-link pricing">
          <a href="/pricing">Pricing</a>
        </div>

        <div className="link button-link">
          <a href="/contact">Contact Sales</a>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
