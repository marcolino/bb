'use strict';
 
app.factory('Post',
  function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'posts');
 
    var posts = $firebase(ref);
 
    var Post = {
      all: posts,
      create: function (post) {
        return posts.$add(post);
      },
      find: function (postId) {
        return posts.$child(postId);
      },
      delete: function (postId) {
        return posts.$remove(postId);
      }
    };
 
    return Post;
  }
);

/*
'use strict';

app.factory('Post',
  function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'posts');
    var posts = $firebase(ref);
    var Post = {
      all: posts,
      create: function (post) {
        return posts.$add(post);
      },
      find: function (postId) {
        return posts.$child(postId);
      },
      delete: function (postId) {
        return posts.$remove(postId);
      },
      addComment: function (postId, comment) {
        if (User.signedIn()) {
          var user = User.getCurrent();
 
          comment.username = user.username;
          comment.postId = postId;
 
          posts.$child(postId).$child('comments').$add(comment).then(function (ref) {
            user.$child('comments').$child(ref.name()).$set({id: ref.name(), postId: postId});
          });
        }
      },
      deleteComment: function (post, comment, commentId) {
        if (User.signedIn()) {
          var user = User.findByUsername(comment.username);
 
          post.$child('comments').$remove(commentId).then(function () {
            user.$child('comments').$remove(commentId);
          });
        }
      }
    };
 
    return Post;
  });
*/
