'use strict';
 
app.controller('ServicesCtrl',
  function ($scope, $rootScope) {
    $scope.cfg = $rootScope.cfg;
    $scope.title = 'Prices and Services';
    $scope.fields = [
      {
        key: 'Room',
        val: 'Double, with private bathroom',
        glyphicon: 'map-marker',
        ord: 1
      }, {
        key: 'Parking',
        val: 'One reserved place',
        glyphicon: 'record',
        ord: 2
      }, {
        key: 'Foreign languages spoken',
        val: 'English, French',
        glyphicon: 'globe',
        ord: 3
      }, {
        key: 'Double room price in low season (1/10 - 31/5)',
        val: '90€ per night',
        glyphicon: 'usd',
        ord: 4
      }, {
        key: 'Double room price in middle season (1/6 - 30/9)',
        val: '100€ per night',
        glyphicon: 'usd',
        ord: 5
      }, {
        key: 'Double room price in high season (1/8 - 31/8)',
        val: '120€ per night',
        glyphicon: 'usd',
        ord: 6
      }, {
        key: 'Breakfast',
        val: 'Inclusive',
        glyphicon: 'cutlery',
        ord: 7
      }, {
        key: 'Additional services',
        val: 'Fridge bar, TV sat, WI-FI',
        glyphicon: 'plus-sign',
        ord: 8
      },
    ];

  }
);