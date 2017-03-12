'use strict';

/**
 * @ngdoc service
 * @name projectsApp.commonservice
 * @description
 * # commonservice
 * Service in the projectsApp.
 */
angular.module('projectsApp')
  .service('commonservice', ['$mdToast', function ($mdToast) {

    var factory = this;

    factory.showToast = function(content){
      $mdToast.show(
        $mdToast.simple()
          .textContent(content)
          .position('top right')
          .hideDelay(2000)
      );
      // $mdToast.show({
      //   hideDelay   : 3000,
      //   position    : 'top right',
      //   // controller  : 'ToastCtrl',
      //   templateUrl : 'views/custom/customtoast.html'
      // });
    };

      // projectsApp.factory('Page', function() {
      // var title = 'default';
      // return {
      // title: function() { return title; },
      // setTitle: function(newTitle) { title = newTitle }
      //   };
      // });

  }]);
