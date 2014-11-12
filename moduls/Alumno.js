//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Alumno = mongoose.Schema({

	_id: 	{type: String, required: true},//the id is the mail
	nombre: {type: String, required: true},
	apellido: {type: String, required: true},
	password: {type: String, required: true},
	foto: 	{type: String, required: true},//this is not the datatype to the photos
	cover: 	{type: String, required: false},//this is not the datatype to the photos
	escuela: {type: String, required: true},
	materias: 	[//hay que revisar esta parte, algo no esta bien :/
		{
			id_materia:{type: String, required: true},
			materia:{type: String, required: true},
			calif:	{type: Number, required: true},
			inicio: {type: Date, default: Date.now}
		}
	],
	calificaciones: [
		{
			id_materia: {type: String, required: true},
			calif:	{type: String, required: true}

		}
	],
	notas:[{
		id_nota:{type:String, required: true},
		titulo:{type:String,required: true},
		cuerpo:{type:String, requiered:true},
		creada: {type: Date, default: Date.now},
		notas:{type:String}
	}]

});

module.exports = mongoose.model('alumno', Alumno);
