'use strict';
 
app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
  $scope.resetPost = function () {
    $scope.post = {url: 'http://', title: ''};
  };

  $scope.submitPost = function () {
    Post.create($scope.post).then(function (ref) {
      $location.path('/posts/' + ref.name());
      $scope.resetPost();
    });
  };
 
  $scope.logout = function () {
    Auth.logout();
  };
  
  $scope.resetPost();

});
