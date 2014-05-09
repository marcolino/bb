'use strict';

app.factory('Carousel', function($resource, CONFIG) {
  return $resource(CONFIG.serverURL + 'slide/:slideId',
    {
		  slideId: '@slideId'
	  },
	  {
		  getSlides: {
		    method: 'GET',
			  isArray: true
		  },
		  getSlide: {
		    method: 'GET',
			  params: {
			    slideId: '@slideId'
			  },
			  isArray: true
		  }
		});
});