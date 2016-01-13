
Genre =require('../models/genre');
Book =require('../models/book');
User =require('../api/userAPI');
Work =require('../api/workAPI');
Transaction =require('../api/transactionAPI');
Style =require('../api/styleAPI');

module.exports = function (app, passport) {
	//transaction API

	//complete Transaction by buyer_id, seller_id, work_id, plan_id
	app.post('/api/createTransaction', function(req, res){
		Transaction.create(req, function(transaction){
			res.json(transaction);
		});
	});

	//get All Transaction 
	app.post('/api/findAllTransaction', function(req, res){
		Transaction.findAll(function(transactions){
			res.json(transactions);
		});
	});

	//get One Transaction by t_id
	app.post('/api/findOneTransaction', function(req, res){
		Transaction.findOne(req, function(transaction){
			res.json(transaction);
		});
	});

	//delete All Transaction
	app.post('/api/delAllTransaction', function(req, res){
		Transaction.deleteAll(function(transactions){
			res.json(transactions).end();
		});
	});

	//work API

	app.post('/api/createWork', function(req, res){
		Work.create(req, function(work){
			res.json(work);
		});
	});

	//get All Work
	app.post('/api/findAllWorks', function(req, res){
		Work.findAll(function(works){
			res.json(works);
		});
	});

	//get a Work by work_id
	app.post('/api/findOneWork', function(req, res){
		Work.findOne(req, function(work){
			res.json(work);
		});
	});

	//delete a work by work_id
	app.post('/api/delOneWork', function(req, res){
		Work.deleteOne(req, function(work){
			res.json(work);
		});
	});

	//delete All work
	app.post('/api/delAllWorks', function(req, res){
		Work.deleteAll(function(works){
			res.status(works).end();
		});
	});

	app.post('/api/updateWork', function(req, res){
		Work.updateWork(req, function(work){
			res.json(work);
		});
	});

	//get a plan by work_id, plan_id 
	app.post('/api/findPlan', function(req, res){
		Work.findPlan(req, function(plan){
			res.json(plan);
		});
	});


	/*app.post('/api/findPopularStyleWork', function({Style.findPopularStyle(function(req,styles){
		res.json(styles);
	})}
		,res){
		Work.findPopularWork(req, function(works){
			res.json(works);
		});
	});
*/

	//style API
	app.post('/api/createStyle', function(req, res){
		Style.create(req, function(style){
			res.json(style);
		});
	});

	app.post('/api/findOneStyle', function(req, res){
		Style.findOne(req, function(style){
			res.json(style);
		});
	});

	app.post('/api/findAllStyle', function(req, res){
		Style.findAll(function(styles){
			res.json(styles);
		});
	});

	app.post('/api/updateStyle', function(req, res){
		Style.updateStyle(req, function(style){
			res.json(style);
		});
	});

	app.post('/api/updateStyleScore', function(req, res){
		Style.updateScore(req, function(style){
			res.json(style);
		});
	});

	app.post('/api/delAllStyles', function(req, res){
		Style.deleteAll(function(styles){
			res.status(styles).end();
		});
	});

	app.post('/api/delOneStyle', function(req, res){
		Style.deleteOne(req, function(style){
			res.json(style);
		});
	});


	//user API
	app.post('/api/createUser', function(req, res){
		User.create(req, function(user){
			res.json(user);
		});
	});

	app.post('/api/incScore', function(req){
		User.incScore(req);
	});

	app.post('/api/createArtist', function(req, res){
		User.createArtist(req, function(user){
			res.json(user);
		});
	});

	//get all artist
	app.post('/api/findAllArtist', function(req, res){
		User.findAllArtist(req, function(users){
			res.json(users);
		});
	});

	//get a artist by user_id
	app.post('/api/findOneArtist', function(req, res){
		User.findArtist(req, function(users){
			res.json(users);
		});
	});

	//get all user
	app.post('/api/findAllUsers', function(req, res){
		User.findAll(function(users){
			res.json(users);
		});
	});

	//get a user by user_id
	app.post('/api/findOneUser', function(req, res){
		User.findOne(req, function(user){
			res.json(user);
		});
	});

	//delete all user
	app.post('/api/delAllUsers', function(req, res){
		User.deleteAll(function(users){
			res.status(users).end();
		});
	});


	//delete a user_id
	app.post('/api/delOneUser', function(req, res){
		User.deleteOne(req, function(user){
			res.json(user);
		});
	});

	app.post('/api/updateUser', function(req, res){
		User.updateUser(req, function(user){
			res.json(user);
		});
	});

	app.post('/api/updateUserName', function(req, res){
		User.updateName(req, function(user){
			res.json(user);
		});
	});

	app.post('/api/becomeArtist',function(req,res){
		User.updateArtist(req, function(user){
			res.json(user);
		});
	});

	app.post('/api/addWorktoUser',function(req,res){
		User.addWork(req, function(user){
			res.json(user);
		});
	});

	app.post('/api/beFollower',function(req,res){
		User.beFollower(req, function(user){
			res.json(user);
		});
	});

	app.post('/api/beSponsors',function(req,res){
		User.beSponsors(req, function(user){
			res.json(user);
		});
	});
	//user post end



	app.get('/', function(req, res){
		res.send('Please use /api/books or /api/genres');
	});

	app.get('/api/genres', function(req, res){
		Genre.getGenres(function(err, genres){
			if(err){
				throw err;
			}
			res.json(genres);
		});
	});

	app.post('/api/genres', function(req, res){
		var genre = req.body;
		Genre.addGenre(genre, function(err, genre){
			if(err){
				throw err;
			}
			res.json(genre);
		});
	});

	app.put('/api/genres/:_id', function(req, res){
		var id = req.params._id;
		var genre = req.body;
		Genre.updateGenre(id, genre, {}, function(err, genre){
			if(err){
				throw err;
			}
			res.json(genre);
		});
	});

	app.delete('/api/genres/:_id', function(req, res){
		var id = req.params._id;
		Genre.removeGenre(id, function(err, genre){
			if(err){
				throw err;
			}
			res.json(genre);
		});
	});

	app.get('/api/books', function(req, res){
		Book.getBooks(function(err, books){
			if(err){
				throw err;
			}
			res.json(books);
		});
	});

	app.get('/api/books/:_id', function(req, res){
		Book.getBookById(req.params._id, function(err, book){
			if(err){
				throw err;
			}
			res.json(book);
		});
	});

	app.post('/api/books', function(req, res){
		var book = req.body;
		Book.addBook(book, function(err, book){
			if(err){
				throw err;
			}
			res.json(book);
		});
	});

	app.put('/api/books/:_id', function(req, res){
		var id = req.params._id;
		var book = req.body;
		Book.updateBook(id, book, {}, function(err, book){
			if(err){
				throw err;
			}
			res.json(book);
		});
	});

	app.delete('/api/books/:_id', function(req, res){
		var id = req.params._id;
		Book.removeBook(id, function(err, book){
			if(err){
				throw err;
			}
			res.json(book);
		});
	});
}
