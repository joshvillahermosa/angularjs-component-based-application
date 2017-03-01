(function () {
  'use strict';

  angular
    .module('app')
    .config(appRouteConfig);

  appRouteConfig.$inject = ['$stateProvider'];

  /**
   * @todo Add Resolve
   * @todo Import custom providers
   */
  function appRouteConfig($stateProvider) {
    console.log('App Route Init');

    var HomeState = {
      name: 'home',
      url: '',
      component: 'ttHomeComponent',
    };

    $stateProvider.state(HomeState);
  }

}());
