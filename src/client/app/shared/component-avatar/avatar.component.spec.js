/* jshint -W117, -W030 */

/**
 * @todo Add proper component testing
 */
describe('Avatar Component', function() {
  // var element, scope, $httpBackend, $controller;

  beforeEach(bard.appModule('app.shared', 'ngMock'));

  // This might not actually do anything -_-
  // beforeEach(inject(function($rootScope, $compile) {
  //   var componentElement = [
  //     '<tt-avatar-component',
  //     'avatar-url="http://someurl.com/image.png"',
  //     'alt-text="Alt Text"',
  //     'set-size="\'m\'">',
  //     '</tt-avatar-component>'
  //   ].join(' ');

  //   scope = $rootScope.$new();
  //   element = angular.element(componentElement);
  //   element = $compile(element)(scope);
  //   scope.$apply()
  // }));

  // xdescribe('Rendering User Image', function() {
  //   beforeEach(function(){ });

  //   it('should have the user avatar source', function() {
  //     var img = element.find('.js-tt-avatar-component');
  //     console.log('img', img)
  //     expect(img.attr('class')).to.equal('no');
  //   });
  // });

  beforeEach(function() {
    bard.inject(this, '$componentController', 'avatarService');

    // Mock Avatar Service
    bard.mockService(avatarService, {
      checkSizeInput: function(s) {return (s) ? s : 'm'}
    });
  });


  describe('Avatar Component Properteies', function() {
    var bindings;

    beforeEach(function() {
      bindings = {
        altText: 'Sample Text',
        avatarUrl: 'http://sampleurl.com/img.png',
        setSize: 'l'
      }
    });

    describe('Receiving Alt Text', function() {
      it('should display the passed in alt text', function() {
        var controller = $componentController('ttAvatarComponent',  null, bindings);
        controller.$onInit();
        expect(controller.altText).to.equal('Sample Text');
      });

      it('should display the passed in default text when no alt text is passed in', function() {
        bindings.altText = undefined;
        var controller = $componentController('ttAvatarComponent',  null, bindings);
        controller.$onInit();
        expect(controller.altText).to.equal('Tutor');
      });
    });

    describe('Receiving image urls', function() {
      it('should display image source', function() {
        var controller = $componentController('ttAvatarComponent',  null, bindings);
        controller.$onInit();
        expect(controller.avatarUrl).to.equal('http://sampleurl.com/img.png');
      });

      it('should display image source', function() {
        bindings.avatarUrl = undefined;
        var controller = $componentController('ttAvatarComponent',  null, bindings);
        controller.$onInit();
        expect(controller.avatarUrl).to.equal('http://static.boredpanda.com/blog/wp-content/uploads/2015/06/pallas-cat-manul-2__880.jpg');
      });
    });

    /**
     * @todo Change to actual test
     */
    describe('Testing mocks', function() {
      it('Just chuck testa bard.mocks', function() {
        var controller = $componentController('ttAvatarComponent',  null, bindings);
        controller.$onInit();
        expect(controller.setSize).to.equal('l')
      });
    });
  });
});
