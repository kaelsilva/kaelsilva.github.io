import React from 'react';
import {
  MarketName,
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
  AnimationContainer,
} from './styles';

const Home: React.FC = () => (
  <>
    <GlobalStyle />

    <Container>
      <Content>
        <AnimationContainer>
          <Greetings>Hello! My name is</Greetings>
          <MarketName>Kael Silva</MarketName>
          <Subtitle>Full-stack Developer</Subtitle>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  </>
);

export default Home;
