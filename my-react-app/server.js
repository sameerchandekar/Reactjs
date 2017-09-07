require('babel-register');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var ReactDOMServer = require('react-dom/server');
var React = require('react');
//import ReactDOM from require('react-dom');
require('./src/form');
var LoginForm = require('./src/app');
//import { Router, IndexRoute, Route, browserHistory } from 'react-router';


/*
class LoginPage extends React.Component {
	render(){
  return (<Login />);
}
}*/

var app = express();
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

var compiler = webpack(config);
	app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});

app.get('/logout' , function(req,res){
	var u = req.session.uname;
	req.session.destroy();
	res.set('Content-Type', 'application/json');
	res.send({"msg" :  u + ".You have logged out successfully. " });
});

app.get('/login/:uname/:pswd', function (req, res) {
	console.log("here comes the request " + req.params.uname);
	res.set('Content-Type', 'application/json');
	req.session.uname = req.params.uname;
	if(req.session.page_views){
		 req.session.page_views++;

	} else {
		 req.session.page_views = 1;
	}
  res.send({"msg" : "Welcome " + req.params.uname + ".You have logged in successfully. " + req.session.page_views});
});

app.get('*', function (req, res) {
	//res.render(ReactDOMServer.renderToString(<LoginPage />));
	res.render(React.createFactory(LoginForm));
  //res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(
	8080 ,
	'localhost' ,
	function(err){
		if(err){
			return console.error(err);
		}
			console.log('Listening on http://localhost:8080');
});
