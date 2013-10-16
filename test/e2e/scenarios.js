'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('registration', function() {
    beforeEach(function() {
    	browser().navigateTo('../../app/index.html');
    });

    it('should redirect unlogged-in user to a login screen', function() {
	expect(element('#login-form').count()).toBe(1);
    });
    
    it('should provide a way for unlogged-in user to register', function() {
	expect(element('#register').count()).toBe(1);
    });
    
    it('should display a registration screen when the user wants to sign up', function() {
	element('#register').click();
	expect(element('#registration-form').count()).toBe(1);
    });
});
