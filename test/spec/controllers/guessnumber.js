'use strict';

describe('Controller: GuessnumberCtrl', function () {

  // load the controller's module
  beforeEach(module('projectsApp'));

  var GuessnumberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GuessnumberCtrl = $controller('GuessnumberCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GuessnumberCtrl.awesomeThings.length).toBe(3);
  });
});
