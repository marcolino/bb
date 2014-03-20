'use strict';

app.factory('Carousel', function($resource) {
  var SERVER_URL = '//192.168.10.30/ang-news/api/';

  return $resource(SERVER_URL + 'slide', // /:slideId
		{ slideId: '@slideId' }, {
		  getSlides: {
        method: 'GET',
			  isArray: true
		  },
		  getSlide: {
        method: 'GET',
			  params: { slideId: '@slideId' },
			  isArray: false
		  }
		});

});