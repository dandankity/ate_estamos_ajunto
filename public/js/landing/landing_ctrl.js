define(['./module', 'angular-route'], function(landing) {
  'use strict';

  landing.controller('landing', ['$scope', '$interval', 'countdown', function($scope, $interval, countdown) {

      updateTimes($scope, countdown);
      $scope.chegamos = countdown.getArrivalDate();
      $scope.chegamos_local_time = countdown.getArrivalLocalDate();

      $interval(function() {
        updateTimes($scope, countdown);
      }, 1000);

    }
  ]);

  landing.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/landing.html',
      controller: 'landing'
    });
  }]);

  function updateTimes($scope, countdown) {
    $scope.chicago_time = countdown.getTimeInChicago();
    $scope.local_time = new Date().toLocaleString();
    $scope.ourTime = countdown.getClock();
  }

});
