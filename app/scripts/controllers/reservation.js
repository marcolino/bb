'use strict';
 
app.controller('ReservationCtrl',
  function ($scope, $rootScope, Reservation) {

    $scope.cfg = $rootScope.cfg;
    $scope.legend = 'Reservation';
    $scope.thanks = 'Thanks for your reservation request!<br />We will now contact you by email...';
    $scope.fields = {
      namesurname: {
        title: 'Your name and surname',
        required: true,
        minlen: 3,
        maxlen: 48
      },
      howmany: {
        title: 'How many persons you are',
        required: true,
        min: 1,
        max: 2
      },
      car: {
        title: 'Do you need parking?',
        required: true
      },
      when: {
        title: 'The date of your arrival',
        required: true
      },
      duration: {
        title: 'The nights you will stay',
        required: true,
        min: 2,
        max: 'undefined'
      },
      time: {
        title: 'The time of your arrival',
        required: true,
        minhour: 12,
        maxhour: 21,
        times: []
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

    for (var n = $scope.fields.time.minhour; n <= $scope.fields.time.maxhour; n++) {
      $scope.fields.time.times.push(((n < 10) ? '0' + n : n) + ':' + '00');
    }

    $scope.submitForm = function() {
      if ($scope.resForm.$valid) {
        // reservation form is valid, sending request... (TODO)
        $scope.resForm.submitted = true;
      } else {
        $scope.resForm.submitted = true;
      }
    };

    $scope.resetForm = function() {
      /*
      for (var validation in $scope.resForm.$error) {
        for (var count = 0; count < $scope.resForm.$error[validation].length; count++) {
          window.console.info($scope.resForm.$error[validation][count]);
        }
      }
      */
      $scope.resForm.$setPristine(true);
      $scope.resForm.submitted = false;
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
    $scope.maxDate.setYear($scope.maxDate.getFullYear() + 2);

    /*
    $scope.formats = ['fullDate', 'dd MMMM yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];
    */
    $scope.format = 'fullDate';

    $scope.disabled = function(date, mode) {
      // TODO: get disabled date from service...
      return ( mode === 'day' && ( date.getDate() === 17 ) );
    };
  }
);

// handle phone number validation
app.controller('PhoneCtrl',
  function ($scope) {
    $scope.phoneNumberPattern = (function() {
      //var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
      var regexp = /^\+?[0-9 \-\.]{10,}\*?$/;
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
