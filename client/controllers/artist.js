var myApp = angular.module('myApp');

myApp.controller('ArtistController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ArtistController loaded...');
	var id = $routeParams.id;
	
	$http.post('/api/findOneArtist',{user_id: id}).success(function(data){
		console.log(data);
		$scope.data = data;
		$scope.works = data.works;
		$scope.banner = data.works[1].profile.photo;
	});

	$scope.hoverIn = function(id){
		var pos = data.map(function(x) {return x._id; }).indexOf(id);
		var work = data[pos];
		$('.work img[data-id="'+id+'"]').addClass('hover');
	}
	$scope.hoverOut = function(id){
		console.log(id);
		$('.work img[data-id="'+id+'"]').removeClass('hover');
	}
}]);
