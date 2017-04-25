var mongoose = require('mongoose');
validator = require('mongoose-validators');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  _taggeduser: { type: Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: 'Must have a Title', minlength: [5, 'Title must be atleast 5 characters'] },
  description: { type: String, required: 'Must have a Description', minlength: [10, 'Description must be atleast 10 characters'] },
  completed: { type: Boolean, default: false },
}, { timestamps: true })

mongoose.model('List', UserSchema);
