(function () {
  'use strict';

  HomeController.$inject = ['httpService'];

  function HomeController (httpService) {
    var vm = this;

    init();

    vm.$onInit = function() {
      console.log(vm);
    };

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
