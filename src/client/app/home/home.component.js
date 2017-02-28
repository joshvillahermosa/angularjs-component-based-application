(function () {
  'use strict';

  function HomeController () {
    var vm = this;

    vm.message = 'Yes';

    init();

    function init() {
      console.log('Home Component init');
    }
  }

  var HomeComponent = {
    bindings: {
      init: '<'
    },
    templateUrl: 'app/home/home.component.html',
    controller: HomeController
  };

  angular.module('app.home')
    .component('ttHomeComponent', HomeComponent);
})();
