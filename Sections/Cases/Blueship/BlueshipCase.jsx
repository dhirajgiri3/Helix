import Image from "next/image";
import React from "react";
import styled from "styled-components";
import blueshipmockup from "@/Assets/Images/Mockup/blueship-mockup.png";

const StyledBlueshipCase = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .blueshipcasecontainer {
    height: 90vh;
    width: 90vw;
    background: #ffffff;
    border-radius: 1rem;
    color: var(--dark);
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);
    overflow-y: scroll; /* Add this */

    @media screen and (max-width: 768px) {
      padding: 2.5rem 1rem;
      width: calc(90vw + 5rem);
      height: 100vh;
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
          gap: 1rem;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.5rem;

          @media screen and (max-width: 768px) {
            width: 100%;
            height: 100%;
          }
        }

        .info {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 2rem;
          padding-top: 2rem;

          h3 {
            font-size: var(--md);
            font-weight: 700;
            color: var(--primary);
          }

          .list {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 1rem;
          }

          ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 0.7rem;

            li {
              width: 100%;
              list-style: disc;
              span {
                font-size: var(--norm);
                font-weight: 600;
                color: var(--dark);
              }

              p {
                font-size: var(--sm);
                font-weight: 500;
                color: var(--grey);
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
              font-weight: 700;
              color: var(--light);
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
  }
`;

function BlueshipCase() {
  return (
    <StyledBlueshipCase>
      <div className="blueshipcasecontainer" title="Scroll Using Scrollbar">
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
            <div className="info">
              <div className="challeanges list">
                <h3>The Challenge</h3>
                <ul>
                  <li>
                    <span>Outdated Technology: </span> Bugs and performance
                    problems caused frequent disruptions and frustrated users.
                  </li>
                  <li>
                    <span> Poor User Experience: </span> A cluttered,
                    non-intuitive interface created inefficiencies and a
                    negative brand perception.
                  </li>
                  <li>
                    <span>Limited Functionality: </span> The lack of modern
                    features prevented Shipex India from offering competitive
                    shipping solutions.
                  </li>
                </ul>
              </div>
              <div className="solution list">
                <h3>The Helix Solution</h3>
                <ul>
                  <li>
                    <span>Intuitive Interface & Streamlined Workflows: </span>{" "}
                    We redesigned the platform with a focus on ease-of-use,
                    reducing onboarding time for new users and minimizing
                    errors.
                  </li>
                  <li>
                    <span>Advanced Shipping Features: </span> Integration with
                    major carriers, real-time shipment tracking, and intelligent
                    rate comparison tools empowered Shipex India to provide
                    superior value.
                  </li>
                  <li>
                    <span>Modern, Scalable Technology: </span> The new solution
                    was built on a robust technology stack, ensuring reliability
                    and the ability to seamlessly accommodate future growth.
                  </li>
                </ul>
              </div>
              <div className="result list">
                <h3>The Results</h3>
                <ul>
                  <li>
                    <span>Increased User Satisfaction: </span> The new platform
                    received overwhelmingly positive feedback from users,
                    leading to increased customer retention and new business.
                  </li>
                  <li>
                    <span>Improved Efficiency: </span> Streamlined workflows and
                    advanced features allowed Shipex India to process more
                    shipments with fewer resources.
                  </li>
                  <li>
                    <span>Scalable Growth: </span> The new technology foundation
                    allowed Shipex India to expand its services and customer
                    base without disruption.
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shipex India Founder"
                />
              </div>
              <div className="testimonials">
                <p>
                  "HELIX understood our challenges and delivered a solution that
                  exceeded expectations. Their focus on user experience and
                  innovative features has been instrumental in driving our
                  business forward"
                </p>
                <h4>Sandeep Singal</h4>
                <h6>Founder & CEO, Shipex India</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledBlueshipCase>
  );
}

export default BlueshipCase;
