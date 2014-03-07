'use strict';

app.factory('YahooWeatherFactory', function YahooWeatherFactory($rootScope, $http/*, $log*/) {
  var FORECAST_QUERY =
    'http://query.yahooapis.com/v1/public/yql?q=' +
    'select * from weather.forecast where woeid="{woeid}" and u="{units}" &format=json';

  return {
    getWeatherForWOEID: function(woeid, units, successCallback, failureCallback) {
      var forecastQuery = FORECAST_QUERY.replace('{woeid}', woeid).replace('{units}', units);

      $http.get(forecastQuery)
        .success(function(data) { /* data, status, headers, config */
          successCallback(data);
        })
        .error(function(status) { /* data, status, headers, config */
          failureCallback(status);
        });
    }
  };

});

/*
app.service('YahooWeatherService', function YahooWeatherService($rootScope, $http, $log) {
  var FORECAST_QUERY =
    'http://query.yahooapis.com/v1/public/yql?q=' +
    'select * from weather.forecast where woeid="{woeid}" and u="{units}" &format=json';

  this.getWeatherForWOEID = function(woeid, units, successCallback, failureCallback) {
    var forecastQuery = FORECAST_QUERY.replace('{woeid}', woeid).replace('{units}', units);
    $http.get(forecastQuery)
      .success(function(data) {
        successCallback(data);
      })
      .error(function(status) {
        failureCallback(status);
      });
  };

});
*/