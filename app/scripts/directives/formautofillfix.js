'use strict';

app.directive('formAutofillFix', function() {
  return {
    //require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      scope.$watch(function () {
        return element.val();
      }, function(nv, ov) {
        if (nv !== ov) {
          ngModel.$setViewValue(nv);
        }
      });
    }
  };
});

/*
app.directive('formAutofillFix', function() {
  console.info('formAutofillFix');

  return function(scope, elem, attrs) {
    console.info('formAutofillFix2');
    // Fixes Chrome bug: https://groups.google.com/forum/#!topic/angular/6NlucSskQjY
    elem.prop('method', 'POST');

    // Fix autofill issues where Angular doesn't know about autofilled inputs
    if (attrs.ngSubmit) {
      console.info('formAutofillFix3');
      console.info(attrs.ngSubmit);
      setTimeout(function() {
        elem.unbind('submit').submit(function(e) {
          console.log('e:');
          console.log(e);
          e.preventDefault();
          elem.find('input, textarea, select').trigger('input').trigger('change').trigger('keydown');
          scope.$apply(attrs.ngSubmit);
        });
      }, 0);
    }
  };
});
*/