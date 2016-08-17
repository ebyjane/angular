'use strict';

spaApp_site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/site/index', {
		templateUrl: 'views/site/index.html',
		controller: 'index'
	})

	.otherwise({
		redirectTo: '/site/index'
	});
}]);


spaApp_site.controller('index',[ '$scope', function($scope) {
jq(".carousel-inner").swipe( {
						//Generic swipe handler for all directions
						swipeLeft:function(event, direction, distance, duration, fingerCount) {
							jq(this).parent().carousel('next'); 
						},
						swipeRight: function() {
							jq(this).parent().carousel('prev'); 
						},
						//Default is 75px, set to 0 for demo so any distance triggers swipe
						threshold:0
					});  
}]);


