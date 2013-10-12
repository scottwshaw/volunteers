'use strict';

/* Services */

angular.module('volunteerServices', []).
    factory('Activities', function(Users) {

	var activitiesService = {};

	var intervals = ["12:00-1:00","1:00-2:00","2:00-3:00","3:00-4:00","4:00-5:00","5:00-6:00"];

	activitiesService.newActivity = function(activityName) {
	    var newActivity = {"name": activityName};
	    newActivity.timeSlots = _.map(intervals, function(interval) {
		return {"interval":interval, "volunteers":{0:"", 1:""}};
	    });
	    return newActivity;
	};	    

	activitiesService.add = function(activity) {
	    this.activities = _.union(this.activities, [activity]);
	};
	activitiesService.remove = function(activity) {
	    this.activities = _.without(this.activities, [activity]);
	};
	activitiesService.removeAt = function(activityIndex) {
	    var unwanted = this.activities[activityIndex];
	    this.activities = _.without(this.activities, unwanted);
	};
	activitiesService.replace = function(index, activity) {
	    var old = this.activities[index];
	    this.activities = _.union(_.without(this.activities, old), [activity]);
	};
	var a1 = activitiesService.newActivity("Jaffle Smash");
	a1.owner = Users.user(0);
	a1.timeSlots[0].volunteers = {0:"Johnny", 1:"Joey"};
	a1.timeSlots[0].notes = "Lock and load";
	a1.timeSlots[1].volunteers = {0:"Dee Dee", 1:"Marky"};
	a1.timeSlots[1].notes = "Road to ruin";
	var a2 = activitiesService.newActivity("Curries");
	a2.owner = Users.user(1);
	var a3 = activitiesService.newActivity("Corn on the cob");
	a3.owner = Users.user(2);

	activitiesService.activities = [a1, a2, a3];	
	return activitiesService;
    }).
    factory('Volunteers', function() {
    	var volunteersService = {};
    	volunteersService.volunteers = ["Rebecca Northeast", 
					"Rrrrosie", 
					"Bec", 
					"PJ", 
					"Johnny", 
					"Joey", 
					"Dee Dee", 
					"Marky", 
					"Fiona"];
	return volunteersService;
    }).

    factory('Users', function($http) {
	var usersService = {};

	var users = [{"name": "Geoff", "email": "geoff@somewhere.com"},
		    {"name": "Lisa"},
		    {"name": "Shane", "phone": "0414653576"}]; 

	usersService.users = function() {
	    return users;
	};
	usersService.user = function(index) {
	    return users[index];
	};
	usersService.findByEmail = function(candidateEmail) {
	    return _.findWhere(users, {email : candidateEmail});
	};

	usersService.add = function(userData) {
	    $http.post('https://api.parse.com/1/users',userData);
	}
	return usersService;
    }).	
    factory('Auth', function($rootScope,Users) {
	return {
            isLoggedIn: function(user) {
		return $rootScope.user;
            },
	    login: function(username) {
		if(!$rootScope.user) {
		    if(Users.findByEmail(username)) {
			$rootScope.user = username;
			return true;
		    }
		}
		return false;
	    }, 
            logout: function() {
		$rootScope.user = "";
            }
	}
    });




	
	    
