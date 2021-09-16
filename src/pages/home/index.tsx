import React, { useState } from 'react';
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiBriefcase,
  FiSettings,
  FiAtSign,
} from 'react-icons/fi';

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
  MenuContainer,
  MenuIconContainer,
  ItemIcon,
  DisplayContainer,
  Title,
} from './styles';

const Home: React.FC = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(true);

  // useEffect(() => setMenuClicked(true), [menuClicked]);

  return (
    <>
      <GlobalStyle menuClicked={menuClicked} />
      <ExploreContainer>
        <MobileMenu>
          <FiMenu size="5vh" onClick={() => setMenuClicked(!menuClicked)} />
        </MobileMenu>
        <ExploreItem href="#">
          <ItemIcon>
            <FiHome />
          </ItemIcon>
          Home
        </ExploreItem>
        <ExploreItem href="#about">
          <ItemIcon>
            <FiInfo />
          </ItemIcon>
          About me
        </ExploreItem>
        <ExploreItem href="#portfolio">
          <ItemIcon>
            <FiBriefcase />
          </ItemIcon>
          Portfolio
        </ExploreItem>
        <ExploreItem href="#skills">
          <ItemIcon>
            <FiSettings />
          </ItemIcon>
          Skills
        </ExploreItem>
        <ExploreItem href="#contact">
          <ItemIcon>
            <FiAtSign />
          </ItemIcon>
          Contact me
        </ExploreItem>
      </ExploreContainer>

      <Container>
        <Content>
          <AnimationContainer>
            <Greetings>Hello! My name is</Greetings>
            <MarketName>Kael Silva</MarketName>
            <Subtitle>Full-stack Developer</Subtitle>
          </AnimationContainer>
          {!menuClicked && (
            <MenuContainer>
              <MenuIconContainer>
                <FiX size="5vh" onClick={() => setMenuClicked(!menuClicked)} />
              </MenuIconContainer>
            </MenuContainer>
          )}
        </Content>

        <Background />
      </Container>

      <Container id="about">
        <DisplayContainer>
          <Title>About me</Title>
          <Background />
        </DisplayContainer>
        <Content>
          <Greetings>Hello! My name is</Greetings>
        </Content>
      </Container>

      <Container />
    </>
  );
};

export default Home;
