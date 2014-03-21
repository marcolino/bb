'use strict';

app.controller('CarouselHomeCtrl', function ($scope, Carousel/*, $http*/) {
  $scope.interval = 5 * 1000;
  $scope.slides = [];

  $scope.getSlides = function() {
    $scope.slides = Carousel.getSlides();
  };

  $scope.getSlide = function(id) {
    $scope.slideId = id;
    $scope.slides = Carousel.getSlide({ slideId: id });
  };

  $scope.getSlides();
});
