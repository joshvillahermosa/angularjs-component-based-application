/* jshint -W117, -W030 */

describe('Signup Button', function() {
  var component;
  beforeEach(bard.appModule('app.shared', 'ngMock'));

  beforeEach(function() {
    bard.inject(this, '$componentController');
  })

  beforeEach(function() {
    component = $componentController('ttSignupButtonComponent', null, null);
    component.$onInit();
  });

  describe('Signup Button Initial State', function() {
    it('should have a title', function() {
      expect(component.modalTitle).to.equal('Signup Now for sleepy time!');
    });

    it('should have a modal ID', function() {
      expect(component.modalId).to.equal('signupModalHeader');
    });
  });
});
