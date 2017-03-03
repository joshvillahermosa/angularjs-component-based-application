(function () {
  'use strict';

  HomeController.$inject = ['httpService'];

  function HomeController (httpService) {
    var vm = this;

    vm.$onInit = init;

    function init() {
      httpService.printAPI();
    }
  }

  var HomeComponent = {
    bindings: {
      tutors: '<'
    },
    templateUrl: 'app/home/home.component.html',
    controller: HomeController
  };

  angular.module('app.home')
    .controller('HomeController', HomeController)
    .component('ttHomeComponent', HomeComponent);
})();
