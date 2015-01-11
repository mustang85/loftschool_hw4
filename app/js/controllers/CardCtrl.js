app.controller('CardCtrl', ['$scope', 'InboxFactory', function($scope,InboxFactory) {
	// InboxFactory.getMessage()
	// 	.success(function(jsonData, statusCode) {
	// 		$scope.uCard = jsonData;
	// 	});
	
	$scope.idUser = location.href.slice((location.href.lastIndexOf('/') + 1)),
	$scope.uCard = InboxFactory.getCardObj(),
	$scope.flag = true,
	userInputs = $('.info-user input'),
	userLabels = $('.info-user label');

	function setAttrInput(atr,value) {
		userInputs.attr(atr,value);
	}

	$scope.editCard = function () {
		$scope.flag = !$scope.flag;
		userInputs
			.removeAttr('disabled');
		userLabels
			.addClass('animated pulse');
	}

<<<<<<< HEAD
	// $scope.setCard = function () {
	// 	InboxFactory.setCard({'text':'test'});
	// }
=======
	$scope.setCard = function () {
		InboxFactory.setCard({'text':'test'});
	}
>>>>>>> d1700334eae93c4fd416248814101355c5864c25

	$scope.removeCard = function (id) {
		// InboxFactory.removeCard();
		InboxFactory.removeCard(id);
<<<<<<< HEAD
	}

	$scope.submitForm = function (json) {
		InboxFactory.setCard(json);
	}

	if ($scope.idUser) {
		// console.log(typeof $scope.idUser == 'number');
		if ($scope.idUser == 'card') {
			return;
		}
		
=======
		console.log(uCard[idUser]);
		console.log('remove' + id);
		alert('');
	}

	if ($scope.idUser) {
>>>>>>> d1700334eae93c4fd416248814101355c5864c25
		$scope.flag = false;
		setAttrInput('disabled','disabled');	
	}
		
	// console.log($scope.uCard);
	
	
}]);