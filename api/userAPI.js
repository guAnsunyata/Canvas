var userModel = require('./model/userModel');
var user = {
	create: function create(req, callback){
		var current_data = new Date();
		var new_user = new userModel({
			addedTime: current_data,
			profile: {
				uName : req.body.uName,
				email : req.body.email,
				password : req.body.password
			},
			isArtist: 0
		});
		new_user.save(function (err, user){
			if(err) throw err;
			callback(user);
		});
	},

	createArtist: function createArtist(req, callback){
		var current_data = new Date();
		var new_user = new userModel({
			profile: {
				uName : req.body.uName,
				email : req.body.email,
				password : req.body.password
			},
			isArtist: 1
		});
		new_user.save(function (err, user){
			if(err) throw err;
			callback(user);
		});
	},

	findAll: function findAll(callback){
		userModel.find({}, function (err, users){
				if(err) throw err;
				callback(users);
		});
	},

	findOne: function findOne(req, callback){
		userModel.findOne({_id: req.body.user_id}, function (err, user){
			if(err) throw err;
			callback(user);
		});
	},

	findArtist: function findArtist(req, callback){
		userModel.find({isArtist: 'true'}, function (err, user){

		});
	},

	deleteAll: function deleteAll(callback){
		userModel.remove({}, function (err, users){
			if(err) throw err;
			callback(users);
		});
	},

	deleteOne: function deleteOne(req, callback){
		userModel.remove({_id: req.body.user_id}, function (err, user){
			if(err) throw err;
			callback(user);
		});
	},

	updateUser: function updateUser(req, callback){
		var query = {_id: req.body.user_id}
		userModel.update(query, { $set:
			{	profile: {
				uName : req.body.uName,
				email : req.body.email,
				password : req.body.password
			}}}, function (err, user){
					if(err) throw err;
					callback(user);
				});
	},

	updateArtist: function updateArtist(req, callback){
		var query = {_id: req.body.user_id}
		userModel.update(query, {$set:
			{
				isArtist: 1
			}
		}, function (err, user){
			if(err) throw err;
			callback(user);
		});
	}


}

module.exports = user;
