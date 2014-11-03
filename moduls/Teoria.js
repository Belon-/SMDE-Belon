//#No.Se.Ingles:p
var mongoose = require('mongoose');

var Teoria = mongoose.Schema({

	tema: 		 {type: String, required: true},
	informacion: {type: String, required: true}

});

module.exports = mongoose.model('teoria', Teoria);