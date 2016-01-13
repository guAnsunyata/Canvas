var myApp = angular.module('myApp');

myApp.controller('DashboardController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('DashboardController loaded...');
	var numberEach = ['0','0','291','48','3','7'];
	var RGB = ['#88C8AB','#50B584','#89C693','#A079B4','#4ABEB2','#E1AF31','#E65E50','#55B36C','#A7CD6B','#3991db', '#c2db39', '#9139db', '#db9839', '#d9db39', '#555', '#db6739', '#db39bb'];
	var percentEach = [80,50,45,37,26,15,13,13,10,5,107,59,57,22,20,15,14];
	var nameEach = ['色情','風景','科技','城市','色彩','食物','人情','山水','夢幻','霧','Erik Johansson', 'Seb Lester', 
						'ShimHaq98','Alexis Marcou','Ronaldrestituyo','Picomodi','Jake Weidmann'];
	var count = 0;
	var percentMax = 0;
	percentEach.forEach(function (percent) {
		if (percent > percentMax) percentMax = percent;
	});

	function progress(percent, element, number) {

		var progressBarWidth = percent * element.width() / 100;

		// With labels:
		element.find('div').animate({ width: progressBarWidth }, 500).html(number);
		
		// Without labels:
		//element.find('div').animate({ width: progressBarWidth }, 500);
	}



	$(document).ready(function() {
		$('.progressBar').each(function() { 
			var bar = $(this);
			var max = parseInt(100 - ((percentMax - percentEach[count]) / percentMax) * 100);
			var number = percentEach[count];
			if (number >= 1000) number = (number / 1000) + 'K';
			$(this).find('div').css('background-color', RGB[count % RGB.length]);
			count++;

			progress(max, bar, number);
		});
		count = 0;
		$('.Style-name').each(function() {
			$(this).html(nameEach[count]);
			count++;
		});
		count = 0;
		$('.num').each(function(){
			$(this).html(numberEach[count]);
			count++;
		});
	});

}]);
