'use strict';

app.filter('celsius', function() {
  return function(input) {
    if (input && input !== null) {
      var celsius = input - 272.15; // we suppose Kelvin in input
      celsius = parseInt(celsius);
      return celsius + '&deg;';
    }
  };
});