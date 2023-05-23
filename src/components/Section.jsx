import React from "react";
import { styled } from "styled-components";

function Chip(props) {
  const { title } = props;
  return (
    <ChipContainer>
      <ChipText>{title}</ChipText>
    </ChipContainer>
  );
}

const ChipContainer = styled.div`
  padding: 5px 8px;
  border-radius: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  background-color: var(--primary-dark);
`;

const ChipText = styled.p`
  color: var(--primary-light);
  font-size: 0.7rem;
  font-weight: 500;
  margin: 0;
`;

function Section(props) {
  const { leftComponent, title, summary, tags, link } = props;

  return (
    <SectionContainer href={link} target="_blank">
      {/* <Link href={link} target="_blank"> */}
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
      {/* </Link> */}
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
    margin: none;
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
