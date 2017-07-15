'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */
 //main
angular.module('projectsApp')
.controller('MainCtrl',['$scope',
  function ($scope) {
  var v = this;
  v.name = "String";
  v.array = [{imageurl:"https://static.pexels.com/photos/20974/pexels-photo.jpg" ,id :123 ,name :"Love"},
{imageurl:"https://static.pexels.com/photos/20974/pexels-photo.jpg" ,id :123 ,name : "Jeet"},
{imageurl:"https://static.pexels.com/photos/20974/pexels-photo.jpg" ,id :123 ,name :"pavi"},
{imageurl:"https://static.pexels.com/photos/20974/pexels-photo.jpg" ,id :123 , name :"singh"}];
    console.log("main");

    v.openItem = function(id) {
      alert(id);
    }

  }]);
