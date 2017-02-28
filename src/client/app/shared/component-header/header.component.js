(function () {
  'use strict';

  function HeaderController($location) {
    /* jshint validthis:true */
    var vm = this;

    init();

    function init() { }
  }

  var HeaderComponent = {
    bindings: {
      headerData: '<'
    },
    templateUrl: 'app/shared/component-header/header.component.html',
    controller: HeaderController
  };

  angular.module('app.shared')
    .component('ttHeaderComponent', HeaderComponent);
})();
