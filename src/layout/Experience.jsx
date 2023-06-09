import React from "react";
import Section from "../components/Section";
import experience from "../constants/experience";
import { styled } from "styled-components";
import Heading from "../components/Heading";

function Experience() {
  return (
    <ExperienceContainer id="experience">
      <Heading>Experience</Heading>
      {experience.map((job, index) => {
        const {
          timeRange,
          title,
          company,
          summary,
          frontend,
          backend,
          cloud,
          cicd,
          link,
        } = job;
        const left = <TimeRange>{timeRange.toUpperCase()}</TimeRange>;
        return (
          <Section
            key={index}
            leftComponent={left}
            title={title + " • " + company}
            summary={summary}
            frontend={frontend}
            backend={backend}
            cloud={cloud}
            cicd={cicd}
            link={link}
          />
        );
      })}
    </ExperienceContainer>
  );
}

const TimeRange = styled.p`
  color: var(--text-tertiary);
  font-size: 0.8rem;
  font-weight: 600;
`;

const ExperienceContainer = styled.section`
  margin-bottom: 50px;
  scroll-margin-top: 100px;
`;

export default Experience;
