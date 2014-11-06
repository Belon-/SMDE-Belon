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