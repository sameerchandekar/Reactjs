import $ from 'jquery';

class loginService {

submit(payload , callback){
    console.log('Inside Ajax call');
    console.log("/login/" + payload.uname + "/" +  payload.pswd);
    $.ajax( "/login/" + payload.uname + "/" +  payload.pswd ).done(function( data ) {
          console.log(data);
          localStorage.setItem('auth', data);
          callback(data);
  });
}

logout(callback){

    $.ajax( "/logout" ).done(function( data ) {
      localStorage.removeItem('auth');
      callback(data);
    });
}

}

export default loginService;
