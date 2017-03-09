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
    it('should not show the modal on initial state', function() {
      expect(component.showModal).to.equal(false);
    });
  });

  describe('Showing modal', function() {
    it('should show the modal when clicked', function() {
      component.toggleModal();
      expect(component.showModal).to.equal(true);
    });
  })
});
