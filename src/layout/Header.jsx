import React from "react";
import { styled } from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        <Name>Isaac Uppena</Name>
        <Title>Software Engineer</Title>
        <Description>This is a description</Description>
      </HeaderTextContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 50%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 100px 0;
  /* background-color: yellow; */
`;

const HeaderTextContainer = styled.div`
  width: 50%;
`;

const Name = styled.h1`
  font-size: 3rem;
  color: var(--text-primary);
`;

const Title = styled.h2`
  color: var(--text-secondary);
`;

const Description = styled.p`
  color: var(--text-tertiary);
`;

export default Header;
