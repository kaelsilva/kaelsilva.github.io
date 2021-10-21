import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Toolbar from './index';

describe('Test toolbar component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Toolbar />
      </BrowserRouter>,
    );
  });

  it('should be navigation element', () => {
    expect(screen.getByRole('navigation'));
  });

  it('should contain navigation buttons', () => {
    const buttonText = [
      'Home',
      'About me',
      'Skills',
      'Portfolio',
      'Contact me',
    ];

    const buttons = screen.getAllByRole('link');

    buttons.map(button => {
      return expect(button).toHaveTextContent(buttonText.splice(0, 1)[0]);
    });
  });
});
