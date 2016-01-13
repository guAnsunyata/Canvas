var myApp = angular.module('myApp');

myApp.controller('SponseController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('SponseController loaded...');
	/* work.html */
	$http.post('/api/').success(function(data){
		
	});
	$scope.artist = 'Jake Weidmann';
	$scope.total = 0;
}]);