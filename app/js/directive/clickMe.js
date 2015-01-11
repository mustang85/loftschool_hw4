app.directive('clickMe', function () {
  return {
    restrict: 'E',
    scope: {
      title: '@'
    },
    template: "<p>Click Me Please</p>",
    link: function (scope, iElement, iAttrs) {
      scope.list = 'lf ld sa';

      iElement.bind('click', function(event) {
        console.log(scope.title);
        alert(scope.title);
        console.log(scope.list);
      });
    }

}});