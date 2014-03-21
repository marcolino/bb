'use strict';

app.controller('MapCtrl', function ($scope, $window) {
  var GOOGLE_MAPS_TITLE = 'Mappa di Portovenere';
  var GOOGLE_MAPS_BALLOON_TEXT = 'Il Bed & Breakfast "Gli Olivi" &egrave; qui';
  var GOOGLE_MAPS_ADDRESS_LATITUDE = 44.05954;
  var GOOGLE_MAPS_ADDRESS_LONGITUDE = 9.84278;
  var GOOGLE_MAPS_CENTER_LATITUDE = 44.07447;
  var GOOGLE_MAPS_CENTER_LONGITUDE = 9.84264;
  var GOOGLE_MAPS_ZOOM = 13;
 
  angular.extend($scope, {
    map: {
      center: {
        latitude: GOOGLE_MAPS_ADDRESS_LATITUDE,
        longitude: GOOGLE_MAPS_ADDRESS_LONGITUDE
      },
      zoom: GOOGLE_MAPS_ZOOM,
      draggable: true,
      options: {
        streetViewControl: false,
        panControl: false,
        maxZoom: 20,
        minZoom: 3,
        mapTypeId: google.maps.MapTypeId.HYBRID,
      }
    }
  });

  $scope.getWidth = function() {
    return $(window).width();
  };
  $scope.$watch($scope.getWidth, function(newValue, oldValue) {
    $scope.windowWidth = newValue;
    angular.element('.angular-google-map-container').css('height', $scope.windowWidth);
    console.info($scope.windowWidth);
  });
  window.onresize = function() {
    $scope.$apply();
  };

/*
  $scope.$on('$viewContentLoaded', function () {
    angular.element('.angular-google-map-container').css('height', 100);
  });
*/

});