import React from "react";
import { styled } from "styled-components";

function NavLink({ active, title, link }) {
  return (
    <LinkContainer>
      <Link className={active ? "active" : "inactive"} href={link}>
        {title.toUpperCase()}
      </Link>
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  margin-bottom: 20px;
`;

const Link = styled.a`
  color: var(--text-tertiary);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin: 10px 18px;
  transition: color 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  &.active,
  &:hover {
    color: var(--text-primary);
  }
  &::before {
    background-color: var(--text-tertiary);
    content: "";
    height: 0.1em;
    width: 2em;
    left: -1em;
    position: relative;
    display: inline-block;
    top: -0.2em;
    color: var(--text-primary);
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }
  &.active::before,
  &:hover::before {
    background-color: var(--text-primary);
    width: 4em;
  }
`;

function Navigation() {
  return (
    <NavigationContainer>
      <NavLink title="About" link="#about" />
      <NavLink title="Experience" link="#experience" />
      <NavLink title="Contact" link="#contact" />
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  width: 70%;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export default Navigation;
