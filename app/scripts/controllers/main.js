'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */
 //main
angular.module('projectsApp')
  .controller('MainCtrl',['$scope','$location', 'CONST', 'ASSET', 'commonservice',
  function ($scope, $location, CONST, ASSET, commonservice) {


    $scope.init = function(){
      // $scope.isLogin = true;
      console.log('running');
      // $scope.checkLoginStatus();
      $scope.commonVariable();
    };


    $scope.commonVariable = function(){
      $scope.constants = CONST;
      $scope.appName = $scope.constants.appName;
      $scope.assets = ASSET;
      $scope.common = commonservice;
    };

    $scope.setPath = function(path){
      $location.path(path);
      //  = '#/' + path;
    };

    $scope.init();

  }]);
