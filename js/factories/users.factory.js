angular.module('EOI').factory('UsersFactory', users);

function users ($http) {
    var exampleUser = {
        id: 1234,
        name: 'Example Name',
        phone: 666000666,
        age: 21,
        email: 'example@eoi.com',
        photoUrl: 'https://pbs.twimg.com/media/CGrlkUFUIAIXHlW.jpg',
        gifs: [
            "http://media0.giphy.com/media/fvmz3gCAip1M4/200.gif", "https://media0.giphy.com/media/385FGfqyFXtgQ/200.gif", "http://media2.giphy.com/media/3o7abAHdYvZdBNnGZq/200.gif",
            "http://media4.giphy.com/media/3o85xsGXVuYh8lM3EQ/200.gif"
        ],
        comics: []
    };
    
    var userNotFound = {
        id: 0000,
        name: 'User Not Found',
        phone: 000000000,
        age: 00,
        email: 'user-not-found@eoi.com',
        photoUrl: 'images/image-not-found.svg' 
    };
    
    return {
        init: init,
        getAll : getAll,
        update : update,
        get : get,
        remove : remove
    } 
    
    function init(){
        var users = [];
        users.push(exampleUser);
        localStorage.setItem("usersData", JSON.stringify(users));
    }
    
	function getAll(){
        return JSON.parse(localStorage.getItem("usersData"));
    }
    
	function update(users){
        localStorage.setItem("usersData", JSON.stringify(users));
    }
    
	function get(userId){
        var users = JSON.parse(localStorage.getItem("usersData"));
        var index = getUserPosition(users, userId);
        if (index != -1) return users[index];
        else return userNotFound;
    }
    
    function getUserPosition (users, userId){
        for (var i = 0; i < users.length; i++){
            if (users[i].id == userId) return i;
        }
        return -1;
    }
    
	function remove(user){
        
    }
}