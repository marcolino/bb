'use strict';

app.factory('Reservation', function($resource) {
  var SERVER_URL = '//localhost/ang-news/api/';

  return $resource(SERVER_URL + 'email/:emailAddress',
    { email: '@emailAddress' },
    {
      verifyEmail: {
        method: 'VERIFYEMAIL',
        params: { email: '@emailAddress' },
        isArray: true
      }
    }
  );

});