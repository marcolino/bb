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
    
/*
    $scope.$watch('date', function (date) {
      $scope.dateString = dateFilter(date, 'yyyy-MM-dd');
    });

    $scope.$watch('dateString', function (dateString) {
      $scope.date = new Date(dateString);
    });
*/
  }
);

app.controller('DatepickerCtrl',
  function ($scope) {
    $scope.minDate = new Date();
    $scope.maxDate = new Date();
    $scope.maxDate.setYear($scope.maxDate.getYear() + 1900 + 1);
    //window.console.info($scope.maxDate);

    $scope.formats = ['fullDate', 'dd MMMM yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDate() === 17 ) );
    };
/*
    $scope.todayHighlight = true;
    $scope.dateOptions = {
      'year-format': '\'yyyy\'',
      'starting-day': 1,
      'show-weeks': false,
      'today-highlight': true
    };
    window.console.log('DP');
    $scope.dateOptions = {
      'year-format': '\'yyyy\'',
      'starting-day': 1,
      'showWeeks': false
    };
    $scope.showWeeks = false;
    window.console.info($scope);
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];

  /.
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();
    $scope.dt = null;

    $scope.showWeeks = false;
    $scope.toggleWeeks = function () {
      $scope.showWeeks = ! $scope.showWeeks;
    };
  
    $scope.clear = function () {
      $scope.dt = null;
    };
  
    // disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };
  
    $scope.toggleMin = function() {
      $scope.minDate = ( $scope.minDate ) ? null : new Date();
    };
    $scope.toggleMin();
  
    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
  
      $scope.opened = true;
    };
  
    $scope.dateOptions = {
      'year-format': '\'yy\'',
      'starting-day': 1
    };
  
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];
./
*/
  }
);
