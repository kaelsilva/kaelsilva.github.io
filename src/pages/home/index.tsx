import React from 'react';
import {
  AuthorName,
  Content,
  Background,
  Container,
  GlobalStyle,
  Greetings,
  Subtitle,
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
      </Background>
    </Container>
  </>
);

export default Home;
