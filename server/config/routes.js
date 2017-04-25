var users = require('../controllers/users.js');
var lists = require('../controllers/lists.js')

module.exports = function(app) {
  app.post('/users', users.login);
  app.post('/lists', lists.create);
  app.get('/users/:id', users.all);
  app.get('/users/single/:id', users.show);
  app.get('/lists', lists.show);
  app.put('/lists/:id', lists.update);
}
