import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage';
import {HomePage , Admin} from './components/HomePage';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers/index';
import { BrowserRouter, Route , Switch, Redirect} from 'react-router-dom';
import {Auth} from './components/Authorization';
import NotAuthorized from './components/NotAuthorized';
import Logout from './components/Logout';
import Layout from './components/Layout'
const logger = createLogger();

const store = createStore(allReducers , applyMiddleware(thunk , promise , logger));

ReactDOM.render(/*<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} ></Route>
            <Route exact path="/home" component={HomePage} ></Route>
            <Route exact path="/admin" component={Admin} ></Route>
            <Route exact path="/notAuthorized" component={NotAuthorized} ></Route>
        </Switch>
    </BrowserRouter>
  </Provider>*/

  <Provider store={store} >
    <Layout />
  </Provider>
,  document.getElementById('app-container'));
