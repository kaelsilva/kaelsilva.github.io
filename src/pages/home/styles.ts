import styled, { createGlobalStyle, css } from 'styled-components';
import { shade } from 'polished';
import DisplayImage from '../../assets/skull-no-background.png';

import AppearFromLeft from '../../components/animations/AppearFromLeft';

interface Menu {
  menuClicked: boolean;
}

export const UnorderedList = styled.section`
  margin: 1vh 0 0 3vw;
  padding: 0;
  color: #f205cb;
  list-style: none;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
`;

export const ListItem = styled.p`
  margin: 0.5vh 0 0 0;
  padding: 0;
  color: #0388a6;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
`;

export const DisplayContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f205b3;
`;

export const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 56px;
  color: #0c0826;
  align-self: center;
  margin-top: 8vh;
  flex: content;

  @media only screen and (max-width: 700px) {
    text-indent: -9999px;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  visibility: hidden;

  @media only screen and (max-width: 700px) {
    display: flex;
    flex: 1;
    width: 100vw;
    flex-direction: row;
    position: fixed;
    visibility: visible;
    padding-left: 8vw;
  }
`;

export const MenuContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  background-color: #0388a6;

  animation: ${AppearFromLeft} 0.5s;
`;

export const MenuIconContainer = styled.div`
  display: flex;
  flex: 1;
  height: 8vh;

  color: #fff;
  align-items: center;
  padding-right: 2vw;
  flex-direction: row;
  justify-content: flex-end;
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

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${AppearFromLeft} 2s;
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

export const GlobalStyle = createGlobalStyle<Menu>`
  body {
    margin: 0;
    padding: 0;
    text-decoration: none;

    ${props =>
      !props.menuClicked &&
      css`
        overflow: hidden;
      `}
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  
`;

export const ExploreContainer = styled.nav`
  position: fixed;
  background-color: #0388a6;
  font-family: 'Roboto', sans-serif;
  color: #fff;

  display: flex;
  flex: 1;
  flex-direction: row;
  height: 8vh;
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
  flex-direction: row;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  /* border-color: #fff;
  border-width: 2px;
  border-style: groove; */

  @media only screen and (max-width: 700px) {
    visibility: hidden;
  }

  &:hover {
    cursor: pointer;
    background-color: ${shade(0.2, '#0388a6')};
  }
`;

export const ItemIcon = styled.div`
  margin-right: 1vw;
`;
