'use strict';
angular.module('volunteers', ['volunteerServices', 'volunteerDirectives', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
      $routeProvider.
	  when('/login', {
	      templateUrl: 'partials/login.html',
	      controller: LoginCtrl}).
	  when('/activities', {
	      templateUrl: 'partials/activities.html',   
	      controller: ActivityCtrl}).
	  when('/activities/:activityIndex', {
	      templateUrl: 'partials/activity-detail.html', 
	      controller: ActivityDetailCtrl}).
	  when('/registration', {
	      templateUrl: 'partials/registration.html', 
	      controller: RegistrationCtrl}).
	  otherwise({redirectTo: '/activities'});
  }]).run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
       $rootScope.$on("$routeChangeStart", function (event, next, current) {
	   if(!Auth.isLoggedIn() && ($location.path() != '/login') && ($location.path() != '/registration')) {
	       $rootScope.nextPathAfterLogin = $location.path();
               $location.path('/login');
	   }
       });
  }]);
