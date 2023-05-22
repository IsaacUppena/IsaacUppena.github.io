import React from "react";
import { styled } from "styled-components";

function Chip(props) {
  const { title } = props;
  console.log(title);
  return (
    <ChipContainer>
      <ChipText>{title}</ChipText>
    </ChipContainer>
  );
}

const ChipContainer = styled.div`
  padding: 8px;
  border-radius: 15px;
  margin-right: 5px;
  background-color: var(--primary-dark);
`;

const ChipText = styled.p`
  color: var(--primary-light);
  font-size: 0.7rem;
  font-weight: 500;
  margin: 0;
`;

function Section(props) {
  const { leftComponent, title, summary, tags } = props;

  console.log(tags);

  return (
    <SectionContainer>
      <LeftColumn>{leftComponent}</LeftColumn>
      <RightColumn>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <TagsContainer>
          {tags.map((tag, index) => (
            <Chip key={index} title={tag} />
          ))}
        </TagsContainer>
      </RightColumn>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  display: flex;
  border-radius: 15px;
  transition: background-color ease-in 0.1s;
  padding: 20px;
  width: 600px;
  &:hover {
    cursor: pointer;
    background-color: var(--container);
  }
`;

const LeftColumn = styled.div`
  width: 30%;
`;

const RightColumn = styled.div``;

const Title = styled.h3`
  color: var(--text-secondary);
`;

const Summary = styled.p`
  color: var(--text-tertiary);
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export default Section;
