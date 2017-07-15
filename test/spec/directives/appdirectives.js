'use strict';

describe('Directive: appDirectives', function () {

  // load the directive's module
  beforeEach(module('projectsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<app-directives></app-directives>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the appDirectives directive');
  }));
});
