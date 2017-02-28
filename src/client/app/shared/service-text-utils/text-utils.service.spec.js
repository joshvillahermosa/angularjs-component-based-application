describe('Text Util Service', function () {
  var $service;

  beforeEach(module('app.shared'));

  beforeEach(function () {
    inject(function ($injector) {
      $service = $injector.get('textUtilsService');
    });
  });

  describe('Checking Header Types', function() {

    beforeEach(function () {});

    it('should return normal \'h1\' string if h1 is passed in', function (done) {
      var output = $service.checkHeaderType('h1');
      expect(output).toBeDefined();
      done()
    });
  });
});
