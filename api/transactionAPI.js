var transactionModel = require('./model/transactionModel');
var workAPI = require('./workAPI.js');
var workModel = require('./model/workModel');
var transaction = {
	create: function create(req, callback){
		var current_data = new Date();
		var new_transaction = new transactionModel({
			buyer: req.body.buyer_id,
			seller: req.body.seller_id,
			works: req.body.work_id,
			plan: req.body.plan_id,
			transactionTime: current_data
		});
		new_transaction.save(function (err, transaction){
			transactionModel.findOne({_id: transaction._id})
			.populate({
				path: 'buyer'
			})
			.populate({
				path: 'seller'
			})
			.populate({
				path: 'works'
			})
			.exec(function (err, t) {
				workAPI.findPlan(req.body.work_id, req.body.plan_id, function(p){
					//console.log(t);
					callback(t, p);	
				});	
			})
			
		});
	},

	findAll: function findAll(callback){
		transactionModel.find({}, function (err, transactions){
			if(err) throw err;
			callback(transactions);
		});
	},

	findOne: function findOne(req, callback){
		/*transactionModel.findOne({_id: req.body.t_id}, function (err, transaction){
			if(err) throw err;
			callback(transaction);
		});*/
		transactionModel.findOne({_id: req.body.t_id})
			.populate({
				path: 'buyer'
			})
			.populate({
				path: 'seller'
			})
			.populate({
				path: 'works'
			})
			.exec(function (err, t) {
				workAPI.findPlan(req.body.work_id, req.body.plan_id, function(p){
					//console.log(t);
					callback(t, p);	
				});	
			})
	},

	deleteAll: function deleteAll(callback){
		transactionModel.remove({}, function (err, transactions){
			if(err) throw err;
			callback(transactions);
		});
	}




}

module.exports = transaction;
