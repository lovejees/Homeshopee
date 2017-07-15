'use strict';

/**
 * @ngdoc directive
 * @name projectsApp.directive:appDirectives
 * @description
 * # appDirectives
 */
angular.module('projectsApp')
  .directive('appDirectives', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the appDirectives directive');
      }
    };
  }).directive('header' ,function(){
    return{
      templateUrl: 'views/header.html',
      restrict : 'EA'
    }
  });
