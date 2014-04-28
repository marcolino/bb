'use strict';

app.factory('Carousel', function($resource) {
  var SERVER_URL = '//localhost/ang-news/api/';

  return $resource(SERVER_URL + 'slide/:slideId',
    { slideId: '@slideId' },
    {
      getSlides: {
        method: 'GET',
        isArray: true
      },
      getSlide: {
        method: 'GET',
        params: { slideId: '@slideId' },
        isArray: true
      }
    }
  );

});