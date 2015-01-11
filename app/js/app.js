var app = angular.module('phoneBook', ['ngRoute','firebase']);

app.value('fbURL', 'https://phonebookangular.firebaseio.com/');

app.config(function($routeProvider) {
  $routeProvider
  .when('/list', {
    templateUrl: 'views/tabs.html',
    controller: 'ListCtrl'
  })
  // .when('/', {
  //    templateUrl: 'views/tabs.html',
  //    controller: 'ListCtrl'
  // })
  .when('/list/card/:id', {
     templateUrl: 'views/usercard.html',
     controller: 'CardCtrl'
  })
  .when('/tile/card/:id', {
    templateUrl: 'views/usercard.html',
    controller: 'CardCtrl'
  })
  .when('/tile/card', {
    templateUrl: 'views/usercard.html',
    controller: 'CardCtrl'
  })
  .when('/list/card', {
    templateUrl: 'views/usercard.html',
    controller: 'CardCtrl'
  })
  .when('/card', {
    templateUrl: 'views/usercard.html',
    controller: 'CardCtrl'
  })
  .otherwise({redirectTo: 'list'});
  
});