var userModel = require('./model/userModel.js');
var styleModel = require('./model/styleModel.js');
var workModel = require('./model/workModel');
var work = {
	create: function create(req, callback){
		var current_data = new Date();
		var new_work = new workModel({
			profile: {
				wName : req.body.wName,
				addedTime: current_data,
				sizeX: req.body.sizeX,
				sizeY: req.body.sizeY,
				user: req.body.user_id,
				decription: req.body.decription,
				photo: req.body.photo
				//'../client/views/work_photo/' & req.body.photo
			},
			score: 0,
			style: req.body.style_id,
			plan: [{
				name: req.body.planName1,
				decription: req.body.planDecription1,
				price: req.body.planPrice1
			},
			{
				name: req.body.planName2,
				decription: req.body.planDecription2,
				price: req.body.planPrice2
			},{
				name: req.body.planName3,
				decription: req.body.planDecription3,
				price: req.body.planPrice3
			},{
				name: req.body.planName4,
				decription: req.body.planDecription4,
				price: req.body.planPrice4
			}]
			//plan: req.body.plan
		});
		//console.log('des : ',req.body.planDecription3);
		new_work.save(function (err, work){
			if(err) throw err;
			callback(work);
		});
	},

	findAll: function findAll(callback){
		workModel.find({}, function (err, works){
				if(err) throw err;
				callback(works);
		});
	},
	deleteAll: function deleteAll(callback){
		workModel.remove({}, function (err, works){
			if(err) throw err;
			callback(works);
		});
	},

	


}

module.exports = work;
