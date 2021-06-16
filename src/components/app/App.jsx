import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from '../about/About';
import { Contact } from '../contact/Contact';
import { Home } from '../home/Home';
import { Portfolio } from '../portfolio/Portfolio';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route 
          exact
          path="/"
          component={Home} />
        <Route 
          exact
          path="/about"
          component={About} />
        <Route 
          exact
          path="/portfolio"
          component={Portfolio} />
        <Route 
          exact
          path="/contact"
          component={Contact} />
      </Switch>
    </Router>
  );
};
