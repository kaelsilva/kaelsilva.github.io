import React, { useEffect } from 'react';
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';
import ReactGA from 'react-ga';
import {
  Container,
  Title,
  Paragraph,
  ContactContainer,
  ContactIcons,
  ItemIcon,
} from './styles';
import { setGA } from '../../config/setGA';

const Contact: React.FC = () => {
  useEffect(() => {
    setGA();
    ReactGA.pageview('/contact');
  });

  return (
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
};

export default Contact;
