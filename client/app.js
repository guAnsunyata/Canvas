var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'HomeController',
		templateUrl: 'views/canvas.html'
	})
	.when('/collections/:id', {
		controller:'collectionsController',
		templateUrl: 'views/work.html'
	})
	.when('/artist/profile/:id',{
		controller:'ArtistController',
		templateUrl: 'views/artist.html'
	})
	.when('/artist/work/:id',{
		controller:'WorkController',
		templateUrl: 'views/work.html'
	})
	.when('/books/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_book.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});