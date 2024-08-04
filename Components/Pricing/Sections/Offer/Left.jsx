import React from "react";
import { Button } from "@/Sections/ui/moving-border";
import styled from "styled-components";
import Getstarted from "../Buttons/Getstarted";
import Link from "next/link";

const OfferLeftStyle = styled.div`
  width: 100%;
  height: calc(90vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  background: var(--grey);
  padding: 2rem;
  color: var(--white);

  @media screen and (max-width: 767px) {
    height: 100%;
  }

  .lable {
    border-radius: 1rem;
    .text {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 0.5rem;
      .offer-image {
        width: 1.5rem;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .subheading {
    width: 100%;

    h2 {
      font-size: var(--lg);
      font-weight: 700;
    }
  }

  .desc {
    width: 100%;

    p {
      font-size: var(--sm);
      color: var(--dark-white);
    }
  }
`;

function Left() {
  return (
    <OfferLeftStyle>
      <div className="lable">
        <Button>
          <div className="text">
            <img
              className="offer-image"
              src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/offer-icon.svg?alt=media&token=69f1b53b-b40f-4e07-a27e-bf3a277d3470"
              alt="Helix"
            />
            Limited Time Offer
          </div>
        </Button>
      </div>
      <div className="subheading">
        <h2>Reach Your Full Potential with a Free Trial!</h2>
      </div>
      <div className="desc">
        <p>
          Experience the full force of Helix with no strings attached. Test our
          highly-rated shipping aggregator software free for one month. Discover
          how Helix's advanced features can automate your shipping processes,
          save money, and boost delivery efficiency. If you're in the courier
          business and looking to grow, this is the golden opportunity you
          cannot afford to lose! Get started with the Helix free trial now!
        </p>
      </div>
      <div className="offer-cta">
        <Link href="/contact">
          <Getstarted text={"Try Free Trial"} />
        </Link>
      </div>
    </OfferLeftStyle>
  );
}

export default Left;
