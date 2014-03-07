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


/*
  self.getWOEID = function(position, successCallback, failureCallback) {
    var endPoint = GEOCODE_ENDPOINT + LOCATION + position.latitude + ',' + position.longitude + FLAGS + APP_ID;
    $log.info('End point = ' + endPoint);

    $http.get(endPoint)
      .success(function(data/., status, headers, config./) {
        successCallback(data);
      })
      .error(function(/.data, ./status/., headers, config./) {
        failureCallback(status);
      });
  };
*/