app.directive('bookPanelElement', function () {
        
  return {
    restrict: 'EA',
    scope: true,
    templateUrl: "js/directive/bookPanelElement/bookPanelElement.html",
    controller: ('BookPanelCtrl', ['$scope', 'InboxFactory', function($scope,InboxFactory) {
      $scope.tab = 1,
      $scope.flagFilter = false,
      $scope.flagFind = false;

      $scope.filterCard = function () {        
        return $scope.flagFilter = !$scope.flagFilter;
      };

      $scope.findCard = function () {        
        return $scope.flagFind = !$scope.flagFind;
      };      

      $scope.selectTab = function (setTab) {
        $scope.tab = setTab;
      };

      $scope.isSelected = function (checkTab) {
         return $scope.tab === checkTab;
      };

      // $scope.searchByCard = function (e) {
      //    console.log(typeof $scope.findCardUser);
      //    console.log($scope.listCardsArr);
      //    var t = 'Granev';
      //    var tds = $( "td");
      //    console.log(tds);
      //    $( "td:contains("+$scope.findCardUser+")" ).css( "text-decoration", "underline" );
      //   // var el = $(e.currentTarget);

      // };

      // var tds = $( "td");
      //    console.log(tds);
      

    }]),

  link: function (scope, iElement, iAttrs, ctrl) {
    var panel = $(iElement),
      iSearch = panel.find('.glyphicon-search'),
      iResetFind = panel.find('.glyphicon-remove'),
      cells = null,
      inputFind = panel.find('.find-user'),
      findUser = inputFind.val(),
      listphone = $('.listphone'),
      tilephone = $('.tilephone');

    iSearch.on('click',  function(event) {
      event.preventDefault();

      if ( $('.listphone td') ) {
        cells = $('.listphone td');
        return;
      } 

      cells = $('.tilephone div'); 
    });

    inputFind.on('keyup', function(event) {
      event.preventDefault();
      var txt = inputFind.val();

      cells.each(function(i) {
        var spans = $(this).find('span:gt(0)');
        spans.each(function(i) {

          if ( $(this).text() == '' ) {
            return;
          }
          
          if ( $(this).text() == txt ) {
            $(this).closest('tr').addClass('active');
            return;
          }

        });

      });

    });

    iResetFind.on('click', function(event) {
      event.preventDefault();

      if (listphone) {
        $('.table').find('tr').each(function() {
      
          if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
          }

        });
      } else {
        $('.thumbnail').each(function() {
      
          if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
          }

        });
      }
      
    

      inputFind.val("");
        

    });

  }
    
}});