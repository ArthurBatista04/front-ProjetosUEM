import React from 'react';

import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

export default () => (
  <Admin dataProvider={simpleRestProvider('http://path.to.my.api')}></Admin>
);
