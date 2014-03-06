'use strict';

app.controller('WeatherCtrl', [
  '$scope',
  '$rootScope',
  '$log',
  //'WeatherService',
  'YahooWeatherService',
  function ($scope, $rootScope, $log, YahooWeatherService) {
    $scope.position = null;
    $scope.weather = null;
    $scope.forecast = null;
    $scope.location = 'Portovenere'; // TODO: define in config...
    $scope.WOEID = '721122'; // TODO: getYahooWOEIDFromLocation()...
    $scope.units = 'C'; // TODO: define in config...

    // TODO: check Chrome: Version 33.0.1750.146 m doesn't allow "const" in strict mode...
//    var/*const*/ KELVIN_ABSOLUTE_ZERO = 272.15;
//    var/*const*/ language = 'it_IT'; // TODO: ...
//    var/*const*/ dayNames = [];
//    dayNames.it_IT =
//      [ 'Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab' ];
//    dayNames.en_EN =
//      [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
//    dayNames.en_US =
//      [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
//    $scope.weather = {};
//    $scope.title = $scope.location + ' - Weather conditions';

    $scope.getWeatherForWOEID = function() {
      $log.info(YahooWeatherService);
      YahooWeatherService.getWeatherForWOEID($scope.WOEID, $scope.units,
        function(data) {
          $log.info('Success:'); $log.info(data);
          $scope.currentWeatherForWoeid = data;
          var channel = $scope.currentWeatherForWoeid.query.results.channel;


          $scope.weather = {};
          var offsetDays = 0;
          $scope.weather.dayname = channel.item.forecast[offsetDays].day;
          $scope.weather.temperature = channel.item.forecast[offsetDays].high + '&deg;' + $scope.units;
          $scope.weather.icon = getWeatherIcon(channel.item.forecast[offsetDays].code);
          $scope.weather.description = channel.item.forecast[offsetDays].text;
          $scope.weather.humidity = 'Humidity:' + ' ' + channel.atmosphere.humidity + '%';
          $scope.weather.wind = 'Wind:' + ' ' + windDegSpeed2DirSpeed(channel.wind.direction, channel.wind.speed, channel.units.speed);

          $scope.weather.forecast1 = {};
          offsetDays++;
          $scope.weather.forecast1.dayname = channel.item.forecast[offsetDays].day;
          $scope.weather.forecast1.temperature = channel.item.forecast[offsetDays].low + '&deg;' + channel.units.temperature + ' / ' + channel.item.forecast[offsetDays].high + '&deg;' + channel.units.temperature;
          $scope.weather.forecast1.icon = getWeatherIcon(channel.item.forecast[offsetDays].code);
          $scope.weather.forecast1.description = channel.item.forecast[offsetDays].text;

          $scope.weather.forecast2 = {};
          offsetDays++;
          $scope.weather.forecast2.dayname = channel.item.forecast[offsetDays].day;
          $scope.weather.forecast2.temperature = channel.item.forecast[offsetDays].low + '&deg;' + channel.units.temperature + ' / ' + channel.item.forecast[offsetDays].high + '&deg;' + channel.units.temperature;
          $scope.weather.forecast2.icon = getWeatherIcon(channel.item.forecast[offsetDays].code);
          $scope.weather.forecast2.description = channel.item.forecast[offsetDays].text;

          $scope.weather.forecast3 = {};
          offsetDays++;
          $scope.weather.forecast3.dayname = channel.item.forecast[offsetDays].day;
          $scope.weather.forecast3.temperature = channel.item.forecast[offsetDays].low + '&deg;' + channel.units.temperature + ' / ' + channel.item.forecast[offsetDays].high + '&deg;' + channel.units.temperature;
          $scope.weather.forecast3.icon = getWeatherIcon(channel.item.forecast[offsetDays].code);
          $scope.weather.forecast3.description = channel.item.forecast[offsetDays].text;

          $scope.weather.forecast4 = {};
          offsetDays++;
          $scope.weather.forecast4.dayname = channel.item.forecast[offsetDays].day;
          $scope.weather.forecast4.temperature = channel.item.forecast[offsetDays].low + '&deg;' + channel.units.temperature + ' / ' + channel.item.forecast[offsetDays].high + '&deg;' + channel.units.temperature;
          $scope.weather.forecast4.icon = getWeatherIcon(channel.item.forecast[offsetDays].code);
          $scope.weather.forecast4.description = channel.item.forecast[offsetDays].text;

        },
        function(status) {
          $scope.currentWeatherForWoeid = null;
          $log.info('Failure:'); $log.info(status);
        }
      );
    };

/*
    $scope.updateWeather = function() {
      weather.current.byCity($scope.location).then(function (data) {
        console.info('weather:');
        console.info(data);
        var temperatureUnit = getPreferredTemperatureUnit();
        var windUnit = getPreferredWindUnit();
        console.log('unit: ' + temperatureUnit);
        $scope.weather.temperature = kelvin2Unit(data.main.temp, temperatureUnit);
        $scope.weather.icon = getWeatherIcon(data.weather[0].id);
        $scope.weather.description = data.weather[0].description;
        $scope.weather.humidity = 'Humidity:' + ' ' + data.main.humidity + '%';
        $scope.weather.wind = 'Wind:' + ' ' + windDegSpeed2DirSpeed(data.wind.deg, data.wind.speed, windUnit);
      });
    
      weather.forecast.byCity($scope.location).then(function (data) {
        console.info('forecast:');
        console.info(data);
        var date;
        var offsetDays = 0;
        var temperatureUnit = getPreferredTemperatureUnit();

        date = new Date(new Date().getTime() + ((++offsetDays * 24) * 60 * 60 * 1000));
        console.info(new Date(data.list[offsetDays].dt*1000));
        $scope.weather.forecast1 = {};
        $scope.weather.forecast1.dayname = dayNames[language][date.getDay()];
        $scope.weather.forecast1.temperature =
          kelvin2Unit(data.list[offsetDays].temp.min, temperatureUnit) + temperatureUnit + ' / ' +
          kelvin2Unit(data.list[offsetDays].temp.max, temperatureUnit) + temperatureUnit;
        $scope.weather.forecast1.description = data.list[offsetDays].weather[0].description;

        date = new Date(new Date().getTime() + ((++offsetDays * 24) * 60 * 60 * 1000));
        console.info(new Date(data.list[offsetDays].dt*1000));
        $scope.weather.forecast2 = {};
        $scope.weather.forecast2.dayname = dayNames[language][date.getDay()];
        $scope.weather.forecast2.temperature =
          kelvin2Unit(data.list[offsetDays].temp.min, temperatureUnit) + temperatureUnit + ' / ' +
          kelvin2Unit(data.list[offsetDays].temp.max, temperatureUnit) + temperatureUnit;
        $scope.weather.forecast2.description = data.list[offsetDays].weather[0].description;

        date = new Date(new Date().getTime() + ((++offsetDays * 24) * 60 * 60 * 1000));
        console.info(new Date(data.list[offsetDays].dt*1000));
        $scope.weather.forecast3 = {};
        $scope.weather.forecast3.dayname = dayNames[language][date.getDay()];
        $scope.weather.forecast3.temperature =
          kelvin2Unit(data.list[offsetDays].temp.min, temperatureUnit) + temperatureUnit + ' / ' +
          kelvin2Unit(data.list[offsetDays].temp.max, temperatureUnit) + temperatureUnit;
        $scope.weather.forecast3.description = data.list[offsetDays].weather[0].description;

        date = new Date(new Date().getTime() + ((++offsetDays * 24) * 60 * 60 * 1000));
        console.info(new Date(data.list[offsetDays].dt*1000));
        $scope.weather.forecast4 = {};
        $scope.weather.forecast4.dayname = dayNames[language][date.getDay()];
        $scope.weather.forecast4.temperature =
          kelvin2Unit(data.list[offsetDays].temp.min, temperatureUnit) + temperatureUnit + ' / ' +
          kelvin2Unit(data.list[offsetDays].temp.max, temperatureUnit) + temperatureUnit;
        $scope.weather.forecast4.description = data.list[offsetDays].weather[0].description;
      });
    };
*/

    function getPreferredTemperatureUnit() { // TODO: use Pascal Precht i18n module...
      return (language === 'en_US') ? 'F' : 'C';
    }

    function getPreferredWindUnit() { // TODO: use Pascal Precht i18n module...
      return (language === 'en_US') ? 'km/h' : 'm/s';
    }

    function getWeatherIcon(code) {
      if (code && code !== null) {
        var condition = null;
        var daynight = null;

        daynight = 'day'; // TODO: set it from localtime in $scope.location...

        if (code >= 200 && code <= 232) {
          condition = 'thunderstorm';
        }
        if (code >= 300 && code <= 321) {
          condition = 'showers';
        }
        if (code >= 500 && code <= 522) {
          condition = 'rain';
        }
        if (code >= 600 && code <= 621) {
          daynight = null;
          condition = 'snow';
        }
        if (code === 701) {
          daynight = null;
          condition = 'fog';
        }
        if (code === 711) {
          //daynight = null;
          //condition = 'smoke';
        }
        if (code === 721) {
          daynight = null;
          condition = 'fog';
        }
        if (code === 731) {
          //daynight = null;
          //condition = 'sand';
        }
        if (code === 741) {
          daynight = null;
          condition = 'fog';
        }
        if (code === 800) {
          if (daynight === 'day') {
            condition = 'sunny';
          } else {
            condition = 'clear';
          }
        }
        if (code >= 801 && code <= 805) {
          condition = 'cloudy';
        }
        if (code === 900) {
          daynight = null;
          condition = 'tornado';
        }
        if (code === 901) {
          //daynight = null;
          //condition = 'tropical storm';
        }
        if (code === 902) {
          //daynight = null;
          //condition = 'hurricane';
        }
        if (code === 903) {
          //daynight = null;
          //condition = 'cold';
        }
        if (code === 904) {
          //daynight = null;
          //condition = 'hot';
        }
        if (code === 905) {
          daynight = null;
          condition = 'windy';
        }
        if (code === 906) {
          daynight = null;
          condition = 'hail';
        }

        if (condition !== null) {
          if (daynight !== null) {
            return 'wi' + '-' + daynight + '-' + condition;
          } else {
            return 'wi' + '-' + condition;
          }
        }
      }
      return null;
    }

    function kelvin2Unit(input, unit) {
      if (unit === 'F') {
        return kelvin2Fahrenheit(input);
      }
      if (unit === 'C') {
        return kelvin2Celsius(input);
      }
      return null;
    }

    function kelvin2Fahrenheit(input) {
      if (input && input !== null) {
        return parseInt(((input - KELVIN_ABSOLUTE_ZERO) * 9 / 5) + 32) + '&deg;F';
      }
      return null;
    }

    function kelvin2Celsius(input) {
      if (input && input !== null) {
        return parseInt(input - KELVIN_ABSOLUTE_ZERO) + '&deg;';
      }
      return null;
    }

    function windDegSpeed2DirSpeed(degrees, speed, unit) {
console.log('function windDegSpeed2DirSpeed('+degrees+', '+speed+', '+unit+')');
      var directions = [
        'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
        'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'
      ];

      return directions[parseInt(((degrees + 11.25) / 22.5) % 16)] + ' ' + parseFloat(speed).toFixed(1) + ' ' + unit;
    }

    //$scope.updateWeather(); // update weather
    $scope.getWeatherForWOEID(); // update weather
  }

]);