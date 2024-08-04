"use client";

import { Button } from "@/Sections/ui/moving-border";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled component for Pricing Table
const StyledPricingTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--grey);

  .pricing-table {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 2rem;
    padding-top: 2rem;

    .heading {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;

      h3 {
        font-size: var(--md);
        font-weight: 600;
        background: var(--gradient-hover);
        color: var(--white);
        padding: 0.5rem 1.5rem;
        border-radius: 100px;
      }
    }

    .subtogglebuttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    h2 {
      font-size: var(--xl);
      color: var(--white);
      font-weight: 700;
      padding: 1rem 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      transition: all 0.3s ease;

      th,
      td {
        font-size: var(--sm);
        padding: 10px;
        text-align: center;
        border: 1px solid #181920;
        transition: all 0.3s ease;
      }

      th {
        font-size: var(--md);
        font-weight: 700;
        color: var(--light);
        padding: 1rem;

        .text {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;

          .span {
            background: var(--primary);
            padding: 0.3rem 1rem;
            border-radius: 100px;
          }
          p {
            font-size: var(--sm);
            font-weight: 500;
            color: var(--dark-white);
          }
        }
      }

      td {
        font-weight: 300;
        color: var(--white) !important;
      }

      th:nth-child(1),
      td:nth-child(1) {
        text-align: left;
      }

      td:nth-child(4),
      th:nth-child(4) {
        background-color: #1f2933;
        color: var(--white) !important;
        border: none;
      }

      tr:nth-child(2) td {
        border-top: none;
      }

      tbody tr td {
        color: var(--light) !important;
      }

      tbody tr .bld {
        font-weight: 700;
        font-size: var(--sm);
        color: var(--light) !important;
      }

      tr {
        .price {
          font-size: var(--md);
          font-weight: 700;
          color: var(--white);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .pricing-table table {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      th,
      td {
        text-align: left;
        border: none;
        padding: 1rem;
      }
    }
  }

  @media (max-width: 480px) {
    .pricing-table table {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;

      th,
      td {
        text-align: left;
        border: none;
        padding: 1rem;
      }
    }
  }
`;

// Styled component for Label
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
    transform: translateX(2.7rem);
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
    font-size: var(--sm) !important;
    color: var(--dark-white);
    display: flex;
    justify-content: center;
  }
`;

// Styled component for Button
const StyledButton = styled(Button)`
  border-radius: 1.75rem;
  background-color: ${({ active }) =>
    active === "true" ? "#385bf9dd" : "transparent"};
  color: var(--white);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--secondary);
  }
`;

function PricingTier() {
  const [isYearly, setIsYearly] = useState(false);
  const [professionalWithApp, setProfessionalWithApp] = useState(false);
  const [enterpriseWithApp, setEnterpriseWithApp] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  const monthlyPrices = {
    starter: 4999,
    essential: 11999,
    professional: professionalWithApp ? 16499 : 12999,
    enterprise: enterpriseWithApp ? 28499 : 24999,
  };

  const yearlyPrices = Object.keys(monthlyPrices).reduce((acc, key) => {
    acc[key] = Math.round((monthlyPrices[key] * 12 * 0.9) / 12); // 10% discount
    return acc;
  }, {});

  const prices = isYearly ? yearlyPrices : monthlyPrices;

  return (
    <StyledPricingTable>
      <section className="pricing-table">
        <div className="heading">
          <h3>Pricing</h3>
        </div>
        <div className="subtogglebuttons">
          <StyledButton active={String(!isYearly)} onClick={() => setIsYearly(false)}>
            Monthly
          </StyledButton>
          <StyledButton active={String(isYearly)} onClick={() => setIsYearly(true)}>
            Annually Save 10%
          </StyledButton>
        </div>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>
                <div className="text">
                  Starter Tier <br />
                  <p>₹4,999 + 18% GST</p>
                </div>
              </th>
              <th>
                <div className="text">
                  Essential Tier <br />
                  <p>₹11,999 + 18% GST</p>
                </div>
              </th>
              <th>
                <div className="text">
                  Professional Tier{" "}
                  <Button
                    backgroundcolor="#385cf9cf"
                    textcolor="var(--white)"
                  >
                    Recommended
                  </Button>
                  <p>Best Value Option</p>
                  <Label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={professionalWithApp}
                        onChange={() =>
                          setProfessionalWithApp(!professionalWithApp)
                        }
                      />
                      <span className="slider"></span>
                    </label>
                    <span className="app">
                      {professionalWithApp ? "With App" : "Without App"}
                    </span>
                  </Label>
                </div>
              </th>
              <th>
                <div className="text">
                  Enterprise Tier <br />
                  <p>Customized Solutions for Large Businesses</p>
                  <Label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={enterpriseWithApp}
                        onChange={() =>
                          setEnterpriseWithApp(!enterpriseWithApp)
                        }
                      />
                      <span className="slider"></span>
                    </label>
                    <span className="app">
                      {enterpriseWithApp ? "With App" : "Without App"}
                    </span>
                  </Label>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bld">Price</td>
              <td className="price">₹{prices.starter}/month</td>
              <td className="price">₹{prices.essential}/month</td>
              <td className="price">₹{prices.professional}/month</td>
              <td className="price">₹{prices.enterprise}/month</td>
            </tr>
            <tr>
              <td className="bld">Setup Fee</td>
              <td>₹19,999 + 18% GST</td>
              <td>₹19,999 + 18% GST</td>
              <td>₹19,999 + 18% GST</td>
              <td>₹19,999 + 18% GST</td>
            </tr>
            <tr>
              <td className="bld">Dashboard & Analytics</td>
              <td>Basic shipment management (B2C, Forward, Reverse)</td>
              <td>Limited advanced shipment management (B2C, B2B)</td>
              <td>Advanced shipment management (B2C, B2B, International)</td>
              <td>Advanced shipment management (B2C, B2B, International)</td>
            </tr>
            <tr>
              <td className="bld">User Management</td>
              <td>Limited to 100 users</td>
              <td>Up to 300 users</td>
              <td>Up to 500 users</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td className="bld">Reporting & Passbook</td>
              <td>Basic</td>
              <td>Basic</td>
              <td>Advanced</td>
              <td>Comprehensive</td>
            </tr>
            <tr>
              <td className="bld">NDR Management</td>
              <td>✖</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">COD Shipments Management</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Coupon Code Management</td>
              <td>✖</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Communication Tools</td>
              <td>Email</td>
              <td>WhatsApp, Email</td>
              <td>WhatsApp, Email, SMS</td>
              <td>WhatsApp, Email, SMS</td>
            </tr>
            <tr>
              <td className="bld">Priority Support</td>
              <td>✖</td>
              <td>✔</td>
              <td>✔</td>
              <td>24/7 High-Level Support</td>
            </tr>
            <tr>
              <td className="bld">Real-Time Tracking</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Automated Invoice Generation</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Customer Feedback System</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Multi-Language Support</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Mobile App</td>
              <td>✖</td>
              <td>✖</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Support Channels</td>
              <td>Email support only</td>
              <td>Email and chat support</td>
              <td>Email, chat, and phone support</td>
              <td>24/7 support via all channels</td>
            </tr>
            <tr>
              <td className="bld">Onboarding</td>
              <td>Self-service onboarding guide</td>
              <td>Assisted onboarding with training sessions</td>
              <td>Comprehensive onboarding with dedicated training</td>
              <td>In-depth training sessions and onboarding support</td>
            </tr>
            <tr>
              <td className="bld">Dedicated Account Manager</td>
              <td>✖</td>
              <td>✖</td>
              <td>✖</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Custom Feature Development</td>
              <td>✖</td>
              <td>✖</td>
              <td>✖</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Advanced Security & Compliance</td>
              <td>✖</td>
              <td>✖</td>
              <td>✖</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Custom Branding Options</td>
              <td>✖</td>
              <td>✖</td>
              <td>✖</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Comprehensive Training & Onboarding</td>
              <td>✖</td>
              <td>✖</td>
              <td>✖</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Advanced Analytics & Reporting</td>
              <td>✖</td>
              <td>✖</td>
              <td>✖</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="bld">Higher API Rate Limits</td>
              <td>✖</td>
              <td>✖</td>
              <td>✖</td>
              <td>✔</td>
            </tr>
          </tbody>
        </table>
      </section>
    </StyledPricingTable>
  );
}

export default PricingTier;
