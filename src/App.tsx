import React from 'react';

import GlobalStyles from './GlobalStyles';

import Toolbar from './components/Toolbar';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App: React.FC = () => (
  <>
    <GlobalStyles />

    <Toolbar />

    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </>
);

export default App;
