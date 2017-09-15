import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SubmitAction from '../actions/submit';
import { Redirect } from 'react-router-dom';
import Logout from '../components/Logout';
import {HomePage , Admin} from '../components/HomePage';
import NotAuthorized from '../components/NotAuthorized';
import {Route} from 'react-router-dom';
class Login extends React.Component{

render(){

  if(localStorage.getItem('auth') !== null )
  {
    this.props.history.push("/home");
    //return (<Redirect to="/home" />);
  }

  return (

    <div>
      <a href="#" data-toggle="modal" data-target="#login-modal">Login</a>&nbsp;&nbsp;
      <a href="/home" data-toggle="modal" data-target="#login-modal">Home</a>&nbsp;&nbsp;
      <h1>Login to Your Account</h1>
      <h4>{this.props.msg}</h4>
      <form  onSubmit={(event) => {
        event.preventDefault();
        console.log("props : " + this.props.username);
        this.props.handleSubmit(this);}}>
      <input name="username" type="text" placeholder="Username" value={this.props.username}
      onChange={this.props.handleChange} ></input><br></br>
		  <input name="password" type="password" placeholder="Password" value={this.props.password}
      onChange={this.props.handleChange} ></input><br></br>
			<input type="submit" name="login" value="submit"></input>
		  </form>
      </div>
    );
}

}

function mapStateToProps(state) {
  console.log(state);
  console.log('userName:'+ state.message.username + " username : " + state.username );
  console.log('password:'+ state.message.password);

    return {
          username: state.message.username,
          password: state.message.password,
          msg : state.message.msg,
          authenticated : state.message.authenticated
    };
  }

function matchDispatchToProps(dispatch){
    var submit = new SubmitAction();
    return bindActionCreators({
      handleSubmit : submit.handleSubmit ,
      handleChange : submit.handleChange,
      displayMsg : submit.displayMsg
    }, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Login);
