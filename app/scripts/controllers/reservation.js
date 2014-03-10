'use strict';
 
// handle form submission when the form is completely valid  
app.controller('ReservationCtrl',
  function ($scope) {
    $scope.sendForm = function() {
      window.alert('form valid, sending request...');
    };
    $scope.resetForm = function() {
      $scope.reservation_form.$setPristine(true);
    };
    
    $scope.$watch('date', function (date) {
      $scope.dateString = dateFilter(date, 'yyyy-MM-dd');
    });

    $scope.$watch('dateString', function (dateString) {
      $scope.date = new Date(dateString);
    });
  }
);
