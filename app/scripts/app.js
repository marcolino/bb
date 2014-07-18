'use strict';
/* global app:true */

var configURI = '//192.168.10.30/bb/api/config';

window.deferredBootstrapper.bootstrap({
  element: window.document.body,
  module: 'angNewsApp',
  resolve: {
    CONFIG: function ($http) {
      return $http.get(configURI);
    }
  }
});


function showMessage(text, title, timeout) {
  console.info(title + ': ' + text);
}

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'ui.bootstrap',
  'google-maps'
])
.constant('FIREBASE_URL', 'https://blinding-fire-5694.firebaseio.com/')
.constant('APP_NAME', 'ang-news')
.constant('APP_VERSION', '0.1')
//.constant('LOCATION_NAME', 'Portovenere')
;
// TODO: move to "/api/config.json"...

/*
app.config(function (CONFIG) {
  console.log('in config() - CONFIG: ' + JSON.stringify(CONFIG));
});
*/

app.config(function ($routeProvider, $httpProvider) {
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
    .when('/map', {
      templateUrl: 'views/map.html',
      controller: 'MapCtrl'
    })
    .when('/contacts', {
      templateUrl: 'views/panel.html',
      controller: 'ContactsCtrl'
    })
    .when('/services', {
      templateUrl: 'views/panel.html',
      controller: 'ServicesCtrl'
    })
    .otherwise({
      templateUrl: '404.html'
    });

/*
  $httpProvider.interceptors.push('httpRequestInterceptor');

  app.factory('httpRequestInterceptor', function ($q, $location) {
    return {
      'responseError': function(rejection) {
        // do something on error
        if (rejection.status === 404) {
          $location.path('/404/');
          return $q.reject(rejection);
        }
      }
    };
  });
*/
/*
  $httpProvider.responseInterceptors.push(function($timeout, $q) {
    return function(promise) {
      return promise.then(function(successResponse) {
        if (successResponse.config.method.toUpperCase() !== 'GET') {
          showMessage('Success', 'successMessage', 5000);
        }
        return successResponse;
      }, function(errorResponse) {
        switch (errorResponse.status) {
          case 401:
            showMessage('Wrong usename or password', 'errorMessage', 20000);
            break;
          case 403:
            showMessage('You don\'t have the right to do this', 'errorMessage', 20000);
            break;
          case 500:
            showMessage('Server internal error: ' + errorResponse.data, 'errorMessage', 20000);
            break;
          default:
            showMessage('Error ' + errorResponse.status + ': ' + errorResponse.data, 'errorMessage', 20000);
        }
        return $q.reject(errorResponse);
      });
    };
  });
*/
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

app.run(function (/*CONFIG*/ /*, $rootScope*/ /*, $window*/) {
  /*console.log('in run() - CONFIG: ' + JSON.stringify(CONFIG));*/
/*
  $rootScope.cfg = {
    siteName: 'B&B Gli Olivi'
    siteLogo: 'images/bbgliolivi-logo.png'
  };
*/
/*
  $rootScope.windowWidth = $window.outerWidth;
  angular.element($window).bind('resize', function() {
    $rootScope.windowWidth = $window.outerWidth;
    window.console.log($rootScope.windowWidth);
    $rootScope.$apply('windowWidth');
    google.maps.event.trigger(angular.element($window).map, 'load');
  });
*/
});