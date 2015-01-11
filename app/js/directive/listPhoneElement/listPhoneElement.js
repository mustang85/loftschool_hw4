app.directive('listPhoneElement', function () {
        
  return {
    restrict: 'EA',
    scope: true,
    templateUrl: "js/directive/listPhoneElement/listPhoneElement.html",
    controller: 'ListCtrl',
  //   controller: ('ListPhoneCtrl', ['$scope', 'InboxFactory', function($scope,InboxFactory) {
  //     InboxFactory.getMessage()
  //       .success(function(jsonData, statusCode) {
  //         $scope.listCards = jsonData;
  //     });
  //     console.log( $('a').length );
     
  //    function testTT() {
  //     $('.panel-body a').on('click', function () {
  //       console.log('txt');
  //        $('.listphone table a').css('color','green');
  //     });
  //    }

  //    testTT();
      
      
  // }]),

  link: function (scope, iElement, iAttrs) {
<<<<<<< HEAD
    // console.log(listCards);
=======
    console.log(listCards);
>>>>>>> d1700334eae93c4fd416248814101355c5864c25
    // console.log(scope);
    // var listPhone = $('.iElement').find('tr');
    // console.log(listPhone.length);
    $(iElement).find('tr')
  }

}});