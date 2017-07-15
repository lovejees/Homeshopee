'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('ItemCtrl',['$scope','$route','commonservice','CONST', function ($scope,$route,commonservice,CONST) {

    var v = this;

    v.init = function(){
      console.log($route.current.params.id);
      v.getItem();
      console.log(CONST.appName);
    };

    v.getItem = function() {
      commonservice.getItem().then(function(result) {
        v.itemDetail = result.data.data;
      },function(err) {
        console.log(err);
      });
    };


    v.init();

  }]);
