(function () {
  'use strict';

  angular
    .module('app.shared')
    .constant('PEOPLE_API', 'https://randomuser.me/api')
    .service('httpService', httpService);

  httpService.$inject = ['PEOPLE_API', '$http'];

  function httpService(PEOPLE_API, $http) {

    init();

    var service = {
      getTutorList: getTutorList,
      getTutor: getTutor,
      abstractData: abstractData,
      printSimpleError: printSimpleError,
      printAPI: printAPI
    };

    return service;

    function init() { }

    function abstractData(data) {
      if (data && data.data && data.data.results) {
        return data.data.results;
      }

      console.error('`data.data.results` does not exists');
    }

    function getTutorList(limit) {
      return get('/?results=' + limit)
        .then(abstractData);
    }

    /**
     * Unfortunately RandomUserAPI does not allow to retrieve specific ID, so
     * pretend to get one.
     */
    function getTutor(id) {
      return get('').then(abstractData);
    }

    function printSimpleError(e, callback) {
      console.error(e);
    }

    function get(postpend) {
      var request = {
        method: 'GET',
        url: PEOPLE_API + postpend
      };

      return $http(request);
    }

    function printAPI() {
      console.log('PEOPLE_API', PEOPLE_API);
    }
  }
})();
