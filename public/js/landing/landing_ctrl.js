define(['./module', 'angular-route'], function (landing) {
    'use strict';
    landing.controller('landing', [function ($scope) {

      console.log("hello world")

    }]);

    landing.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/landing.html',
            controller: 'landing'
        });
    }]);

});
