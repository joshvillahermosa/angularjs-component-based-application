(function () {
  'use strict';

  angular
    .module('app.shared')
    .filter('uppercaseFirstLetter', uppercaseFirstLetter);

  function uppercaseFirstLetter() {

    return uppercaseFirstLetterFilter;

    function uppercaseFirstLetterFilter(input) {
      
      var input = input.split('');
      input[0] = input[0].toUpperCase();
      input = input.join('');

      return input; 
    }
  }

}());
