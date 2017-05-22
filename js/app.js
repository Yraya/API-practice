(function () {
    'use strict';

    angular.module('EOI', ["ngRoute"])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
        $routeProvider
            .when("/", {
                controller: 'HomeController',
                templateUrl: '/views/home.html'
            })
            .when("/userProfile/:id", {
                controller: 'UserController',
                templateUrl: '/views/profile.html'
            })
            .otherwise({
                redirectTo: "/"
            });
    }
})();