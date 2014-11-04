var alumno;
var profesor;
var admin;
var materia;
var cuestionario;
var teoria;
var escuela;

exports.constructor = function(alumnom, adminm, profesorm, escuelam, materiasm, teoriam, cuestionariosm){
	alumno = alumnom;
	profesor = profesorm;
	admin = adminm;
	materia = materiasm;
	cuestionario = cuestionariosm;
	teoria = teoriam;
	escuela = escuelam;
};

exports.index = function(req, res){
	res.render('index', { title: 'Inicio',
						datos: 	req.session.datos});
};
exports.login = function(req, res){
	res.render('login', { title: 'Log In' });
};
exports.signup = function(req, res){
	res.render('signup', { title: 'Sign Up' });
};

exports.logout = function(req, res){
	title: 'Inicio';
	req.session.datos = null;
	datos: req.session.datos;
	res.redirect('/');
};

exports.crea = function(req, res){
	
	var datos = new alumno({
		_id: req.body.mail,
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		password: req.body.contra,
		foto: "Alguna foto",
		escuela: req.body.escuela
	});
	datos.save(function(error, documento){
		if(error){
			res.send('Error al registrar al alumno');
			console.log(error)
		}else{
			req.session.datos = documento;
			res.redirect('/');
		}
	});
};

exports.inicia = function(req, res){

	alumno.findById(req.body.mail, function(error, documento){
		if(error){
			res.send('Error al intentar ver el personaje.');
		}else{
			if(documento.password == req.body.contra){
				req.session.datos = documento;
				res.redirect('/');
			}else{
				res.send('La cagastes!!');
			}
		}
	});

}

