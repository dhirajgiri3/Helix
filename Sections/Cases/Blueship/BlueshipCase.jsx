"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import blueshipmockup from "@/Assets/Images/Mockup/blueship-mockup.png";

const StyledBlueshipCase = styled.div`
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
        border-radius: 1rem;

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

function BlueshipCase() {
  return (
    <StyledBlueshipCase>
      <div className="title">
        <h1>
          Blueship: Accelerating Success with Scalable & Data-Driven Logistics
          Technology
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
            <p>Feb 2024</p>
          </div>
          <div className="cta">
            <h4>Ready to start?</h4>
            <button>Contact us</button>
          </div>
        </div>
        <div className="right">
          <Image
            src={blueshipmockup}
            alt="Mockup of the blueship website"
            title="Mockup of the blueship website"
          />
          <button className="visit">
            <a href="https://www.blueship.in" target="_blank">
              Visit Website <span>&#8599;</span>
            </a>
          </button>
          <div className="info">
            <div className="challeanges list">
              <h3>The Challenge</h3>
              <ul>
                <li>
                  <span>No Existing Platform: </span> As a new shipping
                  aggregator, Blueship needed a comprehensive software solution
                  and customer-facing website to launch their business.
                </li>
                <li>
                  <span> Customer Experience Focus: </span> Their commitment to
                  excellent customer support meant their technology needed to be
                  intuitive and easy to use for both clients and employees.
                </li>
                <li>
                  <span>Competitive Features: </span> Blueship needed features
                  that would attract businesses and establish them as a reliable
                  provider in a crowded market.
                </li>
              </ul>
            </div>
            <div className="solution list">
              <h3>The Helix Solution</h3>
              <ul>
                <li>
                  <span>Streamlined Customer Experience: </span>We crafted a
                  website focused on simplifying the process of getting shipping
                  quotes, booking orders, and tracking packages.
                </li>
                <li>
                  <span>Intuitive Backend System: </span> The software's
                  intuitive interface, clear navigation, and well-defined
                  workflows minimized onboarding time for Blueship's team and
                  reduced the potential for errors.
                </li>
                <li>
                  <span>Seamless Carrier Integrations: </span> Integration with
                  major carriers offered customers wider shipping options and
                  more competitive rates.
                </li>
              </ul>
            </div>
            <div className="result list">
              <h3>The Results</h3>
              <ul>
                <li>
                  <span>Successful Launch: </span> Helix solutions enabled
                  Blueship to quickly transition from concept to a fully
                  operational shipping aggregator.
                </li>
                <li>
                  <span>Rapid Customer Acquisition: </span> The seamless user
                  experience on both website and software helped Blueship
                  attract their initial clients and build a reputation for
                  reliability.
                </li>
                <li>
                  <span>Improved Operational Efficiency: </span> Automated
                  features and streamlined workflows resulted in a 20% decrease
                  in order processing times, freeing up resources.
                </li>
              </ul>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-label">
              <p>Client Testimonial</p>
            </div>
            <div className="profile-picture">
              <img
                src="https://plus.unsplash.com/premium_photo-1661777204046-d7fae72dbcdd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shipex India Founder"
              />
            </div>
            <div className="testimonials">
              <p>
                "Cyper Studio's expertise was crucial to our launch. Their
                customer-centric technology solutions have given us a strong
                foundation to build upon and delight our clients."
              </p>
              <h4>Dimple Chahal</h4>
              <h6>Founder & CEO, Blueship</h6>
            </div>
          </div>
        </div>
      </div>
    </StyledBlueshipCase>
  );
}

export default BlueshipCase;
