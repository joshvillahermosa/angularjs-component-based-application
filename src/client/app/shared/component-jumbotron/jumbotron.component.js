(function () {
  'use strict';

  function JumbotronController($location) {
    /* jshint validthis:true */
    var vm = this;

    init();

    function init() { }
  }

  var JumbotronComponent = {
    bindings: {
      init: '<'
    },
    templateUrl: 'app/shared/component-jumbotron/jumbotron.component.html',
    controller: JumbotronController
  };

  angular.module('app.shared')
    .component('ttJumbotronComponent', JumbotronComponent);

})();
