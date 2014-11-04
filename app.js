
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
//var signin = require('./routes/signin');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var alumno = require('./moduls/Alumno');
var admin = require('./moduls/Admin');
var profesor = require('./moduls/Profesor');
var escuela = require('./moduls/Escuela');
var materias = require('./moduls/Materias');
var teoria = require('./moduls/Teoria');
var cuestionarios = require('./moduls/Cuestionarios');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.cookieParser('sabemos todo sobre ti'));
app.use(express.session());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//conect to DB
mongoose.connect('mongodb://localhost/smde', function(error){
	if(error){
		throw error;		
	}else{
		console.log('Estas super connectado con mongo bato crazy loco!');
	}
});

routes.constructor(alumno, admin, profesor, escuela, materias, teoria, cuestionarios);


app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/signup', routes.signup);
app.get('/u', user.list);
app.get('/logout', routes.logout);

app.post('/crea', routes.crea);
app.post('/inicia', routes.inicia);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
