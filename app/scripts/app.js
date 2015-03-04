'use strict';

/**
 * @ngdoc overview
 * @name nodingBatApp
 * @description
 * # nodingBatApp
 *
 * Main module of the application.
 */
angular
  .module('nodingBatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


// Coding Bat
// The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.
// We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return True if we are in trouble. 
// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

// Given an int n, return the absolute difference between n and 21, 
//except return double the absolute difference if n is over 21.
// var diff21 = function(n) {
//   if (n <= 21)
//     return 21 - n;
//   else
//     return (n - 21) * 2
// }
// console.log(diff21(19));

// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. 
//We are in trouble if the parrot is talking and the hour is before 7 or after 20. 
//Return True if we are in trouble.
// function parrotTrouble(talking, hour) {
//  if (talking === true && (hour < 7 || hour > 20)) {
//     return true;
//  }   
//  else {
//    return false;
//  }
// }
// console.log(parrotTrouble(true, 6));
// console.log(parrotTrouble(true, 7));
// console.log(parrotTrouble(false, 6));

//Given 2 ints, a and b, return True if one of them is 10 or if their sum is 10. 
// var intTener = function(a, b) {
//   if (a === 10 || b === 10 || a + b === 10){
//     return true;
//   }
//   else {
//     return false;  
//   }
// };
// console.log(intTener(9, 10));
// console.log(intTener(9, 9));
// console.log(intTener(1, 9));




















