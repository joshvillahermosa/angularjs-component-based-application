(function () {
  'use strict';

  function AppController () {
    console.log('App Component Init');
  }

  var AppComponent = {
    controller: AppController,
    controllerAs: '$ctrl',
    template: '<ui-view></ui-view>',
  };

  angular.module('app')
    .component('ttApp', AppComponent);
})();
