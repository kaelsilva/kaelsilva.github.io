import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: stretch;
`;

export const AuthorName = styled.div`
  color: #f205cb;
  font-size: 12vh;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Content = styled.div`
  background-color: #0c0826;
  width: 768px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
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
