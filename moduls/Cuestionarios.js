//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Cuestionarios = mongoose.Schema({

	pregunta: 	{type: String, required: true},//the id is a topic
	a: {t: {type: String}, v: {type: String}},
	b: {t: {type: String}, v: {type: String}},
	c: {t: {type: String}, v: {type: String}},
	d: {t: {type: String}, v: {type: String}},
	materia: {type: String, required: true}
});

module.exports = mongoose.model('cuestionario', Cuestionarios);



/*Añadir cuestianarios
	id materia
	preguntas --Arreglo de preguntas
	tiempoLimite --Int en minutos
	Caducidad --Fecha (Date)
	*/
