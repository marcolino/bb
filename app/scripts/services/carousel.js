'use strict';

app.factory('Carousel', function($resource) {
  return $resource(_config.serverURL + 'slide/:slideId',
		{ slideId: '@slideId' }, {
		  getSlides: {
        method: 'GET',
			  isArray: true
		  },
		  getSlide: {
        method: 'GET',
			  params: { slideId: '@slideId' },
			  isArray: true
		  }
		});

});