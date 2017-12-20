// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

const IndexComponent = () => (
  <React.Fragment>
    <p>this page is index</p>
    <Link to="/about">about</Link>
  </React.Fragment>
);

export default IndexComponent;
