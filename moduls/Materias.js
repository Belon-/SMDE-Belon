//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Materias = mongoose.Schema({

	_id: 	{type: String, required: true},//the id is special key
	nombre: {type: String, required: true},
	escuela: {type: String, required: true},
	cuestionarios: 	[{ type: Schema.Types.ObjectId, ref: 'cuestionario' }],
	informacion: 	[{ type: Schema.Types.ObjectId, ref: 'teoria' }]

});

module.exports = mongoose.model('materia', Materias);