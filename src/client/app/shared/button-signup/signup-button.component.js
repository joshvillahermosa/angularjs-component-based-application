(function () {
  'use strict';

  function SignupButtonController($location) {
    /* jshint validthis:true */
    var vm = this;

    vm.$onInit = init;

    function init() {
      vm.modalTitle = 'Signup Now for sleepy time!';
      vm.modalId = "signupModalHeader"
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
