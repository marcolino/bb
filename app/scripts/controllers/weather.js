'use strict';

// TODO: avoid flickering (FOUC) (use ngCloak directive...)
app.controller('WeatherCtrl', [
  '$scope',
  '$rootScope',
  '$log',
  'YahooWeatherFactory',
  function ($scope, $rootScope, $log, YahooWeatherFactory) {
    $scope.position = null;
    $scope.weather = null;
    $scope.forecast = null;
    $scope.location = 'Portovenere'; // TODO: define in config...
    $scope.WOEID = '721122'; // got from http://woeid.rosselliot.co.nz
    $scope.units = 'c'; // TODO: define in config...
    $scope.title = $scope.location + ' - Weather';
    $scope.subtitleLeft = 'Current weather';
    $scope.subtitleRight = 'Forecast';

    $scope.getWeatherForWOEID = function() {
      //$log.info(YahooWeatherFactory);
      YahooWeatherFactory.getWeatherForWOEID($scope.WOEID, $scope.units,
        function(data) {
          $scope.currentWeatherForWoeid = data;
          $scope.weather = {};
          $scope.weather.forecast = [ {}, {}, {}, {}, {} ];
          var channel = $scope.currentWeatherForWoeid.query.results.channel;
          var offsetDays = 0;

          $scope.weather.forecast[offsetDays].dayname = channel.item.forecast[offsetDays].day;
          $scope.weather.forecast[offsetDays].temperature = channel.item.forecast[offsetDays].high + '&deg;'; // + $scope.units;
          $scope.weather.forecast[offsetDays].description = channel.item.forecast[offsetDays].text;
          $scope.weather.forecast[offsetDays].icon = 'images/weather/yahoo/white/' + channel.item.condition.code + '.png';
          $scope.weather.forecast[offsetDays].humidity = 'Humidity' + ':' + ' ' + channel.atmosphere.humidity + '%';
          $scope.weather.forecast[offsetDays].wind = 'Wind' + ':' + ' ' + windDegSpeed2DirSpeed(channel.wind.direction, channel.wind.speed, channel.units.speed);
          offsetDays++;

          $scope.weather.forecast[offsetDays].dayname = channel.item.forecast[offsetDays].day;
          $scope.weather.forecast[offsetDays].temperature = channel.item.forecast[offsetDays].low + '&deg;' + channel.units.temperature + ' / ' + channel.item.forecast[offsetDays].high + '&deg;' + channel.units.temperature;
          $scope.weather.forecast[offsetDays].description = channel.item.forecast[offsetDays].text;
          offsetDays++;

          $scope.weather.forecast[offsetDays].dayname = channel.item.forecast[offsetDays].day;
          $scope.weather.forecast[offsetDays].temperature = channel.item.forecast[offsetDays].low + '&deg;' + channel.units.temperature + ' / ' + channel.item.forecast[offsetDays].high + '&deg;' + channel.units.temperature;
          $scope.weather.forecast[offsetDays].description = channel.item.forecast[offsetDays].text;
          offsetDays++;

          $scope.weather.forecast[offsetDays].dayname = channel.item.forecast[offsetDays].day;
          $scope.weather.forecast[offsetDays].temperature = channel.item.forecast[offsetDays].low + '&deg;' + channel.units.temperature + ' / ' + channel.item.forecast[offsetDays].high + '&deg;' + channel.units.temperature;
          $scope.weather.forecast[offsetDays].description = channel.item.forecast[offsetDays].text;
          offsetDays++;

          $scope.weather.forecast[offsetDays].dayname = channel.item.forecast[offsetDays].day;
          $scope.weather.forecast[offsetDays].temperature = channel.item.forecast[offsetDays].low + '&deg;' + channel.units.temperature + ' / ' + channel.item.forecast[offsetDays].high + '&deg;' + channel.units.temperature;
          $scope.weather.forecast[offsetDays].description = channel.item.forecast[offsetDays].text;
          offsetDays++;

        },
        function(status) {
          $scope.currentWeatherForWoeid = null;
          $log.info('Failure: ' + status); // TODO: ...
        }
      );
    };
    function windDegSpeed2DirSpeed(degrees, speed, unit) {
      var directions = [
        'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
        'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'
      ];
      degrees = parseInt(degrees);
      return directions[parseInt(((degrees + 11.25) / 22.5) % 16)] + ' ' + parseFloat(speed).toFixed(1) + ' ' + unit;
    }

    $scope.getWeatherForWOEID(); // update weather
  }

]);
