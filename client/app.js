var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'HomeController',
		templateUrl: 'views/canvas.html'
	})
	.when('/collections', {
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
	.when('/payment/work/:id',{
		controller:'WorkController',
		templateUrl: 'views/payment.html'
	})
	.when('/sponse/profile/:id',{
		controller:'SponseController',
		templateUrl: 'views/sponse.html'
	})
	.when('/transaction/:id',{
		controller:'TransactionController',
		templateUrl: 'views/transaction.html'
	})
	.when('/dashboard',{
		controller:'DashboardController',
		templateUrl: 'views/dashboard/Dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});