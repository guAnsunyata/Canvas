var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var styleSchema = new Schema({
	sName: String,
	score: Number
});

module.exports = mongoose.model('styleModel', styleSchema);