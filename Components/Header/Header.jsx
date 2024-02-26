"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";
import MainButton from "../Buttons/MainButton";
import logo from "@/Assets/Images/Logo/Helix-logo.png";
import Image from "next/image";

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
    img {
      width: 6rem;
      height: 100%;
      object-fit: contain;
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
        a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--grey);
          transition: all 0.3s ease-in-out;
          text-decoration: none;

          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
  .right {
    button {
      padding: 0.7rem 1.5rem;
      border: none;
      border-radius: 100px;
      font-size: 0.95rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className="left">
        <Image src={logo} alt="Helix Logo" title="Helix Logo" />
      </div>
      <div className="middle">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#successstories">Success Stories</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="#aboutus">About Us</Link>
          </li>
          <li>
            <Link href="#contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <Link href="/demo">
          <MainButton text={"Get a Demo"} />
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
