
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Inicio' });
};
exports.login = function(req, res){
  res.render('login', { title: 'Log In' });
};
exports.signup = function(req, res){
  res.render('signup', { title: 'Sign Up' });
};