import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { shade } from 'polished';
import DisplayImage from '../../assets/skull-no-background.png';

export const MobileMenu = styled.div`
  display: none;
  visibility: hidden;

  @media only screen and (max-width: 700px) {
    display: block;
    visibility: visible;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  background-color: #0c0826;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 2s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }
  h1 {
    margin-bottom: 24px;
  }
  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }
  }
`;

export const MarketName = styled.div`
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
  flex: 1;
  background: #f205b3 url(${DisplayImage}) no-repeat center;
  background-size: cover;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const ExploreContainer = styled.nav`
  position: absolute;
  background-color: #0388a6;
  font-family: 'Roboto', sans-serif;
  color: #fff;

  display: flex;
  flex: 1;
  flex-direction: row;
  height: 5vh;
  width: 100vw;
  justify-content: space-around;
  /* padding: 40px 40px 0px 10px; */

  @media only screen and (max-width: 700px) {
    /* visibility: hidden; */
    height: 7vh;
    align-items: center;
  }
`;

export const ExploreItem = styled.a`
  list-style-type: none;
  font-size: 20px;

  display: flex;
  flex: 1;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  border-color: #fff;
  border-width: 2px;
  border-style: groove;

  @media only screen and (max-width: 700px) {
    visibility: hidden;
  }

  &:hover {
    cursor: pointer;
    background-color: ${shade(0.2, '#0388a6')};
  }
`;

export const ImageDisplay = styled.div`
  flex: 1;
  background: url(${DisplayImage}) no-repeat center;
  background-size: cover;
  visibility: visible;
  position: fixed;

  margin-left: 10%;
  margin-top: 5%;
  height: 500px;
  width: 500px;

  @media only screen and (max-width: 768px) {
    visibility: hidden;
  }
`;
