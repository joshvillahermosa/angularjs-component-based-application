(function () {
  'use strict';

  angular
    .module('app')
    .config(appRouteConfig)

  appRouteConfig.$inject = ['$stateProvider'];

  function appRouteConfig($stateProvider) {
    console.log('App Route Init');

    var HomeState = {
      name: 'home',
      url: '',
      component: 'ttHomeComponent',
      resolve: {
        init: homeRouteResolve
      }
    }

    $stateProvider.state(HomeState);
  }

  function homeRouteResolve() {
    return 'Home Page Resolved';
  }

}());
