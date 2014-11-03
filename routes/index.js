var alumno;
var profesor;
var admin;
var materia;
var cuestionario;
var teoria;
var escuela;

exports.Constructor = function(alumnom, adminm, profesorm, escuelam, materiasm, teoriam, cuestionariosm){
	alumno = alumnom;
	profesor = profesorm;
	admin = adminm;
	materia = materiasm;
	cuestionario = cuestionariosm;
	teoria = teoriam;
	escuela = escuelam;
};
exports.index = function(req, res){
  res.render('index', { title: 'Inicio' });
};
exports.login = function(req, res){
  res.render('login', { title: 'Log In' });
};
exports.signup = function(req, res){
  res.render('signup', { title: 'Sign Up' });
};