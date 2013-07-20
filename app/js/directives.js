'use strict';

/* Directives */
angular.module('volunteerDirectives', []).
    directive('muted-on', function() {
	return function(scope, element, attrs) {
	    var c = element.attr("class");
	    alert("class is " + c);
	    if (scope[attrs.muted-on]) {
		element.attr("class", c + " muted");
	    }
	};
    });

