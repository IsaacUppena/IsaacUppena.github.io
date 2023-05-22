import React from "react";
import { styled } from "styled-components";
import Navigation from "./Navigation";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        <Name>Isaac Uppena</Name>
        <Title>Software Engineer</Title>
        <Description>
          I build functional, maintainable, and seamless digital experiences for
          the web.
        </Description>
      </HeaderTextContainer>
      <Navigation />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    min-width: 30%;
    height: 100vh;
    padding: 100px 0;
    margin-right: 40px;
  }
`;

const HeaderTextContainer = styled.div`
  /* width: 600px; */
  /* padding: 20px; */
`;

const Name = styled.h1`
  font-size: 3rem;
  color: var(--text-primary);
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: var(--text-secondary);
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: var(--text-tertiary);
  margin-bottom: 80px;
  width: 70%;
`;

export default Header;
