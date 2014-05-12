'use strict';

app.factory('Carousel', function($resource, CONFIG) {
  return $resource(CONFIG.serverURL + 'slide/:slideId',
    {
		  slideId: '@slideId'
	  },
	  {
		  getSlides: {
		    method: 'GET',
			  isArray: true,
			  interceptor: {
          response: function (data) {
            console.log('response in interceptor', data);
          },
          responseError: function (data) {
            console.log('error in interceptor', data);
          }
        },
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