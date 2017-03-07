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
    };
  })
  .directive('footer', function () {
    return {
      restrict: 'EA',
      templateUrl: 'views/headerFooter/footer.html'
    };
  })
  .directive('sellerForm', function () {
    return {
      restrict: 'EA',
      // template: '<div> Seller</div>'
      templateUrl: 'views/custom/form/sellerSignupForm.html'
    };
  })
  .directive('buyerForm', function () {
    return {
      restrict: 'EA',
      // template: '<div> Buyer</div>'
      templateUrl: 'views/custom/form/buyerSignupForm.html'
    };
  })
  .directive('scrolltop', function ($window) {
    return function(scope,element,attrs){
      console.log($window.scrollTop);
      console.log(element);
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
  })
  .directive('setActive', function () {
    return{
      scope:{
        defaultvalue:'=',
        activevalue:'='
      },
      link:function(scope,element,attrs){
      }
    }
  });
