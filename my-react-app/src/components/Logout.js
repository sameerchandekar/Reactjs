import React from 'react';
import SubmitAction from '../actions/submit';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Authorization from './Authorization';
import Main from './Main';
class Logout extends React.Component {

render(){

  if(!this.props.loggedin){
      this.props.history.push("/");
  }

  return (<div>
    <a href="/logout"
    onClick={(event) => {event.preventDefault();this.props.handleClick(this);}}
    data-toggle="modal" data-target="#login-modal">Log out</a>
    <Main />
    </div>
);
}

}
function mapStateToProps(state) {
  console.log("its called");
  return {
    loggedin : state.logout.loggedin
  };

  }

function matchDispatchToProps(dispatch){
    var submit = new SubmitAction();
    return bindActionCreators(
      { handleClick : submit.handleClick,
        displayMsg : submit.displayMsg },
      dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Logout);
