'use strict';

/**
 * @ngdoc overview
 * @name projectsApp
 * @description
 * # projectsApp
 *
 * Main module of the application.
 */
angular
  .module('projectsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngFileSaver',
    'toastr'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/home/seller/:name', {
        templateUrl: 'views/home/seller.html',
        controller: 'HomeSellerCtrl',
        controllerAs: 'seller'
      })
      .when('/home/buyer/:name', {
        templateUrl: 'views/home/buyer.html',
        controller: 'HomeBuyerCtrl',
        controllerAs: 'buyer'
      })
      .when('/404', {
        templateUrl: '404.html',
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
