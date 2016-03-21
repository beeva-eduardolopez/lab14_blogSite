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
        .when('/newpost/:id', {
            templateUrl: 'views/post_detail.html',
            controller: 'PostDetailController'
        })
        .otherwise({
            redirectTo: '/blogposts'
        });
}]);
