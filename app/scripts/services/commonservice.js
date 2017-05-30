'use strict';

/**
 * @ngdoc service
 * @name projectsApp.commonservice
 * @description
 * # commonservice
 * Service in the projectsApp.
 */
angular.module('projectsApp')
  .service('commonservice', ['$http', function ($http) {

    var factory = this;

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
