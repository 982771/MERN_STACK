import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import HomePage from './components/views/HomePage';
import AdminPage from './components/views/Admins';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="admin" component={AdminPage} />
  </Route>
);
