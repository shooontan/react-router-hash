// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

const AboutComponent = () => (
  <React.Fragment>
    <p>this page is about</p>
    <Link to="/">index</Link>
  </React.Fragment>
);

export default AboutComponent;
