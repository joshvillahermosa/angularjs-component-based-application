(function () {
  'use strict';

  function FullWidthController() {
    /* jshint validthis:true */
    var vm = this;

    init();

    function init() { }
  }

  var FullWidthComponent = {
    transclude: true,
    templateUrl: 'app/shared/layout-full-width/full-width.component.html',
    controller: FullWidthController
  };

  angular.module('app.shared')
    .component('ttFullWidthLayout', FullWidthComponent);
})();
