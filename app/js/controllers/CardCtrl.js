app.controller('CardCtrl', ['$scope', 'InboxFactory', function($scope,InboxFactory) {
	$scope.txt = 'text';

	  InboxFactory.getMessage()
	  .success(function(jsonData, statusCode) {
	    $scope.uCard = jsonData;
	  });

	$scope.flag = false;
	$scope.idUser = location.href.slice((location.href.lastIndexOf('/') + 7));
	console.log($scope.idUser);
}]);