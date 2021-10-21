import React from 'react';
import { FiBook, FiBriefcase, FiCoffee } from 'react-icons/fi';
import { Container, Title, AboutContainer, Topic, Paragraph } from './styles';

const About: React.FC = () => (
  <Container id="about">
    <Title>About me</Title>
    <AboutContainer>
      <Topic>
        <FiBook size="16px" />
        Academic
        <Paragraph>
          I have Bachelor degree in Information Systems at Universidade Federal
          do Rio Grande do Norte (UFRN).
        </Paragraph>
        <Paragraph>
          In my time during graduation, I’ve made projects with TypeScript, Node
          and React for Web. Other projects were made with Python, Java and C.
          Also, I’ve made some research projects with MATLAB about gravimetry
          inversion,
        </Paragraph>
      </Topic>
      <Topic>
        <FiBriefcase size="16px" />
        Work
        <Paragraph>
          I’m interested primarly with full-stack work of web applications. By
          the way, anything involving programming, product and service catches
          my attention.
        </Paragraph>
        <Paragraph>
          I’ve not yet accomplished any expressive work for the market. Yet, I’m
          pretty sure that soon enough it will be done, either working for
          someone or for my own personal projects.
        </Paragraph>
      </Topic>
      <Topic>
        <FiCoffee size="16px" />
        Hobbies
        <Paragraph>
          I like to jog, take ininterrupt travels, play videogames, listen to
          some music and find out what’s new about everything in the world.
        </Paragraph>
      </Topic>
    </AboutContainer>
  </Container>
);

export default About;
