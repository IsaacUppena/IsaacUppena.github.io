import React from "react";
import { styled } from "styled-components";
import Heading from "../components/Heading";

function About() {
  return (
    <AboutContainer id="about">
      <Heading>About</Heading>
      <ParagraphContainer>
        <Paragraph>
          I work as a software engineer at ACT. In this time I've worked with
          various programming languages, frameworks, and databases.
        </Paragraph>
      </ParagraphContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  margin-bottom: 50px;
  width: 600px;
`;

const ParagraphContainer = styled.p`
  padding: 20px;
`;

const Paragraph = styled.p`
  color: var(--text-secondary);
`;

export default About;
