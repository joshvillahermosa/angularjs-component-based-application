(function () {
  'use strict';

  // ModalController.$inject = ['$location'];

  function ModalController($location) {
    /* jshint validthis:true */
    var vm = this;

    vm.$onInit = init;

    function init() {
      vm.title = (vm.title) ? vm.title : '',
      vm.isOpen = (vm.isOpen && (typeof(vm.isOpen) === 'boolean')) ?
        vm.isOpen : false; 
    }
  }

  /**
   * @todo Add multple Transclusions
   */
  var ModalComponent = {
    bindings: {
      title: '<',
      isOpen: '<'
    },
    controller: ModalController,
    templateUrl: 'app/shared/component-modal/modal.component.html',
    transclude: true
  }

  angular
    .module('app.shared')
    .component('ttModalComponent', ModalComponent);
})();
