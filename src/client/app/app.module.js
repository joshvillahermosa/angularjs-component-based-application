(function () {
  'use strict';

  angular.module('app', [
    // Angular modules

    // Custom modules
    'app.shared',
    'app.home',
    // 3rd Party Modules
    'ui.router'
  ]);

  /*
  var app = angular.module('app', ['ui.router']); //makes a call to the Angular API to create our app, configured with the ui.router plug-in
    //configure our view router
    app.config(function($stateProvider) { 
      //create our different views as objects
      var mainState ={
        name: 'main', //name of the object
        url: '', //url to point to, or that causes this view to be triggered
        component: 'home', //component that works with the data, loads the template
        resolve: { //data to bind to our component
          data: function(Resource) {
            console.log(Resource.test()) //returns "Hello World"
            return Resource.test() 
          }
        }
      }
      //call the states
      $stateProvider.state(mainState); 
    })
    app.service('Resource', function ($http) {
      var service = {
       test: function() {
          return "Hello world"
        }
      }
      return service;
    })
    app.component('home', {
      bindings: { data: '<'}, //make the data we loaded into the view from the factory available to this component
      template: "<p>Hi</p>", //this is the html that we will plug our data into
      controller: function () {
        console.log(this) //does not call
      }
    })*/
})();
