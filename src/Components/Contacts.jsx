import React from "react";
import styled from "styled-components";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Contacts = ({ contacts }) => {
  return (
    <ContactsContainer ref={contacts}>
      <ContactsList>
        <ContactsListItem>
          <a href="https://github.com/madnol" target="_blank" rel="noreferrer">
            <AiOutlineGithub />
          </a>
        </ContactsListItem>
        <ContactsListItem>
          <a
            href="https://www.instagram.com/manuel.desole"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
        </ContactsListItem>
        <ContactsListItem>
          <a
            href="https://www.linkedin.com/in/manueldesole"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </ContactsListItem>
      </ContactsList>
    </ContactsContainer>
  );
};

const ContactsContainer = styled.div`
  display: flex;
  width: 100%;
`;
const ContactsList = styled.div`
  list-style-type: none;
  padding: 2em 0;
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-evenly;
`;
const ContactsListItem = styled.div`
  font-size: 2em;
  a {
    color: #e4003a;
  }
`;

export default Contacts;
