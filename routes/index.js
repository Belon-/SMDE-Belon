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

	var Nmax = 2;
	var Nmin = 1;
	var Naleatorio;
	var array= new Array();
	var Random = new Array();
	var i;


	/*for(i=0;i<11;i++){
		Naleatorio=Math.floor(Math.random()*(Nmax-(Nmin-1)))+Nmin;	
		Random.push(Naleatorio);
		console.log(Random);
		console.log(Random[i]);
		console.log(i);
		var a=cuestionario.find({nu: Random[i]},function(error, documento){
		if(error){
			console.log("Ha occurido un error en la busqueda de la información de BD...")
		}else{
			console.log(i);
		if(i==11){
			array[1]=documento;	
			console.log("algo");
		}
			if(i==12){
				array[2]=documento;	
			}
			if(i==13){
				array[3]=documento;	
			}
			if(i==14){
				array[4]=documento;	
			}
			if(i==15){
				array[5]=documento;	
			}
			if(i==16){
				array[6]=documento;	
			}
			if(i==17){
				array[7]=documento;	
			}
			if(i==18){
				i=i+1;
				array[8]=documento;
				i=i+1;	
			}
			if(i==19){
				array[9]=documento;
				i=i+1;	
			}
			if(i==20){
				console.log(array);
				res.render('students/cues', { title:'Cuestionarios', arreglo: array});
				i=i+1;
			}
			
			
			
		}
		
		})
	}
	cuestionario.find({nu: Random[0], nu: Random[1], nu: Random[2], nu: Random[3],
	nu: Random[4], nu: Random[5], nu: Random[6], nu: Random[7], nu: Random[8], nu: Random[9]},function(error, documento){
		if(error){
			console.log("Ha occurido un error en la busqueda de la información de BD...")
		}else{
			array[0]=documento;
			res.render('students/cues', { title:'Cuestionarios', preguntas: array[0]});
			console.log(documento);
		}
		
	})*/

	for(i=1;i<11;i++){
		Naleatorio=Math.floor(Math.random()*(Nmax-(Nmin-1)))+Nmin;	
		Random.push(Naleatorio);
		console.log(Random);	
		if(i==1){
			cuestionario.find({nu: Random[0]},function(error, documento){
			if(error){
				console.log("Ha occurido un error en la busqueda de la información de BD...")
			}else{
				array[0]=documento;
				}
			})
		}
		if(i==2){
			cuestionario.find({nu: Random[1]},function(error, documento){
			if(error){
				console.log("Ha occurido un error en la busqueda de la información de BD2...")
			}else{
				array[1]=documento;						
			}
			})
		}
		if(i==3){
			cuestionario.find({nu: Random[2]},function(error, documento){
			if(error){
				console.log("Ha occurido un error en la busqueda de la información de BD3...")
			}else{
			array[2]=documento;
			}
			})					
		}
		if(i==4){
			cuestionario.find({nu: Random[3]},function(error, documento){
			if(error){
				console.log("Ha occurido un error en la busqueda de la información de BD4...")
			}else{
				array[3]=documento;
			}
		})
		}
		if(i==5){
			cuestionario.find({nu: Random[4]},function(error, documento){
			if(error){
				console.log("Ha occurido un error en la busqueda de la información de BD5...")
			}else{
				array[4]=documento;
			}
		})
		}
		if(i==6){
			cuestionario.find({nu: Random[5]},function(error, documento){
			if(error){
				console.log("Ha occurido un error en la busqueda de la información de BD6...")
			}else{
				array[5]=documento;
				
			}
		})
		}
		if(i==7){
			cuestionario.find({nu: Random[6]},function(error, documento){
			if(error){
				console.log("Ha occurido un error en la busqueda de la información de BD7...")
			}else{
				array[6]=documento;
			}
		})
		}
		if(i==8){
			cuestionario.find({nu: Random[7]},function(error, documento){
			if(error){
				console.log("Ha occurido un error en la busqueda de la información de BD8...")
			}else{
				array[7]=documento;
			}
		})
		}
		if(i==9){
			cuestionario.find({nu: Random[8]},function(error, documento){
			if(error){
				console.log("Ha occurido un error en la busqueda de la información de BD9...")
			}else{
				array[8]=documento;	
			}
		})
		}
		if(i==10){
			cuestionario.find({nu: Random[9]},function(error, documento){
			if(error){
				console.log("Ha occurido un error en la busqueda de la información de BD10...");
			}else{
				array[9]=documento;
				if(i==11){
					res.render('students/cues', { title:'Cuestionarios', p1:array[0],p2:array[1],p3:array[2],p4:array[3],p5:array[4],
						p6:array[5],p7:array[6],p8:array[7],p9:array[8],p10:array[9]});
					i=i+1;
					console.log(array);
				}else{

				}
			}
		})
		}	
	}
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
