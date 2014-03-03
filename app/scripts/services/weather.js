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
        var path = '/weather?lat='+lat+'&lon='+lng;
        return request(path);
      },
      byCity: function(cityName) {
        var path = '/weather?q='+cityName;
        return request(path);
      },
      byCityId: function(cityId) {
        var path = '/weather?id='+cityId;
        return request(path);
      }
    },
    forecast: {
      byPosition: function(lat, lng, days, units) {
        var u = units || 'metric'; // internal, metric, or imperial
        var d = normalizeDays(days);
 
        var path = '/forecast/daily?lat='+lat+'&lon='+lng+'&cnt='+d+'&mode=json'+'&units='+u;
        return request(path);
      },
      byCity: function(cityName, days, units) {
        var u = units || 'metric'; // internal, metric, or imperial
        var d = normalizeDays(days);
 
        var path = '/forecast/daily?q='+cityName+'&cnt='+d+'&mode=json'+'&units='+u;
        return request(path);
      },
      byCityId: function(cityId, days, units) {
        var u = units || 'metric'; // internal, metric, or imperial
        var d = normalizeDays(days);
 
        var path = '/forecast/daily?id='+cityId+'&cnt='+d+'&mode=json'+'&units='+u;
        return request(path);
      }
    }
  };

}]);