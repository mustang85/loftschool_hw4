var app = angular.module('phoneBook', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'views/listphone.html',
    controller: 'ListCtrl'
  })
  .when('/list/card:id', {
     templateUrl: 'views/usercard.html',
     controller: 'CardCtrl'
  })
  .when('/tile', {
    templateUrl: 'views/tilephone.html',
    controller: 'ListCtrl'
  })
  .when('/tile/card', {
    templateUrl: 'views/usercard.html',
    controller: 'CardCtrl'
  })
  .when('/list/card', {
    templateUrl: 'views/usercard.html',
    controller: 'CardCtrl'
  })
  .otherwise({redirectTo: '/card'});
  
});