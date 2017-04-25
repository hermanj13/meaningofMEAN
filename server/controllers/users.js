var mongoose = require('mongoose');
var User = mongoose.model('User')
module.exports = {
  login: function(req, res) {
    User.findOne({ 'name': req.body.name }, function(err, user) {
      if (!user) {
        User.create(req.body, function(err, user) {
          if (err) { res.json(err) } else { res.json({ user: user }) }
        })
      } else {
        res.json({ user: user })
      };
    })
  },
  all: function(req, res) {
    User.find({ '_id': { $ne: req.params.id } }, function(err, users) {
      if (err) { return res.json(err) } else { return res.json({ users: users }) };
    })
  },
  show: function(req, res) {
    User.findOne({ '_id': req.params.id }, function(err, users) {
      if (err) { return res.json(err) } else { return res.json({ users: users }) };
    })
  }
}
