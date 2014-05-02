'use strict';

app.factory('YahooWeatherFactory', function YahooWeatherFactory($rootScope, $http) {
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