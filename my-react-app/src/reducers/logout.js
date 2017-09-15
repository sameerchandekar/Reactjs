export default function (state = { "loggedin": true} , action) {

  switch (action.type) {
    case 'LOGOUT':
        return { "loggedin": false  };
    break;
    default:
    return state;
  }


  /*
console.log(state);
  console.log(action.type);
  if(action.payload != undefined ){
    switch (action.type) {
      case 'LOGOUT':
          return { "loggedin": false  };
      break;
      default:
      return state;
    }

}*/}
