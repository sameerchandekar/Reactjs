import React from 'react';

export class Home extends React.Component{

render(){

  return (
    <div>
    <div><Header /></div><br></br>
    <div>Main Body</div><br></br>
    <div><Footer /></div><br></br>
    </div>
  );
}

}





class Header extends React.Component{

render(){
  return(
    <div>This is Footer</div>
  );
};

}

class Body extends React.component{

render(){
return (
<div>This is the body</div>
);

}


}

export default Home;
