import React from 'react';

import { Admin, Resource } from 'react-admin';
import Dashboard from '../View/dashboard';
import simpleRestProvider from 'ra-data-simple-rest';

export default () => (
  <Admin
    dataProvider={simpleRestProvider('http://path.to.my.api')}
    dashboard={Dashboard}
  ></Admin>
);
