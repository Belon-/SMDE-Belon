//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Profesor = mongoose.Schema({

	_id: 	{type: String, required: true},//the id is the mail
	nombre: {type: String, required: true},
	apellido: {type: String, required: true},
	password: {type: String, required: true},
	foto: 	{type: String, required: true},//this is not the datatype to the photos
	escuela: {type: String, required: true},
	materias: 	[
		{
			materia:{type: String, required: true}
		}
	],
	telefono: {type: Number, required: true}

});

module.exports = mongoose.model('profesor', Profesor);