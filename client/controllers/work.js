var myApp = angular.module('myApp');

myApp.controller('WorkController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('WorkController loaded...');
	/* work.html */
	var id = $routeParams.id;
	$http.post('/api/findOneWork',{work_id: id}).success(function(data){
		console.log(data);
		$scope.work = data;
		$scope.plans = data.plan;
		$scope.onePlan = data.plan[0];
	});
	// $scope.works = {
	// 	_id: '1',
	//     name: 'Consuming-Fire',
	//     artist: 'Jake Weidmann',
	//     image: 'images/pictureExample/Painting/Jake Weidmann/consuming-fire.jpg',
	//     signDate: '2015/10/11',
	//     plan: {
	//     	name: '12 x 12 inches 授權印製平面乙張',
	//     	price: '1,000'
	//     }
	// };
	// $scope.artist = 'Jake Weidmann';
	/* route */
	$scope.goPay = function (id) {
	  var path = 'payment/work/' + id;
	  $location.path(path);
	};
	/* payment.html */
	$scope.goSuccess = function(id){
	  $http.post('/api/transaction',{work_id: id}).success(function(data){
		
	  });
	  var path = 'transaction/' + id;
	  $location.path(path);
	}
}]);