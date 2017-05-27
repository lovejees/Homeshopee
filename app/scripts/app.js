'use strict';

/**
 * @ngdoc overview
 * @name projectsApp
 * @description
 * # projectsApp
 *
 * Main module of the application.
 */
angular.module('projectsApp', [
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
  .config(function ($routeProvider, $locationProvider, $provide) {
    // $provide.decorator('$sniffer', function($delegate) {
    //   $delegate.history = false;
    //   return $delegate;
    // });
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        // title: 'pavittar',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve:{
          title:['$rootScope', function($rootScope) {
            $rootScope.title = 'Job Done';
          }]
        }
      })
      .when('/about', {
        title: 'about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        resolve:{
          title:['$rootScope', function($rootScope) {
            $rootScope.title = 'About';
          }]
        }
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup',
        resolve:{
          title:['$rootScope', function($rootScope) {
            $rootScope.title = 'Sign Up';
          }]
        }
      })
      .when('/webToPdf', {
        templateUrl: 'views/home/seller.html',
        controller: 'HomeSellerCtrl',
        controllerAs: 'seller',
        resolve:{
          title:['$rootScope', function($rootScope) {
            $rootScope.title = 'Web To Pdf | Forzon App';
          }]
        }
      })
      .when('/findMyIp', {
        templateUrl: 'views/home/buyer.html',
        controller: 'HomeBuyerCtrl',
        controllerAs: 'buyer',
        resolve:{
          title:['$rootScope', function($rootScope) {
            $rootScope.title = 'Find My Ip | Forzon App';
          }]
        }
      })
      .when('/404', {
        templateUrl: '404.html',
      })
      .when('/guessnumber', {
        templateUrl: 'views/custom/guessthenumber.html',
        controller: 'GameGuessthenumberCtrl',
        controllerAs: 'guessnumber',
        resolve:{
          title:['$rootScope', function($rootScope) {
            $rootScope.title = 'Guess the number';
          }]
        }
      })
      .otherwise({
        redirectTo: '/404'
      });
  }).config(['$httpProvider',
  function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
  }
]);
