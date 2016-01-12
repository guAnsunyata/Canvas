var userModel = require('./model/userModel.js');
var styleModel = require('./model/styleModel.js');
var workModel = require('./model/workModel');
var userAPI = require('./userAPI.js');
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
				price: req.body.planPrice1,
				pType: req.body.type1
			},
			{
				name: req.body.planName2,
				decription: req.body.planDecription2,
				price: req.body.planPrice2,
				pType: req.body.type2
			},{
				name: req.body.planName3,
				decription: req.body.planDecription3,
				price: req.body.planPrice3,
				pType: req.body.type3
			},{
				name: req.body.planName4,
				decription: req.body.planDecription4,
				price: req.body.planPrice4,
				pType: req.body.type4
			}]
			//plan: req.body.plan
		});
		//console.log('des : ',req.body.planDecription3);
		new_work.save(function (err, work){
			if(err) throw err;
			console.log(userAPI.addWork);
			userAPI.addWork(req.body.user_id, new_work._id);
			callback(work);
		});
	},

	findAll: function findAll(callback){
		workModel.find({}, function (err, works){
				if(err) throw err;
				callback(works);
		});
	},

	findOne: function findOne(req, callback){
		workModel.findOne({_id: req.body.work_id}, function (err, work){
			if(err) throw err;
			callback(work);
		});
	},

	deleteOne: function deleteOne(req, callback){
		workModel.remove({_id: req.body.work_id}, function (err, work){
			if(err) throw err;
			callback(work);
		});
	},

	deleteAll: function deleteAll(callback){
		workModel.remove({}, function (err, works){
			if(err) throw err;
			callback(works);
		});
	},

	updateWork: function updateWork(req, callback){
		var query = {_id: req.body.work_id}
		//console.log('des : ',req.body.work_id);
		workModel.update(query, { $set:
			{	profile: {
				wName : req.body.wName,
				sizeX: req.body.sizeX,
				sizeY: req.body.sizeY,
				user: req.body.user_id,
				decription: req.body.decription,
				photo: req.body.photo
				//'../client/views/work_photo/' & req.body.photo
			},
			style: req.body.style_id,
			plan: [{
				name: req.body.planName1,
				decription: req.body.planDecription1,
				price: req.body.planPrice1,
				pType: req.body.type1
			},
			{
				name: req.body.planName2,
				decription: req.body.planDecription2,
				price: req.body.planPrice2,
				pType: req.body.type2
			},{
				name: req.body.planName3,
				decription: req.body.planDecription3,
				price: req.body.planPrice3,
				pType: req.body.type3
			},{
				name: req.body.planName4,
				decription: req.body.planDecription4,
				price: req.body.planPrice4,
				pType: req.body.type4
			}]
			}}, function (err, work){
					if(err) throw err;
					callback(work);
				});
	},

	/*findPopularWork: function findPopularWork(req, callback){
		var styles = styleModel.find({}).sort({score: 'desc'}).limit(2).exec(function (err, styles){
			if(err) throw err;
			callback(styles);
		});
		//console.log('des : ', styles._id);
		workModel.find({style: styles._id}, function (err, works){
			if(err) throw err;
			callback(works);
		});

	}*/
}

module.exports = work;
