'use strict';

app.controller('CarouselHomeCtrl', function ($scope, $http) {
  $scope.interval = 5 * 1000;
  $scope.slides = [];

  $scope.getSlides = function() {
    var url = 'http://192.168.10.30/ang-news/app/server/';
    $http.get(
      url,
      {
        params: {
          user_id: 123
        }
      })
      .success(function (data) {
        $scope.slides = data;
        console.info($scope.slides);
      })
      .error(function (data, status) {
        console.log('Error! (' + status + ')');
      });
  };

  $scope.getSlides();
});
