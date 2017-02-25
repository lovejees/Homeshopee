'use strict';

describe('Controller: HomeSellerCtrl', function () {

  // load the controller's module
  beforeEach(module('projectsApp'));

  var HomeSellerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeSellerCtrl = $controller('HomeSellerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HomeSellerCtrl.awesomeThings.length).toBe(3);
  });
});
