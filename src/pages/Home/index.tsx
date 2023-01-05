import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {
  AnimationContainer,
  Container,
  Content,
  MarketName,
  Subtitle,
  Background,
  Greetings,
} from './styles';

import { setGA } from '../../config/setGA';

const Home: React.FC = () => {
  useEffect(() => {
    setGA();
    ReactGA.pageview('/');
  });

  return (
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
};

export default Home;
