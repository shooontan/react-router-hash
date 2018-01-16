// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import IndexComponent from '../components/index';
import AboutComponent from '../components/about';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/about" component={AboutComponent} />
      <Route path="/" component={IndexComponent} />
    </Switch>
  </HashRouter>
);

export default hot(module)(Router);
