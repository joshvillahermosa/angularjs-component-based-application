(function () {
  'use strict';

  // ModalController.$inject = ['$location'];

  function ModalController($location) {
    /* jshint validthis:true */
    var vm = this;

    vm.$onInit = init;

    function init() {
      console.log(vm.title);
      vm.title = (vm.title) ? vm.title : '',
      vm.modalId = (vm.modalId && (typeof(vm.modalId) === 'string')) ?
        vm.modalId : 'defaultModalId'; 
    }
  }

  /**
   * @todo Add multple Transclusions for body and footer
   */
  var ModalComponent = {
    bindings: {
      title: '<',
      modalId: '<'
    },
    controller: ModalController,
    templateUrl: 'app/shared/component-modal/modal.component.html',
    transclude: true
  }

  angular
    .module('app.shared')
    .component('ttModalComponent', ModalComponent);
})();
