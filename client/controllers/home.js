var myApp = angular.module('myApp');

myApp.controller('HomeController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('HomeController loaded...');

	$http.post('/api/findAllWorks').success(function(data){
		console.log(data);
		data.reverse();
		var result = [];
		result.push(data[0]);
		result.push(data[4]);
		result.push(data[8]);
		result.push(data[9]);
		result.push(data[12]);
		result.push(data[14]);
		result.push(data[21]);
		result.push(data[27]);
		result.push(data[30]);
		result.push(data[31]);
		result.push(data[34]);
		result.push(data[35]);
		result.push(data[37]);
		result.push(data[41]);
		result.push(data[43]);
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