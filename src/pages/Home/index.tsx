import React from 'react';
import {
  AnimationContainer,
  Container,
  Content,
  MarketName,
  Subtitle,
  Background,
  Greetings,
} from './styles';

const Home: React.FC = () => (
  <Container id="home">
    <Content>
      <AnimationContainer>
        <Greetings>Hello! My name is</Greetings>
        <MarketName>Kael Silva</MarketName>
        <Subtitle>Full-stack Developer</Subtitle>
      </AnimationContainer>
    </Content>

    <Background />
  </Container>
);

export default Home;
