(function () {
  'use strict';

  HomeController.$inject = ['httpService']

  function HomeController (httpService) {
    var vm = this;

    vm.message = 'Yes';

    init();

    function init() {
      httpService.printAPI();
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
