'use strict';
 
app.controller('ProfileCtrl',
  function ($scope, $routeParams, Post, User) {
    $scope.user = User.findByUsername($routeParams.username);

    $scope.user.$on('loaded', populatePosts);
 
    function populatePosts () {
      $scope.posts = {};
 
      angular.forEach($scope.user.posts, function(postId) {
        $scope.posts[postId] = Post.find(postId);
      });
    }
 
  });