var transactionModel = require('./model/transactionModel');
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
			if(err) throw err;
			callback(transaction);
		});
	},

	findAll: function findAll(callback){
		transactionModel.find({}, function (err, transactions){
			if(err) throw err;
			callback(transactions);
		});
	},

	deleteAll: function deleteAll(callback){
		transactionModel.remove({}, function (err, transactions){
			if(err) throw err;
			callback(transactions);
		});
	}




}

module.exports = transaction;
