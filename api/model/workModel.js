var mongoose = require('mongoose');
var Schema = mongoose.Schema;



/*
	profile : work basic info
	transmition : user purchased record
	work : user's works that can be selled
*/
var workSchema = new Schema({
	profile: {
		addedTime: Date,
		wName: String,
		sizeX: Number,
		sizeY: Number,
		user: {
			type: Schema.Types.ObjectId,
			ref: 'userModel'
		},
		decription: String,
		photo: String
	},
	score: Number,
	style: {
		type: Schema.Types.ObjectId,
		ref: 'styeleModel'
	},
	plan: [{
		name: String,
		decription: String,
		price: Number,
	}]

});

module.exports = mongoose.model('workModel', workSchema);