import React from "react";
import styled from "styled-components";
import ngoimage from "@/Assets/Images/NGO/NGO.png";
import Image from "next/image";
import MainButton from "@/Components/Buttons/MainButton";
import Link from "next/link";

const StyledNgo = styled.div`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 7.5rem;
  gap: 10rem;
  background: var(--light);

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }

  .ngoleft {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      animation: bouncing 2s infinite ease-in-out;

      @keyframes bouncing {
        0% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(5%);
        }

        100% {
          transform: translateY(0);
        }
      }
    }
  }

  .ngoright {
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    padding: 1.5rem;
    border-radius: 30px;

    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem;
    }

    .divider {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
    }

    h1 {
      font-size: var(--xl);
      font-weight: 700;
      color: var(--dark);

      @media (max-width: 768px) {
        font-size: var(--lg);
      }
    }

    .subheading {
      font-size: var(--sm);
      font-weight: 400;
      color: var(--dark);
    }

    .commitment {
      font-size: var(--norm);
      font-weight: 400;
      color: var(--dark);
      line-height: 1.5;

      span {
        font-weight: 700;
        color: var(--dark);

        .span {
          color: var(--primary);
        }
      }
    }

    .service-head {
      font-size: var(--norm);
      font-weight: 500;
      color: var(--dark);
    }

    .services {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 1rem;

      .label {
        font-size: var(--sm);
        font-weight: 500;
        color: var(--dark);
        background: var(--white);
        padding: 0.4rem 0.8rem;
        border-radius: 100px;
        transition: all 0.3s ease-in-out;
      }
    }

    .cta {
      button {
        padding: 1rem 2rem;
        border: none;
        outline: none;
        border-radius: 100px;
        background: var(--primary);
        color: var(--white);
        font-size: var(--norm);
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

function Ngo() {
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
  return (
    <StyledNgo id="ngo">
      <div className="ngoleft">
        <Image
          src={ngoimage}
          alt="Cyper Studio Helps NGO's and Charities"
          title="Cyper Studio Helps NGO's and  Charities"
        />
      </div>
      <div className="ngoright">
        <div className="divider">
          <h1>More Than Business: Our Commitment to Impact</h1>
          <p className="subheading">
            Tech for Good. Let's Build a Better World, Together.
          </p>
        </div>
        <p className="commitment">
          Technology has the power to transform communities. That's why we're
          launching this initiative to empower NGOs with highly discounted
          software solutions (between 50% - 70% off) from Cyper Studio.
        </p>
        <div className="divider">
          <h1 className="service-head">What we offer to the changemakers!</h1>
          <div className="services">
            <div className="label">NGO Management Websites</div>
            <div className="label">Fundraising & Donation Websites</div>
            <div className="label">LMS/ERP for Non-Profit Education</div>
            <div className="label">Event Management Software</div>
            <div className="label">Resource Sharing Platforms</div>
          </div>
        </div>
        <div className="cta">
          <Link href="contact">
            <MainButton text={"Contact Us"} />
          </Link>
        </div>
      </div>
    </StyledNgo>
  );
}

export default Ngo;
