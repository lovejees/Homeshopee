'use strict';

/**
 * @ngdoc service
 * @name projectsApp.titleService
 * @description
 * # titleService
 * Service in the projectsApp.
 */
angular.module('projectsApp')
  .service('titleService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.dynamicTitle = function(path){
    };
  });
