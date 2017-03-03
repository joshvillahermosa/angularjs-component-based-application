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
      return new TutorRoutesService();
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
        url: '/tutor/:username',
        component: 'ttTutorComponent',
        resolve: {
          tutor: resolveTutor
        }
      };
    }

    function resolveTutor($stateParams, httpService) {
      return httpService.getTutor($stateParams.username);
    }
  }
})();
