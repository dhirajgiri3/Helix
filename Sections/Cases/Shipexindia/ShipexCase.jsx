"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import shipexmockup from "@/Assets/Images/Mockup/shipex-mockup.png";

const StyledShipexCase = styled.div`
  height: 100%;
  width: 100%;
  background: #ffffff;
  border-radius: 1rem;
  color: var(--dark);
  padding: 5rem 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  padding-top: 8rem !important;

  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
    width: 100%;
    height: 100%;
    padding-top: 6rem !important;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--dark-white);
    border-radius: 100px;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--lgrey);
    }
  }

  &::-webkit-scrollbar-track {
    background: var(--white);
  }

  .title {
    text-align: center;
    width: 80%;
    padding-bottom: 3rem;

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 2rem 0;
      padding-bottom: 0t;
    }

    h1 {
      font-size: var(--xl);
      font-weight: 700;
      color: var(--dark);
      text-align: center;
      width: 100%;

      @media screen and (max-width: 768px) {
        font-size: var(--lg);
      }
    }
  }

  .main-info {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }

    .left {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      h3 {
        font-size: var(--md);
        font-weight: 700;
        color: var(--primary);
        width: 100%;
      }

      .industry,
      .services,
      .date,
      .cta {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        gap: 0.3rem;

        h4 {
          font-size: var(--norm);
          font-weight: 600;
          color: var(--lgrey);
        }

        p {
          font-size: var(--sm);
          font-weight: 500;
          color: var(--dark);
        }
      }

      .cta {
        h4 {
          color: var(--primary);
        }

        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 100px;
          font-size: var(--norm);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          background: var(--primary);
          color: var(--white);
          margin: 0.5rem 0;

          &:hover {
            background: var(--secondary);
          }
        }
      }
    }

    .right {
      width: 75%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;

      @media screen and (max-width: 768px) {
        width: 100%;
        gap: 2rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
      }

      button.visit {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 100px;
        font-size: var(--norm);
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        background: var(--primary);
        color: var(--white);
        margin: 1rem 0;

        a {
          text-decoration: none;
          color: var(--white);

          span {
            font-size: var(--md);
          }
        }
        &:hover {
          background: var(--secondary);
        }

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }

      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 2rem;

        .list {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 1.5rem;

          h3 {
            font-size: var(--md);
            font-weight: 700;
            color: var(--primary);
          }

          ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 1.5rem;

            li {
              width: 100%;
              list-style: none;
              line-height: 1.5;
              span {
                font-size: var(--norm);
                font-weight: 600;
                color: var(--dark);
              }
            }
          }
        }
      }

      .testimonial {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        padding: 3rem;
        background: #101828;
        border-radius: 20px;

        .testimonial-label {
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--primary);
          padding: 0.3rem 0.5rem;
          border-radius: 100px;

          p {
            font-size: var(--sm);
            font-weight: 500;
            color: var(--white);
          }
        }

        .profile-picture {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 7rem;
            height: 7rem;
            object-fit: cover;
            border-radius: 100px;
            border: 5px solid var(--light);
          }
        }

        .testimonials {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.7rem;
          text-align: center;

          p {
            font-size: var(--norm);
            font-weight: 600;
            color: var(--light);
            line-height: 1.5;
          }

          h4 {
            font-size: var(--norm);
            font-weight: 500;
            color: var(--primary);
          }

          h6 {
            font-size: var(--sm);
            font-weight: 500;
            color: var(--light);
          }
        }
      }
    }
  }
`;

function ShipexCase() {
  return (
    <StyledShipexCase>
      <div className="title">
        <h1>
          Shipex India: Accelerating Growth with Modernized Logistics Technology
        </h1>
      </div>
      <div className="main-info">
        <div className="left">
          <h3>Case Study</h3>
          <div className="industry">
            <h4>Industry</h4>
            <p>Logistics</p>
          </div>
          <div className="services">
            <h4>Services</h4>
            <p>Web Development, UI/UX Design, Branding</p>
          </div>
          <div className="date">
            <h4>Date</h4>
            <p>Sep 2023</p>
          </div>
          <div className="cta">
            <h4>Ready to start?</h4>
            <button>Contact us</button>
          </div>
        </div>
        <div className="right">
          <Image
            src={shipexmockup}
            alt="Mockup of the blueship website"
            title="Mockup of the blueship website"
          />
          <button className="visit">
            <a href="https://www.shipexindia.in" target="_blank">
              Visit Website <span>&#8599;</span>
            </a>
          </button>
          <div className="info">
            <div className="challeanges list">
              <h3>The Challenge</h3>
              <ul>
                {" "}
                <li>
                  <span>Outdated Technology:</span> Shipex India's existing
                  software suffered from bugs and performance bottlenecks,
                  causing disruptions and user frustration.{" "}
                </li>{" "}
                <li>
                  <span>Poor User Experience:</span> A cluttered, non-intuitive
                  interface slowed down operations and negatively impacted
                  Shipex India's brand image.{" "}
                </li>{" "}
                <li>
                  <span>Limited Functionality:</span> The lack of modern
                  shipping features hindered Shipex India's ability to provide
                  competitive solutions and keep pace with industry
                  advancements.{" "}
                </li>{" "}
              </ul>
            </div>
            <div className="solution list">
              <h3>The Helix Solution</h3>
              <ul>
                {" "}
                <li>
                  <span>Intuitive Interface & Streamlined Workflows:</span> We
                  completely overhauled Shipex India's platform, prioritizing
                  ease-of-use, faster onboarding, and error reduction.
                </li>{" "}
                <li>
                  <span>Advanced Shipping Features:</span> We integrated major
                  carriers, implemented robust real-time shipment tracking, and
                  developed intelligent rate comparison tools, empowering Shipex
                  India to offer enhanced value to clients.{" "}
                </li>{" "}
                <li>
                  <span>Modern, Scalable Technology:</span> A new, robust
                  technology stack replaced their legacy system, ensuring
                  reliability, improved performance, and the ability to
                  seamlessly handle Shipex India's growth.
                </li>{" "}
              </ul>
            </div>
            <div className="result list">
              <h3>The Results</h3>
              <ul>
                {" "}
                <li>
                  <span>Increased User Satisfaction:</span> Employees and
                  customers alike responded positively to the new platform,
                  boosting loyalty and attracting new business.
                </li>{" "}
                <li>
                  <span>Improved Efficiency:</span> Streamlined workflows,
                  automation, and better tools allowed Shipex India to
                  significantly increase their shipment processing capacity.{" "}
                </li>{" "}
                <li>
                  <span>Scalable Growth:</span> The modernized technology
                  foundation equipped Shipex India to confidently expand their
                  services and customer base without the constraints of their
                  previous system.
                </li>{" "}
              </ul>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-label">
              <p>Client Testimonial</p>
            </div>
            <div className="profile-picture">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shipex India Founder"
              />
            </div>
            <div className="testimonials">
              <p>
                "Cyper Studio understood the limitations of our outdated
                software and delivered a solution that exceeded our
                expectations. Their modernized platform has been instrumental in
                streamlining our operations and driving our business forward."
              </p>
              <h4>Sandeep Singal</h4>
              <h6>Founder & CEO, Shipex India</h6>
            </div>
          </div>
        </div>
      </div>
    </StyledShipexCase>
  );
}

export default ShipexCase;
