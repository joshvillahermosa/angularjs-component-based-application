(function () {
  'use strict';

  TutorController.$inject = ['httpService'];

  function TutorController (httpService) {
    var vm = this;

    init();

    vm.$onInit = function() {
      vm.tutor = (vm.tutor) ? vm.tutor : []
      // console.log(vm)
    }

    function init() {
      httpService.printAPI();
    }
  }

  var TutorComponent = {
    bindings: {
      tutor: '<'
    },
    templateUrl: 'app/tutor/tutor.component.html',
    controller: TutorController
  };

  angular.module('app.tutor')
    .controller('TutorController', TutorController)
    .component('ttTutorComponent', TutorComponent);
})();
