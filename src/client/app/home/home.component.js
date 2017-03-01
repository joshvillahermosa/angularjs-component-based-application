(function () {
  'use strict';

  HomeController.$inject = ['httpService'];

  function HomeController (httpService) {
    var vm = this;

    vm.tutors = []

    init();

    vm.$onInit = function() {
      // Gets lists
      httpService.getTutorList(6)
        .then(onTutorListSuccess.bind(vm), httpService.printSimpleError)
    }

    function init() {
      httpService.printAPI();
    }

    function onTutorListSuccess(data) {
      vm.tutors = httpService.abstractData(data) || [];
    }
  }

  var HomeComponent = {
    templateUrl: 'app/home/home.component.html',
    controller: HomeController
  };

  angular.module('app.home')
    .component('ttHomeComponent', HomeComponent);
})();
