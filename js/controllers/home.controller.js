(function () {
    'use strict';

    angular
        .module('EOI')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$http', 'UsersFactory'];

    function HomeController($scope, $http, UsersFactory) {
        $scope.searchGifs = searchGifs;
        init();

        function init() {
            UsersFactory.init();
            $scope.users = UsersFactory.getAll();
        }

        function searchGifs() {
            $http({
                method: 'GET',
                url: "http://api.giphy.com/v1/gifs/search?q=" + $scope.gifKey + "&api_key=dc6zaTOxFJmzC"
            }).then(function successCallback(data) {
                console.log(data);
                $scope.gifs = data["data"];
            }, function errorCallback(data) {
                console.log(404 + "No gifs found");
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