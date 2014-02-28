'use strict';
 
app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
  $scope.resetPost = function () {
    $scope.post = {url: 'http://', title: ''};
  };

  $scope.submitPost = function () {
    Post.create($scope.post).then(function (postId) {
      $scope.resetPost();
      $location.path('/posts/' + postId);
    });
  };

  $scope.logout = function () {
    Auth.logout();
  };
  
  $scope.resetPost();

});
