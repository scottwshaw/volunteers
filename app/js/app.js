'use strict';
angular.module('volunteers', ['ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/activities', {templateUrl: 'partials/activities.html',   controller: ActivityCtrl}).
      when('/activities/:activityIndex', {templateUrl: 'partials/activity-detail.html', controller: ActivityDetailCtrl}).
      otherwise({redirectTo: '/activities'});
}]);
