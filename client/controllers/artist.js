var myApp = angular.module('myApp');

myApp.controller('ArtistController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ArtistController loaded...');
	var id = $routeParams.id;
	var data = [{
		_id: 1,
	    name: 'consuming-fire',
	    artist: 'Jake Weidmann',
	    image: 'images/pictureExample/Painting/Jake Weidmann/consuming-fire.jpg'
	},{
		_id: 2,
	    name: 'consuming-fire',
	    artist: 'Jake Weidmann',
	    image: 'images/pictureExample/Calligraphy/Jake Weidmann/STEWARD.jpg'
	},{
		_id: 3,
	    name: 'consuming-fire',
	    artist: 'Jake Weidmann',
	    image: 'images/pictureExample/Calligraphy/Jake Weidmann/THE SOJOURNER\'S ROSE.jpg'
	},{
		_id: 4,
	    name: 'consuming-fire',
	    artist: 'Jake Weidmann',
	    image: 'images/pictureExample/Painting/Jake Weidmann/Indivisible.jpg'
	},{
		_id: 5,
	    name: 'consuming-fire',
	    artist: 'Jake Weidmann',
	    image: 'images/pictureExample/Painting/Jake Weidmann/Humming-A-Love-Song.jpg'
	},{
		_id: 6,
	    name: 'consuming-fire',
	    artist: 'Jake Weidmann',
	    image: 'images/pictureExample/Painting/Jake Weidmann/Transformation.jpg'
	}];
	$scope.works = data;
	$scope.artist = 'Jake Weidmann';

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
