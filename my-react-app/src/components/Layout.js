
import React from 'react';
import Logout from './Logout';
import { BrowserRouter, Route } from 'react-router-dom';

class Layout extends React.Component {

  render(){

    return (<div>
          <BrowserRouter>
            <Route path="*" component={Logout} />
          </BrowserRouter>
    </div>);
}

}

export default Layout;
