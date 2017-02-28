(function () {
  'use strict';

  angular
    .module('app')
    .run(runRun);

  runRun.$inject = [];

  function runRun() {
    console.log('App Run Init');
  }

}());
