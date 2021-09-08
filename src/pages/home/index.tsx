import React from 'react';
import {
  AuthorName,
  Content,
  Background,
  Container,
  GlobalStyle,
} from './styles';

const Home: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Background>
        <Content>
          <AuthorName>Kael Silva</AuthorName>
        </Content>
      </Background>
    </Container>
  </>
);

export default Home;
