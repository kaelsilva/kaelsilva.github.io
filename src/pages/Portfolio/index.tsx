import React from 'react';
import { Container, Title, PortfolioContainer, Paragraph } from './styles';

const Portfolio: React.FC = () => (
  <Container id="portfolio">
    <Title>Portfolio</Title>
    <PortfolioContainer>
      <Paragraph>Work in progress...</Paragraph>
    </PortfolioContainer>
  </Container>
);

export default Portfolio;
