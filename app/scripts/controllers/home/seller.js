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
  .controller('HomeSellerCtrl',['$scope','$http','FileSaver','Blob','MSG', 'toastr',
  function ($scope,$http,FileSaver,Blob,MSG,toastr) {

    var view = this;

    view.init = function(){
      view.download = false;
    };

    view.ShowSearches = function(){
      $scope.common.ShowSearches().then(function(result) {
      },function(err) {
      });
    };

    function success(response) {
    var blob = new Blob([response.data], { type: "application/pdf"});
    //change download.pdf to the name of whatever you want your file to be
    saveAs(blob, "download.pdf");
    view.download = false;
    toastr.success(MSG.successfullDown);
    }

    function Validate(){
      if (angular.isDefined(view.website) && view.website.length>4) {
        view.download = false;
        return true;
      }else {
        view.download = false;
        toastr.error(MSG.invalid_url);
        return false;
      }
    }

    view.webToPdf = function() {
      if (!Validate()) {
        return false;
      }
      view.download = true;
      $scope.common.webToPdf(view.website).then(function(result) {
        if (result.status === 200) {
          success(result);
        }else {
          toastr.error(MSG.genericError);
        }
      },function(err) {
        toastr.error(MSG.genericError);
      });
    };

    view.init();

  }]);
