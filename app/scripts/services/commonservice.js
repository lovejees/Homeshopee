'use strict';

/**
 * @ngdoc service
 * @name projectsApp.commonservice
 * @description
 * # commonservice
 * Service in the projectsApp.
 */
angular.module('projectsApp')
  .service('commonservice',['$http',function ($http) {
    var factory = {};

    factory.getItem = function() {
      return $http.post("https://dcaapi.dauble.com/event/list",{"classificationId":78});
    }

    return factory;
  }]);
