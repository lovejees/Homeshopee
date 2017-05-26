'use strict';

/**
 * @ngdoc service
 * @name projectsApp.constants
 * @description
 * # constants
 * Constant in the projectsApp.
 */
angular.module('projectsApp')
  .constant('CONST', {
    appName:'Job Done',
    RoleIds:{
      'seller':1,
      'buyer':2
    },
    apps:[
      {
        'name':'web to Pdf',
        'link':'',
        'imgUrl':''
      },{
        'name':'News',
        'link':'',
        'imgUrl':''
      },{
        'name':'web to Pdf',
        'link':'',
        'imgUrl':''
      },{
        'name':'web to Pdf',
        'link':'',
        'imgUrl':''
      }
    ]
  });
