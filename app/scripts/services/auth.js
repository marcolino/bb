'use strict';
 
app.factory('Auth',
  function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
    var ref = new Firebase(FIREBASE_URL);
 
    var auth = $firebaseSimpleLogin(ref);
 
    var Auth = {
      register: function (user) {
        return auth.$createUser(user.email, user.password);
      },
      login: function (user) {
        return auth.$login('password', {
          email: user.email,
          password: user.password,
          rememberMe: true
        });
      },
      signedIn: function () {
        return auth.user !== null;
      },
      logout: function () {
        auth.$logout();
      }
    };
 
    $rootScope.signedIn = function () {
      return Auth.signedIn();
    };
 
    return Auth;
  }
);