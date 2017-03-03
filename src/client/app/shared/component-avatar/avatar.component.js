(function () {
  'use strict';

  // Just default
  var DEFAULT_AVATAR_URL = 'http://static.boredpanda.com/blog/wp-content/uploads/2015/06/pallas-cat-manul-2__880.jpg';

  AvatarController.$inject = ['DEFAULT_AVATAR_URL', 'avatarService'];

  function AvatarController(DEFAULT_AVATAR_URL, avatarService) {
    /* jshint validthis:true */
    var vm = this;

    vm.$onInit = init;

    function init() {
      vm.altText = (vm.altText) ? vm.altText : 'Tutor';
      vm.avatarUrl = (vm.avatarUrl) ? vm.avatarUrl : DEFAULT_AVATAR_URL;
      vm.setSize = avatarService.checkSizeInput(vm.setSize);
    }
  }

  var AvatarComponent = {
    bindings: {
      avatarUrl: '<',
      altText: '<',
      setSize: '<'
    },
    controller: AvatarController,
    templateUrl: 'app/shared/component-avatar/avatar.component.html'
  };

  angular
    .module('app.shared')
    .constant('DEFAULT_AVATAR_URL', DEFAULT_AVATAR_URL)
    .component('ttAvatarComponent', AvatarComponent);
})();
