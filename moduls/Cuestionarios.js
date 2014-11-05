//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Cuestionarios = mongoose.Schema({

	num: {type: Number, required: true},
	materia: {type: String, required: true},
	pregunta: 	{type: String, required: true},
	a: {type: String, v: false},
	b: {type: String, v: false},
	c: {type: String, v: true},
	d: {type: String, v: false},

});

module.exports = mongoose.model('cuestionario', Cuestionarios);



/*Añadir cuestianarios
	id materia
	preguntas --Arreglo de preguntas
	tiempoLimite --Int en minutos
	Caducidad --Fecha (Date)
	*/
