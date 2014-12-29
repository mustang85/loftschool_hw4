app.factory('InboxFactory', function($http) {

  var exports = {};

  exports.getMessage = function() {
    console.log($http.get('json/phonebooks.json'));
    return $http.get('json/phonebooks.json')
        .error(function(data) {
              console.log('здесь ошибку', data);
        });
  }

  return exports;

});