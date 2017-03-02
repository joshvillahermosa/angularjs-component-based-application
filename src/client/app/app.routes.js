(function () {
  'use strict';

  var HomeRoutesService;

  angular
    .module('app')
    .config(appRouteConfig);

  appRouteConfig.$inject = ['$stateProvider', 'homeRoutesProvider'];

  function appRouteConfig($stateProvider, homeRoutesProvider) {

    // Set state in $stateProvider
    $stateProvider.state(homeRoutesProvider.getRouteDefinition());
  }

}());
