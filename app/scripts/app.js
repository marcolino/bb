'use strict';
/* global app:true */

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'ui.bootstrap'
])
.constant('FIREBASE_URL', 'https://blinding-fire-5694.firebaseio.com/')
.constant('APP_NAME', 'ang-news')
.constant('APP_VERSION', '0.1')
//.constant('LOCATION_NAME', 'Portovenere')
;
app.config(function ($routeProvider/*, $httpProvider*/) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/carousel-home.html',
      controller: 'CarouselHomeCtrl'
    })
    .when('/posts', {
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
    .when('/weather', {
      templateUrl: 'views/weather.html',
      controller: 'WeatherCtrl'
    })
    .when('/reserve', {
      templateUrl: 'views/reserve.html',
      controller: 'ReservationCtrl'
    })
    .when('/test', {
      templateUrl: 'views/test.html'
    })
    .otherwise({
      redirectTo: '/'
    });

  /*
  // push a responseInterceptor to httpProvider to simulate network slow-downs...
  $httpProvider.responseInterceptors.push(function ($q, $timeout) {
    var delay = 2;

    return function (promise) {
      var defer = $q.defer();

      $timeout(function () {
        promise.then(function (data) {
          defer.resolve(data);
        });
      }, delay * 1000);

      return defer.promise;
    };
  });
  */

  /*
  var language = function() { // TODO: use Pascal Precht i18n module...
    var lang, androidLang;
    // for earlier version of Android (2.3.x)
    if (navigator && navigator.userAgent && (androidLang = navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i))) {
      lang = androidLang[1];
    } else {
      // for iOS and Android 4.x
      lang = navigator.userLanguage || navigator.language;
    }
    return lang;
  };
  */

});

app.config(function (datepickerConfig) {
  datepickerConfig.showWeeks = false;
  datepickerConfig.startingDay = 1;
});

app.config(function (datepickerPopupConfig) {
  datepickerPopupConfig.showButtonBar = false;
});

app.run(function ($rootScope) {
  $rootScope.cfg = {
    siteName: 'B&B Gli Olivi',
    siteLogo: 'images/bbgliolivi-logo.png'
  };
});
