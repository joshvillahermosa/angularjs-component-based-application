(function () {
  'use strict';

  angular
    .module('app.home')
    .provider('homeRoutes', HomeRoutesProviders);
    // .service('homeRoutesService', HomeRoutesService);


  function HomeRoutesProviders() {
    var homeRoutesService = new HomeRoutesService();

    this.getRouteDefinition = function() {
      return homeRoutesService.getRouteDefinition();
    };

    this.$get = ['httpService', function(httpService) {
      return homeRoutesService = new HomeRoutesService()
    }];
  }

  /**
   * Home Routes
   */
  function HomeRoutesService() {

    var service = {
      getRouteDefinition: getRouteDefinition
    };

    return service;

    function getRouteDefinition() {
      return {
        name: 'home',
        url: '',
        component: 'ttHomeComponent',
        resolve: {
          tutors: function(httpService) {
            return httpService.getTutorList(6)
          }
        }
      };
    }
  }
})();
