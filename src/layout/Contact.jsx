import React from "react";
import { styled } from "styled-components";
import Heading from "../components/Heading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <ContactContainer id="contact">
      <Heading>Contact Me</Heading>
      <ContactForm action="https://formspree.io/f/mrgvvebb" method="POST">
        <TwoFieldContainer>
          <HalfField>
            <Label htmlFor="fname">Full Name *</Label>
            <input id="fname" name="fname" type="text" required />
          </HalfField>
          <HalfField>
            <Label htmlFor="company">Company</Label>
            <input id="company" name="company" type="text" />
          </HalfField>
        </TwoFieldContainer>
        <Label htmlFor="email">Email *</Label>
        <input id="email" name="email" type="text" required />
        <Label htmlFor="message">Message *</Label>
        <MessageField id="message" name="message" type="text" required />
        <ButtonContainer>
          <SendButton>
            Send <SendIcon icon={faChevronRight} />
          </SendButton>
        </ButtonContainer>
      </ContactForm>
    </ContactContainer>
  );
}

const ContactContainer = styled.section`
  scroll-margin-top: 100px;
  @media (min-width: 800px) {
    margin-bottom: 800px;
  }
`;

const ContactForm = styled.form`
  @media (min-width: 800px) {
    margin-left: 20px;
  }
`;

const Label = styled.label`
  color: var(--text-secondary);
  display: block;
  margin-top: 20px;
  margin-bottom: 8px;
`;

const TwoFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HalfField = styled.div`
  width: 48%;
`;

const MessageField = styled.textarea`
  height: 150px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const SendButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--text-primary);
  color: var(--background);
  font-size: 1.1rem;
  font-weight: 700;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SendIcon = styled(FontAwesomeIcon)`
  color: var(--background);
  width: 15px;
  height: 15px;
  margin-left: 5px;
`;

export default Contact;
