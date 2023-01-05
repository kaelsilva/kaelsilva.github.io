import { createGlobalStyle } from 'styled-components';
import AudiowideRegular from './assets/fonts/Audiowide-Regular.ttf';
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Audiowide';
    src: local('Audiowide'),
      url(${AudiowideRegular});
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
      url(${RobotoRegular});
    font-display: fallback;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto';
    text-decoration: none;
    color: #fff;
  }
`;

export default GlobalStyle;
