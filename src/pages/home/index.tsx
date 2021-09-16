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
  UnorderedList,
  ListItem,
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
          <UnorderedList>
            Academic
            <ListItem>
              I have Bachelor degree in Information Systems at Universidade
              Federal do Rio Grande do Norte (UFRN).
            </ListItem>
            <ListItem>
              In my time during graduation, I’ve made projects with TypeScript,
              Node and React for Web. Other projects were made with Python, Java
              and C. Also, I’ve made some search projects with MATLAB about
              gravimetry inversion,
            </ListItem>
          </UnorderedList>
          <UnorderedList>
            Work
            <ListItem>
              I’m interested primarly with full-stack work of web applications.
              By the way, anything involving programming, product and service
              catches my attention.
            </ListItem>
            <ListItem>
              I’ve not yet accomplished any expressive work for the market. Yet,
              I’m pretty sure that soon enough it will be done, either working
              for someone or for my own personal projects.
            </ListItem>
          </UnorderedList>
          <UnorderedList>
            Hobbies
            <ListItem>
              I like to jog, take ininterrupt travels, play videogames, listen
              to some music and find out what’s new about everything in the
              world.
            </ListItem>
          </UnorderedList>
        </Content>
      </Container>

      <Container />
    </>
  );
};

export default Home;
