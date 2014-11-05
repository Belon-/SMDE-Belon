//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Cuestionarios = mongoose.Schema({

	pregunta: 	{type: String, required: true},//the id is a topic
	a: {type: String, v: false},
	b: {type: String, v: false},
	c: {type: String, v: true},
	d: {type: String, v: false},
	materia: {type: String, required: true}
});

module.exports = mongoose.model('cuestionario', Cuestionarios);



/*Añadir cuestianarios
	id materia
	preguntas --Arreglo de preguntas
	tiempoLimite --Int en minutos
	Caducidad --Fecha (Date)
	*/