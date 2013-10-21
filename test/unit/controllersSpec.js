'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
    describe('RegistrationCtrl', function() {
	var mockUsers, scope;
	
	beforeEach(function() {
	    module('volunteers', function ($provide) {
		mockUsers = {add: function() {}};		
		$provide.value('Users', mockUsers);
		scope = {};
		$provide.value('$scope', scope);
	    });
	});

	it('should create a new user based on the current scope variables', inject(function($controller) {
	    var testUser = {email: "a@b.c", password: "password", phone: "0401234567"};
	    var ctrl = $controller('RegistrationCtrl', {$scope: scope});
	    expect(scope.email).toBe("");
	    scope.email = testUser.email;
	    scope.password = testUser.password;
	    scope.phone = testUser.phone;
	    spyOn(mockUsers, 'add').andReturn(testUser);
	    scope.registerNewUser();
	    expect(mockUsers.add).toHaveBeenCalledWith(testUser);
	}));
    });
});
