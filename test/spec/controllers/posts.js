'use strict';
 
describe('PostsCtrl', function() {
    var scope; // we'll use this scope in our tests
 
    // mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('Application'));
    // mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        // create an empty scope
        scope = $rootScope.$new();
        // declare the controller and inject our empty scope
        $controller('PostsCtrl', {$scope: scope});
      }));
    // tests start here
    it('should have variable text = "hello posts world!"', function() {
        expect(scope.text).toBe('hello posts world!');
      });
  });
