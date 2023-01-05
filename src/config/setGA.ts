import ReactGA from 'react-ga';

export const setGA = (): void => {
  ReactGA.initialize('G-0L5PB44XEN', { debug: false });
};
