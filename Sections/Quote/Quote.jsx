import React from "react";
import styled from "styled-components";
import rocket from "@/Assets/Images/Quote/rocket.png";
import blueshipLogo from "@/Assets/Images/Quote/Blueship-white-tp.png";
import Image from "next/image";

const StyledQuote = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 7.5rem;
  padding-bottom: 2.5rem;

  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
  }

  .quote-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    background: #101828;
    color: var(--white);
    border-radius: 2rem;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
      padding: 2.5rem 2.5rem;
      height: 100%;
    }

    .client-img {
      .profile-img {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        z-index: 2;
        border: 15px solid var(--white);

        @media screen and (max-width: 768px) {
          width: 9rem;
          height: 9rem;
        }
      }
    }

    .rocket-img {
      position: absolute;
      top: 30%;
      left: 15%;
      transform: translate(-50%, -50%);
      z-index: 2;

      img {
        width: 12rem;
        height: 100%;
        object-fit: contain;
        animation: bouncing 2s infinite ease-out;
        opacity: 0.7;

        @media screen and (max-width: 768px) {
          width: 6rem;
        }

        @keyframes bouncing {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

          100% {
            transform: translateY(0);
          }
        }
      }
    }

    .quote-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      text-align: center;
      position: relative;
      z-index: 2;
      width: 75%;

      @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 5rem;
      }

      .top {
        h1 {
          font-size: var(--lg);
          font-weight: 700;
          color: var(--light);
          line-height: 1.5;

            @media screen and (max-width: 768px) {
                font-size: var(--md);
                font-weight: 500;
            }
        }
      }

      .bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        .logo {
          width: 12rem;
          height: 100%;
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.7;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .name {
          font-size: var(--md);
          font-weight: 500;
          color: var(--light);
        }

        .position {
          font-size: var(--sm);
          font-weight: 300;
          color: var(--lgrey);

          span {
            font-weight: 500;
          }
        }
      }
    }
  }
`;

function Quote() {
  return (
    <StyledQuote>
      <div className="quote-container">
        <div className="client-img">
          <img
            src="https://vault.uicore.co/modern-landing/wp-content/uploads/sites/48/2022/08/Modern-Landing-Head-Image.webp"
            alt="Dimple Chahal"
            title="Dimple Chahal"
            className="profile-img"
          />
        </div>
        <div className="rocket-img">
          <Image src={rocket} alt="Helix Rcoket Image" title="Helix Rocket" />
        </div>
        <div className="quote-content">
          <div className="top">
            <h1>
              "Working with Cyper Studio has been transformative. Their custom
              software streamlined our operations and gives us the competitive
              edge we needed to rapidly scale Blueship"
            </h1>
          </div>
          <div className="bottom">
            <div className="logo">
              <Image
                src={blueshipLogo}
                alt="Blueship Logo"
                title="Blueship Logo"
              />
            </div>
            <h2 className="name">Dimple Chahal</h2>
            <h4 className="position">
              CEO, <span>Blueship</span>
            </h4>
          </div>
        </div>
      </div>
    </StyledQuote>
  );
}

export default Quote;
