//Use to instantiate app, connect factory & controllers and configure app.
var app = angular.module('myBlogApp', ['myBlogApp.controllers', 'myBlogApp.factories', 'myBlogApp.services', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/blogposts.html',
        controller: 'PostPageController'
    })
    .when('/newpost', {
       templateUrl: 'views/newpost.html',
        controller: 'NewPostController'
    })
    // .when('/post/:id', {
    //     templateUrl: 'views/post.html',
    //     controller: 'InstructorDetailController'
    // })
    .otherwise({
        redirectTo: '/'
    });
}]);
