(function () {
  'use strict';

  function NegateFullWidthController() {
    /* jshint validthis:true */
    var vm = this;

    init();

    function init() { }
  }

  var NegateFullWidthComponent = {
    transclude: true,
    templateUrl: 'app/shared/layout-negate-full-width/negate-full-width.component.html',
    controller: NegateFullWidthController
  };

  angular.module('app.shared')
    .component('ttNegateFullWidthLayout', NegateFullWidthComponent);
})();
