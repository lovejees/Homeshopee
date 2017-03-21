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
.controller('MainCtrl',['$scope','$location', 'CONST', 'ASSET', 'commonservice', '$rootScope','titleService','ROUTECONST',
  function ($scope, $location, CONST, ASSET, commonservice, $rootScope,titleService,ROUTECONST) {


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

    $scope.headerClass = function(path) {
      return path === $location.path();
    };

    $scope.setPath = function(path){
      $location.path(path);
      //  = '#/' + path;
    };

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        // $rootScope.title = $location.path();
        // ROUTECONST
    });

    $scope.init();

  }]);
