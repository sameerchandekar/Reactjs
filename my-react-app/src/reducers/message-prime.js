export default function (state = {
"field" : "default",
"username":"sameer",
"password":"",
"msg":"",
"authenticated" : false
} , action) {

console.log(state);


    switch (action.type) {

        case 'change':
        console.log("Action Payload : ");
        console.log(action.payload);
        console.log("Previous state : ");
        console.log(state);
      //  return action.payload;
        if(action.payload.field === 'username'){
            console.log(" Inside if " + state.password);
            return { field: "username", username: action.payload.username , "password" : state.password  ,
          "msg":state.msg , "authenticated" : false};
        }else if (action.payload.field === 'password'){
          console.log(" Inside else if " + state.username);
            return { field: "password", username: state.username , "password" : action.payload.password ,
          "msg" : state.msg , "authenticated" : false ,  "loggedin": true };
        }else{
            return state;
        }

        case 'RESP_RECEIVED':

            return { field: "msg", username: state.username , "password" : state.password ,
            "msg" : action.payload.msg , "authenticated" : false };
            break;
        default:
            return state;
    }

}
