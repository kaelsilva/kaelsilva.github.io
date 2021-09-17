import React, { useState } from 'react';
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiBriefcase,
  FiSettings,
  FiAtSign,
  FiLinkedin,
  FiMail,
  FiGithub,
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
  Topic,
  Paragraph,
  ContactIcons,
  MobileMenuItem,
  MobileMenuItemContainer,
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
        <ExploreItem href="#skills">
          <ItemIcon>
            <FiSettings />
          </ItemIcon>
          Skills
        </ExploreItem>
        <ExploreItem href="#portfolio">
          <ItemIcon>
            <FiBriefcase />
          </ItemIcon>
          Portfolio
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
              <MobileMenuItemContainer>
                <MobileMenuItem
                  onClick={() => {
                    setMenuClicked(!menuClicked);
                    window.location.href = '#';
                  }}
                >
                  <ItemIcon>
                    <FiHome />
                  </ItemIcon>
                  Home
                </MobileMenuItem>
                <MobileMenuItem
                  onClick={() => {
                    setMenuClicked(!menuClicked);
                    window.location.href = '#about';
                  }}
                >
                  <ItemIcon>
                    <FiInfo />
                  </ItemIcon>
                  About me
                </MobileMenuItem>
                <MobileMenuItem
                  onClick={() => {
                    setMenuClicked(!menuClicked);
                    window.location.href = '#skills';
                  }}
                >
                  <ItemIcon>
                    <FiSettings />
                  </ItemIcon>
                  Skills
                </MobileMenuItem>
                <MobileMenuItem
                  onClick={() => {
                    setMenuClicked(!menuClicked);
                    window.location.href = '#portfolio';
                  }}
                >
                  <ItemIcon>
                    <FiBriefcase />
                  </ItemIcon>
                  Portfolio
                </MobileMenuItem>
                <MobileMenuItem
                  onClick={() => {
                    setMenuClicked(!menuClicked);
                    window.location.href = '#contact';
                  }}
                >
                  <ItemIcon>
                    <FiAtSign />
                  </ItemIcon>
                  Contact me
                </MobileMenuItem>
              </MobileMenuItemContainer>
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
          <Topic>
            Academic
            <Paragraph>
              I have Bachelor degree in Information Systems at Universidade
              Federal do Rio Grande do Norte (UFRN).
            </Paragraph>
            <Paragraph>
              In my time during graduation, I’ve made projects with TypeScript,
              Node and React for Web. Other projects were made with Python, Java
              and C. Also, I’ve made some search projects with MATLAB about
              gravimetry inversion,
            </Paragraph>
          </Topic>
          <Topic>
            Work
            <Paragraph>
              I’m interested primarly with full-stack work of web applications.
              By the way, anything involving programming, product and service
              catches my attention.
            </Paragraph>
            <Paragraph>
              I’ve not yet accomplished any expressive work for the market. Yet,
              I’m pretty sure that soon enough it will be done, either working
              for someone or for my own personal projects.
            </Paragraph>
          </Topic>
          <Topic>
            Hobbies
            <Paragraph>
              I like to jog, take ininterrupt travels, play videogames, listen
              to some music and find out what’s new about everything in the
              world.
            </Paragraph>
          </Topic>
        </Content>
      </Container>

      <Container id="skills">
        <Content>
          <Paragraph>
            I’m initially focused in developing web apps with the Node, React
            (including Next.js), Docker and AWS. However, I see no problem with
            using a different tool that I’ve no contact with so far, let’s say
            Azure, for example.
          </Paragraph>

          <Paragraph>
            I use primarly Linux distros, since it has so much helpful features
            for developing and most of servers use it too. Therefore, I’m
            familiar with shell scripts and pretty much of the Linux
            peculiarities.
          </Paragraph>

          <Paragraph>
            Also, I use Python for some specific scripts that allow me to
            automate specific tasks that I want to do from time to time and
            eventually MATLAB for some math. I’m also interested in
            non-conventional projects that creates its own marketshare just
            after existing.
          </Paragraph>
        </Content>

        <DisplayContainer>
          <Title>Skills</Title>
          <Background />
        </DisplayContainer>
      </Container>

      <Container id="portfolio">
        <DisplayContainer>
          <Title>Portfolio</Title>
          <Background />
        </DisplayContainer>

        <Content>
          <Paragraph>Work in progress...</Paragraph>
        </Content>
      </Container>

      <Container id="contact">
        <Content>
          <Paragraph>Feel free to contact me.</Paragraph>
          <Paragraph>I will answer as soon as possible.</Paragraph>
          <ContactIcons>
            <ItemIcon
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/kaelsilva/?locale=en_US',
                )
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
        </Content>

        <DisplayContainer>
          <Title>Contact me</Title>
          <Background />
        </DisplayContainer>
      </Container>
    </>
  );
};

export default Home;
