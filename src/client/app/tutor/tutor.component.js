(function () {
  'use strict';

  TutorController.$inject = ['$stateParams', 'httpService'];

  function TutorController ($stateParams, httpService) {
    var vm = this;

    vm.$onInit = init;
    
    function init() {
      vm.tutor = (vm.tutor) ? vm.tutor[0] : {};
    };

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
