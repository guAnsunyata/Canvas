var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
	profile : user basic info
	transmition : user purchased record
	work : user's works that can be selled
*/
var userSchema = new Schema({//support ,follow ,beSupport, beFollow
	addedTime: Date,
	profile: {
		uName: String,
		title: String,
		email: String,
		password: String
	},
	isArtist: Number,
	transmition: {
		type: Schema.Types.ObjectId,
		ref: 'transmitionModel'
	},
	followers: [
		{
			type: Schema.Types.ObjectId,
			ref: 'userModel'
		}
	],
	followings: [
		{
			type: Schema.Types.ObjectId,
			ref: 'userModel'
		}
	],
	sponsors: [
		{
			money: Number,
			sponsor: {
			type: Schema.Types.ObjectId,
			ref: 'userModel'
			}
		}
	],
	sponsorings: [
		{
			money: Number,
			sponsoring: {
			type: Schema.Types.ObjectId,
			ref: 'userModel'
			}
		}
	],
	works: [
		{
			type: Schema.Types.ObjectId,
			ref: 'workModel'
		}
	],
	favoriteWork: [{
		score: Number,
		work:{
			type: Schema.Types.ObjectId,
			ref: 'workModel'
		}
	}],
	favoriteStyle: [{
		score: Number,
		style:{
			type: Schema.Types.ObjectId,
			ref: 'styeleModel'
		}
	}]
});

module.exports = mongoose.model('userModel', userSchema);