import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import contactimage from "@/Assets/Images/Contact/contactimage.png";
import Image from "next/image";
import MainButton from "@/Components/Buttons/MainButton";

const StyledContactForm = styled.div`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 7.5rem;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
    flex-direction: column;
    gap: 4rem;
  }

  .form-left {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      width: 100%;
      align-items: center;
    }

    .top {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
  }

  .form-right {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    p {
      font-size: var(--md);
      font-weight: 500;
      color: var(--grey);
      line-height: 1.5;
    }

    h1 {
      font-size: var(--xl);
      font-weight: 700;
      color: var(--dark);
      span {
        background: var(--text-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @media screen and (max-width: 768px) {
        font-size: var(--lg);
        text-align: center;
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1.5rem;

      input,
      textarea {
        width: 100%;
        padding: 1rem 1.5rem;
        outline: none;
        border: 1px solid var(--dark-white);
        border-radius: 10px;
        background: var(--white);
        color: var(--dark);
        font-size: var(--sm);
        font-weight: 500;
        transition: all 0.3s ease-in-out;

        &::placeholder {
          font-size: var(--sm);
          font-weight: 500;
          color: var(--lgrey);
        }
      }

      textarea {
        height: 10rem;
        resize: none;

        &::placeholder {
          font-size: var(--sm);
          font-weight: 500;
          color: var(--lgrey);
        }
      }

      button {
        padding: 1rem 1.5rem;
        border: none;
        outline: none;
      }
    }
  }
`;

function ContactForm() {
  const [state, handleSubmit] = useForm("xjvnrznw"); // Replace with your Formspree ID

  if (state.succeeded) {
    return (
      <StyledContactForm id="contact">
        <div className="form-left">
          <div className="top" title="Contact Helix Now">
            <Image src={contactimage} alt="Contact Helix Now" />
          </div>
        </div>
        <div className="form-right">
          <p>
            Thank you for reaching out! We've received your inquiry and will
            respond within the next 24 hours.
          </p>
        </div>
      </StyledContactForm>
    );
  }

  return (
    <StyledContactForm id="contact">
      <div className="form-left">
        <div className="top" title="Contact Helix Now">
          <Image src={contactimage} alt="Contact Helix Now" />
        </div>
      </div>
      <div className="form-right">
        <h1>
          Your Voice <span>Matters</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            aria-required
            required
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            aria-required
            required
            type="email"
            name="_replyto"
            placeholder="Email"
          />
          <input
            aria-required
            required
            type="tel"
            name="phone"
            placeholder="Phone Number"
          />
          <input type="text" name="company" placeholder="Company Name" />
          <textarea name="message" placeholder="Message" required></textarea>
          <MainButton
            type="submit"
            disabled={state.submitting}
            text="Share Your Vision & Get Relief!"
          />
        </form>
      </div>
    </StyledContactForm>
  );
}

export default ContactForm;
