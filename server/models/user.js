var mongoose = require('mongoose');
validators = require('mongoose-validators');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: { type: String, required: 'User Needs a Name!' },
  lists: [{ type: Schema.Types.ObjectId, ref: 'List' }]
}, { timestamps: true })

mongoose.model('User', UserSchema);
