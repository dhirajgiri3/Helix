import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styled from "styled-components";

const StyledFaq = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 7.5rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
    flex-direction: column;
  }

  .faqleft {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 100%;
    }

    h1 {
      font-size: var(--xl);
      font-weight: 700;
      color: var(--dark);
    }

    h3 {
      font-size: var(--norm);
      font-weight: 400;
      color: var(--grey);
    }
  }

  .faqright {
    width: 60%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;
  box-shadow: 0 0 10px transparent;
  border: none;
  border-bottom: 1px dashed var(--dark);

  &.Mui-expanded {
    box-shadow: none;
    border: none;
  }

  /* Styles for the AccordionSummary */
  .MuiAccordionSummary-root {
    min-height: 3rem; /* Ensure consistent height */
    box-shadow: none;
    border: none;

    /* Customize expand icon when expanded */
    &.Mui-expanded {
      min-height: 3rem;
      box-shadow: none;
      border: none;
    }
  }

  .MuiAccordionSummary-content {
    margin: 2rem 0; /* Adjust internal content spacing */
    box-shadow: none;
    border: none;
  }
`;

function Faq() {
  return (
    <StyledFaq>
      <div className="faqleft">
        <h1>FAQ</h1>
        <h3>Answer</h3>
      </div>
      <div className="faqright">
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              How does Helix differ from other logistics software?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Helix prioritizes customization and client collaboration. We don't
              offer generic solutions. Instead, we analyze your unique
              workflows, pain points, and goals to build software that gives you
              a true competitive edge.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Is Helix suitable for my size of business?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We serve shipping aggregators of all sizes, from startups to
              established enterprises. Our solutions are scalable, designed to
              grow alongside your business and adapt to your evolving needs.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              Can Helix integrate with my existing systems?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes! Integration is a core focus for us. Helix can seamlessly
              connect with popular courier platforms, accounting tools, and
              CRMs, creating a streamlined and efficient operational flow.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              How quickly can I get up and running with Helix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our implementation process is designed for speed and efficiency.
              Depending on the project scope, most clients launch their custom
              Helix solution within 15 days. We provide comprehensive onboarding
              and training to ensure a smooth transition.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              Which types of NGOs are eligible for your free services?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We're especially passionate about supporting registered
              non-profits focused on education, healthcare, child care, and
              older adult care. Our goal is to empower organizations making a
              positive impact within these vital sectors.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
      </div>
    </StyledFaq>
  );
}

export default Faq;
