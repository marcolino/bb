'use strict';
/* global app:true */

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
.constant('FIREBASE_URL', 'https://blinding-fire-5694.firebaseio.com/');
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
    .when('/users/:username', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
    .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
    .otherwise({
        redirectTo: '/'
      });
});
