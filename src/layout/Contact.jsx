import React from "react";
import { styled } from "styled-components";
import Heading from "../components/Heading";

function Contact() {
  return (
    <ContactContainer>
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
          <SubmitButton>SUBMIT</SubmitButton>
        </ButtonContainer>
      </ContactForm>
    </ContactContainer>
  );
}

const ContactContainer = styled.section``;

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
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--primary-dark);
  color: var(--primary-light);
  font-size: 0.9rem;
  font-weight: 600;
  width: 100px;
  cursor: pointer;
`;

export default Contact;
