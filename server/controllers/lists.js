var mongoose = require('mongoose');
var User = mongoose.model('User')
var List = mongoose.model('List')

module.exports = {
  create: function(req, res) {
    User.findOne({ '_id': req.body._user }, function(err, user) {
      if (err) { return res.json(err) };
      if (req.body._taggeduser) {
        User.findOne({ '_id': req.body._taggeduser }, function(err, taggeduser) {
          if (err) { return res.json(err) };
          List.create(req.body, function(err, list) {
            if (err) { return res.json(err) };
            user.lists.push(list);
            user.save(function(err) {
              if (err) { return res.json(err) };
            })
            taggeduser.lists.push(list);
            taggeduser.save(function(err) {
              if (err) { return res.json(err) };
            })
            return res.json({ list: list });
          })
        })
      } else {
        List.create(req.body, function(err, list) {
          if (err) { return res.json(err) };
          user.lists.push(list);
          user.save(function(err) {
            if (err) { return res.json(err) };
          })
          return res.json({ list: list });
        })
      }
    })
  },
  show: function(req, res) {
    List.find({})
      .populate('_user')
      .populate('_taggeduser')
      .exec(function(err, list) {
        if (err) { return res.json(err) };
        return res.json({ list: list })
      })
  },
  update: function(req, res) {
    List.findOne({ '_id': req.params.id }, function(err, list) {
      if (err) { return req.json(err) };
      if (list.completed == true) {
        list.completed = false;
        list.save(function(err) {
          if (err) { return res.json(err) } else { return res.json(list) };
        });
      } else if (list.completed == false) {
        list.completed = true;
        list.save(function(err) {
          if (err) { return res.json(err) } else { return res.json(list) };
        });
      }
    })
  }
}
