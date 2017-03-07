/* jshint -W117, -W030 */

describe('Avatar Service', function() {
  var $service;

  beforeEach(module('app.shared'));

  beforeEach(function () {
    inject(function($injector) {
      $service = $injector.get('avatarService');
    });
  });

  describe('Checking size input for component image size', function () {
    var consoleSpy;

    beforeEach(function() {
      consoleSpy = sinon.spy(console, 'error');
    });

    afterEach(function() {
      console.error.restore();
    });

    it('should return the correct size for small', function() {
      var smallClass = $service.checkSizeInput('s');
      expect(smallClass).to.equal('w100');
    });

    it('should return the correct size for medium', function() {
      var mediumClass = $service.checkSizeInput('m');
      expect(mediumClass).to.equal('w150');
    });

    it('should return the correct size for large', function() {
      var largeClass = $service.checkSizeInput('l');
      expect(largeClass).to.equal('w300');
    });

    it('should error if there is no paramaters and return defualt medium class', function() {
      var mediumClass = $service.checkSizeInput();
      expect(mediumClass).to.equal('w150');
      sinon.assert.calledWith(consoleSpy, 'Size is not passed in: Defaulting to (m)edium image size');
    });

    it('should error if paramater does not match expected and return medium class', function() {
      var mediumClass = $service.checkSizeInput(20);
      expect(mediumClass).to.equal('w150');
      sinon.assert.calledWith(consoleSpy, 'Size must be (s)mall, (m)edium, or (l)arge: Defaulting to medium');
    });
  });
});
