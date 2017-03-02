(function () {
  'use strict';

  var HomeRoutesService;

  angular
    .module('app')
    .config(appRouteConfig);

  appRouteConfig.$inject = [
    '$stateProvider',
    'homeRoutesProvider',
    'tutorRoutesProvider'
  ];

  function appRouteConfig(
    $stateProvider,
    homeRoutesProvider,
    tutorRoutesProvider) {

    // Set state in $stateProvider
    $stateProvider.state('home',homeRoutesProvider.getRouteDefinition());
    $stateProvider.state('tutor', tutorRoutesProvider.getRouteDefinition());
  }

}());
