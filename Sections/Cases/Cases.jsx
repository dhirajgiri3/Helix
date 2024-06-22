import MainButton from "@/Components/Buttons/MainButton";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlueshipCase from "./Blueship/BlueshipCase";
import Link from "next/link";

const StyledCases = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 7.5rem;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
    gap: 2rem;
  }

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
    }

    p {
      font-size: var(--sm);
      font-weight: 500;
    }
  }

  .blueship {
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--dark);

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }

    .left {
      width: 75%;
      height: 100%;

      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 5px;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.07);
      }

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    .right {
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;

      @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        gap: 2rem;
      }

      h1 {
        font-size: var(--xxl);
        font-weight: 700;
        color: var(--dark);
      }

      p {
        font-size: var(--norm);
        font-weight: 400;
        color: var(--grey);
      }

      .cta-buttons {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;

        @media screen and (max-width: 768px) {
          h1 {
            font-size: var(--xl);
          }
        }

        button {
          padding: 1rem;
          border: none;
          border-radius: 100px;
          font-size: var(--norm);
          font-weight: 500;
          cursor: pointer;
          transition: 0.3s ease;
        }
      }
    }
  }

  .shipex-india {
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      gap: 1rem;
    }

    .left {
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;

      h1 {
        font-size: var(--xl);
        font-weight: 700;
        color: var(--dark);
      }

      p {
        font-size: var(--norm);
        font-weight: 400;
        color: var(--grey);
      }

      .cta-buttons {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;

        @media screen and (max-width: 768px) {
        }
      }

      button {
        padding: 1rem;
        border: none;
        border-radius: 100px;
        font-size: var(--norm);
        font-weight: 500;
        cursor: pointer;
        transition: 0.3s ease;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        gap: 2rem;
      }
    }

    .right {
      width: 75%;
      height: 100%;

      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 5px;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.07);
      }

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }

  .blueshipcasediv {
    display: none;
  }

  .closebtn {
    position: fixed;
    top: 1rem;
    right: 1rem;
    font-size: 1rem;
    color: var(--white);
    background: var(--black);
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 10000;

    &:hover {
      background: var(--primary);
    }
  }
`;

const Cases = () => {
  const [showBlueshipCase, setShowBlueshipCase] = useState(false); // Added state

  const handleCaseViewer = () => {
    setShowBlueshipCase(!showBlueshipCase); // Toggle the state
  };

  const closeCase = () => {
    setShowBlueshipCase(false);
  };

  return (
    <>
      <StyledCases id="cases">
        <div className="label">
          <p>Case Studies</p>
        </div>
        <div className="blueship">
          <div className="left">
            <video
              src="https://firebasestorage.googleapis.com/v0/b/cyper-studio-saas.appspot.com/o/blueship-video.webm?alt=media&token=e87fc1f5-8b6c-4939-a2ab-dfbf3f612092"
              loop
              autoPlay
              muted
              playsInline
            />
          </div>
          <div className="right">
            <h1>Blueship</h1>
            <p>
              Blueship is a logistics company that provides a wide range of
              services including warehousing, distribution, and transportation.
            </p>
            <div className="cta-buttons">
              <Link href="/blueship">
                <MainButton text={"View Case"} />
              </Link>
              <a href="https://www.blueship.in/" target="_blank">
                <button>Visit Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className="shipex-india">
          <div className="left">
            <h1>Shipex India</h1>
            <p>
              Shipex India is a logistics company that provides a wide range of
              services including warehousing, distribution, and transportation.
            </p>
            <div className="cta-buttons">
              <Link href="/shipexindia">
                <MainButton text={"View Case"} />
              </Link>
              <a href="https://www.shipexindia.in/" target="_blank">
                <button>Visit Website</button>
              </a>
            </div>
          </div>
          <div className="right">
            <video
              src="https://firebasestorage.googleapis.com/v0/b/cyper-studio-saas.appspot.com/o/shipex-video.webm?alt=media&token=1eb9f468-4082-49a6-9ecc-6a0feab3bedb"
              loop
              autoPlay
              muted
              playsInline
            />
          </div>
        </div>
        {showBlueshipCase && (
          <div onClick={closeCase} className="closebtn">
            close
          </div>
        )}
      </StyledCases>
      {showBlueshipCase && <BlueshipCase />}
    </>
  );
};

export default Cases;
