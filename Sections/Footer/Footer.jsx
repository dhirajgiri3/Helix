"use client";

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import styled from "styled-components";
import Image from "next/image";
import logo from "@/Assets/Images/Logo/Helix-logo.png";
import Link from "next/link";


const StyledFooter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5rem;
  background: var(--white);
  color: var(--dark);
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem 7.5rem;
  border-top: 1px solid var(--dark-white);
  border-radius: 100px;

  @media (max-width: 768px) {
    padding: 2.5rem;
    border-radius: 50px;
  }

  .footer-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 4rem;
    }

    .logo {
      width: 10rem;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    .links {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2rem;

      a,
      .link {
        font-weight: 400;
        color: var(--grey);
        transition: all 0.3s ease-in-out;
        text-decoration: none;
        cursor: pointer;
        font-size: var(--sm);

        @media screen and (max-width: 768px) {
          font-size: var(--norm);
        }

        &:hover {
          color: var(--primary);
        }
      }

      .link {
        cursor: pointer;
      }
    }

    .contacts {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2rem;

      p {
        font-size: var(--sm);
        font-weight: 400;
        color: var(--grey);

        @media screen and (max-width: 768px) {
          font-size: var(--norm);
        }
      }

      h1 {
        font-size: var(--norm);
        font-weight: 600;
        color: var(--lgrey);
      }
      .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        a {
          color: var(--lgrey);
          transition: all 0.3s ease-in-out;
          font-size: var(--sm);

          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }

  .footer-bottom {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }

    .bottom-left {
      width: 30%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    .bottom-right {
      width: 70%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    p {
      font-size: var(--sm);
      font-weight: 400;
      color: var(--lgrey);
      line-height: 1.5;
      width: 100%;
    }
  }
`;

function Footer() {
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

  const scrollToNgo = () => {
    const servicesSection = document.getElementById("ngo");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: "1s",
      });
    }
  };
  return (
    <StyledFooter>
      <div className="footer-top">
        <div className="logo">
          <Image src={logo} alt="Helix Logo" title="Helix Logo" />
        </div>

        <div className="links">
          <Link href="/">Home</Link>
          <div className="link" onClick={scrollToFeatures}>
            Features
          </div>
          <div className="link" onClick={scrollToAboutUs}>
            About
          </div>
          <div className="link" onClick={scrollToServices}>
            Services
          </div>
          <div className="link" onClick={scrollToContact}>
            Contact Us
          </div>
          <div className="link" onClick={scrollToNgo}>
            Are You a NGO?
          </div>
        </div>
        <div className="contacts">
          <p>Connect with us</p>
          <h1>Info@cyper.studio</h1>
          <h1>+91 9904392992</h1>
          <div className="socials">
            <a href="https://www.facebook.com/cyperstudioo/" target="_blank">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/cyperstudioo/" target="_blank">
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/cyper-studio"
              target="_blank"
            >
              <LinkedInIcon />
            </a>

            <a href="https://twitter.com/cyperstudioo" target="_blank">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-left">
          <p>&copy; 2024 Helix. All Rights Reserved by Cyper Studio</p>
        </div>
        <div className="bottom-right">
          <p>
            Helix is a demo software designed to showcase the possibilities of
            custom logistics solutions. It does not function in a real-world
            shipping environment. Inspired by what you see? Cyper Studio
            specializes in building tailored logistics software that streamlines
            your operations and gives you a competitive edge. We also offer
            expert digital marketing services to expand your reach, attract new
            customers, and drive growth for your logistics business.
          </p>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
