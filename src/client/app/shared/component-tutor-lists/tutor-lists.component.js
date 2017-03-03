(function () {
  'use strict';

  TutorListsController.$inject = ['$location'];

  function TutorListsController($location) {
    /* jshint validthis:true */
    var vm = this;

    init();

    /**
     * Set Defaults
     */
    vm.$onInit = function () {
      vm.tutors = (!!vm.tutors) ? vm.tutors : [];
    };

    function init() { }
  }

  var TutorListsComponent = {
    bindings: {
      tutors: '<'
    },
    controller: TutorListsController,
    templateUrl: 'app/shared/component-tutor-lists/tutor-lists.component.html'
  };

  angular.module('app.shared')
    .component('ttTutorListsComponent', TutorListsComponent);
})();
