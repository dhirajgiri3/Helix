// File path: /path/to/your/component/Service.jsx

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
  padding-bottom: 3rem;

  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
    gap: 2rem;
    flex-direction: column-reverse;
  }

  .service-left {
    width: 100%;
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
          font-size: var(--norm);
          font-weight: 300;
          color: var(--lgrey);
          transition: all 0.3s ease-in-out;
          line-height: 1.5;
        }

        ul {
          list-style: disc;
          padding-left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          li {
            font-size: var(--smx);
            font-weight: 500;
            color: var(--lgrey);
            transition: all 0.3s ease-in-out;
            line-height: 1.5;
          }
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
              Our Comprehensive <span>Services</span>
            </h1>
          </div>
          <div className="services">
            <div className="service-card development">
              <div className="icon">
                <Image
                  src={development}
                  alt="White-Label Shipping Aggregator Software"
                  title="White-Label Shipping Aggregator Software"
                />
              </div>
              <h1>White-Label Shipping Aggregator Software</h1>
              <p>
                Streamline logistics, reduce costs, and boost efficiency with
                pre-integrated rate cards from top logistics companies.
              </p>
              <ul>
                <li>Pre-Integrated Rate Cards</li>
                <li>Custom Branding</li>
                <li>Advanced Analytics</li>
                <li>Scalability</li>
                <li>1-Month Free Trial</li>
              </ul>
            </div>
            <div className="service-card secure">
              <div className="icon">
                <Image
                  src={secure}
                  alt="Custom Logistics Software Development"
                  title="Custom Logistics Software Development"
                />
              </div>
              <h1>Custom Logistics Software Development</h1>
              <p>
                Tailored to your business needs, our custom logistics software
                optimizes processes and integrates seamlessly with existing
                systems for enhanced efficiency.
              </p>
              <ul>
                <li>Bespoke Solutions</li>
                <li>Integration Capabilities</li>
                <li>User-Friendly Interface</li>
                <li>Advanced Security</li>
              </ul>
            </div>
            <div className="service-card partner">
              <div className="icon">
                <Image
                  src={partner}
                  alt="Maintenance & Support"
                  title="Maintenance & Support"
                />
              </div>
              <h1>Maintenance & Support</h1>
              <p>
                Ensure flawless software performance with our proactive
                maintenance and support services, providing monitoring, rapid
                issue resolution, and regular updates.
              </p>
              <ul>
                <li>Proactive Monitoring</li>
                <li>Rapid Response</li>
                <li>Regular Updates</li>
                <li>Dedicated Support Team</li>
              </ul>
            </div>
            <div className="service-card growth">
              <div className="icon">
                <Image
                  src={growth}
                  alt="Strategic Partnerships & Growth Acceleration"
                  title="Strategic Partnerships & Growth Acceleration"
                />
              </div>
              <h1>Strategic Partnerships & Growth Acceleration</h1>
              <p>
                Leverage our strategic partnerships and digital marketing
                expertise to gain a competitive edge and accelerate your
                business growth.
              </p>
              <ul>
                <li>Courier Partnerships</li>
                <li>Technology Integrations</li>
                <li>SEO Optimization</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="service-right">
          <Image src={services} alt="Helix Services" title="Helix Services" />
        </div> */}
      </StyledService>

      <Steps />
    </>
  );
}

export default Service;
