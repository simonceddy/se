import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import Error404 from './components/Error/404';

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
    <Route component={Error404} />
  </Switch>
);

export default AppRoutes;
