'use strict';

app.controller('CarouselHomeCtrl', function ($scope, Carousel) {
  $scope.interval = 5 * 1000;
  $scope.slides = [];

  $scope.getSlides = function() {
    $scope.slides = Carousel.getSlides(
      function (result) { console.info(result); },
      function (error) { console.info('ERROR: '); console.info(error.statusText);
                         $('#error').addClass('my-custom-error'); $('#error').html('Can\'t get slides: ' + error.statusText); }
    );
  };

  $scope.getSlide = function(id) {
    $scope.slideId = id;
    $scope.slides = Carousel.getSlide(
      { slideId: id },
      function () {},
      function (error) { console.info(error.statusText); }
    );
  };

  $scope.getSlides();
});
