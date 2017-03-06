(function () {
  'use strict';

  angular
    .module('app.shared')
    .service('textUtilsService', textUtilsService);

  /**
   * General Text based services
   */
  function textUtilsService() {
    var service = {
      checkHeaderType: checkHeaderType
    };

    return service;

    /**
     * This will check the header type and set defaults. This is used in
     * text-header.component
     */
    function checkHeaderType(headerType) {
      if (!headerType) {
        return 'h2';
      }

      if (headerType !== 'h1' && headerType !== 'h2') {
        console.error('`headerType` is not h1 or h2. Defaulting to h2');
        return 'h2';
      }

      return headerType;
    }
  }
})();
