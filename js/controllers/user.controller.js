(function() {
'use strict';

    angular
        .module('EOI')
        .controller('UserController', HomeController);

    HomeController.$inject = ['$scope', '$routeParams','UsersFactory'];
    function HomeController($scope, $routeParams, UsersFactory) {
        $scope.title = 'Bienvenido a la página principal';
        
        
        init();

        function init() {
            $scope.user = UsersFactory.get($routeParams.id);
        }
    }
})();