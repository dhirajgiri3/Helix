import React from "react";
import styled from "styled-components";
import feature from "@/Assets/Images/Features/feature-image.png";
import payment from "@/Assets/Images/Features/helix-securepayment.png";
import delivery from "@/Assets/Images/Features/helix-delivery.png";
import customerservice from "@/Assets/Images/Features/helix-customerservice.png";
import warehouse from "@/Assets/Images/Features/helix-warehouse.png";
import Image from "next/image";

const StyledFeatures = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 7.5rem;
  background: var(--white);

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }

  .feature-up {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      h1 {
        font-size: var(--xl);
        font-weight: 700;
        color: var(--dark);
        text-align: center;

        span {
          background: var(--text-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media screen and (max-width: 768px) {
          width: 100%;
          font-size: var(--lg);
        }
      }

      p {
        font-size: var(--norm);
        font-weight: 500;
        color: var(--grey);
        text-align: center;
        width: 50%;
        line-height: 1.5;

        @media screen and (max-width: 768px) {
          font-size: var(--sm);
          width: 100%;
        }
      }
    }
  }

  .feature-bottom {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    padding: 2.5rem 0;
    place-items: center;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      gap: 0rem;
      padding: 3rem 0;
    }

    .div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
      text-align: left;
      padding: 2rem 1.5rem;
      border-radius: 1rem;
      transition: all 0.3s ease-in-out;
      border: 1px solid #ddd;
      height: 17rem;
      width: 25rem;
      overflow: scroll;

      &:hover {
        border: 1px solid var(--primary);
      }

      &::-webkit-scrollbar {
        display: none;
      }

      @media screen and (max-width: 768px) {
        padding: 1rem;
        width: 100%;
        height: 15rem;
        overflow: hidden;
        overflow-y: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      .icon {
        width: 2.8rem;
        height: 2.8rem;
        border: 1px solid var(--primary);
        padding: 0.7rem;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      h1 {
        font-size: var(--md);
        font-weight: 700;
        color: var(--dark);
      }

      p {
        font-size: var(--sm);
        font-weight: 500;
        color: var(--grey);
        line-height: 1.5;
      }
    }

    .third {
      grid-row: 1/3;
      grid-column: 2/3;
      width: 100%;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      @media screen and (max-width: 768px) {
        grid-row: 1/2;
        grid-column: 1/2;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
  }
`;

function Features() {
  return (
    <StyledFeatures id="features">
      <div className="feature-up">
        <div className="title">
          <h1>
            {" "}
            Transformative <span>Features</span> : What We Can Build for You
          </h1>
          <p>
            Experience the power of a logistics platform tailored to your unique
            needs. From streamlining operations to driving data-driven growth,
            our expertise delivers the features that matter most to your
            business.
          </p>
        </div>
      </div>
      <div className="feature-bottom">
        <div className="first div">
          <div className="icon">
            <Image
              src={delivery}
              alt="Real-Time Shipment Visibility"
              title="Real-Time Shipment Visibility"
            />
          </div>
          <h1>Real-Time Shipment Visibility</h1>
          <p>
            Gain complete visibility into shipment progress, enabling proactive
            issue resolution, enhanced customer communication. Reduce support
            inquiries, minimize delays, and build trust.
          </p>
        </div>
        <div className="second div">
          <div className="icon">
            <Image
              src={payment}
              alt="Secure Payment Processing"
              title="Secure Payment Processing"
            />
          </div>
          <h1>Secure & Streamlined COD Solutions</h1>
          <p>
            Protect your cash flow and simplify e-commerce transactions with
            seamless COD processes. Enjoy comprehensive coverage and worry-free
            growth.
          </p>
        </div>
        <div className="third">
          <Image src={feature} alt="Helix Features" title="Helix  Features" />
        </div>
        <div className="fourth div">
          <div className="icon">
            <Image
              src={customerservice}
              alt="Customer Service Excellence"
              title="Customer Service Excellence"
            />
          </div>
          <h1>Personalized Returns Management</h1>
          <p>
            Turn returns into opportunities for customer loyalty. Streamline
            returns processing, reduce costs, and provide a hassle-free customer
            experience.
          </p>
        </div>
        <div className="fifth div">
          <div className="icon">
            <Image
              src={warehouse}
              alt="Warehouse Management"
              title="Warehouse Management"
            />
          </div>
          <h1>Inventory Forecasting & Demand Planning</h1>
          <p>
            Make informed inventory decisions with data-driven forecasting.
            Prevent stockouts, reduce overstocking costs, and ensure you always
            have the right products on hand.
          </p>
        </div>
      </div>
    </StyledFeatures>
  );
}

export default Features;
