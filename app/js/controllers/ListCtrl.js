app.controller('ListCtrl', ['$scope','InboxFactory', '$firebase', 'fbURL', function($scope,InboxFactory,$firebase,fbURL) {
 //  $scope.tab = 1;  
 // $scope.selectTab = function (setTab) {
 //        $scope.tab = setTab;
 //      };

 //      $scope.isSelected = function (checkTab) {
 //        return $scope.tab === checkTab;
 //      };

 //      $scope.searchByCard = function (e) {
 //        console.log(typeof $scope.lName);
 //        var t = 'Granev';
 //        $( "td:contains("+$scope.lName+")" ).css( "text-decoration", "underline" );
 //        // var el = $(e.currentTarget);

 //      };

	$scope.title = fbURL;
	$scope.listCardsArr = InboxFactory.getCardArr();
	console.log($scope.listCardsArr);

}]);