import React, { useState } from 'react';
import {
  FiBriefcase,
  FiLinkedin,
  FiMail,
  FiGithub,
  FiBook,
  FiCoffee,
} from 'react-icons/fi';

import {
  MarketName,
  Content,
  Background,
  Container,
  GlobalStyle,
  Greetings,
  Subtitle,
  AnimationContainer,
  ItemIcon,
  Title,
  Topic,
  Paragraph,
  ContactIcons,
  AboutContainer,
  SkillsContainer,
  PortfolioContainer,
  ContactContainer,
} from './styles';

import Toolbar from '../../components/Toobar';

const Home: React.FC = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(true);

  // useEffect(() => setMenuClicked(true), [menuClicked]);

  return (
    <>
      <GlobalStyle menuClicked={menuClicked} />
      <Toolbar />

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

      <Container id="about">
        <Title>About me</Title>
        <AboutContainer>
          <Topic>
            <FiBook size="16px" />
            Academic
            <Paragraph>
              I have Bachelor degree in Information Systems at Universidade
              Federal do Rio Grande do Norte (UFRN).
            </Paragraph>
            <Paragraph>
              In my time during graduation, I’ve made projects with TypeScript,
              Node and React for Web. Other projects were made with Python, Java
              and C. Also, I’ve made some research projects with MATLAB about
              gravimetry inversion,
            </Paragraph>
          </Topic>
          <Topic>
            <FiBriefcase size="16px" />
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
            <FiCoffee size="16px" />
            Hobbies
            <Paragraph>
              I like to jog, take ininterrupt travels, play videogames, listen
              to some music and find out what’s new about everything in the
              world.
            </Paragraph>
          </Topic>
        </AboutContainer>
      </Container>

      <Container id="skills">
        <Title>Skills</Title>
        <SkillsContainer>
          <Paragraph>
            I’m initially focused in developing web apps with the{' '}
            <strong>Node</strong>, <strong>React</strong> (including{' '}
            <strong>Next.js</strong>), <strong>Docker</strong> and{' '}
            <strong>AWS</strong>. However, I see no problem with using a
            different tool that I’ve no contact with so far, let’s say{' '}
            <strong>Azure</strong> for cloud, for example. I'm familiarized with
            <strong>SQL</strong> and <strong>NoSQL</strong> databases, querying,
            functions, procedures, ORMs for easy connection between applications
            and databases and <strong>RESTful</strong> APIs.
          </Paragraph>

          <Paragraph>
            I use primarly <strong>Linux</strong> distros, since it has so much
            helpful features for developing and most of servers use it too.
            Therefore, I’m familiar with shell scripts and pretty much of the
            <strong> Linux</strong> peculiarities. Also, I use{' '}
            <strong>Python</strong> for some specific scripts that allow me to
            automate specific tasks that I want to do from time to time and
            eventually <strong>MATLAB</strong> for some math scripts,
            processment and graphics. I’m also interested in non-conventional
            projects that creates its own marketshare just after existing.
          </Paragraph>
        </SkillsContainer>
      </Container>

      <Container id="portfolio">
        <Title>Portfolio</Title>
        <PortfolioContainer>
          <Paragraph>Work in progress...</Paragraph>
        </PortfolioContainer>
      </Container>

      <Container id="contact">
        <Title>Contact me</Title>
        <ContactContainer>
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
        </ContactContainer>
      </Container>
    </>
  );
};

export default Home;
