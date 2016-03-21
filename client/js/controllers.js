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
            $('#author').val('');
            $('#title').val('');
            $('#content').val('');
        }, function(err) {
            console.log(err);
        });
    };

}]);
