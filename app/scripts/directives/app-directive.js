'use strict';

/**
 * @ngdoc directive
 * @name projectsApp.directive:appDirective
 * @description
 * # appDirective
 */
angular.module('projectsApp')
  .directive('appDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the appDirective directive');
      }
    };
  })
  .directive('header', function () {
    return {
      restrict: 'EA',
      templateUrl: 'views/headerFooter/header.html'
      // template: '<div> yo yo yo yo yo oy oy ynhvhvgv </div>'
    };
  })
  .directive('footer', function () {
    return {
      restrict: 'EA',
      templateUrl: 'views/headerFooter/footer.html'
      // template: '<div> yo yo yo yo yo oy oy ynhvhvgv </div>'
    };
  })
  .directive('scrolltop', function ($window) {
    return function(scope,element,attrs){
      console.log($window.scrollTop);
      // $(window).scroll(function () {
      //       if ($(this).scrollTop() > 100) {
      //           $('.goToTop').fadeIn();
      //       } else {
      //           $('.goToTop').fadeOut();
      //       }
      //   });
      //   $('.goToTop').click(function () {
      //       $("html, body").animate({ scrollTop: 0 }, 1000);
      //       return false;
      //   });
    };
  });
