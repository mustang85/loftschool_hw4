app.controller('PanelCtrl', ['$scope', function($scope) {
	$scope.ser = 1;
      $scope.getCount = function() {
        var ser = 1
        return ++ser;
      }


      

}]);