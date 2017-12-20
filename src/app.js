/* eslint-disable global-require */
import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import Router from './router';

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </HashRouter>,
    document.getElementById('app'),
  );
};

render(Router);

if (module.hot) {
  module.hot.accept('./router', () => {
    render(require('./router').default);
  });
}
