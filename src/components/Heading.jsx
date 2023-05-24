import React from "react";
import { styled } from "styled-components";

function Heading({ children }) {
  return (
    <HeadingContainer>
      <Title>{children.toUpperCase()}</Title>
    </HeadingContainer>
  );
}

const HeadingContainer = styled.div`
  @media (min-width: 800px) {
    padding: 20px;
    position: static;
  }
  position: sticky;
  top: 0;
  padding: 10px;
  background-color: var(--background);
`;

const Title = styled.h2`
  color: var(--text-primary);
  font-size: 1.2rem;
`;

export default Heading;
