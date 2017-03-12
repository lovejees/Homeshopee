'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:GameGuessthenumberCtrl
 * @description
 * # GameGuessthenumberCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('GameGuessthenumberCtrl',[ function () {

//     //DOMS
// var start = document.getElementsByClassName('start');
// var guess = document.getElementsByClassName('guess');
// var submit = document.getElementsByClassName('submit');
// var showResult = document.getElementById('result');
// var resultSetDom = document.getElementById('resultSetDom');
//
// //variables
// var i = 10;
// var randomNumber = 0
// var resultSet = [];
//
// function random() {
//     randomNumber = Math.floor(Math.random(1, 100) * 100);
// }
//
// random();
// start.button.style.visibility = 'hidden';
// start[0].addEventListener('click', function() {
//     i = 10;
//     submit.button.disabled = false;
//     guess[0].value = '';
//     start.button.style.visibility = 'hidden';
//     random();
// });
// //
// // guess[0].addEventListener('keydown', function(event) {
// //     if (guess[0].value.length > 1 || guess[0].value == '') {
// //         submit.button.disabled = false;
// //     } else {
// //         // guess[0].value = '';
// //         submit.button.disabled = true;
// //     }
// // });
//
// function result() {
//     resultSet.push(guess[0].value);
//     resultSetDom.innerHTML = '';
//     for (var i = 0; i < resultSet.length; i++) {
//       if (resultSet[i] == '') {
//         resultSetDom.innerHTML += 0 +' ';
//       }else {
//         resultSetDom.innerHTML += resultSet[i] +' ';
//       }
//     }
//     if (guess[0].value > randomNumber) {
//         // console.log('number is too high');
//         showResult.innerHTML = 'number is too high';
//         showResult.style.color = 'red';
//     } else if (guess[0].value < randomNumber) {
//         // console.log('number is too low');
//         showResult.innerHTML = 'number is too low';
//         showResult.style.color = 'cornflowerblue';
//     } else {
//         // console.log('congratulation you won');
//         showResult.innerHTML = 'congratulation you won';
//         showResult.style.color = 'yellowgreen';
//     }
// }
//
// function checkNo() {
//     i--;
//     if (i == 0) {
//       resultSet = [];
//       showResult.innerHTML = [];
//       resultSetDom.innerHTML = '';
//         submit.button.disabled = true;
//         start.button.style.visibility = 'visible';
//     } else {
//         result();
//     }
// };
//
// submit[0].addEventListener('click', checkNo);
//
// if (guess[0].attributes.value.value === '') {
//     // submit.button.disabled = true;
// }


  }]);
