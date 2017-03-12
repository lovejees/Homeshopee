'use strict';

describe('Controller: GameGuessthenumberCtrl', function () {

  // load the controller's module
  beforeEach(module('projectsApp'));

  var GameGuessthenumberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameGuessthenumberCtrl = $controller('GameGuessthenumberCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GameGuessthenumberCtrl.awesomeThings.length).toBe(3);
  });
});
