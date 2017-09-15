export default function (state = {
"field" : "default",
"username":"sameer",
"password":"",
"msg":""
} , action) {

console.log(state);
    switch (action.type) {

      case 'change':

          switch (state.field) {
              case 'username':
              console.log("Loggin un username case in reducer ");
              console.log("Password " + state.password);
              return {
                    username : action.payload.username,
                    password : state.password,
                    msg : state.msg
                  };
              break;
              case 'password':

              return {
                  username : state.username,
                  password : action.payload.password,
                  msg : state.msg
                  };
                  break;

              default:

              return {
                  username: state.username,
                  password: state.password,
                  msg : state.msg
                  };
                  break;
              }

        case 'RESP_RECEIVED':
            return {
              username: '',
              password: '',
              msg : action.payload.msg,
            }
            break;

        default:
            return state;

    }

}
