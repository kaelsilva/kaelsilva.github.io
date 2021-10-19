import React from 'react';
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';
import {
  Container,
  Title,
  Paragraph,
  ContactContainer,
  ContactIcons,
  ItemIcon,
} from './styles';

const Contact: React.FC = () => (
  <Container id="contact">
    <Title>Contact me</Title>
    <ContactContainer>
      <Paragraph>Feel free to contact me.</Paragraph>
      <Paragraph>I will answer as soon as possible.</Paragraph>
      <ContactIcons>
        <ItemIcon
          onClick={() =>
            window.open('https://www.linkedin.com/in/kaelsilva/?locale=en_US')
          }
        >
          <FiLinkedin size="28px" color="#fff" />
        </ItemIcon>
        <ItemIcon
          onClick={() =>
            (window.location.href = 'mailto:kaelsilvaaraujo@gmail.com')
          }
        >
          <FiMail size="28px" color="#fff" />
        </ItemIcon>
        <ItemIcon
          onClick={() => window.open('https://www.github.com/kaelsilva')}
        >
          <FiGithub size="28px" color="#fff" />
        </ItemIcon>
      </ContactIcons>
    </ContactContainer>
  </Container>
);

export default Contact;
