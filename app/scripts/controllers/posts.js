'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post) {

  if ($location.path() === '/') {
    $scope.posts = Post.all;
  }
 
  $scope.resetPost = function () {
    $scope.post = {url: 'http://', title: ''};
  };

  $scope.resetPost();

  $scope.submitPost = function () {
    Post.create($scope.post).then(function (ref) {
      //$scope.resetPost();
      console.log(ref);
      $location.path('/posts/' + ref.name());
    });
  };

  $scope.upVotePost = function (postId, upVoted) {
    if (upVoted) {
      Post.clearVote(postId, upVoted);
    } else {
      Post.upVote(postId);
    }
  };
   
  $scope.downVotePost = function (postId, downVoted) {
    if (downVoted) {
      Post.clearVote(postId, !downVoted);
    } else {
      Post.downVote(postId);
    }
  };
   
  $scope.upVoted = function (post) {
    return Post.upVoted(post);
  };
   
  $scope.downVoted = function (post) {
    return Post.downVoted(post);
  };

  $scope.deletePost = function (postId) {
    Post.delete(postId);
  };
 
});
