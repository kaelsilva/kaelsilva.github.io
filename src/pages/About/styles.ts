import styled from 'styled-components';

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

export const Paragraph = styled.p`
  color: #0388a6;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;
