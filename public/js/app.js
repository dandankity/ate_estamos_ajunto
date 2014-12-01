define([
    'angular',
    './landing/index',
    'angular-route'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.landing'
    ]);
});
