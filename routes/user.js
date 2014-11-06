
/*
 * GET users listing.
 */

exports.list = function(req, res){
	if(req.session.datos != undefined){
    	res.render('students/StudentProfile', { title: 'Inicio',
  							datos: 	req.session.datos});
    }else{
    	res.redirect('/');
    }
};
exports.test = function(req, res){
	if(req.session.datos != undefined){
    	res.render('students/tests', { title: 'Inicio',
  							datos: 	req.session.datos});
    }else{
    	res.redirect('/');
    }
};