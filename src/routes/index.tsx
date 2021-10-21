import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/skills" exact component={Skills} />
    <Route path="/portfolio" exact component={Portfolio} />
    <Route path="/contact" exact component={Contact} />
  </Switch>
);

export default Routes;
