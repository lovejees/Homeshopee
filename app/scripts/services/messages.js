'use strict';

/**
 * @ngdoc service
 * @name projectsApp.messages
 * @description
 * # messages
 * Constant in the projectsApp.
 */
angular.module('projectsApp')
  .constant('MSG', {
    validation:{
      'name_required':'Please enter your name',
      'email_required':'Please enter your email address',
      'invalid_email':'Please enter valid email',
      'password_length':'Password length is less than 8 characters',
      'successfull_login':'login successfull'
    },
    invalid_url:'Enter valid url',
    genericError:'Something went wrong. Please try again later',
    successfullDown:'File Successfully Downloaded'
  });
