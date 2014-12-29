app.controller('ListCtrl', ['$scope','InboxFactory', function($scope,InboxFactory) {
  $scope.inputName = 'yyyy';

  $scope.flag = true;
  
  InboxFactory.getMessage()
    .success(function(jsonData, statusCode) {
      $scope.listCards = jsonData;
  });

  $scope.doSomeThing = function () {
    
    if ($scope.flag == true) {
      $scope.flag = false;
      return $scope.flag;
    } 

    return $scope.flag = true;
  }

  



}]);