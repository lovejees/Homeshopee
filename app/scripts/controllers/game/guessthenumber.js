'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:GameGuessthenumberCtrl
 * @description
 * # GameGuessthenumberCtrl
 * Controller of the projectsApp
 */
 //guessnumber
angular.module('projectsApp')
  .controller('GameGuessthenumberCtrl',['commonservice',
    function (commonservice) {

    var view = this;

    view.init = function(){
      view.gameVars = {
        chances:10,
        randomNumber:undefined,
        attempt:undefined,
        restart:false
      };
      view.gameVars.randomNumber = Math.floor(Math.random(1, 100) * 100);
      view.resultSet = [];
      view.data = new Set();
    };

    function setAttemptMSG(){
      var set = {};
      if (view.gameVars.randomNumber<view.guessNo) {
        view.gameVars.attempt = 1;
        set.msg = "H";
        set.class = 'red';
      }else if (view.gameVars.randomNumber>view.guessNo) {
        view.gameVars.attempt = 2;
        set.msg = "L";
        set.class = 'green';
      }
      set.number = view.guessNo;
      return set;
    }

    view.submit = function(){
      if (view.guessNo) {
        if (view.data.has(view.guessNo)) {
          commonservice.showToast(view.guessNo + " is already add to Set.", 'top left');
        }else {
          if (view.gameVars.randomNumber===view.guessNo) {
            view.gameVars.attempt = 3;
            view.gameVars.restart = true;
          }else {
            view.gameVars.chances--;
            view.data.add(setAttemptMSG());
          }
        }
        view.guessNo = undefined;
        view.resultSet = Array.from(view.data);
      }
      if (view.gameVars.chances===0) {
        view.gameVars.attempt = 4;
        view.gameVars.restart = true;
      }
    };


    view.restart = function(){
      view.init();
    };

    view.init();

  }]);
