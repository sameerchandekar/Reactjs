import $ from 'jquery';

class loginService {

submit(payload , callback){

     $.ajax( "/login/" + payload.uname + "/" +  payload.pswd ).done(function( data ) {
          callback(data);
  });
}

logout(callback){

    $.ajax( "/logout" ).done(function( data ) {
            callback(data);
    });
}

}

export default loginService;
