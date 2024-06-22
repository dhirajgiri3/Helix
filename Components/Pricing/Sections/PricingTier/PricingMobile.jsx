"use client";
import React, { useState } from "react";
import styled from "styled-components";

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  padding-top: 0;
  background-color: #ffffff;
  color: #111;
  gap: 1.5rem;
`;

const Header = styled.h1`
  font-size: var(--smd);
  text-align: center;
  font-weight: 700;
  line-height: 1.3;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const ToggleButton = styled.button`
  background: ${({ active }) => (active ? "var(--primary)" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "var(--primary)")};
  border: 2px solid var(--primary);
  border-radius: 30px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: var(--norm);
  font-weight: 500;

  &:hover {
    background: var(--primary);
    color: #fff;
  }
`;

const PricingPlans = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;

  .professional {
    background: var(--grey) !important;
    color: var(--light);

    .price {
      color: var(--light);
    }

    .app,
    .professionaltitle {
      color: var(--white);
    }
  }
`;

const Plan = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  width: 20%;
  box-sizing: border-box;
  box-shadow: 1px 1px 30px 10px #77777720;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    width: 45%;
    min-height: 63vh;
  }

  @media (max-width: 767px) {
    width: 100%;
    min-height: 63vh;
  }

`;

const PlanTitle = styled.h2`
  font-size: var(--norm);
  color: var(--primary);
  font-weight: 700;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Feature = styled.li`
  margin: 0;
`;

const Button = styled.button`
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: var(--secondary);
  }
`;

const Label = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  .app {
    font-size: var(--md);
    font-weight: 700;
  }

  .switch {
    --secondary-container: #0d2047;
    --primary: #4f70ff;
    font-size: var(--norm);
    position: relative;
    display: inline-block;
    width: 3.7rem;
    height: 1.8rem;
  }

  .switch input {
    display: none;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    transition: 0.5s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 20px;
    left: 0.2rem;
    bottom: 0.2rem;
    background-color: var(--light);
    transition: 0.5s;
  }

  input:checked + .slider:before {
    background-color: #4f70ff;
  }

  input:checked + .slider {
    background-color: #121a3e;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #121a3e;
  }

  input:checked + .slider:before {
    transform: translateX(2.5rem);
  }

  .switch {
    display: flex;
    align-items: center;
    gap: 0;
    width: 50%;
    justify-content: center;
  }

  span {
    width: 50%;
    font-size: var(--norm);
    color: #111;
    display: flex;
    justify-content: center;
  }
`;

const PricingMobile = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [professionalWithApp, setProfessionalWithApp] = useState(false);
  const [enterpriseWithApp, setEnterpriseWithApp] = useState(false);

  const monthlyPrices = {
    starter: 4999,
    essential: 12999,
    professional: professionalWithApp ? 16499 : 13999,
    enterprise: enterpriseWithApp ? 31499 : 28999,
  };

  const yearlyPrices = Object.keys(monthlyPrices).reduce((acc, key) => {
    acc[key] = (monthlyPrices[key] * 12 * 0.93) / 12; // Applying 7% discount
    return acc;
  }, {});

  const prices = isYearly ? yearlyPrices : monthlyPrices;

  return (
    <PricingContainer>
      <Header>Find the perfect plan for every size business.</Header>
      <ToggleContainer>
        <ToggleButton active={!isYearly} onClick={() => setIsYearly(false)}>
          Monthly
        </ToggleButton>
        <ToggleButton active={isYearly} onClick={() => setIsYearly(true)}>
          Annually Save 7%
        </ToggleButton>
      </ToggleContainer>
      <PricingPlans>
        <Plan>
          <PlanTitle>Starter Tier</PlanTitle>
          <Price>₹{prices.starter.toFixed(0)}/month</Price>
          <FeatureList>
            <Feature>
              ✔ Basic shipment management (B2C, Forward, Reverse)
            </Feature>
            <Feature>✔ COD Shipments Management</Feature>
            <Feature>✔ Communication Tools: Email</Feature>
            <Feature>✔ Real-Time Tracking</Feature>
            <Feature>✔ Automated Invoice Generation</Feature>
            <Feature>✔ Customer Feedback System</Feature>
            <Feature>✔ Multi-Language Support</Feature>
          </FeatureList>
          <Button>Sign Up Now</Button>
        </Plan>
        <Plan>
          <PlanTitle>Essential Tier</PlanTitle>
          <Price>₹{prices.essential.toFixed(0)}/month</Price>
          <FeatureList>
            <Feature>✔ Limited advanced shipment management (B2C, B2B)</Feature>
            <Feature>✔ NDR Management</Feature>
            <Feature>✔ COD Shipments Management</Feature>
            <Feature>✔ Coupon Code Management</Feature>
            <Feature>✔ Communication Tools: WhatsApp, Email</Feature>
            <Feature>✔ Priority Support</Feature>
            <Feature>✔ Real-Time Tracking</Feature>
            <Feature>✔ Automated Invoice Generation</Feature>
            <Feature>✔ Customer Feedback System</Feature>
            <Feature>✔ Multi-Language Support</Feature>
          </FeatureList>
          <Button>Start Free Trial</Button>
        </Plan>
        <Plan className="professional">
          <PlanTitle className="professionaltitle">
            Professional Tier (Recommended)
          </PlanTitle>
          <Label>
            <label className="switch">
              <input
                type="checkbox"
                checked={professionalWithApp}
                onChange={() => setProfessionalWithApp(!professionalWithApp)}
              />
              <span className="slider"></span>
            </label>
            <span className="app">
              {professionalWithApp ? "With App" : "Without App"}
            </span>
          </Label>
          <Price className="price">
            ₹{prices.professional.toFixed(0)}/month
          </Price>
          <FeatureList>
            <Feature>
              ✔ Advanced shipment management (B2C, B2B, International)
            </Feature>
            <Feature>✔ NDR Management</Feature>
            <Feature>✔ COD Shipments Management</Feature>
            <Feature>✔ Coupon Code Management</Feature>
            <Feature>✔ Communication Tools: WhatsApp, Email, SMS</Feature>
            <Feature>✔ Priority Support</Feature>
            <Feature>✔ Real-Time Tracking</Feature>
            <Feature>✔ Automated Invoice Generation</Feature>
            <Feature>✔ Customer Feedback System</Feature>
            <Feature>✔ Multi-Language Support</Feature>
            {professionalWithApp && <Feature>✔ Mobile App</Feature>}
          </FeatureList>
          <Button>Start Free Trial</Button>
        </Plan>
        <Plan>
          <PlanTitle>Enterprise Tier</PlanTitle>
          <Label>
            <label className="switch">
              <input
                type="checkbox"
                checked={enterpriseWithApp}
                onChange={() => setEnterpriseWithApp(!enterpriseWithApp)}
              />
              <span className="slider"></span>
            </label>
            <span className="app">
              {enterpriseWithApp ? "With App" : "Without App"}
            </span>
          </Label>
          <Price>₹{prices.enterprise.toFixed(0)}/month</Price>
          <FeatureList>
            <Feature>
              ✔ Advanced shipment management (B2C, B2B, International)
            </Feature>
            <Feature>✔ NDR Management</Feature>
            <Feature>✔ COD Shipments Management</Feature>
            <Feature>✔ Coupon Code Management</Feature>
            <Feature>✔ Communication Tools: WhatsApp, Email, SMS</Feature>
            <Feature>✔ High-Level Support</Feature>
            <Feature>✔ Real-Time Tracking</Feature>
            <Feature>✔ Automated Invoice Generation</Feature>
            <Feature>✔ Customer Feedback System</Feature>
            <Feature>✔ Multi-Language Support</Feature>
            {enterpriseWithApp && <Feature>✔ Mobile App</Feature>}
          </FeatureList>
          <Button>Book a Meeting</Button>
        </Plan>
      </PricingPlans>
    </PricingContainer>
  );
};

export default PricingMobile;
