(function () {
  'use strict';

  function SignupButtonController($location) {
    /* jshint validthis:true */
    var vm = this;

    vm.$onInit = init;
    vm.toggleModal = toggleModal;

    function init() {
      vm.showModal = false;
      vm.modalTitle = 'Signup Now for sleepy time!';
    }

    function toggleModal() {
      vm.showModal = !vm.showModal;
    }
  }

  var SignupButtonComponent = {
    controller: SignupButtonController,
    templateUrl: 'app/shared/button-signup/signup-button.component.html'
  }

  angular
    .module('app.shared')
    .component('ttSignupButtonComponent', SignupButtonComponent)
})();
