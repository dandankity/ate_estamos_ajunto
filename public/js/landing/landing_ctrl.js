define(['./module'], function(landing) {
  'use strict';

  landing.controller('landing', ['$scope', '$interval',
    function($scope, $interval) {

      updateTimes($scope);
      $scope.arrival_time = getArrivalTime().toLocaleString();

      $interval(function() {
        updateTimes($scope);
      }, 1000);

    }
  ]);

  landing.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'partials/landing.html',
        controller: 'landing'
      });
    }
  ]);

  function getUtcTime() {
    var d = new Date();
    return d.getTime() + (d.getTimezoneOffset() * 60000);
  }

  function getTimeInChicago() {
    var chicagoOffset = -6;
    var utc = getUtcTime();
    var nd = new Date(utc + (3600000 * chicagoOffset));
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
    $scope.ourTime = countdown();
  }

  function countdown() {
    var days, hours, minutes, sec, timer, end;

    end = getArrivalTime().getTime();
    if (isNaN(end)) {
      console.log('feito!');
      return;
    }

    var current = getUtcTime();
    var remaining = parseInt((end - current) / 1000); //remaining seconds,

    if (remaining <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      sec = 0;
      return display(days, hours, minutes, sec);
    } else {

      days = parseInt(remaining / 86400);
      remaining = (remaining % 86400);
      hours = parseInt(remaining / 3600);
      remaining = (remaining % 3600);
      minutes = parseInt(remaining / 60);
      remaining = (remaining % 60);
      sec = parseInt(remaining) + 1;
      return display(days, hours, minutes, sec);
    }
  }

  function display(days, hours, minutes, sec) {
    var dl = days.toString().length;
    var sl;
    if (dl == "1") {
      sl = 2;
    } else {
      if (isNaN(dl)) {
        sl = 3;
      }
      sl = dl;
    }
    return {
      "days": ("00" + days).slice(-sl),
      "hours": ("0" + hours).slice(-2),
      "minutes": ("0" + minutes).slice(-2),
      "seconds": ("0" + sec).slice(-2)
    }
  }

});
