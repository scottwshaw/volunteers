'use strict';

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
}
