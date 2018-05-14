var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var albumSchema = new Schema({
  name: {type:String,required:true},
  author: {type:String,required:true},
  images: [{data:Buffer, contentType:String}],
  description: {type:String,required:true},
  createdOn: {type:Date,default:Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});
mongoose.model('Album', albumSchema);
