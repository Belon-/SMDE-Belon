
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Inicio' });
};
exports.signin = function(req, res){
  res.render('signin', { title: 'Sign In' });
};