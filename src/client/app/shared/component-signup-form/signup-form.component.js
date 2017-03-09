(function () {
  'use strict';

  function SignupController($location) {
    /* jshint validthis:true */
    var vm = this;

    vm.$onInit = init;

    vm.user={};

    /**
     * @todo Create a Service to Generate this
     */
    vm.signupDefinition = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Name',
          placeholder: 'Name'
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          placeholder: 'Email'
        }
      },
      {
        key: 'username',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Username',
          placeholder: 'Username'
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Password'
        }
      }, 
    ];

    function init() {}
  }

  var SignupComponent = {
    controller: SignupController,
    templateUrl: 'app/shared/component-signup-form/signup-form.component.html'
  };

  angular
    .module('app.shared')
    .component('ttSignupComponent', SignupComponent);

})();
