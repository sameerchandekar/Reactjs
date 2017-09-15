import loginService from '../LoginService.js';
import React from 'react';

export default class SubmitAction{

handleSubmit(obj) {

    let payload = {
    uname : obj.props.username,
    pswd  : obj.props.password
    }

    var loginServ = new loginService();
    console.log('Before submit');
    loginServ.submit(payload , obj.props.displayMsg);

}

handleChange(event){

  const name = event.target.name;
  const value =  event.target.value;

  return {
    type:'change',
    payload:{
      "field" : name ,
      [name] : value ,
      }
  }
}

displayMsg(response){
    if(response !== null || response !== undefined){

      if(response.logout){
        return {
          type: 'LOGOUT',
          payload: response
        }
      }

    return {
      type: 'RESP_RECEIVED',
      payload: response
    }
}
}

handleClick(obj){
    console.log("Inside handleClick");
    var loginServ = new loginService();
    loginServ.logout(obj.props.displayMsg);
}

}
