'use strict';

describe('Service: ASSET', function () {

  // load the service's module
  beforeEach(module('projectsApp'));

  // instantiate service
  var ASSET;
  beforeEach(inject(function (_ASSET_) {
    ASSET = _ASSET_;
  }));

  it('should do something', function () {
    expect(!!ASSET).toBe(true);
  });

});
