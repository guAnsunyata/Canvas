var myApp = angular.module('myApp');

myApp.controller('HomeController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('HomeController loaded...');

	$http.post('/api/findAllWorks').success(function(data){
		console.log(data);
		data.reverse();
		var result = [];
		result = data.slice(0,15);
		$scope.works = result;
	});

	$http.post('/api/findAllArtist').success(function(data){
		console.log(data);
		$scope.artists = data;
	});

}]).directive('myCustomer', function() {
  // return {
  //   template: 'Name: {{customer.name}} Address: {{customer.address}}'
  // };
});