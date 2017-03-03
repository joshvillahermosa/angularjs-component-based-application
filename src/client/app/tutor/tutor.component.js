(function () {
  'use strict';

  TutorController.$inject = ['$stateParams', 'httpService'];

  function TutorController ($stateParams, httpService) {
    var vm = this;

    vm.$onInit = init;
    
    function init() {
      console.log('$init');
      vm.tutor = (vm.tutor) ? vm.tutor : [];
      console.log('tutor: ', vm.tutor);
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
