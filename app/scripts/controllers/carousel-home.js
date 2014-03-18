'use strict';

app.controller('CarouselHomeCtrl', function ($scope, $http) {
  $scope.interval = 5 * 1000;
  $scope.slides = [];
/*
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }
*/
  $scope.getSlides = function() {
    $http({
      //method: 'GetSlides',
      method: 'GET',
      url: 'http://192.168.10.30/ang-news/server'
    }).success(function (data, status, headers, config) {
      window.console.info(data);
      $scope.slides = data;
    }).error(function (data, status, headers, config) {
      $scope.message = 'Unexpected error getting slides from server';
      window.console.log(data);
      window.console.log($scope.message);
    });
  };

  $scope.getSlides();

});
