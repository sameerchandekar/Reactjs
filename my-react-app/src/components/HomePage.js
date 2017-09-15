import React from 'react';
import Authorization from './Authorization'
import Logout from '../components/Logout';
import { Route} from 'react-router-dom';
export class HomePage extends React.Component {


render(){
  console.log(this.props);
      return (<div> You are logged successfully </div>);
}
}


export class Admin extends React.Component{

render(){ return(<div> This is Admin panel </div>); };

}
