import React from "react";
import { styled } from "styled-components";

function Chip(props) {
  const { title, type } = props;
  return (
    <ChipContainer className={type}>
      <ChipText className={type}>{title}</ChipText>
    </ChipContainer>
  );
}

const ChipContainer = styled.div`
  padding: 7px 10px;
  border-radius: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  background-color: var(--primary-dark);
  &.frontend {
    background-color: #f6d36533;
  }
  &.backend {
    background-color: #4facfe33;
  }
  &.cloud {
    background-color: #ff61d233;
  }
  &.cicd {
    background-color: #43e97b33;
  }
`;

const ChipText = styled.p`
  color: var(--primary-light);
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
  &.frontend {
    color: #f6d365;
  }
  &.backend {
    color: #4facfe;
  }
  &.cloud {
    color: #ff61d2;
  }
  &.cicd {
    color: #43e97b;
  }
`;

function Section(props) {
  const {
    leftComponent,
    title,
    summary,
    // tags,
    frontend,
    backend,
    cloud,
    cicd,
    link,
  } = props;

  return (
    <SectionContainer href={link} target="_blank">
      <LeftColumn>{leftComponent}</LeftColumn>
      <RightColumn>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <TagsContainer>
          {frontend.map((tag, index) => (
            <Chip key={index} title={tag} type="frontend" />
          ))}
          {backend.map((tag, index) => (
            <Chip key={index} title={tag} type="backend" />
          ))}
          {cloud.map((tag, index) => (
            <Chip key={index} title={tag} type="cloud" />
          ))}
          {cicd.map((tag, index) => (
            <Chip key={index} title={tag} type="cicd" />
          ))}
        </TagsContainer>
      </RightColumn>
    </SectionContainer>
  );
}

const SectionContainer = styled.a`
  @media (min-width: 800px) {
    display: flex;
    &:hover {
      cursor: pointer;
      background-color: var(--container);
    }
    border-radius: 15px;
    padding: 20px;
  }
  transition: background-color ease-in 0.1s;
  text-decoration: none;
`;

const LeftColumn = styled.div`
  @media (min-width: 800px) {
    width: 20%;
    margin-bottom: none;
  }
  margin-bottom: 10px;
`;

const RightColumn = styled.div`
  @media (min-width: 800px) {
    width: 80%;
    margin: 0;
  }
  margin-bottom: 20px;
`;

const Title = styled.h3`
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const Summary = styled.p`
  color: var(--text-tertiary);
  margin-bottom: 15px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 80%;
`;

export default Section;
