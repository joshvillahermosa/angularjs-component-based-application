/* jshint -W117, -W030 */

describe('Text Util Service', function () {
  var $service;

  beforeEach(module('app.shared'));

  beforeEach(function () {
    inject(function ($injector) {
      $service = $injector.get('textUtilsService');
    });
  });

  describe('Checking Header Types', function() {
    var consoleSpy;

    beforeEach(function () {
      consoleSpy = sinon.spy(console,'error');
    });

    afterEach(function() {
      console.error.restore();
    })

    it('should return normal \'h1\' string if h1 is passed in', function () {
      var output = $service.checkHeaderType('h1');
      expect(output).to.equal('h1');
    });

    it('should return \'h2\' if there is no arguments passed in', function() {
      var output = $service.checkHeaderType();
      expect(output).to.equal('h2');
    });

    it('should return \'h2\' if it does match type and passed in and log error', function() {
      var output = $service.checkHeaderType(4);
      expect(output).to.equal('h2');
      sinon.assert.calledWith(consoleSpy, '`headerType` is not h1 or h2. Defaulting to h2');
    });
  });
});

