"use client";

import styled, { keyframes } from "styled-components";
import React from "react";

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

    h2 {
      font-size: var(--xl);
      color: var(--white);
      font-weight: 700;
      padding: 1rem 0;
    }

    button {
      background: var(--secondary);
      font-size: var(--lg);
      color: var(--white);
      padding: 15px 30px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease-in-out;
    }

    table {
      width: 100%;
      border-collapse: collapse;

      th {
        font-size: var(--md);
        color: var(--light);
        text-align: center;
        padding: 2rem 10px;
        border-left: none;
        border-right: none;
        font-weight: 700;

        .text {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 0.5rem;

          p {
            font-size: var(--sm);
            font-weight: 500;
            color: var(--dark-white);
          }
        }
      }

      td {
        font-size: var(--sm);
        color: var(--white) !important;
        padding: 10px;
        text-align: center;
        border: 1px solid #181920;
        border-left: none;
        border-right: none;
        font-weight: 300;

        &:nth-child(1) {
          text-align: left;
        }
      }

      th:nth-child(1) {
        text-align: left;
      }

      th:nth-child(5) {
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

      tbody {
        tr {
          td {
            color: var(--light) !important;
          }
          .bld {
            font-weight: 700;
            font-size: var(--sm);
            color: var(--light) !important;
          }
        }
      }
    }

    .slider {
      background: var(--light);
      border-radius: 10px;
      padding: 20px;
      margin: 20px 0;
    }

    .slide {
      font-size: var(--norm);
      color: var(--dark);
      padding: 10px;
      margin: 10px;
      border-bottom: 1px solid var(--light);
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

function PricingTier() {
  return (
    <StyledPricingTable>
      <section className="pricing-table">
        <div className="heading">
          <h3>Pricing</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>
                <div className="text">
                  Starter Tier <br />
                  <p>Perfect for Startups & small businesses</p>
                </div>
              </th>
              <th>
                <div className="text">
                  Essential Tier <br />
                  <p>Ideal for Growing Businesses</p>
                </div>
              </th>
              <th>
                {" "}
                <div className="text">
                  Professional Tier (Recomended) <br />
                  <p>Best Value Option</p>
                </div>
              </th>
              <th>
                <div className="text">
                  Enterprise Tier <br />
                  <p>Customized Solutions for Large Businesses</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bld">Price</td>
              <td>₹4,999/month</td>
              <td>₹12,999/month</td>
              <td>₹16,499/month</td>
              <td>₹31,499/month</td>
            </tr>
            <tr>
              <td className="bld">Setup Fee</td>
              <td>₹19,999</td>
              <td>₹23,999</td>
              <td>₹24,999</td>
              <td>₹29,999</td>
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
              <td>Up to 500 users</td>
              <td>Unlimited</td>
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
              <td>&#10006;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
            </tr>
            <tr>
              <td className="bld">COD Shipments Management</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
            </tr>
            <tr>
              <td className="bld">Coupon Code Management</td>
              <td>&#10006;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
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
              <td>&#10006;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>High-Level Support</td>
            </tr>
            <tr>
              <td className="bld">Real-Time Tracking</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
            </tr>
            <tr>
              <td className="bld">Automated Invoice Generation</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
            </tr>
            <tr>
              <td className="bld">Customer Feedback System</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
            </tr>
            <tr>
              <td className="bld">Multi-Language Support</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
            </tr>
            <tr>
              <td className="bld">Mobile App</td>
              <td>&#10006;</td>
              <td>&#10006;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
            </tr>
          </tbody>
        </table>
      </section>
    </StyledPricingTable>
  );
}

export default PricingTier;
