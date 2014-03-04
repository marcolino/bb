'use strict';

app.controller('WeatherCtrl', [
  '$scope',
  'WeatherService',
  function ($scope, weather) {
    $scope.position = null;
    $scope.weather = null;
    $scope.forecast = null;
    $scope.location = 'Portovenere';
/*
    $scope.weather = {};
    $scope.weather.main = {};
    $scope.weather.main.temp = 272.15;
*/

    $scope.updateWeather = function() {
      weather.current.byCity($scope.location).then(function (data) {
        console.info('weather:');
        console.info(data);
        $scope.weather = data;
      });
    
      weather.forecast.byCity($scope.location).then(function (data) {
        console.info('forecast:');
        console.info(data);
        $scope.forecast = data;
      });
    };

    console.info('Updating weather...');
    $scope.updateWeather();
  }

]);