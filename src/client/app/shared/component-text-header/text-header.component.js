(function () {
  'use strict';

  TextHeaderController.$inject = ['textUtilsService'];

  function TextHeaderController(textUtilsService) {
    /* jshint validthis:true */
    var vm = this;

    init();

    vm.$onInit = function() {
      vm.headerType = textUtilsService.checkHeaderType(vm.headerType);
    };

    function init() { }
  }

  var TextHeaderComponent = {
    bindings: {
      headerType: '<',
      headerText: '<',
      mainText: '<'
    },
    controller: TextHeaderController,
    templateUrl: 'app/shared/component-text-header/text-header.component.html'
  };

  angular.module('app.shared')
    .component('ttTextHeaderComponent', TextHeaderComponent);
})();
