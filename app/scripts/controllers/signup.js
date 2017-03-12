'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the projectsApp
 */
 //signup
angular.module('projectsApp')
  .controller('SignupCtrl',['$scope', function ($scope) {

    var view = this;
    view.init = function(){
      view.seller = {};
      view.buyer = {};
      view.form = '';
    };

    view.setForm = function(form) {
      view.form = form;
    };

    view.isSet = function(form){
      return form === view.form;
    };

    view.searchingText = [
      {
        name:'hello'
      },{
        name:'bye'
      },{
        name:'pavittar'
      },{
        name:'singh'
      },{
        name:'madhu'
      },{
        name:'angular'
      },{
        name:'material'
      },{
        name:'amritsar'
      },{
        name:'yes'
      },{
        name:'no'
      },
    ];

    view.sellerSignup = function(){
      console.log(view.seller,view.buyer);
      $scope.setPath('/home/seller/pavittar');
    };

    view.buyerSignup = function(){
      console.log(view.seller,view.buyer);
      $scope.setPath('/home/buyer/pavittar');
    };

    view.init();

  }]);
