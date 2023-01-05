import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { setGA } from '../../config/setGA';
import { Container, Title, PortfolioContainer, Paragraph } from './styles';

const Portfolio: React.FC = () => {
  useEffect(() => {
    setGA();
    ReactGA.pageview('/portfolio');
  });

  return (
    <Container id="portfolio">
      <Title>Portfolio</Title>
      <PortfolioContainer>
        <Paragraph>Work in progress...</Paragraph>
      </PortfolioContainer>
    </Container>
  );
};

export default Portfolio;
