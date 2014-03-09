'use strict';
 
// handle form submission when the form is completely valid  
app.controller('ReservationCtrl',
  function ($scope) {
    $scope.sendForm = function() {
      window.alert('form valid, sending request...');
    };
  }
);
