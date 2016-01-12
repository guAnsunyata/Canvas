var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var transactionSchema = new Schema({
	buyer: {
		type: Schema.Types.ObjectId,
		ref: 'userModel'
	},
	seller: {
		type: Schema.Types.ObjectId,
		ref: 'userModel'
	},
	works: {
		type: Schema.Types.ObjectId,
		ref: 'workModel'
	},
	plan: String,
	transactionTime: Date 
});

module.exports = mongoose.model('transactionModel', transactionSchema);