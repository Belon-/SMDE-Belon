//#No.Se.Ingles:p
var mongoose = require('mongoose');
var Teoria = require('./Teoria');
var Cuestionarios = require('./Cuestionarios');

var Materias = mongoose.Schema({

	_id: 	{type: String, required: true},//the id is special key
	nombre: {type: String, required: true},
	escuela: {type: String, required: true},
	creada: { type: Date, default: Date.now },
	cuestionarios: 	[Cuestionarios],
	informacion: 	[Teoria]

});

module.exports = mongoose.model('materia', Materias);