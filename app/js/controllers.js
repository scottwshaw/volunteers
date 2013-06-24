'use strict';
angular.module('volunteers',['ui.bootstrap']);
/* Controllers */
function ActivityCtrl($scope) {
    $scope.activities = [
	{"name": "Jaffle Smash"},
	{"name": "Curries"},
	{"name": "Corn on the cob"}
    ];
    $scope.addActivity = function() {
    	$scope.activities.push({"name": $scope.newActivity});
	$scope.newActivity = "";
    };
    $scope.removeActivity = function(activityIndex) {
	$scope.activities.splice(activityIndex, 1);
    };
}
