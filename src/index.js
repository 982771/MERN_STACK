import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import $ from 'jquery';
import App from './components/app';
import _ from 'lodash';

const initialState = {
};

const store=configureStore(initialState);


ReactDOM.render(
<Provider store={store}>
<Router history={browserHistory} routes={routes} />
</Provider>, document.getElementById('app'));
