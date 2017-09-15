import React from 'react';
import PropTypes from 'prop-types';
import Roles from './Roles.Config.js'

class Authorization extends React.Component {

    componentWillMount() {

      const user = localStorage.getItem('auth');

      if (!user) {
        console.log("componentWillMount  user not found");
        this.props.history.push('/');
        return;
      }
console.log(this.props);
      var roles = Roles[this.props.match.path];
      var userRole = user.role;
      var flag =false;
      console.log("Starting loop");
      console.log(roles);
      roles.map((role) => {
        console.log(role);
        if(role === userRole ){
              flag = true;
        }
    });

    if(!flag){
      this.props.history.push('/notAuthorized');
    }

  }
}

export default Authorization;
