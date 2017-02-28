(function () {
  'use strict';

  angular
    .module('app.shared')
    .constant('PEOPLE_API', 'https://randomuser.me/api')
    .service('httpService', httpService);

  httpService.$inject = ['PEOPLE_API', '$http'];

  function httpService(PEOPLE_API, $http) {

    var service = {
      getData: getData,
      printAPI: printAPI
    };

    return service;

    function getData() { }

    function printAPI() {
      console.log('PEOPLE_API', PEOPLE_API);
    }
  }
})();
