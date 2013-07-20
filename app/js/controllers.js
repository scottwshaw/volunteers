'use strict';
/* Controllers */
function ActivityCtrl($scope, Activities) {
    var intervals = ["12:00-1:00","1:00-2:00","2:00-3:00","3:00-4:00","4:00-5:00","5:00-6:00"]
    $scope.activities = Activities.activities;

    $scope.addActivity = function() {
    	var activity = {"name": $scope.newActivity};
	activity.timeSlots = _.map(intervals, function(interval) {
	    return {"interval":interval};
	});
	Activities.add(activity);
	$scope.newActivity = "";
	$scope.activities = Activities.activities;
    };

    $scope.removeActivity = function(activityIndex) {
	Activities.removeAt(activityIndex);
	$scope.activities = Activities.activities;
    };
};

function ActivityDetailCtrl($scope, $routeParams, Activities) {
    $scope.editing = false;
    $scope.activity = Activities.activities[$routeParams.activityIndex];
    $scope.edit = function() {
	$scope.editing = true;
    };
    $scope.save = function() {
	Activities.replace($routeParams.activityIndex, $scope.activity);
	$scope.editing = false;
    };
};
