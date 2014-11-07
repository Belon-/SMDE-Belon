//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Cuestionarios = mongoose.Schema({

	pregunta: 	{type: String, required: true},//the id is a topic
	a: {t: {type: String}, v: {type: Boolean}},
	b: {t: {type: String}, v: {type: Boolean}},
	c: {t: {type: String}, v: {type: Boolean}},
	d: {t: {type: String}, v: {type: Boolean}},
	materia: {type: String, required: true},
	escuela: {type: String, required: true}
});

module.exports = mongoose.model('cuestionario', Cuestionarios);



/*Añadir cuestianarios
	id materia
	preguntas --Arreglo de preguntas
	tiempoLimite --Int en minutos
	Caducidad --Fecha (Date)
	*/
