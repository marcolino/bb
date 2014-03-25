'use strict';

app.controller('MapCtrl', function ($scope, $rootScope) {
  //var GOOGLE_MAPS_TITLE = 'Mappa di Portovenere';
  //var GOOGLE_MAPS_BALLOON_TEXT = 'Il Bed & Breakfast "Gli Olivi" &egrave; qui';
  var GOOGLE_MAPS_ADDRESS_LATITUDE = 44.05954;
  var GOOGLE_MAPS_ADDRESS_LONGITUDE = 9.84278;
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
        mapTypeControl: false
      },
      tooltip: $rootScope.cfg.siteName
    }
  });

/*
  var latlng = new google.maps.LatLng(GOOGLE_MAPS_ADDRESS_LATITUDE, GOOGLE_MAPS_ADDRESS_LONGITUDE);
  $scope.markers = [];
      
  var infoWindow = new google.maps.InfoWindow();
      
  var createMarker = function (info) {      
    var marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(info.lat, info.lng),
      title: info.city
    });
    marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
    
    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
      infoWindow.open(map, marker);
    });
    
    $scope.markers.push(marker);
          
  }  
     var cities = [
      {
          city : 'PV',
          desc : 'This is the best city in the world!',
          lat : GOOGLE_MAPS_ADDRESS_LATITUDE,
          lng : GOOGLE_MAPS_ADDRESS_LONGITUDE
      }
    ];
  
  for (var i = 0; i < cities.length; i++){
    createMarker(cities[i]);
  }
  
  $scope.openInfoWindow = function(e, selectedMarker) {
    e.preventDefault();
    google.maps.event.trigger(selectedMarker, 'click');
  }
*/
/*
  $scope.myMarkers = [];
  $scope.myMarkers.push(new google.maps.Marker({
      map: $scope.map,
      position: latlng
    })
  );
*/
/*
  var map = new google.maps.Map(document.getElementById('map'));
  // add marker
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title: 'BB',
    animation: google.maps.Animation.DROP
  });
  // show info Window
  var infowindow = new google.maps.InfoWindow({
    content: 'contentString'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
*/

/*
  // add markers after map is loaded
  $scope.onMapIdle = function() {
    if ($scope.myMarkers === undefined) {
      var latlng = new google.maps.LatLng(GOOGLE_MAPS_ADDRESS_LATITUDE, GOOGLE_MAPS_ADDRESS_LONGITUDE);
      var marker = new google.maps.Marker({
        map: $scope.map,
        position: latlng
      });
      $scope.myMarkers = [ marker ];
    }
  };
*/
/*
  $scope.markerClicked = function(m) {
    window.alert('B&B Gli Olivi');
  };
*/
/*
  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(homeLatlng);
  });
*/

});