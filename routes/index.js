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

exports.edit = function(req, res){
	res.render('edit', { title: 'Edit' });
};

exports.logout = function(req, res){
	title: 'Inicio';
	req.session.datos = null;
	datos: req.session.datos;
	res.redirect('/');
};

exports.crea = function(req, res){
	
	var datos = new alumno({//jalan los datos del jade y los guardan
		_id: req.body.mail,
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		password: req.body.contra,
		foto: "Alguna foto",
		escuela: req.body.escuela
	});
	datos.save(function(error, documento){//los guardan en la DB y les devuelve esa parte de la base
		if(error){//por si la cagan
			res.send('Error al registrar al alumno');
		}else{
			req.session.datos = documento;//guarda la cookie con la info guardada
			res.redirect('/');//redirecciona al index
		}
	});
};

exports.inicia = function(req, res){

	alumno.findById(req.body.mail, function(error, documento){//con esta fregadera sacan la info de la DB
		if(error){//ven si hubo errores al sacar la info
			res.send('Error al intentar ver el personaje.');
		}else{
			if(documento.password == req.body.contra){//verifica que las contraseñas coincidan
				req.session.datos = documento;//guarda la cookie con la info sacada
				res.redirect('/');//redirecciona al index
			}else{
				res.send('La cagastes!!');//en caso de que usuario o contraseña no coincidan
			}
		}
	});
}

exports.cambia = function(req, res){

	var aux = req.session.datos;

	if(aux.password == req.body.excontra){
		alumno.update({_id: aux._id},{
			$set:{
					nombre: req.body.nombre,
					apellido: req.body.apellido,
					password: req.body.contra,
					escuela: req.body.escuela
				}
			}, function(error, documento){
				alumno.findById(aux._id, function(error, documento){
					if(error){
						res.send('Error al intentar ver el personaje.');
					}else{
						req.session.datos = documento;
						res.redirect('/');
					}
				});
			});
	}else{
		res.send('La cagastes!!');
	}

}

//esto se va a quitar posteriormente
exports.iniciamateria = function(req, res){
	materia.find({}, function(error, documento){
		if(error){
			res.send('Ha surgido un error.');
		}else{
			console.log(documento);
			res.render('iniciamateria', {
				topics: documento,
				datos: req.session.datos
			});
		}
	})
};