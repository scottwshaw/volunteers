'use strict';

/* jasmine specs for services go here */

describe('service', function() {
    describe('Users', function() {

	var usersSvc, $httpBackend;
	
	beforeEach(function () {
	    module('volunteers');
	    inject(function(Users, $injector) {
		usersSvc = Users;
		$httpBackend = $injector.get('$httpBackend');
		$httpBackend.whenPOST('https://api.parse.com/1/users').respond(200, '');
	    });
	});

	afterEach(function() {
	    $httpBackend.verifyNoOutstandingExpectation();
	    $httpBackend.verifyNoOutstandingRequest();
	});

	it('should create a new user when passed the correct info', function() {
	    var postData = {username: "testuser"};
	    var headers = {"X-Parse-Application-Id": "UN11VGWAQdcPiQArIB15FktakOANyczXzFDw6eEd",
			   "X-Parse-REST-API-Key": "BtPZpcL8cmAkCm9dqmI8wG5CCTELpqBLsP857qNB", 
			   "Content-Type": "application/json"};
	    $httpBackend.expectPOST('https://api.parse.com/1/users');
	    usersSvc.add({"username": "testuser"});
	    $httpBackend.flush();
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

	// TODO: These tests aren't great.  Will be refactoring to use mock backend
	it('should return false on an unrecognised email address login', function() {
	    spyOn(mockUsers, 'findByEmail').andReturn(null);
	    expect(authSvc.login('blah@blahdeeblah.com')).toBeFalsy();
	});

	it('should return Truthy on a known email address login', function() {
	    spyOn(mockUsers, 'findByEmail').andReturn({});
	    expect(authSvc.login('')).toBeTruthy();
	});
    });
});
