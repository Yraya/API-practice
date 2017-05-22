(function () {
    'use strict';

    angular
        .module('EOI')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$http', 'UsersFactory', 'GifsFactory'];

    function HomeController($scope, $http, UsersFactory, GifsFactory) {
        $scope.searchGifs = searchGifs;
        init();

        function init() {
            UsersFactory.init();
            $scope.users = UsersFactory.getAll();
        }

        function searchGifs() {
                GifsFactory.searchGifs($scope.gifKey).then (function(gifsUrl){
                    $scope.gifs = gifsUrl;
                });
            }
    }

    //Peticiones por id
    /*Get GIF by ID Endpoint

    Returns meta data about a GIF, by GIF id. In the below example, the GIF ID is "3o85xsGXVuYh8lM3EQ"

    http://api.giphy.com/v1/gifs/3o85xsGXVuYh8lM3EQ?api_key=dc6zaTOxFJmzC

    Para obtener la imagen de los meta datos:


    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/3o85xsGXVuYh8lM3EQ?api_key=dc6zaTOxFJmzC'
    }).then(function successCallback(response) {
        user.addGif(response.data.images.fixed_height.url);
      }, function errorCallback(response) {
        user.addGif("gif-not-found");
      });
    */


})();