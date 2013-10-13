'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('volunteers', function() {
    
    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });

    it('should redirect to a login screen', function() {
	expect(element('#login-form').count()).toBe(1);
    });

});
