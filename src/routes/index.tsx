import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
    <Route path={`${process.env.PUBLIC_URL}/about`} exact component={About} />
    <Route path={`${process.env.PUBLIC_URL}/skills`} exact component={Skills} />
    <Route
      path={`${process.env.PUBLIC_URL}/portfolio`}
      exact
      component={Portfolio}
    />
    <Route
      path={`${process.env.PUBLIC_URL}/contact`}
      exact
      component={Contact}
    />
  </Switch>
);

export default Routes;
