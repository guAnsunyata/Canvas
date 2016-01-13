var myApp = angular.module('myApp');

myApp.controller('LoginController', ['$scope', '$http', '$location', '$routeParams', '$window', function($scope, $http, $location, $routeParams, $window){
	console.log('LoginController loaded...');

	if($window.sessionStorage.getItem('isLogin')){
		//alert('login');
		$('#login').html('Mr.Demo');
		$('#signUp').html('logout');
		$('#signUp').removeAttr('href');
		$('#signUp').click(function(){
			$scope.logOut();
			$location.path('#/');
		});
	}else{
		//alert('off');
	}
	
	$scope.logIn = function logIn (){
		//alert('!!!');
		$window.sessionStorage.setItem('isLogin', true);
		$('#login').html('Mr.Demo');
		$('#signUp').html('logout');
		$('#signUp').click(function(){
			$scope.logOut();
		});
		$location.path('#/');
	}
	$scope.logOut = function logOut (){
		$window.sessionStorage.removeItem('isLogin');
	}
}]);
