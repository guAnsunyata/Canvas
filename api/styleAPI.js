var styleModel = require('./model/styleModel');
var style = {
	create: function create(req, callback){
		var new_style = new styleModel({
			sName: req.body.sName,
			score: 0
		});
		new_style.save(function (err, style){
			if(err) throw err;
			callback(style);
		});
	},

	findAll: function findAll(callback){
		styleModel.find({}, function (err, styles){
				if(err) throw err;
				callback(styles);
		});
	},

	findOne: function findOne(req, callback){
		var query = {_id: req.body.style_id}
		styleModel.findOne(query, function (err, styles){
				if(err) throw err;
				callback(styles);
		});
	},

	updateStyle: function updateStyle(req, callback){
		var query = {_id: req.body.style_id}
		styleModel.update(query, {$set:
			{
				sName: req.body.sName
			}
		}, function (err, style){
			if(err) throw err;
			callback(style);
		});
	},
	//weirdCar.update({$inc: {wheels:1}}, { w: 1 }, callback);
	updateScore: function updateScore(req, callback){
		var query = {_id: req.body.style_id}
		styleModel.update(query, {$inc:
			{
				score:1
			}
		}, function (err, style){
			if(err) throw err;
			callback(style);
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
	}




}

module.exports = style;
