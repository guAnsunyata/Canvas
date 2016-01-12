var myApp = angular.module('myApp');

myApp.controller('WorkController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('WorkController loaded...');
	/* work.html */
	$http.post('/api/findAllWorks').success(function(data){
		alert('!', data);
	});
	var id = $routeParams.id;
	$scope.works = {
	    name: 'Consuming-Fire',
	    artist: 'Jake Weidmann',
	    image: 'images/pictureExample/Painting/Jake Weidmann/consuming-fire.jpg',
	    signDate: '2015/10/11'
	};
	$scope.artist = 'Jake Weidmann';
	/* payment.html */

}]);