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
<<<<<<< HEAD
  .when('/list/card/:id', {
     templateUrl: 'views/usercard.html',
     controller: 'CardCtrl'
  })
  .when('/tile/card/:id', {
    templateUrl: 'views/usercard.html',
    controller: 'CardCtrl'
  })
  .when('/tile/card', {
=======
  .when('/list/card:id', {
     templateUrl: 'views/usercard.html',
     controller: 'CardCtrl'
  })
  // .when('/tile', {
  //   templateUrl: 'views/tilephone.html',
  //   controller: 'ListCtrl'
  // })
  // .when('/tile/card', {
  //   templateUrl: 'views/usercard.html',
  //   controller: 'CardCtrl'
  // })
  .when('/list/card/:id', {
>>>>>>> d1700334eae93c4fd416248814101355c5864c25
    templateUrl: 'views/usercard.html',
    controller: 'CardCtrl'
  })
  .when('/card', {
    templateUrl: 'views/usercard.html',
    controller: 'CardCtrl'
  })
<<<<<<< HEAD
  .when('/card', {
    templateUrl: 'views/usercard.html',
    controller: 'CardCtrl'
  })
  .otherwise({redirectTo: 'list'});
=======
  .otherwise({redirectTo: 'views/card.html'});
>>>>>>> d1700334eae93c4fd416248814101355c5864c25
  
});