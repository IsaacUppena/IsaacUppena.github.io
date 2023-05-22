import React from "react";
import { styled } from "styled-components";
import Heading from "../components/Heading";

function Contact() {
  return (
    <ContactContainer>
      <Heading>Contact Me</Heading>
      <ContactForm>
        <NamesContainers>
          <NameContainer>
            <Label htmlFor="fname">First Name</Label>
            <input id="fname" name="fname" type="text" />
          </NameContainer>
          <NameContainer>
            <Label htmlFor="lname">Last Name</Label>
            <input id="lname" name="lname" type="text" />
          </NameContainer>
        </NamesContainers>
        <Label htmlFor="email">Email</Label>
        <input id="email" name="email" type="text" />
        <Label htmlFor="message">Message</Label>
        <MessageField id="message" name="message" type="text" />
        <SubmitButton>Send</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
}

const ContactContainer = styled.section`
  width: 600px;
`;

const ContactForm = styled.form`
  padding: 0 20px;
`;

const Label = styled.label`
  color: var(--text-secondary);
  display: block;
  margin-top: 20px;
  margin-bottom: 8px;
`;

const NamesContainers = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameContainer = styled.div`
  width: 48%;
`;

const MessageField = styled.textarea`
  height: 150px;
  resize: none;
`;

const SubmitButton = styled.button``;

export default Contact;
