//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Escuela = mongoose.Schema({

	_id: 	{type: String, required: true},//the id is the name
	afiliacion: {type: Date, required: true},
	licencia: {type: String, required: true},
	clave: {type: String, required: true}

});

module.exports = mongoose.model('escuela', Escuela);