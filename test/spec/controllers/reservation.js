'use strict';

describe('Controller: ReservationCtrl', function () {

  // load the controller's module
  beforeEach(module('angNewsApp'));

  var
    ReservationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReservationCtrl = $controller('ReservationCtrl', {
      $scope: scope
    });
  }));

  it('scope should be defined', function () {
    expect(scope).toBeDefined();
  });
});