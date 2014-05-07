'use strict';
 
app.directive('scroll', function ($window, $location) {
  return function(scope/*, element, attrs*/) {
    angular.element($window).bind('scroll', function() {
      var bodyHeight = document.body.scrollHeight;
      var innerHeight = this.innerHeight;
      var pageYOffset = this.pageYOffset;

      if (innerHeight + pageYOffset >= bodyHeight) {
        console.log('Scrolled to bottom');
        $location.path('register');
      }
      if (innerHeight < bodyHeight && pageYOffset <= 0) {
        console.log('Scrolled to top');
        $location.path('reserve');
      }
      scope.$apply();
    });
  };
});