"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import Getstarted from "../Buttons/Getstarted";
import ThankYou from "../components/Thankyou";

const FormContainer = styled.div`
  background-color: var(--grey);
  padding: 3rem 5rem;
  padding-top: 7rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 767px) {
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
  }

  .inputs {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;

    select {
      background: #232323;
      padding: 0.3rem 1rem;
      border-radius: 10px;
      border: none;

      &:focus {
        outline: none;
        border: none;
      }
    }
  }

  .checkbox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;
  }
`;

const InputField = styled.input`
  background-color: transparent;
  background: #232323;
  padding: 0.5rem;
  border: none;
  font-size: var(--norm);
  width: 15rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: var(--white);
  overflow-x: auto;
  border-radius: 10px;

  &::placeholder {
    color: #999;
    font-weight: 500;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

const CheckboxContainer = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Label = styled.label`
  display: block;
  color: #ccc;
  margin-bottom: 1rem;
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("manwwekr");

  if (state.succeeded) {
    return <ThankYou />;
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <InputField
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required
              minLength="2"
            />
            <ValidationError
              prefix="Full Name"
              field="fullName"
              errors={state.errors}
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <InputField
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>{" "}
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <InputField
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div>
            <Label htmlFor="company">Company Name</Label>
            <InputField
              id="company"
              type="text"
              name="company"
              placeholder="Enter your company name"
              required
              minLength="2"
            />
            <ValidationError
              prefix="Company Name"
              field="company"
              errors={state.errors}
            />
          </div>
          <div>
            {" "}
            <Label htmlFor="size">Size (Number of Employees)</Label>
            <InputField
              id="size"
              type="number"
              name="size"
              placeholder="Enter the number of employees"
              required
              min="1"
            />
            <ValidationError prefix="Size" field="size" errors={state.errors} />
          </div>
          <div>
            <Label htmlFor="location">Location(s)</Label>
            <InputField
              id="location"
              type="text"
              name="location"
              placeholder="Enter your location(s)"
              required
            />
            <ValidationError
              prefix="Location"
              field="location"
              errors={state.errors}
            />
          </div>
          <div>
            <Label htmlFor="volume">Current Shipping Volume (Monthly)</Label>
            <InputField
              id="volume"
              type="number"
              name="volume"
              placeholder="Enter your monthly shipping volume"
              required
              min="1"
            />
            <ValidationError
              prefix="Volume"
              field="volume"
              errors={state.errors}
            />
          </div>
          <div>
            <Label htmlFor="regions">Shipping Regions</Label>
            <select id="regions" name="regions" required>
              <option value="">Select...</option>
              <option value="Domestic">Domestic</option>
              <option value="International">International</option>
              <option value="Both">Both</option>
            </select>
            <ValidationError
              prefix="Regions"
              field="regions"
              errors={state.errors}
            />
          </div>
          <div>
            <Label htmlFor="carriers">Number of Shipping Carriers Used</Label>
            <InputField
              id="carriers"
              type="number"
              name="carriers"
              placeholder="Enter the number of shipping carriers used"
              required
              min="1"
            />
            <ValidationError
              prefix="Carriers"
              field="carriers"
              errors={state.errors}
            />
          </div>{" "}
          <div>
            <Label htmlFor="mainCarriers">Main Carriers</Label>
            <InputField
              id="mainCarriers"
              type="text"
              name="mainCarriers"
              placeholder="Enter your main carriers"
              required
            />
            <ValidationError
              prefix="Main Carriers"
              field="mainCarriers"
              errors={state.errors}
            />
          </div>{" "}
          <div>
            <Label htmlFor="types">Types of Shipments</Label>
            <InputField
              id="types"
              type="text"
              name="types"
              placeholder="Enter the types of shipments"
              required
            />
            <ValidationError
              prefix="Types"
              field="types"
              errors={state.errors}
            />
          </div>{" "}
          <div>
            <Label htmlFor="investment">
              Willingness to Invest in Business
            </Label>
            <InputField
              id="investment"
              type="number"
              name="investment"
              placeholder="Enter the amount you are willing to invest"
            />
            <ValidationError
              prefix="Investment"
              field="investment"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="checkbox">
          <CheckboxContainer>
            <label>
              <input type="checkbox" name="terms" required />
              <p>I agree to the terms and conditions</p>
            </label>
            <ValidationError
              prefix="Terms"
              field="terms"
              errors={state.errors}
            />
          </CheckboxContainer>
          <CheckboxContainer>
            <label>
              <input type="checkbox" name="freeTrial" />
              <p>I want to get a 1-month free trial</p>
            </label>
          </CheckboxContainer>
        </div>
        <Getstarted
          type="submit"
          disabled={state.submitting}
          text={"Submit Now"}
        />
      </form>
    </FormContainer>
  );
};

export default ContactForm;
