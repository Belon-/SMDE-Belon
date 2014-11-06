//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Admin = mongoose.Schema({

	_id: 	{type: String, required: true},//the id is the mail
	nombre: {type: String, required: true},
	apellido: {type: String, required: true},
	password: {type: String, required: true},
	telefono: {type: String, required: true},
	escuela: {type: String, required: true},
	privilegio: {type: String, required: true}

});

module.exports = mongoose.model('admin', Admin);