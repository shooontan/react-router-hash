// @flow
import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import IndexComponent from '../components/index';
import AboutComponent from '../components/about';

const Router = () => (
  <Switch>
    <Route exact path="/about" component={AboutComponent} />
    <Route path="/" component={IndexComponent} />
  </Switch>
);

export default Router;
