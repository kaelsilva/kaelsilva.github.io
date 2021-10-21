import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './GlobalStyles';
import Toolbar from './components/Toolbar';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Toolbar />
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
