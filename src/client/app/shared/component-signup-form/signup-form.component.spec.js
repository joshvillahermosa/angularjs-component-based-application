/* jshint -W117, -W030 */

describe('Signup Form', function() {
  beforeEach(bard.appModule('app.shared', 'ngMock'));

  beforeEach(function() {
    bard.inject(this, '$componentController');
  });

  describe('Signup Form Controller', function() {
    describe('Formly Properties', function() {
      /**
       * Name
       * Username
       * Email
       * Password
       */
       var signupObj = [
         {
           key: 'name',
           type: 'input',
           templateOptions: {
             type: 'text',
             label: 'Name',
             placeholder: 'Name'
           }
         },
         {
           key: 'email',
           type: 'input',
           templateOptions: {
             type: 'email',
             label: 'Email',
             placeholder: 'Email'
           }
         },
         {
           key: 'username',
           type: 'input',
           templateOptions: {
             type: 'text',
             label: 'Username',
             placeholder: 'Username'
           }
         },
         {
           key: 'password',
           type: 'input',
           templateOptions: {
             type: 'password',
             label: 'Password',
             placeholder: 'Password'
           }
         }, 
       ];

       it('should match the defined properties for the signup form', function() {
         var controller = $componentController('ttSignupComponent',  null, null);
         controller.$onInit();
         expect(controller.signupDefinition).to.deep.equal(signupObj);
       });
    });
  });
});
