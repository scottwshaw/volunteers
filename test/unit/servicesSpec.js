'use strict';

/* jasmine specs for services go here */

describe('service', function() {
    describe('Users', function() {

	var usersSvc;
	
	beforeEach(function () {
	    module('volunteers');
	    inject(function(Users) {
		usersSvc = Users;
	    });
	});
	
	it('should have a property called users that is an array', function() {
	    expect(usersSvc.users()).toEqual(jasmine.any(Array));
	});

	it('should have a function called findByEmail that returns Falsy when not found', 
	   function() {
	       var nonexistantEmail = 'not@there.com';
	       expect(usersSvc.findByEmail(nonexistantEmail)).toBeFalsy();
	});
    });
    describe('Auth', function() {

	var mockUsers, authSvc;
	
	beforeEach(function () {


	    module('volunteers', function ($provide) {
		mockUsers = {findByEmail: function() {}};		
		$provide.value('Users', mockUsers);
	    });

	    inject(function(Auth) {
		authSvc = Auth;
	    });
	});

	it('should return false on an unrecognised email address login', function() {
	    spyOn(mockUsers, 'findByEmail').andReturn(null);
	    expect(authSvc.login('blah@blahdeeblah.com')).toBeFalsy();
	});

	it('should return Truthy on a known email address login', function() {
	    // TODO: This test isn't great.  Will be refactoring to use mock backend
	    spyOn(mockUsers, 'findByEmail').andReturn({});
	    expect(authSvc.login('')).toBeTruthy();
	});
    });
});
