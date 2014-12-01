define(['./module'], function (landing) {
    'use strict';

    landing.controller('landing', ['$scope', '$interval', function ($scope, $interval) {

      updateTimes($scope);
      $scope.arrival_time = getArrivalTime().toLocaleString();

      $interval(function() {
          updateTimes($scope);
      }, 1000);

    }]);

    landing.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/landing.html',
            controller: 'landing'
        });
    }]);

    function getUtcTime() {
        var d = new Date();
        return d.getTime() + (d.getTimezoneOffset() * 60000);
    }

    function getTimeInChicago() {
        var chicagoOffset = -6;
        var utc = getUtcTime();
        var nd = new Date(utc + (3600000*chicagoOffset));
        return nd;
    }

    function getArrivalTime() {
      return new Date(Date.UTC(2014, 11, 12, 9, 0, 0));
    }

    function get_countdown() {
      return getArrivalTime() - getUtcTime();
    }

    function updateTimes($scope) {
      $scope.chicago_time = getTimeInChicago().toLocaleString();
      $scope.local_time = new Date().toLocaleString();
      $scope.until_together_time = get_countdown();
    }

});
