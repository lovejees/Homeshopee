'use strict';

/**
 * @ngdoc service
 * @name projectsApp.commonservice
 * @description
 * # commonservice
 * Service in the projectsApp.
 */
angular.module('projectsApp')
  .service('commonservice', ['$mdToast', '$http', function ($mdToast,$http) {

    var factory = this;

    this.showToast = function(content){
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

    factory.ShowSearches = function () {
      return $http.get('http://api.tvmaze.com/search/shows?q="the game of throne"');
  };

factory.webToPdf = function(website) {
  return $http({
    method : 'GET',
    url :'http://api.pdflayer.com/api/convert?access_key=ac6e85c68087c0dcd5c1f492961f4a5d&document_url='+website+'&document_name=forzonPDFapp',
    responseType:'arraybuffer'
  });
};

    return factory;

  }]);
