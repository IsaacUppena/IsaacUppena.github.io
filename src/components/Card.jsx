import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCloud,
  faGears,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";

function Icon({ name }) {
  const iconMap = {
    frontend: faCode,
    backend: faGears,
    cloud: faCloud,
    cicd: faInfinity,
  };

  return <FAIcon icon={iconMap[name]} />;
}

function Card(props) {
  const { className, title, description, icon, tags } = props;

  return (
    <CardContainer className={className}>
      <TitleContainer>
        <Title>{title}</Title>
        <Icon name={className} />
      </TitleContainer>
      <Description>{description}</Description>
      <Footer>
        <Divider />
        <Tags>{tags.join(" • ")}</Tags>
      </Footer>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  border-radius: 15px;
  background-color: var(--container);
  padding: 25px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow ease-in 0.2s;
  @media (min-width: 800px) {
    width: 45%;
    margin-bottom: 30px;
  }
  &.frontend {
    background: linear-gradient(45deg, #f6d365 0%, #f8e09d 100%);
    @media (min-width: 800px) {
      &:hover {
        box-shadow: #f6d365 0px 5px 25px;
      }
    }
  }
  &.backend {
    background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
    @media (min-width: 800px) {
      &:hover {
        box-shadow: #4facfe 0px 5px 25px;
      }
    }
  }
  &.cloud {
    background: linear-gradient(45deg, #ff61d2 0%, #f0b0d0 100%);
    @media (min-width: 800px) {
      &:hover {
        box-shadow: #ff61d2 0px 5px 25px;
      }
    }
  }
  &.cicd {
    background: linear-gradient(45deg, #43e97b 0%, #38f9d7 100%);
    @media (min-width: 800px) {
      &:hover {
        box-shadow: #43e97b 0px 5px 25px;
      }
    }
  }
  cursor: default;
`;

const FAIcon = styled(FontAwesomeIcon)`
  color: var(--background);
  width: 40px;
  height: 40px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  color: var(--background);
  font-size: 1.5rem;
`;

const Description = styled.p`
  color: var(--background);
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 1.1rem;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Divider = styled.hr`
  background-color: #00000066;
  margin-bottom: 15px;
  height: 1px;
  border: none;
`;

const Tags = styled.p`
  color: var(--background);
  font-weight: 500;
  font-size: 0.9rem;
`;

export default Card;
