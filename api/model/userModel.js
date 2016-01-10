var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
	profile : user basic info
	transmition : user purchased record
	work : user's works that can be selled
*/
var userSchema = new Schema({
	profile: {
		name: String,
		email: String
	},
	transmition: {
		type: Schema.Types.ObjectId,
		ref: 'transmitionModel'
	},
	works: {
		type: Schema.Types.ObjectId,
		ref: 'transmitionModel'
	}
});

module.exports = mongoose.model('userModel', todoSchema);