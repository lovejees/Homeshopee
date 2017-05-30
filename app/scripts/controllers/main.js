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
.controller('MainCtrl',['$scope','$location', 'CONST', 'ASSET', 'commonservice', '$rootScope','titleService','ROUTECONST', '$mdToast',
  function ($scope, $location, CONST, ASSET, commonservice, $rootScope,titleService,ROUTECONST,$mdToast) {


    $scope.init = function(){
      // $scope.isLogin = true;
      console.log('running');
      // $scope.checkLoginStatus();
      $scope.commonVariable();
    };

    $scope.showToast = function(content){
      $mdToast.show(
        $mdToast.simple()
          .textContent(content)
          .position('top')
          .hideDelay(2000)
      );
      // $mdToast.show({
      //   hideDelay   : 3000,
      //   position    : 'top right',
      //   // controller  : 'ToastCtrl',
      //   templateUrl : 'views/custom/customtoast.html'
      // });
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
