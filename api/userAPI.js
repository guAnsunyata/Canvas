var userModel = require('./model/userModel');
var styleAPI = require('./styleAPI.js');
var workAPI = require('./workAPI.js');

var user = {
	create: function create(req, callback){
		var current_data = new Date();
		var new_user = new userModel({
			addedTime: current_data,
			profile: {
				uName : req.body.uName,
				title : req.body.title,
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
				title : req.body.title,
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
		userModel.findOne({_id: req.body.user_id, isArtist: 1}, function (err, user){
			if(err) throw err;
			callback(user);
		})
	},

	findAllArtist: function findAllArtist(req, callback){
		userModel.find({isArtist: 1}, function (err, user){
			if(err) throw err;
			callback(user);
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
	},

	/*addWork: function addWork(req, callback){
		var query = {_id: req.body.user_id}
		userModel.update(query,
		{ $pushAll: {works : [req.body.work_id]}},
		 function (err, user){
		 	if(err) throw err;
		 	callback(user);
		 });
	}*/
	addWork: function addWork(user_id, work_id){
		var query = {_id: user_id};
		//console.log('userAPI!');
		userModel.update(query,
		{ $pushAll: {works : [work_id]}}, function(err){
			if(err) throw err;
		});
	},


	addFavoriteWork: function addFavoriteWork(user_id, work_id){
		var query = {_id: user_id};
		//console.log('userAPI!');
		userModel.update(query,
		{ $pushAll: {favoriteWork : [{score: 1, work: work_id}]}}, function(err){
			if(err) throw err;
		});
	},

	addFavoriteStyle: function addFavoriteStyle(user_id, style_id){
		var query = {_id: user_id};
		//console.log('userAPI!');
		userModel.update(query,
		{ $pushAll: {favoriteStyle : [{score: 1, style: style_id}]}}, function(err){
			if(err) throw err;
		});
	},

	incScore: function incScore(req, callback){
		var _this = this;
		userModel.findOne({_id: req.body.user_id, 'favoriteWork.work': req.body.work_id}, function (err, user){
			if(user){
				console.log('555');
				_this.updateFavoriteWorkScore(req.body.user_id, req.body.work_id);
			}else{				
				console.log('user');
				_this.addFavoriteWork(req.body.user_id, req.body.work_id);
			}
		});
		userModel.findOne({_id: req.body.user_id, 'favoriteStyle.style': req.body.style_id}, function (err, user){
			if(user){
				_this.updateFavoriteStyleScore(req.body.user_id, req.body.style_id);
			}else{
				_this.addFavoriteStyle(req.body.user_id, req.body.style_id);
			}
		});
		styleAPI.updateScore(req.body.style_id);
		workAPI.updateScore(req.body.work_id);
	},

	updateFavoriteWorkScore: function updateFavoriteWorkScore(user_id, work_id){
		// userModel.findOne({_id: user_id, 'favoriteWork.work': work_id}, function(err, user){
		// 	function f (obj){
		// 		if(obj == work_id){
		// 			return true
		// 		}else{
		// 			return false
		// 		}
		// 	}
		// 	var target = user.favoriteWork.filter(f);
		// 	console.log(user);
		// });
		// userModel.update({_id: user_id, favoriteWork: {$eleMatch: {work: work_id}}}, {$inc:
		// 	{
		// 		score:1
		// 	}
		// }, function (err){
		// 	if(err) throw err;
		// });
		userModel.update({favoriteWork : {$elemMatch: {"work": '56954503e79ca1845133bc5a'}}}, {$set: {'favoriteWork.$.score' : 9}}, function(err){
			console.log(err);
		});
	},

	updateFavoriteStyleScore: function updateFavoriteStyleScore(user_id, style_id){
		userModel.update({_id: user_id, 'favoriteStyle.style': style_id}, {$inc:
			{
				score:1
			}
		}, function (err){
			if(err) throw err;
		});
	},

	beSponsors: function beSponsors(req, callback){
		var query = {_id: req.body.user_id};
		var ssponsorings ={money: req.body.money, sponsoring: req.body.sponsoring_id};
		var _this = this;
		userModel.update(query,
		{ $pushAll: {sponsorings : [ssponsorings]}},
		 function (err, user){
		 	if(err) throw err;
		 	_this.addSponsors(req.body.sponsoring_id, req.body.money, req.body.user_id);
		 	callback(user);
		 });
	},

	addSponsors: function addSponsors(user_id, smoney, sSponsors){
		var query = {_id: user_id};
		var sponsos ={money: smoney, sponsor: sSponsors};
		userModel.update(query,
		{ $pushAll: {sponsors : [sponsos]}},
		 function (err){
		 	if(err) throw err;
		 });	
	},

	beFollower: function beFollower(req, callback){
		var query = {_id: req.body.user_id};
		var _this = this;
		userModel.update(query,
		{ $pushAll: {followings : [req.body.following_id]}},
		 function (err, user){
		 	if(err) throw err;
		 	_this.addFollower(req.body.following_id, req.body.user_id);
		 	callback(user);
		 });
	},

	addFollower: function addFollower(user_id, follower){
		var query = {_id: user_id};
		userModel.update(query,
		{ $pushAll: {followers : [follower]}},
		 function (err){
		 	if(err) throw err;
		 });	
	}

}

module.exports = user;
