import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import HomePage from './components/views/HomePage';
import AdminPage from './components/views/Admins';
import GSD from './components/views/GSD/index';
import SailBoat from './components/views/SailBoat/index';
import checkLogin from './components/views/checkLogin';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="admin" component={AdminPage} />
    <Route component={checkLogin}>
      <Route path="gsd" component={GSD}/>
      <Route path="sailboat" component={SailBoat}/>
    </Route>
  </Route>
);
