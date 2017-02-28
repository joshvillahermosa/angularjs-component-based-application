(function () {
  'use strict';

  angular
    .module('app.shared')
    .service('httpService', httpService)
    .constant('PEOPLE_API', 'https://randomuser.me/api');

  httpService.$inject = ['$http'];

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
