var app = angular.module('app',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider.state('hotel', {
		    url: '/',
		    templateUrl: 'views/hotel.html',
		    controller: 'hotelCtrl',
		    authenticate: true
		})
		.state('packages', {
	    url: '/packages',
	    templateUrl: 'views/packages.html',
	    controller: 'packagesCtrl',
	    authenticate: true
	  })
		.state('searchpage', {
			url: '/searchpage',
			templateUrl: 'views/search.html',
			controller: 'searchCtrl',
			authenticate: true
		});
		$urlRouterProvider.otherwise("/");
	// $locationProvider.html5Mode({
	//   enabled: true,
	//   requireBase: false
	// }).hashPrefix('!');
}]);
app.run(function($rootScope) {
  $rootScope.isMobileView = ($(window).width() < 767);
});

// flightController
app.controller("hotelCtrl",['$scope','$state', function($scope, $state){
	$scope.state2 = $state.is('hotel');
	$('.datepicker').pickadate();
	$('.mdb-select').material_select();
	$('.carousel').carousel();
}]);
// packgesController
app.controller("packagesCtrl",['$scope','$state', function($scope, $state){
	$scope.state3 = $state.is('packages');
	$('.datepicker').pickadate();
	$('.mdb-select').material_select();
}]);
// hotelSearchController
app.controller("searchCtrl",['$scope','$state', function($scope, $state){
	$scope.state4 = $state.is('packages');
	$('.datepicker').pickadate();
	$('.mdb-select').material_select();
}]);
