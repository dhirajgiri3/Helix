import Image from "next/image";
import React from "react";
import styled from "styled-components";
import development from "@/Assets/Images/Service/development.png";
import secure from "@/Assets/Images/Service/secure.png";
import partner from "@/Assets/Images/Service/partner.png";
import growth from "@/Assets/Images/Service/growth.png";
import services from "@/Assets/Images/Service/services.png";
import Steps from "./Components/Steps";

const StyledService = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2.5rem 7.5rem;

  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
    gap: 2rem;
    flex-direction: column-reverse;
  }

  .service-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;

    .label {
      text-align: center;
      outline: none;
      border-radius: 100px;
      padding: 0.3rem 0.8rem;
      background: var(--black);
      color: var(--white);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease-in-out;

      @media screen and (max-width: 768px) {
        padding: 0.5rem 1rem;
        justify-content: flex-start;
        align-items: center;
      }

      p {
        font-size: var(--sm);
        font-weight: 500;
      }
    }

    .title {
      h1 {
        font-size: var(--xl);
        font-weight: 700;
        color: var(--black);
        transition: all 0.3s ease-in-out;

        span {
          background: var(--text-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media screen and (max-width: 768px) {
          font-size: var(--lg);
        }
      }
    }

    .services {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      .service-card {
        min-width: 15vw;
        min-height: 30vh;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem 2rem;
        transition: all 0.3s ease-in-out;
        border-radius: 1rem;

        &:hover {
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
          .icon {
            background: var(--secondary);
          }

          p {
            color: var(--black);
          }
        }

        .icon {
          width: 2.8rem;
          height: 2.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--primary);
          border-radius: 100px;
          transition: all 0.3s ease-in-out;
          padding: 0.7rem;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        h1 {
          font-size: var(--md);
          font-weight: 700;
          color: var(--black);
          transition: all 0.3s ease-in-out;
        }

        p {
          font-size: var(--sm);
          font-weight: 500;
          color: var(--grey);
          transition: all 0.3s ease-in-out;
          line-height: 1.5;
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .service-right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

function Service() {
  return (
    <>
      <StyledService id="services">
        <div className="service-left">
          <div className="label">
            <p>Our Services</p>
          </div>
          <div className="title">
            <h1>
              Your Comprehensive Logistics <span> Solutions</span> Partner
            </h1>
          </div>
          <div className="services">
            <div className="service-card development">
              <div className="icon">
                <Image
                  src={development}
                  alt="Helix Software Deevelopment Service"
                  title="Development Icon"
                />
              </div>
              <h1>Custom Logistics Software Development</h1>
              <p>
                We craft robust and scalable logistics solutions – websites,
                apps, and backend systems – precisely designed to solve your
                unique challenges and streamline your day-to-day operations.
              </p>
            </div>
            <div className="service-card secure">
              <div className="icon">
                <Image
                  src={secure}
                  alt="Helix Secure Service"
                  title="Secure Icon"
                />
              </div>
              <h1>Maintenance & Support</h1>
              <p>
                Ensure your software runs flawlessly with proactive maintenance,
                rapid issue resolution, and regular updates. Benefit from our
                deep industry knowledge for ongoing enhancements that keep you
                ahead of the curve.
              </p>
            </div>
            <div className="service-card partner">
              <div className="icon">
                <Image
                  src={partner}
                  alt="Helix Partner Service"
                  title="Partner Icon"
                />
              </div>
              <h1> Strategic Partnerships for Success</h1>
              <p>
                Launch confidently with access to our pre-negotiated courier
                rates, industry resources, and connections to trusted service
                providers.
              </p>
            </div>
            <div className="service-card growth">
              <div className="icon">
                <Image
                  src={growth}
                  alt="Helix Growth Service"
                  title="Growth Icon"
                />
              </div>
              <h1>Growth Acceleration & Digital Marketing</h1>
              <p>
                Gain expert insights and strategic marketing tools to attract
                customers, optimize your online presence, and scale your
                shipping aggregator business. Tap into Cyper Studio's proven
                digital marketing expertise for comprehensive growth solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="service-right">
          <Image src={services} alt="Helix Services" title="Helix Services" />
        </div>
      </StyledService>

      <Steps />
    </>
  );
}

export default Service;
