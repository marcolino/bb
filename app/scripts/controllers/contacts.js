'use strict';
 
app.controller('ContactsCtrl',
  function ($scope, $rootScope) {
    $scope.cfg = $rootScope.cfg;
    $scope.title = 'Contact us';
    $scope.fields = [
      {
        key: 'Address',
        val: 'Via II Traversa Olivo, 13 - 19025 - Portovenere (SP)',
        glyphicon: 'home',
        ord: 1
      },
      {
        key: 'Phone',
        val: '+39 0187 790224',
        glyphicon: 'phone-alt',
        ord: 2
      },
      {
        key: 'Mobile',
        val: ' +39 349 2405593',
        glyphicon: 'phone',
        ord: 3
      },
      {
        key: 'Email',
        val: 'gliolivi@portovenere.biz',
        glyphicon: 'envelope',
        ord: 4
      },
      {
        key: 'Web',
        val: 'www.portovenere.biz',
        glyphicon: 'globe',
        ord: 5
      }
    ];

  }
);