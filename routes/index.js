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
	console.log(req.session.datos);
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
	res.render('edit', { title: 'Edit',
						datos:req.session.datos});
};

exports.logout = function(req, res){
	title: 'Inicio';
	req.session.datos = null;
	datos: req.session.datos;
	res.redirect('/');
};

exports.cues = function(req, res){
	cuestionario.find({},function(error, documento){
		if(error){

		}else{
			/*function aleatorio(min:Number, max:Number):Number{
				var num: Number= Math.floor(Math.random()*(max-min+1))+min;
				return num;
				var numeroNuevo:Number=aleatorio(1,10);
			}*/

		res.render('students/cues', { title: 'Cuestionarios', datos: documento });

		}

	})

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
			res.send('Error al registrar al alumno '+ error);
		}else{
			req.session.datos = documento;//guarda la cookie con la info guardada
			res.redirect('/');//redirecciona al index
		}
	});
};

exports.inicia = function(req, res){

	alumno.findById(req.body.mail, function(error, documento){
		if(error){
			res.send('Error al intentar ver el personaje.');
		}else{
			if(documento == null){
				profesor.findById(req.body.mail, function(error2, documento2){
					if(error2){
						res.send('Error al intentar ver el personaje.');
					}else{
						if(documento2 == null){
							admin.findById(req.body.mail, function(error3, documento3){
								if(error3){
									res.send('Error al intentar ver el personaje.');
								}else{
									if(documento3 == null){
										res.redirect('/login');
									}else{
										if(documento3.password == req.body.contra){
											req.session.datos=setUserType(3,documento3);
											res.redirect('/u');
										}else{
											res.redirect('/login');
										}
									}
								}
							});
						}else{
							if(documento2.password == req.body.contra){
								req.session.datos=setUserType(2,documento2);
								res.redirect('/u');
							}else{
								res.redirect('/login');
							}
						}
					}
				});
			}else{
				if(documento.password == req.body.contra){
					req.session.datos=setUserType(1,documento);
					res.redirect('/u');
				}else{
					res.redirect('/login');
				}
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

exports.inscribe = function(req, res){

	var aux = req.session.datos;

	alumno.update({_id: aux._id},{
		$set:{
				materias: {
					id_materia:req.body.iden,
					materia: req.body.materia,
					calif: 0
				}
			}
		}, function(error, documento){
			alumno.findById(aux._id, function(error, documento){
				if(error){
					res.send('Error al inscribir materia '+error);
				}else{
					req.session.datos = documento;
					res.redirect('/');
				}
			});
		});

}

var setUserType=function(userType,json){
	var us=JSON.stringify(json);
	us=us.substring(0, us.length-1);
	us+=",uType:"+userType+"}";
	return eval("("+us+")");
}
