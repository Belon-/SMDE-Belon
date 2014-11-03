//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Cuestionarios = mongoose.Schema({

	pregunta: 	{type: String, required: true},//the id is a topic
	respuestas: {

			correcta: {type: String, required: true},
			incorrecta: {[respuesta: {type: String, required: true}]}

});

module.exports = mongoose.model('cuestionario', Cuestionarios);