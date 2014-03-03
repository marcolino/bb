'use strict';

app.controller('WeatherCtrl', [
  '$scope',
  'WeatherService',
  function ($scope, /*$window, geolocation, */weather) {
 
    $scope.position = null;
    $scope.weather = null;
    $scope.forecast = null;
    $scope.location = 'Portovenere,it';
 
/*
  geolocation().then(function(position) {
    $scope.position = position;
  });

  $scope.$watch('position', function(position) {
    if (!position) return;
 
    weather.current.byPosition(position.coords.latitude, position.coords.longitude).then(function(data) {
      $scope.weather = data;
    });
 
    weather.forecast.byPosition(position.coords.latitude, position.coords.longitude).then(function(data) {
      $scope.forecast = data;
    });
  });
*/

    $scope.updateWeather = function() {
      weather.current.byCity($scope.location).then(function (data) {
        $scope.weather = data;
      });
    
      weather.forecast.byCity($scope.location).then(function (data) {
        console.log(data);
        $scope.forecast = data;
      });
    };

    console.info('Updating weather...');
    $scope.updateWeather();

  }

]);