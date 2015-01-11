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
    // console.log(listCards);
    // console.log(scope);
    // var listPhone = $('.iElement').find('tr');
    // console.log(listPhone.length);
    $(iElement).find('tr')
  }

}});