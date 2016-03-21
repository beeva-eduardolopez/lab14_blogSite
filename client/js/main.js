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
        .when('/post/:id', {
            templateUrl: 'views/post_detail.html',
            controller: 'PostDetailController'
        })
        .when('/updatepost/:id', {
            templateUrl: 'views/update_post.html',
            controller: 'PostUpdateController'
        })
        .otherwise({
            redirectTo: '/blogposts'
        });
}]);
