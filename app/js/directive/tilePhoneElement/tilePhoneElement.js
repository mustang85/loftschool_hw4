app.directive('tilePhoneElement', function () {
        
  return {
    restrict: 'EA',
    scope: true,
    templateUrl: "js/directive/tilePhoneElement/tilePhoneElement.html",
    controller: ('ListCtrl', ['$scope', 'InboxFactory', function($scope,InboxFactory) {
      InboxFactory.getMessage()
        .success(function(jsonData, statusCode) {
          $scope.messages = jsonData;
      });
      
      
  }]),

  link: function (scope, iElement, iAttrs) {}

}});