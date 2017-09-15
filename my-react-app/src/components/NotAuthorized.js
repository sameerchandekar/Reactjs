import React from 'react';
import Logout from '../components/Logout';
import { Route} from 'react-router-dom';

class NotAuthorized extends React.Component {

  render(){

    return (<div> You are not authorized to view view this page </div>);

  }

}

export default NotAuthorized;
