(function () {
  'use strict';

  function AppController () {
    console.log('App Component Init');
  }

  var AppComponent = {
    controller: AppController,
    controllerAs: '$ctrl',
    templateUrl: 'app/app.component.html'
  };

  angular.module('app')
    .component('ttApp', AppComponent);
})();
