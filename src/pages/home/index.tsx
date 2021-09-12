import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
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
  MobileMenu,
  AnimationContainer,
} from './styles';

const Home: React.FC = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);

  // useEffect(() => setMenuClicked(true), [menuClicked]);

  return (
    <>
      <GlobalStyle />
      <ExploreContainer>
        <MobileMenu>
          <FiMenu size="5vh" onClick={() => setMenuClicked(true)} />
        </MobileMenu>
        <ExploreItem href="#about">About me</ExploreItem>
        <ExploreItem href="#portfolio">Portfolio</ExploreItem>
        <ExploreItem href="#skills">Skills</ExploreItem>
        <ExploreItem href="#contact">Contact me</ExploreItem>
      </ExploreContainer>

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

      {menuClicked ? alert('menu clicked!') : null}
    </>
  );
};

export default Home;
