(function () {
  'use strict';

  function HomeController () {
    var vm = this;

    init();

    function init() {
      console.log('Home Component init');
    }
  }

  var HomeComponent = {
    bindings: {
      init: '<'
    },
    template: '<div>Home Page - {{ $ctrl.init }}</div>',
    controller: HomeComponent
  };

  angular.module('app.home')
    .component('ttHomeComponent', HomeComponent);
})();
