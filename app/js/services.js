'use strict';

/* Services */

angular.module('volunteerServices', []).
    factory('Activities', function() {
	var activitiesService = {};
	activitiesService.activities = 
	    [{"name": "Jaffle Smash", "owner": {"name": "Geoff", "email": "geoff@somewhere.com"}},
	     {"name": "Curries", "owner": {"name": "Lisa"}},
	     {"name": "Corn on the cob", "owner": {"name": "Shane", "phone": "0414653576"}}];
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
	return activitiesService;
    });
	    
