var myApp = angular.module('myApp');

myApp.controller('HomeController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('HomeController loaded...');
	$scope.works = [{
	    name: 'consuming-fire',
	    artist: 'Jake Weidmann',
	    image: 'images/pictureExample/Painting/Jake Weidmann/consuming-fire.jpg'
	}];
}]).directive('myCustomer', function() {
  // return {
  //   template: 'Name: {{customer.name}} Address: {{customer.address}}'
  // };
});