import React from "react";
import { styled } from "styled-components";
import Heading from "../components/Heading";
import Card from "../components/Card";
import cardData from "../constants/cards";

function About() {
  return (
    <AboutContainer id="about">
      <Heading>About</Heading>
      <ParagraphContainer>
        <Paragraph>
          I've been passionate about developing software since I took my first
          highschool programming class. Nearly 10 years later, I've settled
          comfortably into working with what I consider to be the most dynamic,
          exciting, and unique software today: Web Applications.
        </Paragraph>
      </ParagraphContainer>
      <CardContainer>
        {cardData.map((data, index) => {
          return <Card {...data} key={index} />;
        })}
      </CardContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  margin-bottom: 50px;
`;

const ParagraphContainer = styled.p`
  @media (min-width: 800px) {
    padding-left: 20px;
  }
  margin-top: 10px;
  padding-bottom: 0;
`;

const Paragraph = styled.p`
  color: var(--text-secondary);
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default About;
