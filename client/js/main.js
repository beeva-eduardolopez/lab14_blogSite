//Use to instantiate app, connect factory & controllers and configure app.
var app = angular.module('myBlogApp', ['myBlogApp.controllers', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/blogposts', {
        templateUrl: 'views/blogposts.html',
        controller: 'PostPageController'
    })
    .when('/newpost', {
       templateUrl: 'views/newpost.html',
        controller: 'NewPostController'
    })
    .otherwise({
        redirectTo: '/blogposts'
    });
}]);
