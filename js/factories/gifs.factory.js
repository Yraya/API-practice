angular.module('EOI').factory('GifsFactory', gifs);

function gifs($http) {
    var url = '';

    return {
        searchGifs: searchGifs
    }

    function searchGifs(keyWord) {
        return $http({  //Return para el siguiente then en el HomeController
            method: 'GET',
            url: "http://api.giphy.com/v1/gifs/search?q=" + keyWord + "&api_key=dc6zaTOxFJmzC"
        }).then(function successCallback(data) {
            console.log(data);
            var gifsObject = data["data"].data;
            var gifsUrl = [];
            for (var i=0; i < gifsObject.length; i++){
                gifsUrl.push(gifsObject[i].images.fixed_height.url);
            }
            
            return gifsUrl;
            
        }, function errorCallback(data) {
            console.log(404 + "Gifs not found");
            return [];
        });
    }

}