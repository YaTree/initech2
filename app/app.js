'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute']).
run(['$rootScope','$location', function ($rootScope, $location) {
      $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var token;

        token = window.localStorage.getItem('token');
        if (token === null) {
          $location.path('/login');
        }
      });


}]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
      .when('/', {
        controller: 'PageController',
        templateUrl: 'html/home.view.html',
        controllerAs: 'vm'
      })
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'html/login.view.html',
        controllerAs: 'vm'
      })
      .when('/home', {
        controller: 'PageController',
        templateUrl: 'html/home.view.html',
        controllerAs: 'vm'
      })

      .otherwise({ redirectTo: '/' });
}]);


