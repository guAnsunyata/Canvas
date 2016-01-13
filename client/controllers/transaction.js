var myApp = angular.module('myApp');

myApp.controller('TransactionController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('TransactionController loaded...');
	/* work.html */
	$http.post('/api/').success(function(data){
		
	});
	var transaction = {
		_id: '56947bc817c1ac501f04ed1c',
		time: '2016-01-19 11:24:06',
		buyer: '李冠德',
		artist: 'Jake Weidmann',
		work: 'Consuming-Fire',
		plan: '12 x 12 inches 授權印製平面乙張'
	}
	$scope.transaction = transaction;
	$scope._id = transaction._id;
}]);