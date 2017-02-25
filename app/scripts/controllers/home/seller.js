'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:HomeSellerCtrl
 * @description
 * # HomeSellerCtrl
 * Controller of the projectsApp
 */

//seller
angular.module('projectsApp')
  .controller('HomeSellerCtrl',['$scope', function ($scope) {

    var view = this;

    view.init = function(){
      console.log('buyer');
    };

    view.showToast = function(){
      $scope.common.showToast('hello');
    };

    view.init();

  }]);
