import React from 'react';
import loginService from './LoginService';
//const loginService = require('./LoginService');

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {value : '', isSuccessMsg : false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayMsg = this.displayMsg.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    const value =  event.target.value;
    this.setState({[name] : value});
  }

handleSubmit(event) {

    let payload = {
      uname : this.state.username,
      pswd  : this.state.password
    }

    var loginServ = new loginService();
    loginServ.submit(payload , this.displayMsg);

    event.preventDefault();
}

displayMsg(response){

      if(response !== null || response !== undefined){
      this.setState({ value : '', isSuccessMsg : response.msg  });
  }
}

handleClick(event){
    event.preventDefault();
    var loginServ = new loginService();
    loginServ.logout(this.displayMsg);
}

render(){ return (
    <div>
      <a href="#" data-toggle="modal" data-target="#login-modal">Login</a>
      <a href="/logout" onClick={this.handleClick} data-toggle="modal" data-target="#login-modal">Log out</a>
      <h1>Login to Your Account</h1>
      <h4>{this.state.isSuccessMsg}</h4>
      <form  onSubmit={this.handleSubmit}>
      <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} ></input><br></br>
		  <input name="password" type="password" placeholder="Password" value={this.state.passowrd} onChange={this.handleChange} ></input><br></br>
			<input type="submit" name="login" value="submit"></input>
		  </form>
      </div>
    )
}

}

export default Login;
