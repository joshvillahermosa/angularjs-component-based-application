(function () {
  'use strict';

  function TutorListingsController () {
    var vm = this;

    vm.headerType = 'h2';
    vm.headerText = 'Checkout our boring tutors!';
    vm.mainText = ['Lorem this Ipsum! We have so many things that we have to do ',
    'better... and certainly ipsum is one of them. That other text? Sadly, it’s',
    ' no longer a 10. Lorem Ipsum is unattractive, both inside and out. I fully',
    'understand why it’s former users left it for something else. They made a',
    'good decision.'].join('');

    init();

    function init() { }
  }

  var TutorListingsSection = {
    bindings: {
      tutors: '<'
    },
    templateUrl: 'app/shared/section-tutor-listings/tutor-listings.section.html',
    controller: TutorListingsController
  };

  angular.module('app.shared')
    .component('ttTutorListingsSection', TutorListingsSection);
})();
