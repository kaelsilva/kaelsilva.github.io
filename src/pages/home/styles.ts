import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin: 0;
`;

export const Content = styled.div`
  background-color: #0c0826;
  width: 768px;
  margin: 0;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AuthorName = styled.div`
  color: #f205cb;
  font-size: 64px;
  font-family: 'Audiowide', 'Roboto', sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Greetings = styled.div`
  color: #0388a6;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-right: 25%;
`;

export const Subtitle = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #bf046b;
  letter-spacing: 5px;

  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin-right: 25%;
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #f205b3;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;
