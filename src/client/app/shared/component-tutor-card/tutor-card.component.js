(function () {
  'use strict';

  function TutorCardController () {
    var vm = this;
    init();

    function init() { }
  }

  var TutorCardComponent = {
    bindings: {
      tutor: '<'
    },
    templateUrl: 'app/shared/component-tutor-card/tutor-card.component.html',
    controller: TutorCardController
  };

  angular.module('app.shared')
    .component('ttTutorCardComponent', TutorCardComponent);
})();
