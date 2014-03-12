'use strict';
 
// handle form submission when the form is completely valid  
app.controller('ReservationCtrl',
  function ($scope) {

    $scope.legend = 'Reservation';
    $scope.fields = {
      namesurname: {
        title: 'Your name and surname',
        required: true
      },
      howmany: {
        title: 'How many persons you are',
        required: true
      },
      car: {
        title: 'Do you need parking?',
        required: true
      },
      when: {
        title: 'The date of your arrival',
        required: true
      },
      time: {
        title: 'The time of your arrival',
        required: true
      },
      email: {
        title: 'Your email address',
        required: true
      },
      phone: {
        title: 'Your phone number',
        required: false
      },
      info: {
        title: 'Other info...',
        required: false
      }
    };

/**/
    $scope.fields.namesurname.required = true;
    $scope.namesurnameMinLen = 3;
    $scope.namesurnameMaxLen = 48;
    $scope.limit = {};
    $scope.limit.howmany = {};
    $scope.limit.howmany.min = 1;
    $scope.limit.howmany.max = 2;
    $scope.title = {};
    $scope.title.namesurname = 'Your name and surname';
    $scope.title.howmany = 'How many persons you are';
    $scope.title.car = 'Do you need parking?';
    $scope.title.when = 'The date of your arrival';
    $scope.title.time = 'The time of your arrival';
    $scope.title.email = 'Your email address';
    $scope.title.phone = 'Your phone number';
    $scope.title.info = 'Other info...';
    $scope.required = {};
    $scope.required.namesurname = true;
    $scope.required.info = false;
/**/

    $scope.submitForm = function() {
      if ($scope.reservation_form.$valid) {
        // Submit as normal
        window.alert('reservation form is valid, sending request...');
      } else {
        $scope.reservation_form.submitted = true;
      }
    };
/*
    $scope.resetForm = function() {
      $scope.reservation_form.$setPristine(true);
      $scope.reservation_form.submitted = false;
    };
*/
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

app.controller('PhoneCtrl',
  function ($scope) {
    $scope.phoneNumberPattern = (function() {
      var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
      return {
        test: function(value) {
          if ($scope.requirePhone === false) {
            return true;
          } else {
            return regexp.test(value);
          }
        }
      };
    })();
  }
);
