'use strict';
/* Controllers */
function ActivityCtrl($scope, $rootScope) {
    $rootScope.activities = [
	{"name": "Jaffle Smash", "owner": {"name": "Geoff", "email": "geoff@somewhere.com"}},
	{"name": "Curries", "owner": {"name": "Lisa"}},
	{"name": "Corn on the cob", "owner": {"name": "Shane", "phone": "0414653576"}}
    ];
    $scope.addActivity = function() {
    	$scope.activities.push({"name": $scope.newActivity});
	$scope.newActivity = "";
    };

    $scope.removeActivity = function(activityIndex) {
	$scope.activities.splice(activityIndex, 1);
    };

    $scope.open = function (activity) {
	$scope.shouldBeOpen = true;
	$scope.modalactivity = activity;
    };

    $scope.close = function () {
	$scope.shouldBeOpen = false;
    };

    $scope.opts = {
	backdropFade: true,
	dialogFade:true
    };

};

function ActivityDetailCtrl($scope, $rootScope, $routeParams) {
    $scope.editing = false;
    $scope.activity = $rootScope.activities[$routeParams.activityIndex];
    $scope.edit = function() {
	$scope.editing = true;
    };
    $scope.save = function() {
	$rootScope.activities[$routeParams.activityIndex] = $scope.activity;
	$scope.editing = false;
    };
};
