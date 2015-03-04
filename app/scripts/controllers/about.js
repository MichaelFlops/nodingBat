'use strict';

/**
 * @ngdoc function
 * @name nodingBatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nodingBatApp
 */
angular.module('nodingBatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
