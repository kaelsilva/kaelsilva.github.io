import styled, { createGlobalStyle, css } from 'styled-components';
// import DisplayImage from '../../assets/skull-no-background.png';
// import DisplayImage from '../../assets/IMG_20210923_152145.png';

import AppearFromLeft from '../../components/animations/AppearFromLeft';

const DisplayImage = 'https://i.imgur.com/Rq8sQlo.png';

interface Menu {
  menuClicked: boolean;
}

export const ContactContainer = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const PortfolioContainer = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const SkillsContainer = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-left: 5vw;
`;

export const AboutContainer = styled.article`
  display: flex;
`;

export const Topic = styled.section`
  margin: 1vh 3vw 0 3vw;
  padding: 0;
  color: #f205cb;
  list-style: none;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  min-width: 26vw;
`;

export const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  color: #f205cb;
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
  width: 100vw;
  flex-basis: 100%;
`;

export const Paragraph = styled.p`
  color: #0388a6;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  ${SkillsContainer} & {
    margin-top: 5vh;
    margin: 0.5vh 0 0 0;
    padding: 0 5vw 0 0;
    width: 30vw;
  }
`;

export const ContactIcons = styled.section`
  display: flex;
  margin-top: 10vh;
  justify-content: space-between;
  width: 30vh;
`;

export const ItemIcon = styled.div`
  margin-right: 1vw;
  cursor: pointer;
`;

export const DisplayContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f205b3;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  &#about {
    background-color: #0c0826;
  }

  &#skills {
    background-color: #0c0826;
  }

  &#portfolio {
    background-color: #0c0826;
  }

  &#contact {
    background-color: #0c0826;
  }
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
  margin-top: 8vh;
  background-size: 70vh;
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
