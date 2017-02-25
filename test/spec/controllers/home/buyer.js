'use strict';

describe('Controller: HomeBuyerCtrl', function () {

  // load the controller's module
  beforeEach(module('projectsApp'));

  var HomeBuyerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeBuyerCtrl = $controller('HomeBuyerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HomeBuyerCtrl.awesomeThings.length).toBe(3);
  });
});
