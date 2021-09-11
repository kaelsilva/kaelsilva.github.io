import React from 'react';
import {
  AuthorName,
  Content,
  Background,
  Container,
  GlobalStyle,
  Greetings,
  Subtitle,
  ExploreContainer,
  ExploreItem,
  ContactButton,
  ImageDisplay,
} from './styles';

const Home: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Background>
        <Content>
          <Greetings>Hello! My name is</Greetings>
          <AuthorName>KAEL SILVA</AuthorName>
          <Subtitle>Full-stack Developer</Subtitle>
        </Content>
        <ExploreContainer>
          <ExploreItem>About me</ExploreItem>
          <ExploreItem>Skills</ExploreItem>
          <ExploreItem>Portfolio</ExploreItem>
          <ContactButton>
            <ExploreItem>Contact me</ExploreItem>
          </ContactButton>
          <ImageDisplay />
        </ExploreContainer>
      </Background>
    </Container>
  </>
);

export default Home;
