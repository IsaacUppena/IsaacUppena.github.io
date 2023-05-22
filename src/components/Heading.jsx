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
  /* padding: 10px 20px; */
`;

const Title = styled.h2`
  color: var(--text-primary);
  font-size: 1rem;
`;

export default Heading;
