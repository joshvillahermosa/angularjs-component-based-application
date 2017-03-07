(function () {
  'use strict';

  angular
    .module('app.shared')
    .service('avatarService', AvatarService);


  /**
   * Service specific for the avatar component
   */
  function AvatarService($http) {
    var service = {
      checkSizeInput: checkSizeInput
    };

    return service;

    /**
     * Will check size input and handle accordingly. Will return defualt value
     * of 'w150'
     */
    function checkSizeInput(size) {

      var sizeClassDefinition = {
        s: 'w100',
        m: 'w150',
        l: 'w300'
      };

      var defualtSize = 'm';

      // If there is no size
      if (!size) {
        console.error('Size is not passed in: Defaulting to (m)edium image size');
        return sizeClassDefinition[defualtSize];
      }

      // If it does not match small, medium, or large
      if (size !== 's' && size !== 'm' &&  size !== 'l') {
        console.error('Size must be (s)mall, (m)edium, or (l)arge: Defaulting to medium');
        return sizeClassDefinition[defualtSize];
      }

      return sizeClassDefinition[size];
    }
  }
})();
