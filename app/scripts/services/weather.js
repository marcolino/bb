'use strict';

app.factory('WeatherService', ['$q', '$http', function($q, $http) {
  var SERVICE_ENDPOINT = 'http://api.openweathermap.org/data/2.5';
  var JSON_P_SUFFIX = '&callback=JSON_CALLBACK';
 
  var request = function(path) {
    var deferred = $q.defer();
 
    $http.jsonp(SERVICE_ENDPOINT + path + JSON_P_SUFFIX).
      success(function(data /*, status, headers, config*/) {
        deferred.resolve(data);
      }).
      error(function(data /*, status, headers, config*/) {
        deferred.reject(data);
      });
 
    return deferred.promise;
  };
 
  var normalizeDays = function(days) {
    var d = days;
 
    if (days === undefined || days === null || parseInt(days) < 1) {
      d = 7;
    }
    if (d > 14) { // max 14 days
      d = 14;
    }
 
    return d;
  };
 
  return {
    current: {
      byPosition: function(lat, lng) {
        return request('/weather?lat='+lat+'&lon='+lng);
      },
      byCity: function(cityName) {
        return request('/weather?q='+cityName);
      },
      byCityId: function(cityId) {
        return request('/weather?id='+cityId);
      }
    },
    forecast: {
      byPosition: function(lat, lng, days/*, units*/) {
        /*
        var d = normalizeDays(days);
        var path = '/forecast/daily?lat='+lat+'&lon='+lng+'&cnt='+d+'&mode=json'; //+'&units='+u;
        return request(path);
        */
        return request('/forecast/daily?lat='+lat+'&lon='+lng+'&cnt='+normalizeDays(days)+'&mode=json');
      },
      byCity: function(cityName, days/*, units*/) {
        /*
        var d = normalizeDays(days);
        var path = '/forecast/daily?q='+cityName+'&cnt='+d+'&mode=json'; //+'&units='+u;
        return request(path);
        */
        return request('/forecast/daily?q='+cityName+'&cnt='+normalizeDays(days)+'&mode=json');
      },
      byCityId: function(cityId, days/*, units*/) {
        /*
        var d = normalizeDays(days);
        var path = '/forecast/daily?id='+cityId+'&cnt='+d+'&mode=json'; //+'&units='+u;
        return request(path);
        */
        return request('/forecast/daily?id='+cityId+'&cnt='+normalizeDays(days)+'&mode=json');
      }
    }
  };

}]);