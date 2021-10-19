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

export const Paragraph = styled.p`
  color: #0388a6;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

export const PortfolioContainer = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
