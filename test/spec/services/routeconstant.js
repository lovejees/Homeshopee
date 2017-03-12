'use strict';

describe('Service: routeConstant', function () {

  // load the service's module
  beforeEach(module('projectsApp'));

  // instantiate service
  var routeConstant;
  beforeEach(inject(function (_routeConstant_) {
    routeConstant = _routeConstant_;
  }));

  it('should do something', function () {
    expect(!!routeConstant).toBe(true);
  });

});
