var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('PostPageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $http({
        url: '/api/posts',
        method: 'GET'
    }).then(function(result) {
        $scope.posts = result.data;
    }, function(err) {
        console.log(err);
    });

}]);

controllers.controller('NewPostController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $scope.postData = function() {
        var post = {};
        post.author = $('#author').val();
        post.title = $('#title').val();
        post.content = $('#content').val();
        $http({
            url: 'api/posts',
            method: 'POST',
            data: post
        }).then(function(result) {
            alert('The post has been sent correctly!. Press "List Post" to see this post in the list of the blog.')
            $('#author').val('');
            $('#title').val('');
            $('#content').val('');
        }, function(err) {
            console.log(err);
        });
    };

}]);

controllers.controller('PostDetailController', ['$scope', '$rootScope', '$http', '$routeParams', function($scope, $rootScope, $http, $routeParams) {

    var postid = $routeParams.id;
    $http({
        url: '/api/posts/' + postid,
        method: 'GET'
    }).then(function(result) {
        $scope.post = result.data;
    }, function(err) {
        console.log(err);
    });

}]);


controllers.controller('PostUpdateController', ['$scope', '$rootScope', '$http', '$routeParams', function($scope, $rootScope, $http, $routeParams) {
    var postid = $routeParams.id;
    $http({
        url: '/api/posts/' + postid,
        method: 'GET'
    }).then(function(result) {
        $scope.post = result.data;
    }, function(err) {
        console.log(err);
    });

    $scope.postUpdate = function() {
        var postid = $routeParams.id;
        var post = {};
        post.author = $('#author').val();
        post.title = $('#title').val();
        post.content = $('#content').val();
        $http({
            url: 'api/posts/' + postid,
            method: 'PUT',
            data: post
        }).then(function(result) {
            alert('The post has been update correctly!. Press "List Post" to see this post update in the list of the blog.')
            $('#author').val('');
            $('#title').val('');
            $('#content').val('');
        }, function(err) {
            console.log(err);
        });
    };

}]);


