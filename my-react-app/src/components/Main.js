import React from 'react';
import LoginPage from './LoginPage';
import {HomePage , Admin} from './HomePage';
import NotAuthorized from './NotAuthorized';
import { BrowserRouter, Route , Switch, Redirect} from 'react-router-dom';

class Main extends React.Component{

render(){

  return (
  /*  <Switch>
      <Route exact path="/" component={LoginPage} ></Route>
      <Route exact path="/home" component={HomePage} ></Route>
      <Route exact path="/admin" component={Admin} ></Route>
      <Route exact path="/notAuthorized" component={NotAuthorized} ></Route>
    </Switch>*/
);

}
}

export default Main;
