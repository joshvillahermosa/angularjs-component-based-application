(function () {
  'use strict';

  angular
    .module('app.tutor')
    .provider('tutorRoutes', TutorRouteProviders);

  function TutorRouteProviders() {
    var tutorRoutesService = new TutorRoutesService();

    this.getRouteDefinition = function() {
      return tutorRoutesService.getRouteDefinition();
    };

    this.$get = ['httpService', function(httpService) {
      return tutorRoutesService = new TutorRoutesService()
    }];
  }

  /**
   * Tutor Routes
   */
  function TutorRoutesService() {

    var service = {
      getRouteDefinition: getRouteDefinition
    };

    return service;

    function getRouteDefinition() {
      return {
        name: 'tutor',
        url: '/tutor',
        component: 'ttTutorComponent',
        // resolve: {
        //   tutors: function(httpService) {
        //     return httpService.getTutorList(6)
        //   }
        // }
      };
    }
  }
})();
