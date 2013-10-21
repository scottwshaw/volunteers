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
    
    var volunteersBookedInThisInterval = function(timeSlot) {
	var alltimeslots = _.flatten(_.map(Activities.activities, function(a) {
	    return a.timeSlots;
	}));
	var allthistime = 
	    _.filter(alltimeslots, function(s) {
    		return (s.interval == timeSlot.interval);
	    });
	
	return _.compact(_.flatten(_.map(allthistime, function(t) {
	    return _.values(t.volunteers);
	})));
    };

    $scope.availableVolunteers = function(timeSlot, vindex) {
	var used = volunteersBookedInThisInterval(timeSlot);
	var avail = _.without.apply(null, [Volunteers.volunteers].concat(used));
	return _.compact(avail.concat([timeSlot.volunteers[vindex]]));
    }

    $scope.save = function() {
	Activities.replace($routeParams.activityIndex, $scope.activity);
	$scope.editing = false;
    };
};

function LoginCtrl($scope, $rootScope, $location, Auth) {
    Auth.logout();
    $scope.emailAddress = "";
    $scope.password = "";
    $scope.login = function() {
	if(Auth.login($scope.emailAddress)) {
	    $scope.loginFailed = false;
	    $location.path($rootScope.nextPathAfterLogin);
	} else {
	    $scope.loginFailed = true;
	    $location.path('/login');
	}
    };
};

function RegistrationCtrl($scope, Users) {
    $scope.email = "";
    $scope.password = "";
    $scope.phone = "";
    $scope.registerNewUser = function() {
	return Users.add({email: $scope.email, 
			  phone: $scope.phone,
			  password: $scope.password});
    };
    // $scope.removeActivity = function(activityIndex) {
    // 	Activities.removeAt(activityIndex);
    // 	$scope.activities = Activities.activities;
    // };
};

