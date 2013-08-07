'use strict';
/* Controllers */
function ActivityCtrl($scope, Activities) {

    $scope.activities = Activities.activities;

    $scope.addActivity = function() {
    	var activity = Activities.newActivity($scope.newActivity);
	Activities.add(activity);
	$scope.newActivity = "";
	$scope.activities = Activities.activities;
    };

    $scope.removeActivity = function(activityIndex) {
	Activities.removeAt(activityIndex);
	$scope.activities = Activities.activities;
    };
};

function ActivityDetailCtrl($scope, $routeParams, Activities, Volunteers) {
    $scope.editing = false;
    $scope.activity = Activities.activities[$routeParams.activityIndex];
    $scope.volunteers = Volunteers.volunteers;
    $scope.edit = function() {
	$scope.editing = true;
    };
    $scope.cancel = function() {
	$scope.editing = false;
    };
    $scope.save = function() {
	Activities.replace($routeParams.activityIndex, $scope.activity);
	$scope.editing = false;
    };
};
