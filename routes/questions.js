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

exports.test = function(req, res){
	res.render('students/tests', { title: 'Exam',
						datos: 	req.session.datos});
};
exports.addQ = function(req, res){
	materia.find({},function(error, documento){

		if(error){}else{
			console.log(documento);
			res.render('questions/add', { title: 'Exam',
						datos: 	req.session.datos,
						topics: documento});

		}
	});

};

exports.add = function(req, res){

	var boleano = false;
	var boleano2 = false;
	var boleano3 = false;
	var boleano4 = false;

	console.log(req.body.answ);

	var x = parseInt(req.body.answ);

	switch(x){

		case 1:
			boleano = true;
		break;
		case 2:
			boleano2 = true;
		break;
		case 3:
			boleano3 = true;
			console.log(boleano3);
		break;
		case 4:
			boleano4 = true;
		break;

	}

	var datos = new cuestionario({//jalan los datos del jade y los guardan
		pregunta: req.body.question,
		a: {t: req.body.aq, v: boleano},
		b: {t: req.body.bq, v: boleano2},
		c: {t: req.body.cq, v: boleano3},
		d: {t: req.body.dq, v: boleano4},
		escuela: req.session.datos.escuela,
		materia: req.body.materia
	});
	datos.save(function(error, documento){//los guardan en la DB y les devuelve esa parte de la base
		if(error){//por si la cagan
			res.send('Error al registrar al pregunta '+ error);
		}else{
			
			res.redirect('/');//redirecciona al index
		}
	});
};
exports.addTheory=function(req,res){
	res.render('editor/editor',{ title: 'add',
						datos: 	req.session.datos});
}
exports.base=function(req,res){
	res.render('editor/base',{ title: 'base',
						datos: 	req.session.datos});
}