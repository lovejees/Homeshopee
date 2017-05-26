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
  .controller('HomeSellerCtrl',['$scope','$http','FileSaver','Blob', function ($scope,$http,FileSaver,Blob) {

    var view = this;

    view.init = function(){
      console.log('buyer');
    };

    view.showToast = function(){
      $scope.common.showToast('hello');
    };

    view.ShowSearches = function(){
      $scope.common.ShowSearches().then(function(result) {
        console.log(result);
      },function(err) {
        console.log(err);
      });
    };

    function success(response) {
    var blob = new Blob([response.data], { type: "application/pdf"});
    //change download.pdf to the name of whatever you want your file to be
    saveAs(blob, "download.pdf");
    }

    view.webToPdf = function() {
      $scope.common.webToPdf(view.website).then(function(result) {
        success(result);
      },function(err) {
        $scope.common.showToast('hello');
      });
    };

    view.init();

  }]);
